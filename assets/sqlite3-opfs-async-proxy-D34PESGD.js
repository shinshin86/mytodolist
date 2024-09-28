(function () {
  'use strict';
  var k;
  const O = (w, ...t) => postMessage({ type: w, payload: t }),
    z = function () {
      var D;
      const w = function (...e) {
        throw new Error(e.join(' '));
      };
      globalThis.window === globalThis
        ? w(
            'This code cannot run from the main thread.',
            'Load it as a Worker from a separate Worker.',
          )
        : ((D = navigator == null ? void 0 : navigator.storage) != null &&
            D.getDirectory) ||
          w('This API requires navigator.storage.getDirectory.');
      const t = Object.create(null);
      t.verbose = 1;
      const Q = {
          0: console.error.bind(console),
          1: console.warn.bind(console),
          2: console.log.bind(console),
        },
        A = (e, ...s) => {
          t.verbose > e && Q[e]('OPFS asyncer:', ...s);
        },
        g = (...e) => A(2, ...e),
        S = (...e) => A(1, ...e),
        h = (...e) => A(0, ...e),
        E = Object.create(null),
        I = new Set(),
        F = function (e, s) {
          const n = new URL(e, 'file://irrelevant').pathname;
          return s ? n.split('/').filter((o) => !!o) : n;
        },
        x = async function (s, n = !1) {
          const o = F(s, !0),
            a = o.pop();
          let i = t.rootDir;
          for (const r of o)
            r && (i = await i.getDirectoryHandle(r, { create: !!n }));
          return [i, a];
        },
        R = async (e) => {
          if (e.syncHandle) {
            g('Closing sync handle for', e.filenameAbs);
            const s = e.syncHandle;
            return (
              delete e.syncHandle, delete e.xLock, I.delete(e.fid), s.close()
            );
          }
        },
        H = async (e) => {
          try {
            await R(e);
          } catch (s) {
            S('closeSyncHandleNoThrow() ignoring:', s, e);
          }
        },
        V = async () => {
          if (I.size)
            for (const e of I) {
              const s = E[e];
              await H(s), g('Auto-unlocked', e, s.filenameAbs);
            }
        },
        T = async (e) => {
          if (e.releaseImplicitLocks && I.has(e.fid)) return H(e);
        };
      class b extends Error {
        constructor(s, ...n) {
          super([...n, ': ' + s.name + ':', s.message].join(' '), { cause: s }),
            (this.name = 'GetSyncHandleError');
        }
      }
      b.convertRc = (e, s) => {
        if (e instanceof b) {
          if (
            e.cause.name === 'NoModificationAllowedError' ||
            (e.cause.name === 'DOMException' &&
              e.cause.message.indexOf('Access Handles cannot') === 0)
          )
            return t.sq3Codes.SQLITE_BUSY;
          if (e.cause.name === 'NotFoundError')
            return t.sq3Codes.SQLITE_CANTOPEN;
        } else if ((e == null ? void 0 : e.name) === 'NotFoundError')
          return t.sq3Codes.SQLITE_CANTOPEN;
        return s;
      };
      const m = async (e, s) => {
          if (!e.syncHandle) {
            const n = performance.now();
            g('Acquiring sync handle for', e.filenameAbs);
            const o = 6,
              a = t.asyncIdleWaitTime * 2;
            let i = 1,
              r = a;
            for (; ; r = a * ++i)
              try {
                e.syncHandle = await e.fileHandle.createSyncAccessHandle();
                break;
              } catch (c) {
                if (i === o)
                  throw new b(
                    c,
                    'Error getting sync handle for',
                    s + '().',
                    o,
                    'attempts failed.',
                    e.filenameAbs,
                  );
                S(
                  'Error getting sync handle for',
                  s + '(). Waiting',
                  r,
                  'ms and trying again.',
                  e.filenameAbs,
                  c,
                ),
                  Atomics.wait(t.sabOPView, t.opIds.retry, 0, r);
              }
            g(
              'Got',
              s + '() sync handle for',
              e.filenameAbs,
              'in',
              performance.now() - n,
              'ms',
            ),
              e.xLock ||
                (I.add(e.fid),
                g(
                  'Acquired implicit lock for',
                  s + '()',
                  e.fid,
                  e.filenameAbs,
                ));
          }
          return e.syncHandle;
        },
        d = (e, s) => {
          g(e + '() => notify(', s, ')'),
            Atomics.store(t.sabOPView, t.opIds.rc, s),
            Atomics.notify(t.sabOPView, t.opIds.rc);
        },
        q = function (e, s) {
          s.readOnly && w(e + '(): File is read-only: ' + s.filenameAbs);
        };
      let L = !1;
      const _ = {
          'opfs-async-shutdown': async () => {
            (L = !0), d('opfs-async-shutdown', 0);
          },
          mkdir: async (e) => {
            let s = 0;
            try {
              await x(e + '/filepart', !0);
            } catch (n) {
              t.s11n.storeException(2, n), (s = t.sq3Codes.SQLITE_IOERR);
            }
            d('mkdir', s);
          },
          xAccess: async (e) => {
            let s = 0;
            try {
              const [n, o] = await x(e);
              await n.getFileHandle(o);
            } catch (n) {
              t.s11n.storeException(2, n), (s = t.sq3Codes.SQLITE_IOERR);
            }
            d('xAccess', s);
          },
          xClose: async function (e) {
            const s = 'xClose';
            I.delete(e);
            const n = E[e];
            let o = 0;
            if (n) {
              if ((delete E[e], await R(n), n.deleteOnClose))
                try {
                  await n.dirHandle.removeEntry(n.filenamePart);
                } catch (a) {
                  S('Ignoring dirHandle.removeEntry() failure of', n, a);
                }
            } else t.s11n.serialize(), (o = t.sq3Codes.SQLITE_NOTFOUND);
            d(s, o);
          },
          xDelete: async function (...e) {
            const s = await _.xDeleteNoWait(...e);
            d('xDelete', s);
          },
          xDeleteNoWait: async function (e, s = 0, n = !1) {
            let o = 0;
            try {
              for (; e; ) {
                const [a, i] = await x(e, !1);
                if (
                  !i ||
                  (await a.removeEntry(i, { recursive: n }), s !== 4660)
                )
                  break;
                (n = !1), (e = F(e, !0)), e.pop(), (e = e.join('/'));
              }
            } catch (a) {
              t.s11n.storeException(2, a), (o = t.sq3Codes.SQLITE_IOERR_DELETE);
            }
            return o;
          },
          xFileSize: async function (e) {
            const s = E[e];
            let n = 0;
            try {
              const o = await (await m(s, 'xFileSize')).getSize();
              t.s11n.serialize(Number(o));
            } catch (o) {
              t.s11n.storeException(1, o),
                (n = b.convertRc(o, t.sq3Codes.SQLITE_IOERR));
            }
            await T(s), d('xFileSize', n);
          },
          xLock: async function (e, s) {
            const n = E[e];
            let o = 0;
            const a = n.xLock;
            if (((n.xLock = s), !n.syncHandle))
              try {
                await m(n, 'xLock'), I.delete(e);
              } catch (i) {
                t.s11n.storeException(1, i),
                  (o = b.convertRc(i, t.sq3Codes.SQLITE_IOERR_LOCK)),
                  (n.xLock = a);
              }
            d('xLock', o);
          },
          xOpen: async function (e, s, n, o) {
            const a = 'xOpen',
              i = t.sq3Codes.SQLITE_OPEN_CREATE & n;
            try {
              let r, c;
              try {
                [r, c] = await x(s, !!i);
              } catch (f) {
                t.s11n.storeException(1, f), d(a, t.sq3Codes.SQLITE_NOTFOUND);
                return;
              }
              if (t.opfsFlags.OPFS_UNLINK_BEFORE_OPEN & o)
                try {
                  await r.removeEntry(c);
                } catch {}
              const y = await r.getFileHandle(c, { create: i }),
                l = Object.assign(Object.create(null), {
                  fid: e,
                  filenameAbs: s,
                  filenamePart: c,
                  dirHandle: r,
                  fileHandle: y,
                  sabView: t.sabFileBufView,
                  readOnly: i ? !1 : t.sq3Codes.SQLITE_OPEN_READONLY & n,
                  deleteOnClose: !!(t.sq3Codes.SQLITE_OPEN_DELETEONCLOSE & n),
                });
              (l.releaseImplicitLocks =
                o & t.opfsFlags.OPFS_UNLOCK_ASAP ||
                t.opfsFlags.defaultUnlockAsap),
                (E[e] = l),
                d(a, 0);
            } catch (r) {
              h(a, r),
                t.s11n.storeException(1, r),
                d(a, t.sq3Codes.SQLITE_IOERR);
            }
          },
          xRead: async function (e, s, n) {
            let o = 0,
              a;
            const i = E[e];
            try {
              (a = (await m(i, 'xRead')).read(i.sabView.subarray(0, s), {
                at: Number(n),
              })),
                a < s &&
                  (i.sabView.fill(0, a, s),
                  (o = t.sq3Codes.SQLITE_IOERR_SHORT_READ));
            } catch (r) {
              h('xRead() failed', r, i),
                t.s11n.storeException(1, r),
                (o = b.convertRc(r, t.sq3Codes.SQLITE_IOERR_READ));
            }
            await T(i), d('xRead', o);
          },
          xSync: async function (e, s) {
            const n = E[e];
            let o = 0;
            if (!n.readOnly && n.syncHandle)
              try {
                await n.syncHandle.flush();
              } catch (a) {
                t.s11n.storeException(2, a),
                  (o = t.sq3Codes.SQLITE_IOERR_FSYNC);
              }
            d('xSync', o);
          },
          xTruncate: async function (e, s) {
            let n = 0;
            const o = E[e];
            try {
              q('xTruncate', o), await (await m(o, 'xTruncate')).truncate(s);
            } catch (a) {
              h('xTruncate():', a, o),
                t.s11n.storeException(2, a),
                (n = b.convertRc(a, t.sq3Codes.SQLITE_IOERR_TRUNCATE));
            }
            await T(o), d('xTruncate', n);
          },
          xUnlock: async function (e, s) {
            let n = 0;
            const o = E[e];
            if (t.sq3Codes.SQLITE_LOCK_NONE === s && o.syncHandle)
              try {
                await R(o);
              } catch (a) {
                t.s11n.storeException(1, a),
                  (n = t.sq3Codes.SQLITE_IOERR_UNLOCK);
              }
            d('xUnlock', n);
          },
          xWrite: async function (e, s, n) {
            let o;
            const a = E[e];
            try {
              q('xWrite', a),
                (o =
                  s ===
                  (await m(a, 'xWrite')).write(a.sabView.subarray(0, s), {
                    at: Number(n),
                  })
                    ? 0
                    : t.sq3Codes.SQLITE_IOERR_WRITE);
            } catch (i) {
              h('xWrite():', i, a),
                t.s11n.storeException(1, i),
                (o = b.convertRc(i, t.sq3Codes.SQLITE_IOERR_WRITE));
            }
            await T(a), d('xWrite', o);
          },
        },
        U = () => {
          if (t.s11n) return t.s11n;
          const e = new TextDecoder(),
            s = new TextEncoder('utf-8'),
            n = new Uint8Array(t.sabIO, t.sabS11nOffset, t.sabS11nSize),
            o = new DataView(t.sabIO, t.sabS11nOffset, t.sabS11nSize);
          t.s11n = Object.create(null);
          const a = Object.create(null);
          (a.number = {
            id: 1,
            size: 8,
            getter: 'getFloat64',
            setter: 'setFloat64',
          }),
            (a.bigint = {
              id: 2,
              size: 8,
              getter: 'getBigInt64',
              setter: 'setBigInt64',
            }),
            (a.boolean = {
              id: 3,
              size: 4,
              getter: 'getInt32',
              setter: 'setInt32',
            }),
            (a.string = { id: 4 });
          const i = (c) =>
              a[typeof c] ||
              w(
                'Maintenance required: this value type cannot be serialized.',
                c,
              ),
            r = (c) => {
              switch (c) {
                case a.number.id:
                  return a.number;
                case a.bigint.id:
                  return a.bigint;
                case a.boolean.id:
                  return a.boolean;
                case a.string.id:
                  return a.string;
                default:
                  w('Invalid type ID:', c);
              }
            };
          return (
            (t.s11n.deserialize = function (c = !1) {
              const y = n[0],
                l = y ? [] : null;
              if (y) {
                const f = [];
                let u = 1,
                  p,
                  C,
                  N;
                for (p = 0; p < y; ++p, ++u) f.push(r(n[u]));
                for (p = 0; p < y; ++p) {
                  const P = f[p];
                  P.getter
                    ? ((N = o[P.getter](u, t.littleEndian)), (u += P.size))
                    : ((C = o.getInt32(u, t.littleEndian)),
                      (u += 4),
                      (N = e.decode(n.slice(u, u + C))),
                      (u += C)),
                    l.push(N);
                }
              }
              return c && (n[0] = 0), l;
            }),
            (t.s11n.serialize = function (...c) {
              if (c.length) {
                const y = [];
                let l = 0,
                  f = 1;
                for (n[0] = c.length & 255; l < c.length; ++l, ++f)
                  y.push(i(c[l])), (n[f] = y[l].id);
                for (l = 0; l < c.length; ++l) {
                  const u = y[l];
                  if (u.setter)
                    o[u.setter](f, c[l], t.littleEndian), (f += u.size);
                  else {
                    const p = s.encode(c[l]);
                    o.setInt32(f, p.byteLength, t.littleEndian),
                      (f += 4),
                      n.set(p, f),
                      (f += p.byteLength);
                  }
                }
              } else n[0] = 0;
            }),
            (t.s11n.storeException = t.asyncS11nExceptions
              ? (c, y) => {
                  c <= t.asyncS11nExceptions &&
                    t.s11n.serialize([y.name, ': ', y.message].join(''));
                }
              : () => {}),
            t.s11n
          );
        },
        v = async function () {
          const s = Object.create(null);
          for (let n of Object.keys(t.opIds)) {
            const o = _[n];
            if (!o) continue;
            const a = Object.create(null);
            (s[t.opIds[n]] = a), (a.key = n), (a.f = o);
          }
          for (; !L; )
            try {
              if (
                Atomics.wait(
                  t.sabOPView,
                  t.opIds.whichOp,
                  0,
                  t.asyncIdleWaitTime,
                ) !== 'not-equal'
              ) {
                await V();
                continue;
              }
              const n = Atomics.load(t.sabOPView, t.opIds.whichOp);
              Atomics.store(t.sabOPView, t.opIds.whichOp, 0);
              const o = s[n] ?? w('No waitLoop handler for whichOp #', n),
                a = t.s11n.deserialize(!0) || [];
              o.f ? await o.f(...a) : h('Missing callback for opId', n);
            } catch (n) {
              h('in waitLoop():', n);
            }
        };
      navigator.storage
        .getDirectory()
        .then(function (e) {
          (t.rootDir = e),
            (globalThis.onmessage = function ({ data: s }) {
              switch (s.type) {
                case 'opfs-async-init': {
                  const n = s.args;
                  for (const o in n) t[o] = n[o];
                  (t.verbose = n.verbose ?? 1),
                    (t.sabOPView = new Int32Array(t.sabOP)),
                    (t.sabFileBufView = new Uint8Array(
                      t.sabIO,
                      0,
                      t.fileBufferSize,
                    )),
                    (t.sabS11nView = new Uint8Array(
                      t.sabIO,
                      t.sabS11nOffset,
                      t.sabS11nSize,
                    )),
                    Object.keys(_).forEach((o) => {
                      Number.isFinite(t.opIds[o]) ||
                        w('Maintenance required: missing state.opIds[', o, ']');
                    }),
                    U(),
                    g('init state', t),
                    O('opfs-async-inited'),
                    v();
                  break;
                }
                case 'opfs-async-restart':
                  L &&
                    (S(
                      'Restarting after opfs-async-shutdown. Might or might not work.',
                    ),
                    (L = !1),
                    v());
                  break;
              }
            }),
            O('opfs-async-loaded');
        })
        .catch((e) => h('error initializing OPFS asyncer:', e));
    };
  globalThis.SharedArrayBuffer
    ? globalThis.Atomics
      ? !globalThis.FileSystemHandle ||
        !globalThis.FileSystemDirectoryHandle ||
        !globalThis.FileSystemFileHandle ||
        !globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle ||
        !(
          (k = navigator == null ? void 0 : navigator.storage) != null &&
          k.getDirectory
        )
        ? O('opfs-unavailable', 'Missing required OPFS APIs.')
        : z()
      : O(
          'opfs-unavailable',
          'Missing Atomics API.',
          'The server must emit the COOP/COEP response headers to enable that.',
        )
    : O(
        'opfs-unavailable',
        'Missing SharedArrayBuffer API.',
        'The server must emit the COOP/COEP response headers to enable that.',
      );
})();
