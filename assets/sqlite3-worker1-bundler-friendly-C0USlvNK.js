var er = Object.defineProperty;
var jt = (de) => {
  throw TypeError(de);
};
var tr = (de, he, ye) =>
  he in de
    ? er(de, he, { enumerable: !0, configurable: !0, writable: !0, value: ye })
    : (de[he] = ye);
var Bt = (de, he, ye) => tr(de, typeof he != 'symbol' ? he + '' : he, ye),
  pt = (de, he, ye) => he.has(de) || jt('Cannot ' + ye);
var X = (de, he, ye) => (
    pt(de, he, 'read from private field'), ye ? ye.call(de) : he.get(de)
  ),
  Ee = (de, he, ye) =>
    he.has(de)
      ? jt('Cannot add the same private member more than once')
      : he instanceof WeakSet
        ? he.add(de)
        : he.set(de, ye),
  Fe = (de, he, ye, Te) => (
    pt(de, he, 'write to private field'),
    Te ? Te.call(de, ye) : he.set(de, ye),
    ye
  ),
  rt = (de, he, ye) => (pt(de, he, 'access private method'), ye);
(function () {
  'use strict';
  var de = (() => {
    var Te = self.location.href;
    return function (ve) {
      var ze = ve || {},
        t = typeof ze < 'u' ? ze : {},
        Ae,
        Pe;
      t.ready = new Promise(function (n, e) {
        (Ae = n), (Pe = e);
      });
      const Ne =
        globalThis.sqlite3InitModuleState ||
        Object.assign(Object.create(null), { debugModule: () => {} });
      delete globalThis.sqlite3InitModuleState,
        Ne.debugModule('globalThis.location =', globalThis.location);
      const Me = 'emscripten-bug-17951';
      (t[Me] = function n(e, s) {
        e.env.foo = function () {};
        const r = t.locateFile(n.uri, typeof Ie > 'u' ? '' : Ie);
        Ne.debugModule('instantiateWasm() uri =', r);
        const i = () => fetch(r, { credentials: 'same-origin' });
        return (
          (WebAssembly.instantiateStreaming
            ? async () =>
                WebAssembly.instantiateStreaming(i(), e).then((p) =>
                  s(p.instance, p.module),
                )
            : async () =>
                i()
                  .then((p) => p.arrayBuffer())
                  .then((p) => WebAssembly.instantiate(p, e))
                  .then((p) => s(p.instance, p.module)))(),
          {}
        );
      }),
        (t[Me].uri = 'sqlite3.wasm');
      var Je = Object.assign({}, t),
        dt = './this.program',
        mt = typeof window == 'object',
        He = typeof importScripts == 'function';
      typeof process == 'object' &&
        typeof process.versions == 'object' &&
        process.versions.node;
      var Ie = '';
      function zt(n) {
        return t.locateFile ? t.locateFile(n, Ie) : Ie + n;
      }
      var it, ht, ot;
      (mt || He) &&
        (He
          ? (Ie = self.location.href)
          : typeof document < 'u' &&
            document.currentScript &&
            (Ie = document.currentScript.src),
        Te && (Ie = Te),
        Ie.indexOf('blob:') !== 0
          ? (Ie = Ie.substr(0, Ie.replace(/[?#].*/, '').lastIndexOf('/') + 1))
          : (Ie = ''),
        (it = (n) => {
          var e = new XMLHttpRequest();
          return e.open('GET', n, !1), e.send(null), e.responseText;
        }),
        He &&
          (ot = (n) => {
            var e = new XMLHttpRequest();
            return (
              e.open('GET', n, !1),
              (e.responseType = 'arraybuffer'),
              e.send(null),
              new Uint8Array(e.response)
            );
          }),
        (ht = (n, e, s) => {
          var r = new XMLHttpRequest();
          r.open('GET', n, !0),
            (r.responseType = 'arraybuffer'),
            (r.onload = () => {
              if (r.status == 200 || (r.status == 0 && r.response)) {
                e(r.response);
                return;
              }
              s();
            }),
            (r.onerror = s),
            r.send(null);
        }));
      var Xe = t.print || console.log.bind(console),
        Ce = t.printErr || console.warn.bind(console);
      Object.assign(t, Je),
        (Je = null),
        t.arguments && t.arguments,
        t.thisProgram && (dt = t.thisProgram),
        t.quit && t.quit;
      var Ve;
      t.wasmBinary && (Ve = t.wasmBinary),
        t.noExitRuntime,
        typeof WebAssembly != 'object' && Qe('no native wasm support detected');
      var Re,
        gt = !1;
      function Ut(n, e) {
        n || Qe(e);
      }
      var yt = typeof TextDecoder < 'u' ? new TextDecoder('utf8') : void 0;
      function Ue(n, e, s) {
        for (var r = e + s, i = e; n[i] && !(i >= r); ) ++i;
        if (i - e > 16 && n.buffer && yt) return yt.decode(n.subarray(e, i));
        for (var l = ''; e < i; ) {
          var p = n[e++];
          if (!(p & 128)) {
            l += String.fromCharCode(p);
            continue;
          }
          var g = n[e++] & 63;
          if ((p & 224) == 192) {
            l += String.fromCharCode(((p & 31) << 6) | g);
            continue;
          }
          var P = n[e++] & 63;
          if (
            ((p & 240) == 224
              ? (p = ((p & 15) << 12) | (g << 6) | P)
              : (p = ((p & 7) << 18) | (g << 12) | (P << 6) | (n[e++] & 63)),
            p < 65536)
          )
            l += String.fromCharCode(p);
          else {
            var L = p - 65536;
            l += String.fromCharCode(55296 | (L >> 10), 56320 | (L & 1023));
          }
        }
        return l;
      }
      function Wt(n, e) {
        return n ? Ue(We, n, e) : '';
      }
      function Ye(n, e, s, r) {
        if (!(r > 0)) return 0;
        for (var i = s, l = s + r - 1, p = 0; p < n.length; ++p) {
          var g = n.charCodeAt(p);
          if (g >= 55296 && g <= 57343) {
            var P = n.charCodeAt(++p);
            g = (65536 + ((g & 1023) << 10)) | (P & 1023);
          }
          if (g <= 127) {
            if (s >= l) break;
            e[s++] = g;
          } else if (g <= 2047) {
            if (s + 1 >= l) break;
            (e[s++] = 192 | (g >> 6)), (e[s++] = 128 | (g & 63));
          } else if (g <= 65535) {
            if (s + 2 >= l) break;
            (e[s++] = 224 | (g >> 12)),
              (e[s++] = 128 | ((g >> 6) & 63)),
              (e[s++] = 128 | (g & 63));
          } else {
            if (s + 3 >= l) break;
            (e[s++] = 240 | (g >> 18)),
              (e[s++] = 128 | ((g >> 12) & 63)),
              (e[s++] = 128 | ((g >> 6) & 63)),
              (e[s++] = 128 | (g & 63));
          }
        }
        return (e[s] = 0), s - i;
      }
      function qt(n, e, s) {
        return Ye(n, We, e, s);
      }
      function Ge(n) {
        for (var e = 0, s = 0; s < n.length; ++s) {
          var r = n.charCodeAt(s);
          r <= 127
            ? e++
            : r <= 2047
              ? (e += 2)
              : r >= 55296 && r <= 57343
                ? ((e += 4), ++s)
                : (e += 3);
        }
        return e;
      }
      var Se, We, bt, le, ge;
      function wt() {
        var n = Re.buffer;
        (t.HEAP8 = Se = new Int8Array(n)),
          (t.HEAP16 = bt = new Int16Array(n)),
          (t.HEAP32 = le = new Int32Array(n)),
          (t.HEAPU8 = We = new Uint8Array(n)),
          (t.HEAPU16 = new Uint16Array(n)),
          (t.HEAPU32 = ge = new Uint32Array(n)),
          (t.HEAPF32 = new Float32Array(n)),
          (t.HEAPF64 = new Float64Array(n)),
          (t.HEAP64 = new BigInt64Array(n)),
          (t.HEAPU64 = new BigUint64Array(n));
      }
      var Et = t.INITIAL_MEMORY || 16777216;
      t.wasmMemory
        ? (Re = t.wasmMemory)
        : (Re = new WebAssembly.Memory({
            initial: Et / 65536,
            maximum: 32768,
          })),
        wt(),
        (Et = Re.buffer.byteLength);
      var vt = [],
        St = [],
        xt = [];
      function Qt() {
        if (t.preRun)
          for (
            typeof t.preRun == 'function' && (t.preRun = [t.preRun]);
            t.preRun.length;
          )
            Gt(t.preRun.shift());
        at(vt);
      }
      function Ht() {
        !t.noFSInit && !o.init.initialized && o.init(),
          (o.ignorePermissions = !1),
          at(St);
      }
      function Vt() {
        if (t.postRun)
          for (
            typeof t.postRun == 'function' && (t.postRun = [t.postRun]);
            t.postRun.length;
          )
            Kt(t.postRun.shift());
        at(xt);
      }
      function Gt(n) {
        vt.unshift(n);
      }
      function $t(n) {
        St.unshift(n);
      }
      function Kt(n) {
        xt.unshift(n);
      }
      var je = 0,
        $e = null;
      function nr(n) {
        return n;
      }
      function lt(n) {
        je++, t.monitorRunDependencies && t.monitorRunDependencies(je);
      }
      function Ze(n) {
        if (
          (je--,
          t.monitorRunDependencies && t.monitorRunDependencies(je),
          je == 0 && $e)
        ) {
          var e = $e;
          ($e = null), e();
        }
      }
      function Qe(n) {
        t.onAbort && t.onAbort(n),
          (n = 'Aborted(' + n + ')'),
          Ce(n),
          (gt = !0),
          (n += '. Build with -sASSERTIONS for more info.');
        var e = new WebAssembly.RuntimeError(n);
        throw (Pe(e), e);
      }
      var Jt = 'data:application/octet-stream;base64,';
      function At(n) {
        return n.startsWith(Jt);
      }
      var ke;
      t.locateFile
        ? ((ke = 'sqlite3.wasm'), At(ke) || (ke = zt(ke)))
        : (ke = new URL('/assets/sqlite3-BqX9F35q.wasm', self.location.href)
            .href);
      function It(n) {
        try {
          if (n == ke && Ve) return new Uint8Array(Ve);
          if (ot) return ot(n);
          throw 'both async and sync fetching of the wasm failed';
        } catch (e) {
          Qe(e);
        }
      }
      function Xt() {
        return !Ve && (mt || He) && typeof fetch == 'function'
          ? fetch(ke, { credentials: 'same-origin' })
              .then(function (n) {
                if (!n.ok)
                  throw "failed to load wasm binary file at '" + ke + "'";
                return n.arrayBuffer();
              })
              .catch(function () {
                return It(ke);
              })
          : Promise.resolve().then(function () {
              return It(ke);
            });
      }
      function Yt() {
        var n = { env: Lt, wasi_snapshot_preview1: Lt };
        function e(p, g) {
          var P = p.exports;
          (t.asm = P),
            t.asm.__indirect_function_table,
            $t(t.asm.__wasm_call_ctors),
            Ze();
        }
        lt();
        function s(p) {
          e(p.instance);
        }
        function r(p) {
          return Xt()
            .then(function (g) {
              return WebAssembly.instantiate(g, n);
            })
            .then(function (g) {
              return g;
            })
            .then(p, function (g) {
              Ce('failed to asynchronously prepare wasm: ' + g), Qe(g);
            });
        }
        function i() {
          return !Ve &&
            typeof WebAssembly.instantiateStreaming == 'function' &&
            !At(ke) &&
            typeof fetch == 'function'
            ? fetch(ke, { credentials: 'same-origin' }).then(function (p) {
                var g = WebAssembly.instantiateStreaming(p, n);
                return g.then(s, function (P) {
                  return (
                    Ce('wasm streaming compile failed: ' + P),
                    Ce('falling back to ArrayBuffer instantiation'),
                    r(s)
                  );
                });
              })
            : r(s);
        }
        if (t.instantiateWasm)
          try {
            var l = t.instantiateWasm(n, e);
            return l;
          } catch (p) {
            Ce('Module.instantiateWasm callback failed with error: ' + p),
              Pe(p);
          }
        return i().catch(Pe), {};
      }
      var ce, qe;
      function at(n) {
        for (; n.length > 0; ) n.shift()(t);
      }
      var _e = {
        isAbs: (n) => n.charAt(0) === '/',
        splitPath: (n) => {
          var e =
            /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return e.exec(n).slice(1);
        },
        normalizeArray: (n, e) => {
          for (var s = 0, r = n.length - 1; r >= 0; r--) {
            var i = n[r];
            i === '.'
              ? n.splice(r, 1)
              : i === '..'
                ? (n.splice(r, 1), s++)
                : s && (n.splice(r, 1), s--);
          }
          if (e) for (; s; s--) n.unshift('..');
          return n;
        },
        normalize: (n) => {
          var e = _e.isAbs(n),
            s = n.substr(-1) === '/';
          return (
            (n = _e
              .normalizeArray(
                n.split('/').filter((r) => !!r),
                !e,
              )
              .join('/')),
            !n && !e && (n = '.'),
            n && s && (n += '/'),
            (e ? '/' : '') + n
          );
        },
        dirname: (n) => {
          var e = _e.splitPath(n),
            s = e[0],
            r = e[1];
          return !s && !r ? '.' : (r && (r = r.substr(0, r.length - 1)), s + r);
        },
        basename: (n) => {
          if (n === '/') return '/';
          (n = _e.normalize(n)), (n = n.replace(/\/$/, ''));
          var e = n.lastIndexOf('/');
          return e === -1 ? n : n.substr(e + 1);
        },
        join: function () {
          var n = Array.prototype.slice.call(arguments);
          return _e.normalize(n.join('/'));
        },
        join2: (n, e) => _e.normalize(n + '/' + e),
      };
      function Zt() {
        if (
          typeof crypto == 'object' &&
          typeof crypto.getRandomValues == 'function'
        ) {
          var n = new Uint8Array(1);
          return () => (crypto.getRandomValues(n), n[0]);
        } else return () => Qe('randomDevice');
      }
      var Le = {
        resolve: function () {
          for (
            var n = '', e = !1, s = arguments.length - 1;
            s >= -1 && !e;
            s--
          ) {
            var r = s >= 0 ? arguments[s] : o.cwd();
            if (typeof r != 'string')
              throw new TypeError('Arguments to path.resolve must be strings');
            if (!r) return '';
            (n = r + '/' + n), (e = _e.isAbs(r));
          }
          return (
            (n = _e
              .normalizeArray(
                n.split('/').filter((i) => !!i),
                !e,
              )
              .join('/')),
            (e ? '/' : '') + n || '.'
          );
        },
        relative: (n, e) => {
          (n = Le.resolve(n).substr(1)), (e = Le.resolve(e).substr(1));
          function s(L) {
            for (var j = 0; j < L.length && L[j] === ''; j++);
            for (var H = L.length - 1; H >= 0 && L[H] === ''; H--);
            return j > H ? [] : L.slice(j, H - j + 1);
          }
          for (
            var r = s(n.split('/')),
              i = s(e.split('/')),
              l = Math.min(r.length, i.length),
              p = l,
              g = 0;
            g < l;
            g++
          )
            if (r[g] !== i[g]) {
              p = g;
              break;
            }
          for (var P = [], g = p; g < r.length; g++) P.push('..');
          return (P = P.concat(i.slice(p))), P.join('/');
        },
      };
      function ct(n, e, s) {
        var r = Ge(n) + 1,
          i = new Array(r),
          l = Ye(n, i, 0, i.length);
        return (i.length = l), i;
      }
      var Be = {
        ttys: [],
        init: function () {},
        shutdown: function () {},
        register: function (n, e) {
          (Be.ttys[n] = { input: [], output: [], ops: e }),
            o.registerDevice(n, Be.stream_ops);
        },
        stream_ops: {
          open: function (n) {
            var e = Be.ttys[n.node.rdev];
            if (!e) throw new o.ErrnoError(43);
            (n.tty = e), (n.seekable = !1);
          },
          close: function (n) {
            n.tty.ops.fsync(n.tty);
          },
          fsync: function (n) {
            n.tty.ops.fsync(n.tty);
          },
          read: function (n, e, s, r, i) {
            if (!n.tty || !n.tty.ops.get_char) throw new o.ErrnoError(60);
            for (var l = 0, p = 0; p < r; p++) {
              var g;
              try {
                g = n.tty.ops.get_char(n.tty);
              } catch {
                throw new o.ErrnoError(29);
              }
              if (g === void 0 && l === 0) throw new o.ErrnoError(6);
              if (g == null) break;
              l++, (e[s + p] = g);
            }
            return l && (n.node.timestamp = Date.now()), l;
          },
          write: function (n, e, s, r, i) {
            if (!n.tty || !n.tty.ops.put_char) throw new o.ErrnoError(60);
            try {
              for (var l = 0; l < r; l++) n.tty.ops.put_char(n.tty, e[s + l]);
            } catch {
              throw new o.ErrnoError(29);
            }
            return r && (n.node.timestamp = Date.now()), l;
          },
        },
        default_tty_ops: {
          get_char: function (n) {
            if (!n.input.length) {
              var e = null;
              if (
                (typeof window < 'u' && typeof window.prompt == 'function'
                  ? ((e = window.prompt('Input: ')),
                    e !== null &&
                      (e += `
`))
                  : typeof readline == 'function' &&
                    ((e = readline()),
                    e !== null &&
                      (e += `
`)),
                !e)
              )
                return null;
              n.input = ct(e);
            }
            return n.input.shift();
          },
          put_char: function (n, e) {
            e === null || e === 10
              ? (Xe(Ue(n.output, 0)), (n.output = []))
              : e != 0 && n.output.push(e);
          },
          fsync: function (n) {
            n.output &&
              n.output.length > 0 &&
              (Xe(Ue(n.output, 0)), (n.output = []));
          },
        },
        default_tty1_ops: {
          put_char: function (n, e) {
            e === null || e === 10
              ? (Ce(Ue(n.output, 0)), (n.output = []))
              : e != 0 && n.output.push(e);
          },
          fsync: function (n) {
            n.output &&
              n.output.length > 0 &&
              (Ce(Ue(n.output, 0)), (n.output = []));
          },
        },
      };
      function en(n, e) {
        return We.fill(0, n, n + e), n;
      }
      function tn(n, e) {
        return Math.ceil(n / e) * e;
      }
      function kt(n) {
        n = tn(n, 65536);
        var e = Rt(65536, n);
        return e ? en(e, n) : 0;
      }
      var ie = {
        ops_table: null,
        mount: function (n) {
          return ie.createNode(null, '/', 16895, 0);
        },
        createNode: function (n, e, s, r) {
          if (o.isBlkdev(s) || o.isFIFO(s)) throw new o.ErrnoError(63);
          ie.ops_table ||
            (ie.ops_table = {
              dir: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr,
                  lookup: ie.node_ops.lookup,
                  mknod: ie.node_ops.mknod,
                  rename: ie.node_ops.rename,
                  unlink: ie.node_ops.unlink,
                  rmdir: ie.node_ops.rmdir,
                  readdir: ie.node_ops.readdir,
                  symlink: ie.node_ops.symlink,
                },
                stream: { llseek: ie.stream_ops.llseek },
              },
              file: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr,
                },
                stream: {
                  llseek: ie.stream_ops.llseek,
                  read: ie.stream_ops.read,
                  write: ie.stream_ops.write,
                  allocate: ie.stream_ops.allocate,
                  mmap: ie.stream_ops.mmap,
                  msync: ie.stream_ops.msync,
                },
              },
              link: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr,
                  readlink: ie.node_ops.readlink,
                },
                stream: {},
              },
              chrdev: {
                node: {
                  getattr: ie.node_ops.getattr,
                  setattr: ie.node_ops.setattr,
                },
                stream: o.chrdev_stream_ops,
              },
            });
          var i = o.createNode(n, e, s, r);
          return (
            o.isDir(i.mode)
              ? ((i.node_ops = ie.ops_table.dir.node),
                (i.stream_ops = ie.ops_table.dir.stream),
                (i.contents = {}))
              : o.isFile(i.mode)
                ? ((i.node_ops = ie.ops_table.file.node),
                  (i.stream_ops = ie.ops_table.file.stream),
                  (i.usedBytes = 0),
                  (i.contents = null))
                : o.isLink(i.mode)
                  ? ((i.node_ops = ie.ops_table.link.node),
                    (i.stream_ops = ie.ops_table.link.stream))
                  : o.isChrdev(i.mode) &&
                    ((i.node_ops = ie.ops_table.chrdev.node),
                    (i.stream_ops = ie.ops_table.chrdev.stream)),
            (i.timestamp = Date.now()),
            n && ((n.contents[e] = i), (n.timestamp = i.timestamp)),
            i
          );
        },
        getFileDataAsTypedArray: function (n) {
          return n.contents
            ? n.contents.subarray
              ? n.contents.subarray(0, n.usedBytes)
              : new Uint8Array(n.contents)
            : new Uint8Array(0);
        },
        expandFileStorage: function (n, e) {
          var s = n.contents ? n.contents.length : 0;
          if (!(s >= e)) {
            var r = 1024 * 1024;
            (e = Math.max(e, (s * (s < r ? 2 : 1.125)) >>> 0)),
              s != 0 && (e = Math.max(e, 256));
            var i = n.contents;
            (n.contents = new Uint8Array(e)),
              n.usedBytes > 0 && n.contents.set(i.subarray(0, n.usedBytes), 0);
          }
        },
        resizeFileStorage: function (n, e) {
          if (n.usedBytes != e)
            if (e == 0) (n.contents = null), (n.usedBytes = 0);
            else {
              var s = n.contents;
              (n.contents = new Uint8Array(e)),
                s && n.contents.set(s.subarray(0, Math.min(e, n.usedBytes))),
                (n.usedBytes = e);
            }
        },
        node_ops: {
          getattr: function (n) {
            var e = {};
            return (
              (e.dev = o.isChrdev(n.mode) ? n.id : 1),
              (e.ino = n.id),
              (e.mode = n.mode),
              (e.nlink = 1),
              (e.uid = 0),
              (e.gid = 0),
              (e.rdev = n.rdev),
              o.isDir(n.mode)
                ? (e.size = 4096)
                : o.isFile(n.mode)
                  ? (e.size = n.usedBytes)
                  : o.isLink(n.mode)
                    ? (e.size = n.link.length)
                    : (e.size = 0),
              (e.atime = new Date(n.timestamp)),
              (e.mtime = new Date(n.timestamp)),
              (e.ctime = new Date(n.timestamp)),
              (e.blksize = 4096),
              (e.blocks = Math.ceil(e.size / e.blksize)),
              e
            );
          },
          setattr: function (n, e) {
            e.mode !== void 0 && (n.mode = e.mode),
              e.timestamp !== void 0 && (n.timestamp = e.timestamp),
              e.size !== void 0 && ie.resizeFileStorage(n, e.size);
          },
          lookup: function (n, e) {
            throw o.genericErrors[44];
          },
          mknod: function (n, e, s, r) {
            return ie.createNode(n, e, s, r);
          },
          rename: function (n, e, s) {
            if (o.isDir(n.mode)) {
              var r;
              try {
                r = o.lookupNode(e, s);
              } catch {}
              if (r) for (var i in r.contents) throw new o.ErrnoError(55);
            }
            delete n.parent.contents[n.name],
              (n.parent.timestamp = Date.now()),
              (n.name = s),
              (e.contents[s] = n),
              (e.timestamp = n.parent.timestamp),
              (n.parent = e);
          },
          unlink: function (n, e) {
            delete n.contents[e], (n.timestamp = Date.now());
          },
          rmdir: function (n, e) {
            var s = o.lookupNode(n, e);
            for (var r in s.contents) throw new o.ErrnoError(55);
            delete n.contents[e], (n.timestamp = Date.now());
          },
          readdir: function (n) {
            var e = ['.', '..'];
            for (var s in n.contents) n.contents.hasOwnProperty(s) && e.push(s);
            return e;
          },
          symlink: function (n, e, s) {
            var r = ie.createNode(n, e, 41471, 0);
            return (r.link = s), r;
          },
          readlink: function (n) {
            if (!o.isLink(n.mode)) throw new o.ErrnoError(28);
            return n.link;
          },
        },
        stream_ops: {
          read: function (n, e, s, r, i) {
            var l = n.node.contents;
            if (i >= n.node.usedBytes) return 0;
            var p = Math.min(n.node.usedBytes - i, r);
            if (p > 8 && l.subarray) e.set(l.subarray(i, i + p), s);
            else for (var g = 0; g < p; g++) e[s + g] = l[i + g];
            return p;
          },
          write: function (n, e, s, r, i, l) {
            if ((e.buffer === Se.buffer && (l = !1), !r)) return 0;
            var p = n.node;
            if (
              ((p.timestamp = Date.now()),
              e.subarray && (!p.contents || p.contents.subarray))
            ) {
              if (l)
                return (
                  (p.contents = e.subarray(s, s + r)), (p.usedBytes = r), r
                );
              if (p.usedBytes === 0 && i === 0)
                return (p.contents = e.slice(s, s + r)), (p.usedBytes = r), r;
              if (i + r <= p.usedBytes)
                return p.contents.set(e.subarray(s, s + r), i), r;
            }
            if (
              (ie.expandFileStorage(p, i + r),
              p.contents.subarray && e.subarray)
            )
              p.contents.set(e.subarray(s, s + r), i);
            else for (var g = 0; g < r; g++) p.contents[i + g] = e[s + g];
            return (p.usedBytes = Math.max(p.usedBytes, i + r)), r;
          },
          llseek: function (n, e, s) {
            var r = e;
            if (
              (s === 1
                ? (r += n.position)
                : s === 2 && o.isFile(n.node.mode) && (r += n.node.usedBytes),
              r < 0)
            )
              throw new o.ErrnoError(28);
            return r;
          },
          allocate: function (n, e, s) {
            ie.expandFileStorage(n.node, e + s),
              (n.node.usedBytes = Math.max(n.node.usedBytes, e + s));
          },
          mmap: function (n, e, s, r, i) {
            if (!o.isFile(n.node.mode)) throw new o.ErrnoError(43);
            var l,
              p,
              g = n.node.contents;
            if (!(i & 2) && g.buffer === Se.buffer)
              (p = !1), (l = g.byteOffset);
            else {
              if (
                ((s > 0 || s + e < g.length) &&
                  (g.subarray
                    ? (g = g.subarray(s, s + e))
                    : (g = Array.prototype.slice.call(g, s, s + e))),
                (p = !0),
                (l = kt(e)),
                !l)
              )
                throw new o.ErrnoError(48);
              Se.set(g, l);
            }
            return { ptr: l, allocated: p };
          },
          msync: function (n, e, s, r, i) {
            return ie.stream_ops.write(n, e, 0, r, s, !1), 0;
          },
        },
      };
      function nn(n, e, s, r) {
        var i = 'al ' + n;
        ht(
          n,
          (l) => {
            Ut(l, 'Loading data file "' + n + '" failed (no arrayBuffer).'),
              e(new Uint8Array(l)),
              i && Ze();
          },
          (l) => {
            if (s) s();
            else throw 'Loading data file "' + n + '" failed.';
          },
        ),
          i && lt();
      }
      var o = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: '/',
          initialized: !1,
          ignorePermissions: !0,
          ErrnoError: null,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          lookupPath: (n, e = {}) => {
            if (((n = Le.resolve(n)), !n)) return { path: '', node: null };
            var s = { follow_mount: !0, recurse_count: 0 };
            if (((e = Object.assign(s, e)), e.recurse_count > 8))
              throw new o.ErrnoError(32);
            for (
              var r = n.split('/').filter((H) => !!H),
                i = o.root,
                l = '/',
                p = 0;
              p < r.length;
              p++
            ) {
              var g = p === r.length - 1;
              if (g && e.parent) break;
              if (
                ((i = o.lookupNode(i, r[p])),
                (l = _e.join2(l, r[p])),
                o.isMountpoint(i) &&
                  (!g || (g && e.follow_mount)) &&
                  (i = i.mounted.root),
                !g || e.follow)
              )
                for (var P = 0; o.isLink(i.mode); ) {
                  var L = o.readlink(l);
                  l = Le.resolve(_e.dirname(l), L);
                  var j = o.lookupPath(l, {
                    recurse_count: e.recurse_count + 1,
                  });
                  if (((i = j.node), P++ > 40)) throw new o.ErrnoError(32);
                }
            }
            return { path: l, node: i };
          },
          getPath: (n) => {
            for (var e; ; ) {
              if (o.isRoot(n)) {
                var s = n.mount.mountpoint;
                return e ? (s[s.length - 1] !== '/' ? s + '/' + e : s + e) : s;
              }
              (e = e ? n.name + '/' + e : n.name), (n = n.parent);
            }
          },
          hashName: (n, e) => {
            for (var s = 0, r = 0; r < e.length; r++)
              s = ((s << 5) - s + e.charCodeAt(r)) | 0;
            return ((n + s) >>> 0) % o.nameTable.length;
          },
          hashAddNode: (n) => {
            var e = o.hashName(n.parent.id, n.name);
            (n.name_next = o.nameTable[e]), (o.nameTable[e] = n);
          },
          hashRemoveNode: (n) => {
            var e = o.hashName(n.parent.id, n.name);
            if (o.nameTable[e] === n) o.nameTable[e] = n.name_next;
            else
              for (var s = o.nameTable[e]; s; ) {
                if (s.name_next === n) {
                  s.name_next = n.name_next;
                  break;
                }
                s = s.name_next;
              }
          },
          lookupNode: (n, e) => {
            var s = o.mayLookup(n);
            if (s) throw new o.ErrnoError(s, n);
            for (
              var r = o.hashName(n.id, e), i = o.nameTable[r];
              i;
              i = i.name_next
            ) {
              var l = i.name;
              if (i.parent.id === n.id && l === e) return i;
            }
            return o.lookup(n, e);
          },
          createNode: (n, e, s, r) => {
            var i = new o.FSNode(n, e, s, r);
            return o.hashAddNode(i), i;
          },
          destroyNode: (n) => {
            o.hashRemoveNode(n);
          },
          isRoot: (n) => n === n.parent,
          isMountpoint: (n) => !!n.mounted,
          isFile: (n) => (n & 61440) === 32768,
          isDir: (n) => (n & 61440) === 16384,
          isLink: (n) => (n & 61440) === 40960,
          isChrdev: (n) => (n & 61440) === 8192,
          isBlkdev: (n) => (n & 61440) === 24576,
          isFIFO: (n) => (n & 61440) === 4096,
          isSocket: (n) => (n & 49152) === 49152,
          flagModes: { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
          modeStringToFlags: (n) => {
            var e = o.flagModes[n];
            if (typeof e > 'u') throw new Error('Unknown file open mode: ' + n);
            return e;
          },
          flagsToPermissionString: (n) => {
            var e = ['r', 'w', 'rw'][n & 3];
            return n & 512 && (e += 'w'), e;
          },
          nodePermissions: (n, e) =>
            o.ignorePermissions
              ? 0
              : (e.includes('r') && !(n.mode & 292)) ||
                  (e.includes('w') && !(n.mode & 146)) ||
                  (e.includes('x') && !(n.mode & 73))
                ? 2
                : 0,
          mayLookup: (n) => {
            var e = o.nodePermissions(n, 'x');
            return e || (n.node_ops.lookup ? 0 : 2);
          },
          mayCreate: (n, e) => {
            try {
              var s = o.lookupNode(n, e);
              return 20;
            } catch {}
            return o.nodePermissions(n, 'wx');
          },
          mayDelete: (n, e, s) => {
            var r;
            try {
              r = o.lookupNode(n, e);
            } catch (l) {
              return l.errno;
            }
            var i = o.nodePermissions(n, 'wx');
            if (i) return i;
            if (s) {
              if (!o.isDir(r.mode)) return 54;
              if (o.isRoot(r) || o.getPath(r) === o.cwd()) return 10;
            } else if (o.isDir(r.mode)) return 31;
            return 0;
          },
          mayOpen: (n, e) =>
            n
              ? o.isLink(n.mode)
                ? 32
                : o.isDir(n.mode) &&
                    (o.flagsToPermissionString(e) !== 'r' || e & 512)
                  ? 31
                  : o.nodePermissions(n, o.flagsToPermissionString(e))
              : 44,
          MAX_OPEN_FDS: 4096,
          nextfd: (n = 0, e = o.MAX_OPEN_FDS) => {
            for (var s = n; s <= e; s++) if (!o.streams[s]) return s;
            throw new o.ErrnoError(33);
          },
          getStream: (n) => o.streams[n],
          createStream: (n, e, s) => {
            o.FSStream ||
              ((o.FSStream = function () {
                this.shared = {};
              }),
              (o.FSStream.prototype = {}),
              Object.defineProperties(o.FSStream.prototype, {
                object: {
                  get: function () {
                    return this.node;
                  },
                  set: function (i) {
                    this.node = i;
                  },
                },
                isRead: {
                  get: function () {
                    return (this.flags & 2097155) !== 1;
                  },
                },
                isWrite: {
                  get: function () {
                    return (this.flags & 2097155) !== 0;
                  },
                },
                isAppend: {
                  get: function () {
                    return this.flags & 1024;
                  },
                },
                flags: {
                  get: function () {
                    return this.shared.flags;
                  },
                  set: function (i) {
                    this.shared.flags = i;
                  },
                },
                position: {
                  get: function () {
                    return this.shared.position;
                  },
                  set: function (i) {
                    this.shared.position = i;
                  },
                },
              })),
              (n = Object.assign(new o.FSStream(), n));
            var r = o.nextfd(e, s);
            return (n.fd = r), (o.streams[r] = n), n;
          },
          closeStream: (n) => {
            o.streams[n] = null;
          },
          chrdev_stream_ops: {
            open: (n) => {
              var e = o.getDevice(n.node.rdev);
              (n.stream_ops = e.stream_ops),
                n.stream_ops.open && n.stream_ops.open(n);
            },
            llseek: () => {
              throw new o.ErrnoError(70);
            },
          },
          major: (n) => n >> 8,
          minor: (n) => n & 255,
          makedev: (n, e) => (n << 8) | e,
          registerDevice: (n, e) => {
            o.devices[n] = { stream_ops: e };
          },
          getDevice: (n) => o.devices[n],
          getMounts: (n) => {
            for (var e = [], s = [n]; s.length; ) {
              var r = s.pop();
              e.push(r), s.push.apply(s, r.mounts);
            }
            return e;
          },
          syncfs: (n, e) => {
            typeof n == 'function' && ((e = n), (n = !1)),
              o.syncFSRequests++,
              o.syncFSRequests > 1 &&
                Ce(
                  'warning: ' +
                    o.syncFSRequests +
                    ' FS.syncfs operations in flight at once, probably just doing extra work',
                );
            var s = o.getMounts(o.root.mount),
              r = 0;
            function i(p) {
              return o.syncFSRequests--, e(p);
            }
            function l(p) {
              if (p) return l.errored ? void 0 : ((l.errored = !0), i(p));
              ++r >= s.length && i(null);
            }
            s.forEach((p) => {
              if (!p.type.syncfs) return l(null);
              p.type.syncfs(p, n, l);
            });
          },
          mount: (n, e, s) => {
            var r = s === '/',
              i = !s,
              l;
            if (r && o.root) throw new o.ErrnoError(10);
            if (!r && !i) {
              var p = o.lookupPath(s, { follow_mount: !1 });
              if (((s = p.path), (l = p.node), o.isMountpoint(l)))
                throw new o.ErrnoError(10);
              if (!o.isDir(l.mode)) throw new o.ErrnoError(54);
            }
            var g = { type: n, opts: e, mountpoint: s, mounts: [] },
              P = n.mount(g);
            return (
              (P.mount = g),
              (g.root = P),
              r
                ? (o.root = P)
                : l && ((l.mounted = g), l.mount && l.mount.mounts.push(g)),
              P
            );
          },
          unmount: (n) => {
            var e = o.lookupPath(n, { follow_mount: !1 });
            if (!o.isMountpoint(e.node)) throw new o.ErrnoError(28);
            var s = e.node,
              r = s.mounted,
              i = o.getMounts(r);
            Object.keys(o.nameTable).forEach((p) => {
              for (var g = o.nameTable[p]; g; ) {
                var P = g.name_next;
                i.includes(g.mount) && o.destroyNode(g), (g = P);
              }
            }),
              (s.mounted = null);
            var l = s.mount.mounts.indexOf(r);
            s.mount.mounts.splice(l, 1);
          },
          lookup: (n, e) => n.node_ops.lookup(n, e),
          mknod: (n, e, s) => {
            var r = o.lookupPath(n, { parent: !0 }),
              i = r.node,
              l = _e.basename(n);
            if (!l || l === '.' || l === '..') throw new o.ErrnoError(28);
            var p = o.mayCreate(i, l);
            if (p) throw new o.ErrnoError(p);
            if (!i.node_ops.mknod) throw new o.ErrnoError(63);
            return i.node_ops.mknod(i, l, e, s);
          },
          create: (n, e) => (
            (e = e !== void 0 ? e : 438),
            (e &= 4095),
            (e |= 32768),
            o.mknod(n, e, 0)
          ),
          mkdir: (n, e) => (
            (e = e !== void 0 ? e : 511),
            (e &= 1023),
            (e |= 16384),
            o.mknod(n, e, 0)
          ),
          mkdirTree: (n, e) => {
            for (var s = n.split('/'), r = '', i = 0; i < s.length; ++i)
              if (s[i]) {
                r += '/' + s[i];
                try {
                  o.mkdir(r, e);
                } catch (l) {
                  if (l.errno != 20) throw l;
                }
              }
          },
          mkdev: (n, e, s) => (
            typeof s > 'u' && ((s = e), (e = 438)),
            (e |= 8192),
            o.mknod(n, e, s)
          ),
          symlink: (n, e) => {
            if (!Le.resolve(n)) throw new o.ErrnoError(44);
            var s = o.lookupPath(e, { parent: !0 }),
              r = s.node;
            if (!r) throw new o.ErrnoError(44);
            var i = _e.basename(e),
              l = o.mayCreate(r, i);
            if (l) throw new o.ErrnoError(l);
            if (!r.node_ops.symlink) throw new o.ErrnoError(63);
            return r.node_ops.symlink(r, i, n);
          },
          rename: (n, e) => {
            var s = _e.dirname(n),
              r = _e.dirname(e),
              i = _e.basename(n),
              l = _e.basename(e),
              p,
              g,
              P;
            if (
              ((p = o.lookupPath(n, { parent: !0 })),
              (g = p.node),
              (p = o.lookupPath(e, { parent: !0 })),
              (P = p.node),
              !g || !P)
            )
              throw new o.ErrnoError(44);
            if (g.mount !== P.mount) throw new o.ErrnoError(75);
            var L = o.lookupNode(g, i),
              j = Le.relative(n, r);
            if (j.charAt(0) !== '.') throw new o.ErrnoError(28);
            if (((j = Le.relative(e, s)), j.charAt(0) !== '.'))
              throw new o.ErrnoError(55);
            var H;
            try {
              H = o.lookupNode(P, l);
            } catch {}
            if (L !== H) {
              var I = o.isDir(L.mode),
                A = o.mayDelete(g, i, I);
              if (A) throw new o.ErrnoError(A);
              if (((A = H ? o.mayDelete(P, l, I) : o.mayCreate(P, l)), A))
                throw new o.ErrnoError(A);
              if (!g.node_ops.rename) throw new o.ErrnoError(63);
              if (o.isMountpoint(L) || (H && o.isMountpoint(H)))
                throw new o.ErrnoError(10);
              if (P !== g && ((A = o.nodePermissions(g, 'w')), A))
                throw new o.ErrnoError(A);
              o.hashRemoveNode(L);
              try {
                g.node_ops.rename(L, P, l);
              } catch (R) {
                throw R;
              } finally {
                o.hashAddNode(L);
              }
            }
          },
          rmdir: (n) => {
            var e = o.lookupPath(n, { parent: !0 }),
              s = e.node,
              r = _e.basename(n),
              i = o.lookupNode(s, r),
              l = o.mayDelete(s, r, !0);
            if (l) throw new o.ErrnoError(l);
            if (!s.node_ops.rmdir) throw new o.ErrnoError(63);
            if (o.isMountpoint(i)) throw new o.ErrnoError(10);
            s.node_ops.rmdir(s, r), o.destroyNode(i);
          },
          readdir: (n) => {
            var e = o.lookupPath(n, { follow: !0 }),
              s = e.node;
            if (!s.node_ops.readdir) throw new o.ErrnoError(54);
            return s.node_ops.readdir(s);
          },
          unlink: (n) => {
            var e = o.lookupPath(n, { parent: !0 }),
              s = e.node;
            if (!s) throw new o.ErrnoError(44);
            var r = _e.basename(n),
              i = o.lookupNode(s, r),
              l = o.mayDelete(s, r, !1);
            if (l) throw new o.ErrnoError(l);
            if (!s.node_ops.unlink) throw new o.ErrnoError(63);
            if (o.isMountpoint(i)) throw new o.ErrnoError(10);
            s.node_ops.unlink(s, r), o.destroyNode(i);
          },
          readlink: (n) => {
            var e = o.lookupPath(n),
              s = e.node;
            if (!s) throw new o.ErrnoError(44);
            if (!s.node_ops.readlink) throw new o.ErrnoError(28);
            return Le.resolve(o.getPath(s.parent), s.node_ops.readlink(s));
          },
          stat: (n, e) => {
            var s = o.lookupPath(n, { follow: !e }),
              r = s.node;
            if (!r) throw new o.ErrnoError(44);
            if (!r.node_ops.getattr) throw new o.ErrnoError(63);
            return r.node_ops.getattr(r);
          },
          lstat: (n) => o.stat(n, !0),
          chmod: (n, e, s) => {
            var r;
            if (typeof n == 'string') {
              var i = o.lookupPath(n, { follow: !s });
              r = i.node;
            } else r = n;
            if (!r.node_ops.setattr) throw new o.ErrnoError(63);
            r.node_ops.setattr(r, {
              mode: (e & 4095) | (r.mode & -4096),
              timestamp: Date.now(),
            });
          },
          lchmod: (n, e) => {
            o.chmod(n, e, !0);
          },
          fchmod: (n, e) => {
            var s = o.getStream(n);
            if (!s) throw new o.ErrnoError(8);
            o.chmod(s.node, e);
          },
          chown: (n, e, s, r) => {
            var i;
            if (typeof n == 'string') {
              var l = o.lookupPath(n, { follow: !r });
              i = l.node;
            } else i = n;
            if (!i.node_ops.setattr) throw new o.ErrnoError(63);
            i.node_ops.setattr(i, { timestamp: Date.now() });
          },
          lchown: (n, e, s) => {
            o.chown(n, e, s, !0);
          },
          fchown: (n, e, s) => {
            var r = o.getStream(n);
            if (!r) throw new o.ErrnoError(8);
            o.chown(r.node, e, s);
          },
          truncate: (n, e) => {
            if (e < 0) throw new o.ErrnoError(28);
            var s;
            if (typeof n == 'string') {
              var r = o.lookupPath(n, { follow: !0 });
              s = r.node;
            } else s = n;
            if (!s.node_ops.setattr) throw new o.ErrnoError(63);
            if (o.isDir(s.mode)) throw new o.ErrnoError(31);
            if (!o.isFile(s.mode)) throw new o.ErrnoError(28);
            var i = o.nodePermissions(s, 'w');
            if (i) throw new o.ErrnoError(i);
            s.node_ops.setattr(s, { size: e, timestamp: Date.now() });
          },
          ftruncate: (n, e) => {
            var s = o.getStream(n);
            if (!s) throw new o.ErrnoError(8);
            if (!(s.flags & 2097155)) throw new o.ErrnoError(28);
            o.truncate(s.node, e);
          },
          utime: (n, e, s) => {
            var r = o.lookupPath(n, { follow: !0 }),
              i = r.node;
            i.node_ops.setattr(i, { timestamp: Math.max(e, s) });
          },
          open: (n, e, s) => {
            if (n === '') throw new o.ErrnoError(44);
            (e = typeof e == 'string' ? o.modeStringToFlags(e) : e),
              (s = typeof s > 'u' ? 438 : s),
              e & 64 ? (s = (s & 4095) | 32768) : (s = 0);
            var r;
            if (typeof n == 'object') r = n;
            else {
              n = _e.normalize(n);
              try {
                var i = o.lookupPath(n, { follow: !(e & 131072) });
                r = i.node;
              } catch {}
            }
            var l = !1;
            if (e & 64)
              if (r) {
                if (e & 128) throw new o.ErrnoError(20);
              } else (r = o.mknod(n, s, 0)), (l = !0);
            if (!r) throw new o.ErrnoError(44);
            if (
              (o.isChrdev(r.mode) && (e &= -513), e & 65536 && !o.isDir(r.mode))
            )
              throw new o.ErrnoError(54);
            if (!l) {
              var p = o.mayOpen(r, e);
              if (p) throw new o.ErrnoError(p);
            }
            e & 512 && !l && o.truncate(r, 0), (e &= -131713);
            var g = o.createStream({
              node: r,
              path: o.getPath(r),
              flags: e,
              seekable: !0,
              position: 0,
              stream_ops: r.stream_ops,
              ungotten: [],
              error: !1,
            });
            return (
              g.stream_ops.open && g.stream_ops.open(g),
              t.logReadFiles &&
                !(e & 1) &&
                (o.readFiles || (o.readFiles = {}),
                n in o.readFiles || (o.readFiles[n] = 1)),
              g
            );
          },
          close: (n) => {
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            n.getdents && (n.getdents = null);
            try {
              n.stream_ops.close && n.stream_ops.close(n);
            } catch (e) {
              throw e;
            } finally {
              o.closeStream(n.fd);
            }
            n.fd = null;
          },
          isClosed: (n) => n.fd === null,
          llseek: (n, e, s) => {
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if (!n.seekable || !n.stream_ops.llseek) throw new o.ErrnoError(70);
            if (s != 0 && s != 1 && s != 2) throw new o.ErrnoError(28);
            return (
              (n.position = n.stream_ops.llseek(n, e, s)),
              (n.ungotten = []),
              n.position
            );
          },
          read: (n, e, s, r, i) => {
            if (r < 0 || i < 0) throw new o.ErrnoError(28);
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if ((n.flags & 2097155) === 1) throw new o.ErrnoError(8);
            if (o.isDir(n.node.mode)) throw new o.ErrnoError(31);
            if (!n.stream_ops.read) throw new o.ErrnoError(28);
            var l = typeof i < 'u';
            if (!l) i = n.position;
            else if (!n.seekable) throw new o.ErrnoError(70);
            var p = n.stream_ops.read(n, e, s, r, i);
            return l || (n.position += p), p;
          },
          write: (n, e, s, r, i, l) => {
            if (r < 0 || i < 0) throw new o.ErrnoError(28);
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if (!(n.flags & 2097155)) throw new o.ErrnoError(8);
            if (o.isDir(n.node.mode)) throw new o.ErrnoError(31);
            if (!n.stream_ops.write) throw new o.ErrnoError(28);
            n.seekable && n.flags & 1024 && o.llseek(n, 0, 2);
            var p = typeof i < 'u';
            if (!p) i = n.position;
            else if (!n.seekable) throw new o.ErrnoError(70);
            var g = n.stream_ops.write(n, e, s, r, i, l);
            return p || (n.position += g), g;
          },
          allocate: (n, e, s) => {
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if (e < 0 || s <= 0) throw new o.ErrnoError(28);
            if (!(n.flags & 2097155)) throw new o.ErrnoError(8);
            if (!o.isFile(n.node.mode) && !o.isDir(n.node.mode))
              throw new o.ErrnoError(43);
            if (!n.stream_ops.allocate) throw new o.ErrnoError(138);
            n.stream_ops.allocate(n, e, s);
          },
          mmap: (n, e, s, r, i) => {
            if (r & 2 && !(i & 2) && (n.flags & 2097155) !== 2)
              throw new o.ErrnoError(2);
            if ((n.flags & 2097155) === 1) throw new o.ErrnoError(2);
            if (!n.stream_ops.mmap) throw new o.ErrnoError(43);
            return n.stream_ops.mmap(n, e, s, r, i);
          },
          msync: (n, e, s, r, i) =>
            n.stream_ops.msync ? n.stream_ops.msync(n, e, s, r, i) : 0,
          munmap: (n) => 0,
          ioctl: (n, e, s) => {
            if (!n.stream_ops.ioctl) throw new o.ErrnoError(59);
            return n.stream_ops.ioctl(n, e, s);
          },
          readFile: (n, e = {}) => {
            if (
              ((e.flags = e.flags || 0),
              (e.encoding = e.encoding || 'binary'),
              e.encoding !== 'utf8' && e.encoding !== 'binary')
            )
              throw new Error('Invalid encoding type "' + e.encoding + '"');
            var s,
              r = o.open(n, e.flags),
              i = o.stat(n),
              l = i.size,
              p = new Uint8Array(l);
            return (
              o.read(r, p, 0, l, 0),
              e.encoding === 'utf8'
                ? (s = Ue(p, 0))
                : e.encoding === 'binary' && (s = p),
              o.close(r),
              s
            );
          },
          writeFile: (n, e, s = {}) => {
            s.flags = s.flags || 577;
            var r = o.open(n, s.flags, s.mode);
            if (typeof e == 'string') {
              var i = new Uint8Array(Ge(e) + 1),
                l = Ye(e, i, 0, i.length);
              o.write(r, i, 0, l, void 0, s.canOwn);
            } else if (ArrayBuffer.isView(e))
              o.write(r, e, 0, e.byteLength, void 0, s.canOwn);
            else throw new Error('Unsupported data type');
            o.close(r);
          },
          cwd: () => o.currentPath,
          chdir: (n) => {
            var e = o.lookupPath(n, { follow: !0 });
            if (e.node === null) throw new o.ErrnoError(44);
            if (!o.isDir(e.node.mode)) throw new o.ErrnoError(54);
            var s = o.nodePermissions(e.node, 'x');
            if (s) throw new o.ErrnoError(s);
            o.currentPath = e.path;
          },
          createDefaultDirectories: () => {
            o.mkdir('/tmp'), o.mkdir('/home'), o.mkdir('/home/web_user');
          },
          createDefaultDevices: () => {
            o.mkdir('/dev'),
              o.registerDevice(o.makedev(1, 3), {
                read: () => 0,
                write: (e, s, r, i, l) => i,
              }),
              o.mkdev('/dev/null', o.makedev(1, 3)),
              Be.register(o.makedev(5, 0), Be.default_tty_ops),
              Be.register(o.makedev(6, 0), Be.default_tty1_ops),
              o.mkdev('/dev/tty', o.makedev(5, 0)),
              o.mkdev('/dev/tty1', o.makedev(6, 0));
            var n = Zt();
            o.createDevice('/dev', 'random', n),
              o.createDevice('/dev', 'urandom', n),
              o.mkdir('/dev/shm'),
              o.mkdir('/dev/shm/tmp');
          },
          createSpecialDirectories: () => {
            o.mkdir('/proc');
            var n = o.mkdir('/proc/self');
            o.mkdir('/proc/self/fd'),
              o.mount(
                {
                  mount: () => {
                    var e = o.createNode(n, 'fd', 16895, 73);
                    return (
                      (e.node_ops = {
                        lookup: (s, r) => {
                          var i = +r,
                            l = o.getStream(i);
                          if (!l) throw new o.ErrnoError(8);
                          var p = {
                            parent: null,
                            mount: { mountpoint: 'fake' },
                            node_ops: { readlink: () => l.path },
                          };
                          return (p.parent = p), p;
                        },
                      }),
                      e
                    );
                  },
                },
                {},
                '/proc/self/fd',
              );
          },
          createStandardStreams: () => {
            t.stdin
              ? o.createDevice('/dev', 'stdin', t.stdin)
              : o.symlink('/dev/tty', '/dev/stdin'),
              t.stdout
                ? o.createDevice('/dev', 'stdout', null, t.stdout)
                : o.symlink('/dev/tty', '/dev/stdout'),
              t.stderr
                ? o.createDevice('/dev', 'stderr', null, t.stderr)
                : o.symlink('/dev/tty1', '/dev/stderr'),
              o.open('/dev/stdin', 0),
              o.open('/dev/stdout', 1),
              o.open('/dev/stderr', 1);
          },
          ensureErrnoError: () => {
            o.ErrnoError ||
              ((o.ErrnoError = function (e, s) {
                (this.node = s),
                  (this.setErrno = function (r) {
                    this.errno = r;
                  }),
                  this.setErrno(e),
                  (this.message = 'FS error');
              }),
              (o.ErrnoError.prototype = new Error()),
              (o.ErrnoError.prototype.constructor = o.ErrnoError),
              [44].forEach((n) => {
                (o.genericErrors[n] = new o.ErrnoError(n)),
                  (o.genericErrors[n].stack = '<generic error, no stack>');
              }));
          },
          staticInit: () => {
            o.ensureErrnoError(),
              (o.nameTable = new Array(4096)),
              o.mount(ie, {}, '/'),
              o.createDefaultDirectories(),
              o.createDefaultDevices(),
              o.createSpecialDirectories(),
              (o.filesystems = { MEMFS: ie });
          },
          init: (n, e, s) => {
            (o.init.initialized = !0),
              o.ensureErrnoError(),
              (t.stdin = n || t.stdin),
              (t.stdout = e || t.stdout),
              (t.stderr = s || t.stderr),
              o.createStandardStreams();
          },
          quit: () => {
            o.init.initialized = !1;
            for (var n = 0; n < o.streams.length; n++) {
              var e = o.streams[n];
              e && o.close(e);
            }
          },
          getMode: (n, e) => {
            var s = 0;
            return n && (s |= 365), e && (s |= 146), s;
          },
          findObject: (n, e) => {
            var s = o.analyzePath(n, e);
            return s.exists ? s.object : null;
          },
          analyzePath: (n, e) => {
            try {
              var s = o.lookupPath(n, { follow: !e });
              n = s.path;
            } catch {}
            var r = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null,
            };
            try {
              var s = o.lookupPath(n, { parent: !0 });
              (r.parentExists = !0),
                (r.parentPath = s.path),
                (r.parentObject = s.node),
                (r.name = _e.basename(n)),
                (s = o.lookupPath(n, { follow: !e })),
                (r.exists = !0),
                (r.path = s.path),
                (r.object = s.node),
                (r.name = s.node.name),
                (r.isRoot = s.path === '/');
            } catch (i) {
              r.error = i.errno;
            }
            return r;
          },
          createPath: (n, e, s, r) => {
            n = typeof n == 'string' ? n : o.getPath(n);
            for (var i = e.split('/').reverse(); i.length; ) {
              var l = i.pop();
              if (l) {
                var p = _e.join2(n, l);
                try {
                  o.mkdir(p);
                } catch {}
                n = p;
              }
            }
            return p;
          },
          createFile: (n, e, s, r, i) => {
            var l = _e.join2(typeof n == 'string' ? n : o.getPath(n), e),
              p = o.getMode(r, i);
            return o.create(l, p);
          },
          createDataFile: (n, e, s, r, i, l) => {
            var p = e;
            n &&
              ((n = typeof n == 'string' ? n : o.getPath(n)),
              (p = e ? _e.join2(n, e) : n));
            var g = o.getMode(r, i),
              P = o.create(p, g);
            if (s) {
              if (typeof s == 'string') {
                for (
                  var L = new Array(s.length), j = 0, H = s.length;
                  j < H;
                  ++j
                )
                  L[j] = s.charCodeAt(j);
                s = L;
              }
              o.chmod(P, g | 146);
              var I = o.open(P, 577);
              o.write(I, s, 0, s.length, 0, l), o.close(I), o.chmod(P, g);
            }
            return P;
          },
          createDevice: (n, e, s, r) => {
            var i = _e.join2(typeof n == 'string' ? n : o.getPath(n), e),
              l = o.getMode(!!s, !!r);
            o.createDevice.major || (o.createDevice.major = 64);
            var p = o.makedev(o.createDevice.major++, 0);
            return (
              o.registerDevice(p, {
                open: (g) => {
                  g.seekable = !1;
                },
                close: (g) => {
                  r && r.buffer && r.buffer.length && r(10);
                },
                read: (g, P, L, j, H) => {
                  for (var I = 0, A = 0; A < j; A++) {
                    var R;
                    try {
                      R = s();
                    } catch {
                      throw new o.ErrnoError(29);
                    }
                    if (R === void 0 && I === 0) throw new o.ErrnoError(6);
                    if (R == null) break;
                    I++, (P[L + A] = R);
                  }
                  return I && (g.node.timestamp = Date.now()), I;
                },
                write: (g, P, L, j, H) => {
                  for (var I = 0; I < j; I++)
                    try {
                      r(P[L + I]);
                    } catch {
                      throw new o.ErrnoError(29);
                    }
                  return j && (g.node.timestamp = Date.now()), I;
                },
              }),
              o.mkdev(i, l, p)
            );
          },
          forceLoadFile: (n) => {
            if (n.isDevice || n.isFolder || n.link || n.contents) return !0;
            if (typeof XMLHttpRequest < 'u')
              throw new Error(
                'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.',
              );
            if (it)
              try {
                (n.contents = ct(it(n.url), !0)),
                  (n.usedBytes = n.contents.length);
              } catch {
                throw new o.ErrnoError(29);
              }
            else
              throw new Error('Cannot load without read() or XMLHttpRequest.');
          },
          createLazyFile: (n, e, s, r, i) => {
            function l() {
              (this.lengthKnown = !1), (this.chunks = []);
            }
            if (
              ((l.prototype.get = function (A) {
                if (!(A > this.length - 1 || A < 0)) {
                  var R = A % this.chunkSize,
                    b = (A / this.chunkSize) | 0;
                  return this.getter(b)[R];
                }
              }),
              (l.prototype.setDataGetter = function (A) {
                this.getter = A;
              }),
              (l.prototype.cacheLength = function () {
                var A = new XMLHttpRequest();
                if (
                  (A.open('HEAD', s, !1),
                  A.send(null),
                  !((A.status >= 200 && A.status < 300) || A.status === 304))
                )
                  throw new Error(
                    "Couldn't load " + s + '. Status: ' + A.status,
                  );
                var R = Number(A.getResponseHeader('Content-length')),
                  b,
                  E =
                    (b = A.getResponseHeader('Accept-Ranges')) && b === 'bytes',
                  T =
                    (b = A.getResponseHeader('Content-Encoding')) &&
                    b === 'gzip',
                  F = 1024 * 1024;
                E || (F = R);
                var C = (N, Q) => {
                    if (N > Q)
                      throw new Error(
                        'invalid range (' +
                          N +
                          ', ' +
                          Q +
                          ') or no bytes requested!',
                      );
                    if (Q > R - 1)
                      throw new Error(
                        'only ' + R + ' bytes available! programmer error!',
                      );
                    var c = new XMLHttpRequest();
                    if (
                      (c.open('GET', s, !1),
                      R !== F &&
                        c.setRequestHeader('Range', 'bytes=' + N + '-' + Q),
                      (c.responseType = 'arraybuffer'),
                      c.overrideMimeType &&
                        c.overrideMimeType(
                          'text/plain; charset=x-user-defined',
                        ),
                      c.send(null),
                      !(
                        (c.status >= 200 && c.status < 300) ||
                        c.status === 304
                      ))
                    )
                      throw new Error(
                        "Couldn't load " + s + '. Status: ' + c.status,
                      );
                    return c.response !== void 0
                      ? new Uint8Array(c.response || [])
                      : ct(c.responseText || '');
                  },
                  x = this;
                x.setDataGetter((N) => {
                  var Q = N * F,
                    c = (N + 1) * F - 1;
                  if (
                    ((c = Math.min(c, R - 1)),
                    typeof x.chunks[N] > 'u' && (x.chunks[N] = C(Q, c)),
                    typeof x.chunks[N] > 'u')
                  )
                    throw new Error('doXHR failed!');
                  return x.chunks[N];
                }),
                  (T || !R) &&
                    ((F = R = 1),
                    (R = this.getter(0).length),
                    (F = R),
                    Xe(
                      'LazyFiles on gzip forces download of the whole file when length is accessed',
                    )),
                  (this._length = R),
                  (this._chunkSize = F),
                  (this.lengthKnown = !0);
              }),
              typeof XMLHttpRequest < 'u')
            ) {
              if (!He)
                throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
              var p = new l();
              Object.defineProperties(p, {
                length: {
                  get: function () {
                    return this.lengthKnown || this.cacheLength(), this._length;
                  },
                },
                chunkSize: {
                  get: function () {
                    return (
                      this.lengthKnown || this.cacheLength(), this._chunkSize
                    );
                  },
                },
              });
              var g = { isDevice: !1, contents: p };
            } else var g = { isDevice: !1, url: s };
            var P = o.createFile(n, e, g, r, i);
            g.contents
              ? (P.contents = g.contents)
              : g.url && ((P.contents = null), (P.url = g.url)),
              Object.defineProperties(P, {
                usedBytes: {
                  get: function () {
                    return this.contents.length;
                  },
                },
              });
            var L = {},
              j = Object.keys(P.stream_ops);
            j.forEach((I) => {
              var A = P.stream_ops[I];
              L[I] = function () {
                return o.forceLoadFile(P), A.apply(null, arguments);
              };
            });
            function H(I, A, R, b, E) {
              var T = I.node.contents;
              if (E >= T.length) return 0;
              var F = Math.min(T.length - E, b);
              if (T.slice) for (var C = 0; C < F; C++) A[R + C] = T[E + C];
              else for (var C = 0; C < F; C++) A[R + C] = T.get(E + C);
              return F;
            }
            return (
              (L.read = (I, A, R, b, E) => (
                o.forceLoadFile(P), H(I, A, R, b, E)
              )),
              (L.mmap = (I, A, R, b, E) => {
                o.forceLoadFile(P);
                var T = kt(A);
                if (!T) throw new o.ErrnoError(48);
                return H(I, Se, T, A, R), { ptr: T, allocated: !0 };
              }),
              (P.stream_ops = L),
              P
            );
          },
          createPreloadedFile: (n, e, s, r, i, l, p, g, P, L) => {
            var j = e ? Le.resolve(_e.join2(n, e)) : n;
            function H(I) {
              function A(R) {
                L && L(),
                  g || o.createDataFile(n, e, R, r, i, P),
                  l && l(),
                  Ze();
              }
              Browser.handledByPreloadPlugin(I, j, A, () => {
                p && p(), Ze();
              }) || A(I);
            }
            lt(), typeof s == 'string' ? nn(s, (I) => H(I), p) : H(s);
          },
          indexedDB: () =>
            window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB,
          DB_NAME: () => 'EM_FS_' + window.location.pathname,
          DB_VERSION: 20,
          DB_STORE_NAME: 'FILE_DATA',
          saveFilesToDB: (n, e, s) => {
            (e = e || (() => {})), (s = s || (() => {}));
            var r = o.indexedDB();
            try {
              var i = r.open(o.DB_NAME(), o.DB_VERSION);
            } catch (l) {
              return s(l);
            }
            (i.onupgradeneeded = () => {
              Xe('creating db');
              var l = i.result;
              l.createObjectStore(o.DB_STORE_NAME);
            }),
              (i.onsuccess = () => {
                var l = i.result,
                  p = l.transaction([o.DB_STORE_NAME], 'readwrite'),
                  g = p.objectStore(o.DB_STORE_NAME),
                  P = 0,
                  L = 0,
                  j = n.length;
                function H() {
                  L == 0 ? e() : s();
                }
                n.forEach((I) => {
                  var A = g.put(o.analyzePath(I).object.contents, I);
                  (A.onsuccess = () => {
                    P++, P + L == j && H();
                  }),
                    (A.onerror = () => {
                      L++, P + L == j && H();
                    });
                }),
                  (p.onerror = s);
              }),
              (i.onerror = s);
          },
          loadFilesFromDB: (n, e, s) => {
            (e = e || (() => {})), (s = s || (() => {}));
            var r = o.indexedDB();
            try {
              var i = r.open(o.DB_NAME(), o.DB_VERSION);
            } catch (l) {
              return s(l);
            }
            (i.onupgradeneeded = s),
              (i.onsuccess = () => {
                var l = i.result;
                try {
                  var p = l.transaction([o.DB_STORE_NAME], 'readonly');
                } catch (I) {
                  s(I);
                  return;
                }
                var g = p.objectStore(o.DB_STORE_NAME),
                  P = 0,
                  L = 0,
                  j = n.length;
                function H() {
                  L == 0 ? e() : s();
                }
                n.forEach((I) => {
                  var A = g.get(I);
                  (A.onsuccess = () => {
                    o.analyzePath(I).exists && o.unlink(I),
                      o.createDataFile(
                        _e.dirname(I),
                        _e.basename(I),
                        A.result,
                        !0,
                        !0,
                        !0,
                      ),
                      P++,
                      P + L == j && H();
                  }),
                    (A.onerror = () => {
                      L++, P + L == j && H();
                    });
                }),
                  (p.onerror = s);
              }),
              (i.onerror = s);
          },
        },
        ne = {
          DEFAULT_POLLMASK: 5,
          calculateAt: function (n, e, s) {
            if (_e.isAbs(e)) return e;
            var r;
            if (n === -100) r = o.cwd();
            else {
              var i = ne.getStreamFromFD(n);
              r = i.path;
            }
            if (e.length == 0) {
              if (!s) throw new o.ErrnoError(44);
              return r;
            }
            return _e.join2(r, e);
          },
          doStat: function (n, e, s) {
            try {
              var r = n(e);
            } catch (g) {
              if (
                g &&
                g.node &&
                _e.normalize(e) !== _e.normalize(o.getPath(g.node))
              )
                return -54;
              throw g;
            }
            (le[s >> 2] = r.dev),
              (le[(s + 8) >> 2] = r.ino),
              (le[(s + 12) >> 2] = r.mode),
              (ge[(s + 16) >> 2] = r.nlink),
              (le[(s + 20) >> 2] = r.uid),
              (le[(s + 24) >> 2] = r.gid),
              (le[(s + 28) >> 2] = r.rdev),
              (qe = [
                r.size >>> 0,
                ((ce = r.size),
                +Math.abs(ce) >= 1
                  ? ce > 0
                    ? (Math.min(+Math.floor(ce / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((ce - +(~~ce >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (le[(s + 40) >> 2] = qe[0]),
              (le[(s + 44) >> 2] = qe[1]),
              (le[(s + 48) >> 2] = 4096),
              (le[(s + 52) >> 2] = r.blocks);
            var i = r.atime.getTime(),
              l = r.mtime.getTime(),
              p = r.ctime.getTime();
            return (
              (qe = [
                Math.floor(i / 1e3) >>> 0,
                ((ce = Math.floor(i / 1e3)),
                +Math.abs(ce) >= 1
                  ? ce > 0
                    ? (Math.min(+Math.floor(ce / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((ce - +(~~ce >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (le[(s + 56) >> 2] = qe[0]),
              (le[(s + 60) >> 2] = qe[1]),
              (ge[(s + 64) >> 2] = (i % 1e3) * 1e3),
              (qe = [
                Math.floor(l / 1e3) >>> 0,
                ((ce = Math.floor(l / 1e3)),
                +Math.abs(ce) >= 1
                  ? ce > 0
                    ? (Math.min(+Math.floor(ce / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((ce - +(~~ce >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (le[(s + 72) >> 2] = qe[0]),
              (le[(s + 76) >> 2] = qe[1]),
              (ge[(s + 80) >> 2] = (l % 1e3) * 1e3),
              (qe = [
                Math.floor(p / 1e3) >>> 0,
                ((ce = Math.floor(p / 1e3)),
                +Math.abs(ce) >= 1
                  ? ce > 0
                    ? (Math.min(+Math.floor(ce / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((ce - +(~~ce >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (le[(s + 88) >> 2] = qe[0]),
              (le[(s + 92) >> 2] = qe[1]),
              (ge[(s + 96) >> 2] = (p % 1e3) * 1e3),
              (qe = [
                r.ino >>> 0,
                ((ce = r.ino),
                +Math.abs(ce) >= 1
                  ? ce > 0
                    ? (Math.min(+Math.floor(ce / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((ce - +(~~ce >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (le[(s + 104) >> 2] = qe[0]),
              (le[(s + 108) >> 2] = qe[1]),
              0
            );
          },
          doMsync: function (n, e, s, r, i) {
            if (!o.isFile(e.node.mode)) throw new o.ErrnoError(43);
            if (r & 2) return 0;
            var l = We.slice(n, n + s);
            o.msync(e, l, i, s, r);
          },
          varargs: void 0,
          get: function () {
            ne.varargs += 4;
            var n = le[(ne.varargs - 4) >> 2];
            return n;
          },
          getStr: function (n) {
            var e = Wt(n);
            return e;
          },
          getStreamFromFD: function (n) {
            var e = o.getStream(n);
            if (!e) throw new o.ErrnoError(8);
            return e;
          },
        };
      function rn(n, e) {
        try {
          return (n = ne.getStr(n)), o.chmod(n, e), 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function sn(n, e, s, r) {
        try {
          if (((e = ne.getStr(e)), (e = ne.calculateAt(n, e)), s & -8))
            return -28;
          var i = o.lookupPath(e, { follow: !0 }),
            l = i.node;
          if (!l) return -44;
          var p = '';
          return (
            s & 4 && (p += 'r'),
            s & 2 && (p += 'w'),
            s & 1 && (p += 'x'),
            p && o.nodePermissions(l, p) ? -2 : 0
          );
        } catch (g) {
          if (typeof o > 'u' || !(g instanceof o.ErrnoError)) throw g;
          return -g.errno;
        }
      }
      function on(n, e) {
        try {
          return o.fchmod(n, e), 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function ln(n, e, s) {
        try {
          return o.fchown(n, e, s), 0;
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      function an(n) {
        return (le[Dt() >> 2] = n), n;
      }
      function cn(n, e, s) {
        ne.varargs = s;
        try {
          var r = ne.getStreamFromFD(n);
          switch (e) {
            case 0: {
              var i = ne.get();
              if (i < 0) return -28;
              var l;
              return (l = o.createStream(r, i)), l.fd;
            }
            case 1:
            case 2:
              return 0;
            case 3:
              return r.flags;
            case 4: {
              var i = ne.get();
              return (r.flags |= i), 0;
            }
            case 5: {
              var i = ne.get(),
                p = 0;
              return (bt[(i + p) >> 1] = 2), 0;
            }
            case 6:
            case 7:
              return 0;
            case 16:
            case 8:
              return -28;
            case 9:
              return an(28), -1;
            default:
              return -28;
          }
        } catch (g) {
          if (typeof o > 'u' || !(g instanceof o.ErrnoError)) throw g;
          return -g.errno;
        }
      }
      function un(n, e) {
        try {
          var s = ne.getStreamFromFD(n);
          return ne.doStat(o.stat, s.path, e);
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      var _n = 9007199254740992,
        fn = -9007199254740992;
      function Tt(n) {
        return n < fn || n > _n ? NaN : Number(n);
      }
      function pn(n, e) {
        try {
          return (e = Tt(e)), isNaN(e) ? -61 : (o.ftruncate(n, e), 0);
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function dn(n, e) {
        try {
          if (e === 0) return -28;
          var s = o.cwd(),
            r = Ge(s) + 1;
          return e < r ? -68 : (qt(s, n, e), r);
        } catch (i) {
          if (typeof o > 'u' || !(i instanceof o.ErrnoError)) throw i;
          return -i.errno;
        }
      }
      function mn(n, e, s) {
        ne.varargs = s;
        try {
          var r = ne.getStreamFromFD(n);
          switch (e) {
            case 21509:
            case 21505:
              return r.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
              return r.tty ? 0 : -59;
            case 21519: {
              if (!r.tty) return -59;
              var i = ne.get();
              return (le[i >> 2] = 0), 0;
            }
            case 21520:
              return r.tty ? -28 : -59;
            case 21531: {
              var i = ne.get();
              return o.ioctl(r, e, i);
            }
            case 21523:
              return r.tty ? 0 : -59;
            case 21524:
              return r.tty ? 0 : -59;
            default:
              return -28;
          }
        } catch (l) {
          if (typeof o > 'u' || !(l instanceof o.ErrnoError)) throw l;
          return -l.errno;
        }
      }
      function hn(n, e) {
        try {
          return (n = ne.getStr(n)), ne.doStat(o.lstat, n, e);
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function gn(n, e, s) {
        try {
          return (
            (e = ne.getStr(e)),
            (e = ne.calculateAt(n, e)),
            (e = _e.normalize(e)),
            e[e.length - 1] === '/' && (e = e.substr(0, e.length - 1)),
            o.mkdir(e, s, 0),
            0
          );
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      function yn(n, e, s, r) {
        try {
          e = ne.getStr(e);
          var i = r & 256,
            l = r & 4096;
          return (
            (r = r & -6401),
            (e = ne.calculateAt(n, e, l)),
            ne.doStat(i ? o.lstat : o.stat, e, s)
          );
        } catch (p) {
          if (typeof o > 'u' || !(p instanceof o.ErrnoError)) throw p;
          return -p.errno;
        }
      }
      function qn(n, e, s, r) {
        ne.varargs = r;
        try {
          (e = ne.getStr(e)), (e = ne.calculateAt(n, e));
          var i = r ? ne.get() : 0;
          return o.open(e, s, i).fd;
        } catch (l) {
          if (typeof o > 'u' || !(l instanceof o.ErrnoError)) throw l;
          return -l.errno;
        }
      }
      function bn(n, e, s, r) {
        try {
          if (((e = ne.getStr(e)), (e = ne.calculateAt(n, e)), r <= 0))
            return -28;
          var i = o.readlink(e),
            l = Math.min(r, Ge(i)),
            p = Se[s + l];
          return qt(i, s, r + 1), (Se[s + l] = p), l;
        } catch (g) {
          if (typeof o > 'u' || !(g instanceof o.ErrnoError)) throw g;
          return -g.errno;
        }
      }
      function wn(n) {
        try {
          return (n = ne.getStr(n)), o.rmdir(n), 0;
        } catch (e) {
          if (typeof o > 'u' || !(e instanceof o.ErrnoError)) throw e;
          return -e.errno;
        }
      }
      function En(n, e) {
        try {
          return (n = ne.getStr(n)), ne.doStat(o.stat, n, e);
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function vn(n, e, s) {
        try {
          return (
            (e = ne.getStr(e)),
            (e = ne.calculateAt(n, e)),
            s === 0
              ? o.unlink(e)
              : s === 512
                ? o.rmdir(e)
                : Qe('Invalid flags passed to unlinkat'),
            0
          );
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      function ut(n) {
        return ge[n >> 2] + le[(n + 4) >> 2] * 4294967296;
      }
      function Sn(n, e, s, r) {
        try {
          if (((e = ne.getStr(e)), (e = ne.calculateAt(n, e, !0)), s)) {
            var p = ut(s),
              g = le[(s + 8) >> 2];
            (i = p * 1e3 + g / 1e6),
              (s += 16),
              (p = ut(s)),
              (g = le[(s + 8) >> 2]),
              (l = p * 1e3 + g / 1e6);
          } else
            var i = Date.now(),
              l = i;
          return o.utime(e, i, l), 0;
        } catch (P) {
          if (typeof o > 'u' || !(P instanceof o.ErrnoError)) throw P;
          return -P.errno;
        }
      }
      var xn = !0;
      function An() {
        return xn;
      }
      function In(n) {
        return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
      }
      var kn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
        Tn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      function Fn(n) {
        var e = In(n.getFullYear()),
          s = e ? kn : Tn,
          r = s[n.getMonth()] + n.getDate() - 1;
        return r;
      }
      function On(n, e) {
        var s = new Date(ut(n) * 1e3);
        (le[e >> 2] = s.getSeconds()),
          (le[(e + 4) >> 2] = s.getMinutes()),
          (le[(e + 8) >> 2] = s.getHours()),
          (le[(e + 12) >> 2] = s.getDate()),
          (le[(e + 16) >> 2] = s.getMonth()),
          (le[(e + 20) >> 2] = s.getFullYear() - 1900),
          (le[(e + 24) >> 2] = s.getDay());
        var r = Fn(s) | 0;
        (le[(e + 28) >> 2] = r),
          (le[(e + 36) >> 2] = -(s.getTimezoneOffset() * 60));
        var i = new Date(s.getFullYear(), 0, 1),
          l = new Date(s.getFullYear(), 6, 1).getTimezoneOffset(),
          p = i.getTimezoneOffset(),
          g = (l != p && s.getTimezoneOffset() == Math.min(p, l)) | 0;
        le[(e + 32) >> 2] = g;
      }
      function Pn(n, e, s, r, i, l, p) {
        try {
          var g = ne.getStreamFromFD(r),
            P = o.mmap(g, n, i, e, s),
            L = P.ptr;
          return (le[l >> 2] = P.allocated), (ge[p >> 2] = L), 0;
        } catch (j) {
          if (typeof o > 'u' || !(j instanceof o.ErrnoError)) throw j;
          return -j.errno;
        }
      }
      function Ln(n, e, s, r, i, l) {
        try {
          var p = ne.getStreamFromFD(i);
          s & 2 && ne.doMsync(n, p, e, r, l), o.munmap(p);
        } catch (g) {
          if (typeof o > 'u' || !(g instanceof o.ErrnoError)) throw g;
          return -g.errno;
        }
      }
      function Ft(n) {
        var e = Ge(n) + 1,
          s = Ct(e);
        return s && Ye(n, Se, s, e), s;
      }
      function Dn(n, e, s) {
        var r = new Date().getFullYear(),
          i = new Date(r, 0, 1),
          l = new Date(r, 6, 1),
          p = i.getTimezoneOffset(),
          g = l.getTimezoneOffset(),
          P = Math.max(p, g);
        (ge[n >> 2] = P * 60), (le[e >> 2] = +(p != g));
        function L(R) {
          var b = R.toTimeString().match(/\(([A-Za-z ]+)\)$/);
          return b ? b[1] : 'GMT';
        }
        var j = L(i),
          H = L(l),
          I = Ft(j),
          A = Ft(H);
        g < p
          ? ((ge[s >> 2] = I), (ge[(s + 4) >> 2] = A))
          : ((ge[s >> 2] = A), (ge[(s + 4) >> 2] = I));
      }
      function Cn() {
        return Date.now();
      }
      var Ot;
      Ot = () => performance.now();
      function Rn() {
        return 2147483648;
      }
      function Nn(n) {
        var e = Re.buffer;
        try {
          return Re.grow((n - e.byteLength + 65535) >>> 16), wt(), 1;
        } catch {}
      }
      function Mn(n) {
        var e = We.length;
        n = n >>> 0;
        var s = Rn();
        if (n > s) return !1;
        let r = (P, L) => P + ((L - (P % L)) % L);
        for (var i = 1; i <= 4; i *= 2) {
          var l = e * (1 + 0.2 / i);
          l = Math.min(l, n + 100663296);
          var p = Math.min(s, r(Math.max(n, l), 65536)),
            g = Nn(p);
          if (g) return !0;
        }
        return !1;
      }
      var _t = {};
      function jn() {
        return dt || './this.program';
      }
      function Ke() {
        if (!Ke.strings) {
          var n =
              (
                (typeof navigator == 'object' &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                'C'
              ).replace('-', '_') + '.UTF-8',
            e = {
              USER: 'web_user',
              LOGNAME: 'web_user',
              PATH: '/',
              PWD: '/',
              HOME: '/home/web_user',
              LANG: n,
              _: jn(),
            };
          for (var s in _t) _t[s] === void 0 ? delete e[s] : (e[s] = _t[s]);
          var r = [];
          for (var s in e) r.push(s + '=' + e[s]);
          Ke.strings = r;
        }
        return Ke.strings;
      }
      function Bn(n, e, s) {
        for (var r = 0; r < n.length; ++r) Se[e++ >> 0] = n.charCodeAt(r);
        Se[e >> 0] = 0;
      }
      function zn(n, e) {
        var s = 0;
        return (
          Ke().forEach(function (r, i) {
            var l = e + s;
            (ge[(n + i * 4) >> 2] = l), Bn(r, l), (s += r.length + 1);
          }),
          0
        );
      }
      function Un(n, e) {
        var s = Ke();
        ge[n >> 2] = s.length;
        var r = 0;
        return (
          s.forEach(function (i) {
            r += i.length + 1;
          }),
          (ge[e >> 2] = r),
          0
        );
      }
      function Wn(n) {
        try {
          var e = ne.getStreamFromFD(n);
          return o.close(e), 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return s.errno;
        }
      }
      function Qn(n, e) {
        try {
          var s = ne.getStreamFromFD(n),
            r = s.tty ? 2 : o.isDir(s.mode) ? 3 : o.isLink(s.mode) ? 7 : 4;
          return (Se[e >> 0] = r), 0;
        } catch (i) {
          if (typeof o > 'u' || !(i instanceof o.ErrnoError)) throw i;
          return i.errno;
        }
      }
      function Hn(n, e, s, r) {
        for (var i = 0, l = 0; l < s; l++) {
          var p = ge[e >> 2],
            g = ge[(e + 4) >> 2];
          e += 8;
          var P = o.read(n, Se, p, g, r);
          if (P < 0) return -1;
          if (((i += P), P < g)) break;
        }
        return i;
      }
      function Vn(n, e, s, r) {
        try {
          var i = ne.getStreamFromFD(n),
            l = Hn(i, e, s);
          return (ge[r >> 2] = l), 0;
        } catch (p) {
          if (typeof o > 'u' || !(p instanceof o.ErrnoError)) throw p;
          return p.errno;
        }
      }
      function Gn(n, e, s, r) {
        try {
          if (((e = Tt(e)), isNaN(e))) return 61;
          var i = ne.getStreamFromFD(n);
          return (
            o.llseek(i, e, s),
            (qe = [
              i.position >>> 0,
              ((ce = i.position),
              +Math.abs(ce) >= 1
                ? ce > 0
                  ? (Math.min(+Math.floor(ce / 4294967296), 4294967295) | 0) >>>
                    0
                  : ~~+Math.ceil((ce - +(~~ce >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
            (le[r >> 2] = qe[0]),
            (le[(r + 4) >> 2] = qe[1]),
            i.getdents && e === 0 && s === 0 && (i.getdents = null),
            0
          );
        } catch (l) {
          if (typeof o > 'u' || !(l instanceof o.ErrnoError)) throw l;
          return l.errno;
        }
      }
      function $n(n) {
        try {
          var e = ne.getStreamFromFD(n);
          return e.stream_ops && e.stream_ops.fsync ? e.stream_ops.fsync(e) : 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return s.errno;
        }
      }
      function Kn(n, e, s, r) {
        for (var i = 0, l = 0; l < s; l++) {
          var p = ge[e >> 2],
            g = ge[(e + 4) >> 2];
          e += 8;
          var P = o.write(n, Se, p, g, r);
          if (P < 0) return -1;
          i += P;
        }
        return i;
      }
      function Jn(n, e, s, r) {
        try {
          var i = ne.getStreamFromFD(n),
            l = Kn(i, e, s);
          return (ge[r >> 2] = l), 0;
        } catch (p) {
          if (typeof o > 'u' || !(p instanceof o.ErrnoError)) throw p;
          return p.errno;
        }
      }
      var Pt = function (n, e, s, r) {
          n || (n = this),
            (this.parent = n),
            (this.mount = n.mount),
            (this.mounted = null),
            (this.id = o.nextInode++),
            (this.name = e),
            (this.mode = s),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = r);
        },
        et = 365,
        tt = 146;
      Object.defineProperties(Pt.prototype, {
        read: {
          get: function () {
            return (this.mode & et) === et;
          },
          set: function (n) {
            n ? (this.mode |= et) : (this.mode &= ~et);
          },
        },
        write: {
          get: function () {
            return (this.mode & tt) === tt;
          },
          set: function (n) {
            n ? (this.mode |= tt) : (this.mode &= ~tt);
          },
        },
        isFolder: {
          get: function () {
            return o.isDir(this.mode);
          },
        },
        isDevice: {
          get: function () {
            return o.isChrdev(this.mode);
          },
        },
      }),
        (o.FSNode = Pt),
        o.staticInit();
      var Lt = {
        __syscall_chmod: rn,
        __syscall_faccessat: sn,
        __syscall_fchmod: on,
        __syscall_fchown32: ln,
        __syscall_fcntl64: cn,
        __syscall_fstat64: un,
        __syscall_ftruncate64: pn,
        __syscall_getcwd: dn,
        __syscall_ioctl: mn,
        __syscall_lstat64: hn,
        __syscall_mkdirat: gn,
        __syscall_newfstatat: yn,
        __syscall_openat: qn,
        __syscall_readlinkat: bn,
        __syscall_rmdir: wn,
        __syscall_stat64: En,
        __syscall_unlinkat: vn,
        __syscall_utimensat: Sn,
        _emscripten_get_now_is_monotonic: An,
        _localtime_js: On,
        _mmap_js: Pn,
        _munmap_js: Ln,
        _tzset_js: Dn,
        emscripten_date_now: Cn,
        emscripten_get_now: Ot,
        emscripten_resize_heap: Mn,
        environ_get: zn,
        environ_sizes_get: Un,
        fd_close: Wn,
        fd_fdstat_get: Qn,
        fd_read: Vn,
        fd_seek: Gn,
        fd_sync: $n,
        fd_write: Jn,
        memory: Re,
      };
      Yt(),
        (t.___wasm_call_ctors = function () {
          return (t.___wasm_call_ctors = t.asm.__wasm_call_ctors).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_status64 = function () {
          return (t._sqlite3_status64 = t.asm.sqlite3_status64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_status = function () {
          return (t._sqlite3_status = t.asm.sqlite3_status).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_db_status = function () {
          return (t._sqlite3_db_status = t.asm.sqlite3_db_status).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_msize = function () {
          return (t._sqlite3_msize = t.asm.sqlite3_msize).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_vfs_find = function () {
          return (t._sqlite3_vfs_find = t.asm.sqlite3_vfs_find).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_initialize = function () {
          return (t._sqlite3_initialize = t.asm.sqlite3_initialize).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_malloc = function () {
          return (t._sqlite3_malloc = t.asm.sqlite3_malloc).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_free = function () {
          return (t._sqlite3_free = t.asm.sqlite3_free).apply(null, arguments);
        }),
        (t._sqlite3_vfs_register = function () {
          return (t._sqlite3_vfs_register = t.asm.sqlite3_vfs_register).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_vfs_unregister = function () {
          return (t._sqlite3_vfs_unregister =
            t.asm.sqlite3_vfs_unregister).apply(null, arguments);
        }),
        (t._sqlite3_malloc64 = function () {
          return (t._sqlite3_malloc64 = t.asm.sqlite3_malloc64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_realloc = function () {
          return (t._sqlite3_realloc = t.asm.sqlite3_realloc).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_realloc64 = function () {
          return (t._sqlite3_realloc64 = t.asm.sqlite3_realloc64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_text = function () {
          return (t._sqlite3_value_text = t.asm.sqlite3_value_text).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_randomness = function () {
          return (t._sqlite3_randomness = t.asm.sqlite3_randomness).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_stricmp = function () {
          return (t._sqlite3_stricmp = t.asm.sqlite3_stricmp).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_strnicmp = function () {
          return (t._sqlite3_strnicmp = t.asm.sqlite3_strnicmp).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_uri_parameter = function () {
          return (t._sqlite3_uri_parameter = t.asm.sqlite3_uri_parameter).apply(
            null,
            arguments,
          );
        });
      var Dt = (t.___errno_location = function () {
        return (Dt = t.___errno_location = t.asm.__errno_location).apply(
          null,
          arguments,
        );
      });
      (t._sqlite3_uri_boolean = function () {
        return (t._sqlite3_uri_boolean = t.asm.sqlite3_uri_boolean).apply(
          null,
          arguments,
        );
      }),
        (t._sqlite3_serialize = function () {
          return (t._sqlite3_serialize = t.asm.sqlite3_serialize).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_prepare_v2 = function () {
          return (t._sqlite3_prepare_v2 = t.asm.sqlite3_prepare_v2).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_step = function () {
          return (t._sqlite3_step = t.asm.sqlite3_step).apply(null, arguments);
        }),
        (t._sqlite3_column_int64 = function () {
          return (t._sqlite3_column_int64 = t.asm.sqlite3_column_int64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_reset = function () {
          return (t._sqlite3_reset = t.asm.sqlite3_reset).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_exec = function () {
          return (t._sqlite3_exec = t.asm.sqlite3_exec).apply(null, arguments);
        }),
        (t._sqlite3_column_int = function () {
          return (t._sqlite3_column_int = t.asm.sqlite3_column_int).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_finalize = function () {
          return (t._sqlite3_finalize = t.asm.sqlite3_finalize).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_file_control = function () {
          return (t._sqlite3_file_control = t.asm.sqlite3_file_control).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_name = function () {
          return (t._sqlite3_column_name = t.asm.sqlite3_column_name).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_text = function () {
          return (t._sqlite3_column_text = t.asm.sqlite3_column_text).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_type = function () {
          return (t._sqlite3_column_type = t.asm.sqlite3_column_type).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_errmsg = function () {
          return (t._sqlite3_errmsg = t.asm.sqlite3_errmsg).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_deserialize = function () {
          return (t._sqlite3_deserialize = t.asm.sqlite3_deserialize).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_clear_bindings = function () {
          return (t._sqlite3_clear_bindings =
            t.asm.sqlite3_clear_bindings).apply(null, arguments);
        }),
        (t._sqlite3_value_blob = function () {
          return (t._sqlite3_value_blob = t.asm.sqlite3_value_blob).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_bytes = function () {
          return (t._sqlite3_value_bytes = t.asm.sqlite3_value_bytes).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_double = function () {
          return (t._sqlite3_value_double = t.asm.sqlite3_value_double).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_int = function () {
          return (t._sqlite3_value_int = t.asm.sqlite3_value_int).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_int64 = function () {
          return (t._sqlite3_value_int64 = t.asm.sqlite3_value_int64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_subtype = function () {
          return (t._sqlite3_value_subtype = t.asm.sqlite3_value_subtype).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_pointer = function () {
          return (t._sqlite3_value_pointer = t.asm.sqlite3_value_pointer).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_type = function () {
          return (t._sqlite3_value_type = t.asm.sqlite3_value_type).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_nochange = function () {
          return (t._sqlite3_value_nochange =
            t.asm.sqlite3_value_nochange).apply(null, arguments);
        }),
        (t._sqlite3_value_frombind = function () {
          return (t._sqlite3_value_frombind =
            t.asm.sqlite3_value_frombind).apply(null, arguments);
        }),
        (t._sqlite3_value_dup = function () {
          return (t._sqlite3_value_dup = t.asm.sqlite3_value_dup).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_free = function () {
          return (t._sqlite3_value_free = t.asm.sqlite3_value_free).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_blob = function () {
          return (t._sqlite3_result_blob = t.asm.sqlite3_result_blob).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_error_toobig = function () {
          return (t._sqlite3_result_error_toobig =
            t.asm.sqlite3_result_error_toobig).apply(null, arguments);
        }),
        (t._sqlite3_result_error_nomem = function () {
          return (t._sqlite3_result_error_nomem =
            t.asm.sqlite3_result_error_nomem).apply(null, arguments);
        }),
        (t._sqlite3_result_double = function () {
          return (t._sqlite3_result_double = t.asm.sqlite3_result_double).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_error = function () {
          return (t._sqlite3_result_error = t.asm.sqlite3_result_error).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_int = function () {
          return (t._sqlite3_result_int = t.asm.sqlite3_result_int).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_int64 = function () {
          return (t._sqlite3_result_int64 = t.asm.sqlite3_result_int64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_null = function () {
          return (t._sqlite3_result_null = t.asm.sqlite3_result_null).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_pointer = function () {
          return (t._sqlite3_result_pointer =
            t.asm.sqlite3_result_pointer).apply(null, arguments);
        }),
        (t._sqlite3_result_subtype = function () {
          return (t._sqlite3_result_subtype =
            t.asm.sqlite3_result_subtype).apply(null, arguments);
        }),
        (t._sqlite3_result_text = function () {
          return (t._sqlite3_result_text = t.asm.sqlite3_result_text).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_result_zeroblob = function () {
          return (t._sqlite3_result_zeroblob =
            t.asm.sqlite3_result_zeroblob).apply(null, arguments);
        }),
        (t._sqlite3_result_zeroblob64 = function () {
          return (t._sqlite3_result_zeroblob64 =
            t.asm.sqlite3_result_zeroblob64).apply(null, arguments);
        }),
        (t._sqlite3_result_error_code = function () {
          return (t._sqlite3_result_error_code =
            t.asm.sqlite3_result_error_code).apply(null, arguments);
        }),
        (t._sqlite3_user_data = function () {
          return (t._sqlite3_user_data = t.asm.sqlite3_user_data).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_context_db_handle = function () {
          return (t._sqlite3_context_db_handle =
            t.asm.sqlite3_context_db_handle).apply(null, arguments);
        }),
        (t._sqlite3_vtab_nochange = function () {
          return (t._sqlite3_vtab_nochange = t.asm.sqlite3_vtab_nochange).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_vtab_in_first = function () {
          return (t._sqlite3_vtab_in_first = t.asm.sqlite3_vtab_in_first).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_vtab_in_next = function () {
          return (t._sqlite3_vtab_in_next = t.asm.sqlite3_vtab_in_next).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_aggregate_context = function () {
          return (t._sqlite3_aggregate_context =
            t.asm.sqlite3_aggregate_context).apply(null, arguments);
        }),
        (t._sqlite3_get_auxdata = function () {
          return (t._sqlite3_get_auxdata = t.asm.sqlite3_get_auxdata).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_set_auxdata = function () {
          return (t._sqlite3_set_auxdata = t.asm.sqlite3_set_auxdata).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_count = function () {
          return (t._sqlite3_column_count = t.asm.sqlite3_column_count).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_data_count = function () {
          return (t._sqlite3_data_count = t.asm.sqlite3_data_count).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_blob = function () {
          return (t._sqlite3_column_blob = t.asm.sqlite3_column_blob).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_bytes = function () {
          return (t._sqlite3_column_bytes = t.asm.sqlite3_column_bytes).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_double = function () {
          return (t._sqlite3_column_double = t.asm.sqlite3_column_double).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_column_value = function () {
          return (t._sqlite3_column_value = t.asm.sqlite3_column_value).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_blob = function () {
          return (t._sqlite3_bind_blob = t.asm.sqlite3_bind_blob).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_double = function () {
          return (t._sqlite3_bind_double = t.asm.sqlite3_bind_double).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_int = function () {
          return (t._sqlite3_bind_int = t.asm.sqlite3_bind_int).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_int64 = function () {
          return (t._sqlite3_bind_int64 = t.asm.sqlite3_bind_int64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_null = function () {
          return (t._sqlite3_bind_null = t.asm.sqlite3_bind_null).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_pointer = function () {
          return (t._sqlite3_bind_pointer = t.asm.sqlite3_bind_pointer).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_text = function () {
          return (t._sqlite3_bind_text = t.asm.sqlite3_bind_text).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_bind_parameter_count = function () {
          return (t._sqlite3_bind_parameter_count =
            t.asm.sqlite3_bind_parameter_count).apply(null, arguments);
        }),
        (t._sqlite3_bind_parameter_index = function () {
          return (t._sqlite3_bind_parameter_index =
            t.asm.sqlite3_bind_parameter_index).apply(null, arguments);
        }),
        (t._sqlite3_db_handle = function () {
          return (t._sqlite3_db_handle = t.asm.sqlite3_db_handle).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_stmt_readonly = function () {
          return (t._sqlite3_stmt_readonly = t.asm.sqlite3_stmt_readonly).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_stmt_isexplain = function () {
          return (t._sqlite3_stmt_isexplain =
            t.asm.sqlite3_stmt_isexplain).apply(null, arguments);
        }),
        (t._sqlite3_stmt_status = function () {
          return (t._sqlite3_stmt_status = t.asm.sqlite3_stmt_status).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_sql = function () {
          return (t._sqlite3_sql = t.asm.sqlite3_sql).apply(null, arguments);
        }),
        (t._sqlite3_expanded_sql = function () {
          return (t._sqlite3_expanded_sql = t.asm.sqlite3_expanded_sql).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_preupdate_old = function () {
          return (t._sqlite3_preupdate_old = t.asm.sqlite3_preupdate_old).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_preupdate_count = function () {
          return (t._sqlite3_preupdate_count =
            t.asm.sqlite3_preupdate_count).apply(null, arguments);
        }),
        (t._sqlite3_preupdate_depth = function () {
          return (t._sqlite3_preupdate_depth =
            t.asm.sqlite3_preupdate_depth).apply(null, arguments);
        }),
        (t._sqlite3_preupdate_blobwrite = function () {
          return (t._sqlite3_preupdate_blobwrite =
            t.asm.sqlite3_preupdate_blobwrite).apply(null, arguments);
        }),
        (t._sqlite3_preupdate_new = function () {
          return (t._sqlite3_preupdate_new = t.asm.sqlite3_preupdate_new).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_value_numeric_type = function () {
          return (t._sqlite3_value_numeric_type =
            t.asm.sqlite3_value_numeric_type).apply(null, arguments);
        }),
        (t._sqlite3_set_authorizer = function () {
          return (t._sqlite3_set_authorizer =
            t.asm.sqlite3_set_authorizer).apply(null, arguments);
        }),
        (t._sqlite3_strglob = function () {
          return (t._sqlite3_strglob = t.asm.sqlite3_strglob).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_strlike = function () {
          return (t._sqlite3_strlike = t.asm.sqlite3_strlike).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_auto_extension = function () {
          return (t._sqlite3_auto_extension =
            t.asm.sqlite3_auto_extension).apply(null, arguments);
        }),
        (t._sqlite3_cancel_auto_extension = function () {
          return (t._sqlite3_cancel_auto_extension =
            t.asm.sqlite3_cancel_auto_extension).apply(null, arguments);
        }),
        (t._sqlite3_reset_auto_extension = function () {
          return (t._sqlite3_reset_auto_extension =
            t.asm.sqlite3_reset_auto_extension).apply(null, arguments);
        }),
        (t._sqlite3_prepare_v3 = function () {
          return (t._sqlite3_prepare_v3 = t.asm.sqlite3_prepare_v3).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_create_module = function () {
          return (t._sqlite3_create_module = t.asm.sqlite3_create_module).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_create_module_v2 = function () {
          return (t._sqlite3_create_module_v2 =
            t.asm.sqlite3_create_module_v2).apply(null, arguments);
        }),
        (t._sqlite3_drop_modules = function () {
          return (t._sqlite3_drop_modules = t.asm.sqlite3_drop_modules).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_declare_vtab = function () {
          return (t._sqlite3_declare_vtab = t.asm.sqlite3_declare_vtab).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_vtab_on_conflict = function () {
          return (t._sqlite3_vtab_on_conflict =
            t.asm.sqlite3_vtab_on_conflict).apply(null, arguments);
        }),
        (t._sqlite3_vtab_collation = function () {
          return (t._sqlite3_vtab_collation =
            t.asm.sqlite3_vtab_collation).apply(null, arguments);
        }),
        (t._sqlite3_vtab_in = function () {
          return (t._sqlite3_vtab_in = t.asm.sqlite3_vtab_in).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_vtab_rhs_value = function () {
          return (t._sqlite3_vtab_rhs_value =
            t.asm.sqlite3_vtab_rhs_value).apply(null, arguments);
        }),
        (t._sqlite3_vtab_distinct = function () {
          return (t._sqlite3_vtab_distinct = t.asm.sqlite3_vtab_distinct).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_keyword_name = function () {
          return (t._sqlite3_keyword_name = t.asm.sqlite3_keyword_name).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_keyword_count = function () {
          return (t._sqlite3_keyword_count = t.asm.sqlite3_keyword_count).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_keyword_check = function () {
          return (t._sqlite3_keyword_check = t.asm.sqlite3_keyword_check).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_complete = function () {
          return (t._sqlite3_complete = t.asm.sqlite3_complete).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_libversion = function () {
          return (t._sqlite3_libversion = t.asm.sqlite3_libversion).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_libversion_number = function () {
          return (t._sqlite3_libversion_number =
            t.asm.sqlite3_libversion_number).apply(null, arguments);
        }),
        (t._sqlite3_shutdown = function () {
          return (t._sqlite3_shutdown = t.asm.sqlite3_shutdown).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_last_insert_rowid = function () {
          return (t._sqlite3_last_insert_rowid =
            t.asm.sqlite3_last_insert_rowid).apply(null, arguments);
        }),
        (t._sqlite3_set_last_insert_rowid = function () {
          return (t._sqlite3_set_last_insert_rowid =
            t.asm.sqlite3_set_last_insert_rowid).apply(null, arguments);
        }),
        (t._sqlite3_changes64 = function () {
          return (t._sqlite3_changes64 = t.asm.sqlite3_changes64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_changes = function () {
          return (t._sqlite3_changes = t.asm.sqlite3_changes).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_total_changes64 = function () {
          return (t._sqlite3_total_changes64 =
            t.asm.sqlite3_total_changes64).apply(null, arguments);
        }),
        (t._sqlite3_total_changes = function () {
          return (t._sqlite3_total_changes = t.asm.sqlite3_total_changes).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_txn_state = function () {
          return (t._sqlite3_txn_state = t.asm.sqlite3_txn_state).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_close_v2 = function () {
          return (t._sqlite3_close_v2 = t.asm.sqlite3_close_v2).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_busy_handler = function () {
          return (t._sqlite3_busy_handler = t.asm.sqlite3_busy_handler).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_progress_handler = function () {
          return (t._sqlite3_progress_handler =
            t.asm.sqlite3_progress_handler).apply(null, arguments);
        }),
        (t._sqlite3_busy_timeout = function () {
          return (t._sqlite3_busy_timeout = t.asm.sqlite3_busy_timeout).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_create_function = function () {
          return (t._sqlite3_create_function =
            t.asm.sqlite3_create_function).apply(null, arguments);
        }),
        (t._sqlite3_create_function_v2 = function () {
          return (t._sqlite3_create_function_v2 =
            t.asm.sqlite3_create_function_v2).apply(null, arguments);
        }),
        (t._sqlite3_create_window_function = function () {
          return (t._sqlite3_create_window_function =
            t.asm.sqlite3_create_window_function).apply(null, arguments);
        }),
        (t._sqlite3_overload_function = function () {
          return (t._sqlite3_overload_function =
            t.asm.sqlite3_overload_function).apply(null, arguments);
        }),
        (t._sqlite3_trace_v2 = function () {
          return (t._sqlite3_trace_v2 = t.asm.sqlite3_trace_v2).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_commit_hook = function () {
          return (t._sqlite3_commit_hook = t.asm.sqlite3_commit_hook).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_update_hook = function () {
          return (t._sqlite3_update_hook = t.asm.sqlite3_update_hook).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_rollback_hook = function () {
          return (t._sqlite3_rollback_hook = t.asm.sqlite3_rollback_hook).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_preupdate_hook = function () {
          return (t._sqlite3_preupdate_hook =
            t.asm.sqlite3_preupdate_hook).apply(null, arguments);
        }),
        (t._sqlite3_error_offset = function () {
          return (t._sqlite3_error_offset = t.asm.sqlite3_error_offset).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_errcode = function () {
          return (t._sqlite3_errcode = t.asm.sqlite3_errcode).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_extended_errcode = function () {
          return (t._sqlite3_extended_errcode =
            t.asm.sqlite3_extended_errcode).apply(null, arguments);
        }),
        (t._sqlite3_errstr = function () {
          return (t._sqlite3_errstr = t.asm.sqlite3_errstr).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_limit = function () {
          return (t._sqlite3_limit = t.asm.sqlite3_limit).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_open = function () {
          return (t._sqlite3_open = t.asm.sqlite3_open).apply(null, arguments);
        }),
        (t._sqlite3_open_v2 = function () {
          return (t._sqlite3_open_v2 = t.asm.sqlite3_open_v2).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_create_collation = function () {
          return (t._sqlite3_create_collation =
            t.asm.sqlite3_create_collation).apply(null, arguments);
        }),
        (t._sqlite3_create_collation_v2 = function () {
          return (t._sqlite3_create_collation_v2 =
            t.asm.sqlite3_create_collation_v2).apply(null, arguments);
        }),
        (t._sqlite3_collation_needed = function () {
          return (t._sqlite3_collation_needed =
            t.asm.sqlite3_collation_needed).apply(null, arguments);
        }),
        (t._sqlite3_get_autocommit = function () {
          return (t._sqlite3_get_autocommit =
            t.asm.sqlite3_get_autocommit).apply(null, arguments);
        }),
        (t._sqlite3_table_column_metadata = function () {
          return (t._sqlite3_table_column_metadata =
            t.asm.sqlite3_table_column_metadata).apply(null, arguments);
        }),
        (t._sqlite3_extended_result_codes = function () {
          return (t._sqlite3_extended_result_codes =
            t.asm.sqlite3_extended_result_codes).apply(null, arguments);
        }),
        (t._sqlite3_uri_key = function () {
          return (t._sqlite3_uri_key = t.asm.sqlite3_uri_key).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_uri_int64 = function () {
          return (t._sqlite3_uri_int64 = t.asm.sqlite3_uri_int64).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_db_name = function () {
          return (t._sqlite3_db_name = t.asm.sqlite3_db_name).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_db_filename = function () {
          return (t._sqlite3_db_filename = t.asm.sqlite3_db_filename).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_compileoption_used = function () {
          return (t._sqlite3_compileoption_used =
            t.asm.sqlite3_compileoption_used).apply(null, arguments);
        }),
        (t._sqlite3_compileoption_get = function () {
          return (t._sqlite3_compileoption_get =
            t.asm.sqlite3_compileoption_get).apply(null, arguments);
        }),
        (t._sqlite3session_diff = function () {
          return (t._sqlite3session_diff = t.asm.sqlite3session_diff).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3session_attach = function () {
          return (t._sqlite3session_attach = t.asm.sqlite3session_attach).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3session_create = function () {
          return (t._sqlite3session_create = t.asm.sqlite3session_create).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3session_delete = function () {
          return (t._sqlite3session_delete = t.asm.sqlite3session_delete).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3session_table_filter = function () {
          return (t._sqlite3session_table_filter =
            t.asm.sqlite3session_table_filter).apply(null, arguments);
        }),
        (t._sqlite3session_changeset = function () {
          return (t._sqlite3session_changeset =
            t.asm.sqlite3session_changeset).apply(null, arguments);
        }),
        (t._sqlite3session_changeset_strm = function () {
          return (t._sqlite3session_changeset_strm =
            t.asm.sqlite3session_changeset_strm).apply(null, arguments);
        }),
        (t._sqlite3session_patchset_strm = function () {
          return (t._sqlite3session_patchset_strm =
            t.asm.sqlite3session_patchset_strm).apply(null, arguments);
        }),
        (t._sqlite3session_patchset = function () {
          return (t._sqlite3session_patchset =
            t.asm.sqlite3session_patchset).apply(null, arguments);
        }),
        (t._sqlite3session_enable = function () {
          return (t._sqlite3session_enable = t.asm.sqlite3session_enable).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3session_indirect = function () {
          return (t._sqlite3session_indirect =
            t.asm.sqlite3session_indirect).apply(null, arguments);
        }),
        (t._sqlite3session_isempty = function () {
          return (t._sqlite3session_isempty =
            t.asm.sqlite3session_isempty).apply(null, arguments);
        }),
        (t._sqlite3session_memory_used = function () {
          return (t._sqlite3session_memory_used =
            t.asm.sqlite3session_memory_used).apply(null, arguments);
        }),
        (t._sqlite3session_object_config = function () {
          return (t._sqlite3session_object_config =
            t.asm.sqlite3session_object_config).apply(null, arguments);
        }),
        (t._sqlite3session_changeset_size = function () {
          return (t._sqlite3session_changeset_size =
            t.asm.sqlite3session_changeset_size).apply(null, arguments);
        }),
        (t._sqlite3changeset_start = function () {
          return (t._sqlite3changeset_start =
            t.asm.sqlite3changeset_start).apply(null, arguments);
        }),
        (t._sqlite3changeset_start_v2 = function () {
          return (t._sqlite3changeset_start_v2 =
            t.asm.sqlite3changeset_start_v2).apply(null, arguments);
        }),
        (t._sqlite3changeset_start_strm = function () {
          return (t._sqlite3changeset_start_strm =
            t.asm.sqlite3changeset_start_strm).apply(null, arguments);
        }),
        (t._sqlite3changeset_start_v2_strm = function () {
          return (t._sqlite3changeset_start_v2_strm =
            t.asm.sqlite3changeset_start_v2_strm).apply(null, arguments);
        }),
        (t._sqlite3changeset_next = function () {
          return (t._sqlite3changeset_next = t.asm.sqlite3changeset_next).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3changeset_op = function () {
          return (t._sqlite3changeset_op = t.asm.sqlite3changeset_op).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3changeset_pk = function () {
          return (t._sqlite3changeset_pk = t.asm.sqlite3changeset_pk).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3changeset_old = function () {
          return (t._sqlite3changeset_old = t.asm.sqlite3changeset_old).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3changeset_new = function () {
          return (t._sqlite3changeset_new = t.asm.sqlite3changeset_new).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3changeset_conflict = function () {
          return (t._sqlite3changeset_conflict =
            t.asm.sqlite3changeset_conflict).apply(null, arguments);
        }),
        (t._sqlite3changeset_fk_conflicts = function () {
          return (t._sqlite3changeset_fk_conflicts =
            t.asm.sqlite3changeset_fk_conflicts).apply(null, arguments);
        }),
        (t._sqlite3changeset_finalize = function () {
          return (t._sqlite3changeset_finalize =
            t.asm.sqlite3changeset_finalize).apply(null, arguments);
        }),
        (t._sqlite3changeset_invert = function () {
          return (t._sqlite3changeset_invert =
            t.asm.sqlite3changeset_invert).apply(null, arguments);
        }),
        (t._sqlite3changeset_invert_strm = function () {
          return (t._sqlite3changeset_invert_strm =
            t.asm.sqlite3changeset_invert_strm).apply(null, arguments);
        }),
        (t._sqlite3changeset_apply_v2 = function () {
          return (t._sqlite3changeset_apply_v2 =
            t.asm.sqlite3changeset_apply_v2).apply(null, arguments);
        }),
        (t._sqlite3changeset_apply = function () {
          return (t._sqlite3changeset_apply =
            t.asm.sqlite3changeset_apply).apply(null, arguments);
        }),
        (t._sqlite3changeset_apply_v2_strm = function () {
          return (t._sqlite3changeset_apply_v2_strm =
            t.asm.sqlite3changeset_apply_v2_strm).apply(null, arguments);
        }),
        (t._sqlite3changeset_apply_strm = function () {
          return (t._sqlite3changeset_apply_strm =
            t.asm.sqlite3changeset_apply_strm).apply(null, arguments);
        }),
        (t._sqlite3changegroup_new = function () {
          return (t._sqlite3changegroup_new =
            t.asm.sqlite3changegroup_new).apply(null, arguments);
        }),
        (t._sqlite3changegroup_add = function () {
          return (t._sqlite3changegroup_add =
            t.asm.sqlite3changegroup_add).apply(null, arguments);
        }),
        (t._sqlite3changegroup_output = function () {
          return (t._sqlite3changegroup_output =
            t.asm.sqlite3changegroup_output).apply(null, arguments);
        }),
        (t._sqlite3changegroup_add_strm = function () {
          return (t._sqlite3changegroup_add_strm =
            t.asm.sqlite3changegroup_add_strm).apply(null, arguments);
        }),
        (t._sqlite3changegroup_output_strm = function () {
          return (t._sqlite3changegroup_output_strm =
            t.asm.sqlite3changegroup_output_strm).apply(null, arguments);
        }),
        (t._sqlite3changegroup_delete = function () {
          return (t._sqlite3changegroup_delete =
            t.asm.sqlite3changegroup_delete).apply(null, arguments);
        }),
        (t._sqlite3changeset_concat = function () {
          return (t._sqlite3changeset_concat =
            t.asm.sqlite3changeset_concat).apply(null, arguments);
        }),
        (t._sqlite3changeset_concat_strm = function () {
          return (t._sqlite3changeset_concat_strm =
            t.asm.sqlite3changeset_concat_strm).apply(null, arguments);
        }),
        (t._sqlite3session_config = function () {
          return (t._sqlite3session_config = t.asm.sqlite3session_config).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3_sourceid = function () {
          return (t._sqlite3_sourceid = t.asm.sqlite3_sourceid).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3__wasm_pstack_ptr = function () {
          return (t._sqlite3__wasm_pstack_ptr =
            t.asm.sqlite3__wasm_pstack_ptr).apply(null, arguments);
        }),
        (t._sqlite3__wasm_pstack_restore = function () {
          return (t._sqlite3__wasm_pstack_restore =
            t.asm.sqlite3__wasm_pstack_restore).apply(null, arguments);
        }),
        (t._sqlite3__wasm_pstack_alloc = function () {
          return (t._sqlite3__wasm_pstack_alloc =
            t.asm.sqlite3__wasm_pstack_alloc).apply(null, arguments);
        }),
        (t._sqlite3__wasm_pstack_remaining = function () {
          return (t._sqlite3__wasm_pstack_remaining =
            t.asm.sqlite3__wasm_pstack_remaining).apply(null, arguments);
        }),
        (t._sqlite3__wasm_pstack_quota = function () {
          return (t._sqlite3__wasm_pstack_quota =
            t.asm.sqlite3__wasm_pstack_quota).apply(null, arguments);
        }),
        (t._sqlite3__wasm_db_error = function () {
          return (t._sqlite3__wasm_db_error =
            t.asm.sqlite3__wasm_db_error).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_struct = function () {
          return (t._sqlite3__wasm_test_struct =
            t.asm.sqlite3__wasm_test_struct).apply(null, arguments);
        }),
        (t._sqlite3__wasm_enum_json = function () {
          return (t._sqlite3__wasm_enum_json =
            t.asm.sqlite3__wasm_enum_json).apply(null, arguments);
        }),
        (t._sqlite3__wasm_vfs_unlink = function () {
          return (t._sqlite3__wasm_vfs_unlink =
            t.asm.sqlite3__wasm_vfs_unlink).apply(null, arguments);
        }),
        (t._sqlite3__wasm_db_vfs = function () {
          return (t._sqlite3__wasm_db_vfs = t.asm.sqlite3__wasm_db_vfs).apply(
            null,
            arguments,
          );
        }),
        (t._sqlite3__wasm_db_reset = function () {
          return (t._sqlite3__wasm_db_reset =
            t.asm.sqlite3__wasm_db_reset).apply(null, arguments);
        }),
        (t._sqlite3__wasm_db_export_chunked = function () {
          return (t._sqlite3__wasm_db_export_chunked =
            t.asm.sqlite3__wasm_db_export_chunked).apply(null, arguments);
        }),
        (t._sqlite3__wasm_db_serialize = function () {
          return (t._sqlite3__wasm_db_serialize =
            t.asm.sqlite3__wasm_db_serialize).apply(null, arguments);
        }),
        (t._sqlite3__wasm_vfs_create_file = function () {
          return (t._sqlite3__wasm_vfs_create_file =
            t.asm.sqlite3__wasm_vfs_create_file).apply(null, arguments);
        }),
        (t._sqlite3__wasm_posix_create_file = function () {
          return (t._sqlite3__wasm_posix_create_file =
            t.asm.sqlite3__wasm_posix_create_file).apply(null, arguments);
        }),
        (t._sqlite3__wasm_kvvfsMakeKeyOnPstack = function () {
          return (t._sqlite3__wasm_kvvfsMakeKeyOnPstack =
            t.asm.sqlite3__wasm_kvvfsMakeKeyOnPstack).apply(null, arguments);
        }),
        (t._sqlite3__wasm_kvvfs_methods = function () {
          return (t._sqlite3__wasm_kvvfs_methods =
            t.asm.sqlite3__wasm_kvvfs_methods).apply(null, arguments);
        }),
        (t._sqlite3__wasm_vtab_config = function () {
          return (t._sqlite3__wasm_vtab_config =
            t.asm.sqlite3__wasm_vtab_config).apply(null, arguments);
        }),
        (t._sqlite3__wasm_db_config_ip = function () {
          return (t._sqlite3__wasm_db_config_ip =
            t.asm.sqlite3__wasm_db_config_ip).apply(null, arguments);
        }),
        (t._sqlite3__wasm_db_config_pii = function () {
          return (t._sqlite3__wasm_db_config_pii =
            t.asm.sqlite3__wasm_db_config_pii).apply(null, arguments);
        }),
        (t._sqlite3__wasm_db_config_s = function () {
          return (t._sqlite3__wasm_db_config_s =
            t.asm.sqlite3__wasm_db_config_s).apply(null, arguments);
        }),
        (t._sqlite3__wasm_config_i = function () {
          return (t._sqlite3__wasm_config_i =
            t.asm.sqlite3__wasm_config_i).apply(null, arguments);
        }),
        (t._sqlite3__wasm_config_ii = function () {
          return (t._sqlite3__wasm_config_ii =
            t.asm.sqlite3__wasm_config_ii).apply(null, arguments);
        }),
        (t._sqlite3__wasm_config_j = function () {
          return (t._sqlite3__wasm_config_j =
            t.asm.sqlite3__wasm_config_j).apply(null, arguments);
        }),
        (t._sqlite3__wasm_qfmt_token = function () {
          return (t._sqlite3__wasm_qfmt_token =
            t.asm.sqlite3__wasm_qfmt_token).apply(null, arguments);
        }),
        (t._sqlite3__wasm_init_wasmfs = function () {
          return (t._sqlite3__wasm_init_wasmfs =
            t.asm.sqlite3__wasm_init_wasmfs).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_intptr = function () {
          return (t._sqlite3__wasm_test_intptr =
            t.asm.sqlite3__wasm_test_intptr).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_voidptr = function () {
          return (t._sqlite3__wasm_test_voidptr =
            t.asm.sqlite3__wasm_test_voidptr).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_int64_max = function () {
          return (t._sqlite3__wasm_test_int64_max =
            t.asm.sqlite3__wasm_test_int64_max).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_int64_min = function () {
          return (t._sqlite3__wasm_test_int64_min =
            t.asm.sqlite3__wasm_test_int64_min).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_int64_times2 = function () {
          return (t._sqlite3__wasm_test_int64_times2 =
            t.asm.sqlite3__wasm_test_int64_times2).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_int64_minmax = function () {
          return (t._sqlite3__wasm_test_int64_minmax =
            t.asm.sqlite3__wasm_test_int64_minmax).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_int64ptr = function () {
          return (t._sqlite3__wasm_test_int64ptr =
            t.asm.sqlite3__wasm_test_int64ptr).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_stack_overflow = function () {
          return (t._sqlite3__wasm_test_stack_overflow =
            t.asm.sqlite3__wasm_test_stack_overflow).apply(null, arguments);
        }),
        (t._sqlite3__wasm_test_str_hello = function () {
          return (t._sqlite3__wasm_test_str_hello =
            t.asm.sqlite3__wasm_test_str_hello).apply(null, arguments);
        }),
        (t._sqlite3__wasm_SQLTester_strglob = function () {
          return (t._sqlite3__wasm_SQLTester_strglob =
            t.asm.sqlite3__wasm_SQLTester_strglob).apply(null, arguments);
        });
      var Ct = (t._malloc = function () {
        return (Ct = t._malloc = t.asm.malloc).apply(null, arguments);
      });
      (t._free = function () {
        return (t._free = t.asm.free).apply(null, arguments);
      }),
        (t._realloc = function () {
          return (t._realloc = t.asm.realloc).apply(null, arguments);
        });
      var Rt = (t._emscripten_builtin_memalign = function () {
        return (Rt = t._emscripten_builtin_memalign =
          t.asm.emscripten_builtin_memalign).apply(null, arguments);
      });
      (t.stackSave = function () {
        return (t.stackSave = t.asm.stackSave).apply(null, arguments);
      }),
        (t.stackRestore = function () {
          return (t.stackRestore = t.asm.stackRestore).apply(null, arguments);
        }),
        (t.stackAlloc = function () {
          return (t.stackAlloc = t.asm.stackAlloc).apply(null, arguments);
        }),
        (t.wasmMemory = Re);
      var nt;
      $e = function n() {
        nt || Nt(), nt || ($e = n);
      };
      function Nt(n) {
        if (je > 0 || (Qt(), je > 0)) return;
        function e() {
          nt ||
            ((nt = !0),
            (t.calledRun = !0),
            !gt &&
              (Ht(),
              Ae(t),
              t.onRuntimeInitialized && t.onRuntimeInitialized(),
              Vt()));
        }
        t.setStatus
          ? (t.setStatus('Running...'),
            setTimeout(function () {
              setTimeout(function () {
                t.setStatus('');
              }, 1),
                e();
            }, 1))
          : e();
      }
      if (t.preInit)
        for (
          typeof t.preInit == 'function' && (t.preInit = [t.preInit]);
          t.preInit.length > 0;
        )
          t.preInit.pop()();
      return (
        Nt(),
        t.postRun || (t.postRun = []),
        t.postRun.push(function (n) {
          if (
            ((globalThis.sqlite3ApiBootstrap = function e(
              s = globalThis.sqlite3ApiConfig || e.defaultConfig,
            ) {
              if (e.sqlite3)
                return (
                  (e.sqlite3.config || console).warn(
                    'sqlite3ApiBootstrap() called multiple times.',
                    'Config and external initializers are ignored on calls after the first.',
                  ),
                  e.sqlite3
                );
              const r = Object.assign(
                Object.create(null),
                {
                  exports: void 0,
                  memory: void 0,
                  bigIntEnabled:
                    typeof n < 'u' && n.HEAPU64
                      ? !0
                      : !!globalThis.BigInt64Array,
                  debug: console.debug.bind(console),
                  warn: console.warn.bind(console),
                  error: console.error.bind(console),
                  log: console.log.bind(console),
                  wasmfsOpfsDir: '/opfs',
                  useStdAlloc: !1,
                },
                s || {},
              );
              Object.assign(
                r,
                {
                  allocExportName: r.useStdAlloc ? 'malloc' : 'sqlite3_malloc',
                  deallocExportName: r.useStdAlloc ? 'free' : 'sqlite3_free',
                  reallocExportName: r.useStdAlloc
                    ? 'realloc'
                    : 'sqlite3_realloc',
                },
                r,
              ),
                ['exports', 'memory', 'wasmfsOpfsDir'].forEach((a) => {
                  typeof r[a] == 'function' && (r[a] = r[a]());
                }),
                delete globalThis.sqlite3ApiConfig,
                delete e.defaultConfig;
              const i = Object.create(null),
                l = Object.create(null),
                p = (a) =>
                  (i.sqlite3_js_rc_str && i.sqlite3_js_rc_str(a)) ||
                  'Unknown result code #' + a,
                g = (a) => typeof a == 'number' && a === (a | 0);
              class P extends Error {
                constructor(...u) {
                  let y;
                  if (u.length)
                    if (g(u[0]))
                      if (((y = u[0]), u.length === 1)) super(p(u[0]));
                      else {
                        const q = p(y);
                        typeof u[1] == 'object'
                          ? super(q, u[1])
                          : ((u[0] = q + ':'), super(u.join(' ')));
                      }
                    else
                      u.length === 2 && typeof u[1] == 'object'
                        ? super(...u)
                        : super(u.join(' '));
                  (this.resultCode = y || i.SQLITE_ERROR),
                    (this.name = 'SQLite3Error');
                }
              }
              P.toss = (...a) => {
                throw new P(...a);
              };
              const L = P.toss;
              r.wasmfsOpfsDir &&
                !/^\/[^/]+$/.test(r.wasmfsOpfsDir) &&
                L(
                  "config.wasmfsOpfsDir must be falsy or in the form '/dir-name'.",
                );
              const j = (a) =>
                  typeof a != 'bigint' &&
                  a === (a | 0) &&
                  a <= 2147483647 &&
                  a >= -2147483648,
                H = function a(u) {
                  return (
                    a._max ||
                      ((a._max = BigInt('0x7fffffffffffffff')),
                      (a._min = ~a._max)),
                    u >= a._min && u <= a._max
                  );
                },
                I = (a) => a >= -0x7fffffffn - 1n && a <= 0x7fffffffn,
                A = function a(u) {
                  return (
                    a._min ||
                      ((a._min = Number.MIN_SAFE_INTEGER),
                      (a._max = Number.MAX_SAFE_INTEGER)),
                    u >= a._min && u <= a._max
                  );
                },
                R = (a) =>
                  a && a.constructor && j(a.constructor.BYTES_PER_ELEMENT)
                    ? a
                    : !1,
                b =
                  typeof SharedArrayBuffer > 'u'
                    ? function () {}
                    : SharedArrayBuffer,
                E = (a) => a.buffer instanceof b,
                T = (a, u, y) => (E(a) ? a.slice(u, y) : a.subarray(u, y)),
                F = (a) =>
                  a &&
                  (a instanceof Uint8Array ||
                    a instanceof Int8Array ||
                    a instanceof ArrayBuffer),
                C = (a) =>
                  a &&
                  (a instanceof Uint8Array ||
                    a instanceof Int8Array ||
                    a instanceof ArrayBuffer),
                x = (a) =>
                  F(a) || L('Value is not of a supported TypedArray type.'),
                N = new TextDecoder('utf-8'),
                Q = function (a, u, y) {
                  return N.decode(T(a, u, y));
                },
                c = function (a) {
                  return C(a)
                    ? Q(a instanceof ArrayBuffer ? new Uint8Array(a) : a)
                    : Array.isArray(a)
                      ? a.join('')
                      : (l.isPtr(a) && (a = l.cstrToJs(a)), a);
                };
              class m extends Error {
                constructor(...u) {
                  u.length === 2 && typeof u[1] == 'object'
                    ? super(...u)
                    : u.length
                      ? super(u.join(' '))
                      : super('Allocation failed.'),
                    (this.resultCode = i.SQLITE_NOMEM),
                    (this.name = 'WasmAllocError');
                }
              }
              (m.toss = (...a) => {
                throw new m(...a);
              }),
                Object.assign(i, {
                  sqlite3_bind_blob: void 0,
                  sqlite3_bind_text: void 0,
                  sqlite3_create_function_v2: (
                    a,
                    u,
                    y,
                    q,
                    B,
                    K,
                    Z,
                    re,
                    ee,
                  ) => {},
                  sqlite3_create_function: (a, u, y, q, B, K, Z, re) => {},
                  sqlite3_create_window_function: (
                    a,
                    u,
                    y,
                    q,
                    B,
                    K,
                    Z,
                    re,
                    ee,
                    te,
                  ) => {},
                  sqlite3_prepare_v3: (a, u, y, q, B, K) => {},
                  sqlite3_prepare_v2: (a, u, y, q, B) => {},
                  sqlite3_exec: (a, u, y, q, B) => {},
                  sqlite3_randomness: (a, u) => {},
                });
              const w = {
                affirmBindableTypedArray: x,
                flexibleString: c,
                bigIntFits32: I,
                bigIntFits64: H,
                bigIntFitsDouble: A,
                isBindableTypedArray: F,
                isInt32: j,
                isSQLableTypedArray: C,
                isTypedArray: R,
                typedArrayToString: Q,
                isUIThread: () =>
                  globalThis.window === globalThis && !!globalThis.document,
                isSharedTypedArray: E,
                toss: function (...a) {
                  throw new Error(a.join(' '));
                },
                toss3: L,
                typedArrayPart: T,
                affirmDbHeader: function (a) {
                  a instanceof ArrayBuffer && (a = new Uint8Array(a));
                  const u = 'SQLite format 3';
                  u.length > a.byteLength &&
                    L('Input does not contain an SQLite3 database header.');
                  for (let y = 0; y < u.length; ++y)
                    u.charCodeAt(y) !== a[y] &&
                      L('Input does not contain an SQLite3 database header.');
                },
                affirmIsDb: function (a) {
                  a instanceof ArrayBuffer && (a = new Uint8Array(a));
                  const u = a.byteLength;
                  (u < 512 || u % 512 !== 0) &&
                    L('Byte array size', u, 'is invalid for an SQLite3 db.'),
                    w.affirmDbHeader(a);
                },
              };
              Object.assign(l, {
                ptrSizeof: r.wasmPtrSizeof || 4,
                ptrIR: r.wasmPtrIR || 'i32',
                bigIntEnabled: !!r.bigIntEnabled,
                exports:
                  r.exports ||
                  L('Missing API config.exports (WASM module exports).'),
                memory:
                  r.memory ||
                  r.exports.memory ||
                  L(
                    'API config object requires a WebAssembly.Memory object',
                    'in either config.exports.memory (exported)',
                    'or config.memory (imported).',
                  ),
                alloc: void 0,
                realloc: void 0,
                dealloc: void 0,
              }),
                (l.allocFromTypedArray = function (a) {
                  a instanceof ArrayBuffer && (a = new Uint8Array(a)), x(a);
                  const u = l.alloc(a.byteLength || 1);
                  return (
                    l.heapForSize(a.constructor).set(a.byteLength ? a : [0], u),
                    u
                  );
                });
              {
                const a = r.allocExportName,
                  u = r.deallocExportName,
                  y = r.reallocExportName;
                for (const q of [a, u, y])
                  l.exports[q] instanceof Function ||
                    L('Missing required exports[', q, '] function.');
                (l.alloc = function q(B) {
                  return (
                    q.impl(B) || m.toss('Failed to allocate', B, ' bytes.')
                  );
                }),
                  (l.alloc.impl = l.exports[a]),
                  (l.realloc = function q(B, K) {
                    const Z = q.impl(B, K);
                    return K
                      ? Z || m.toss('Failed to reallocate', K, ' bytes.')
                      : 0;
                  }),
                  (l.realloc.impl = l.exports[y]),
                  (l.dealloc = l.exports[u]);
              }
              (l.compileOptionUsed = function a(u) {
                if (arguments.length) {
                  if (Array.isArray(u)) {
                    const y = {};
                    return (
                      u.forEach((q) => {
                        y[q] = i.sqlite3_compileoption_used(q);
                      }),
                      y
                    );
                  } else if (typeof u == 'object')
                    return (
                      Object.keys(u).forEach((y) => {
                        u[y] = i.sqlite3_compileoption_used(y);
                      }),
                      u
                    );
                } else {
                  if (a._result) return a._result;
                  a._opt ||
                    ((a._rx = /^([^=]+)=(.+)/),
                    (a._rxInt = /^-?\d+$/),
                    (a._opt = function (Z, re) {
                      const ee = a._rx.exec(Z);
                      (re[0] = ee ? ee[1] : Z),
                        (re[1] = ee
                          ? a._rxInt.test(ee[2])
                            ? +ee[2]
                            : ee[2]
                          : !0);
                    }));
                  const y = {},
                    q = [0, 0];
                  let B = 0,
                    K;
                  for (; (K = i.sqlite3_compileoption_get(B++)); )
                    a._opt(K, q), (y[q[0]] = q[1]);
                  return (a._result = y);
                }
                return typeof u == 'string'
                  ? !!i.sqlite3_compileoption_used(u)
                  : !1;
              }),
                (l.pstack = Object.assign(Object.create(null), {
                  restore: l.exports.sqlite3__wasm_pstack_restore,
                  alloc: function (a) {
                    return (
                      typeof a == 'string' &&
                        !(a = l.sizeofIR(a)) &&
                        m.toss(
                          'Invalid value for pstack.alloc(',
                          arguments[0],
                          ')',
                        ),
                      l.exports.sqlite3__wasm_pstack_alloc(a) ||
                        m.toss(
                          'Could not allocate',
                          a,
                          'bytes from the pstack.',
                        )
                    );
                  },
                  allocChunks: function (a, u) {
                    typeof u == 'string' &&
                      !(u = l.sizeofIR(u)) &&
                      m.toss(
                        'Invalid size value for allocChunks(',
                        arguments[1],
                        ')',
                      );
                    const y = l.pstack.alloc(a * u),
                      q = [];
                    let B = 0,
                      K = 0;
                    for (; B < a; ++B, K += u) q.push(y + K);
                    return q;
                  },
                  allocPtr: (a = 1, u = !0) =>
                    a === 1
                      ? l.pstack.alloc(u ? 8 : l.ptrSizeof)
                      : l.pstack.allocChunks(a, u ? 8 : l.ptrSizeof),
                  call: function (a) {
                    const u = l.pstack.pointer;
                    try {
                      return a(h);
                    } finally {
                      l.pstack.restore(u);
                    }
                  },
                })),
                Object.defineProperties(l.pstack, {
                  pointer: {
                    configurable: !1,
                    iterable: !0,
                    writeable: !1,
                    get: l.exports.sqlite3__wasm_pstack_ptr,
                  },
                  quota: {
                    configurable: !1,
                    iterable: !0,
                    writeable: !1,
                    get: l.exports.sqlite3__wasm_pstack_quota,
                  },
                  remaining: {
                    configurable: !1,
                    iterable: !0,
                    writeable: !1,
                    get: l.exports.sqlite3__wasm_pstack_remaining,
                  },
                }),
                (i.sqlite3_randomness = (...a) => {
                  if (
                    a.length === 1 &&
                    w.isTypedArray(a[0]) &&
                    a[0].BYTES_PER_ELEMENT === 1
                  ) {
                    const u = a[0];
                    if (u.byteLength === 0)
                      return l.exports.sqlite3_randomness(0, 0), u;
                    const y = l.pstack.pointer;
                    try {
                      let q = u.byteLength,
                        B = 0;
                      const K = l.exports.sqlite3_randomness,
                        Z = l.heap8u(),
                        re = q < 512 ? q : 512,
                        ee = l.pstack.alloc(re);
                      do {
                        const te = q > re ? re : q;
                        K(te, ee),
                          u.set(T(Z, ee, ee + te), B),
                          (q -= te),
                          (B += te);
                      } while (q > 0);
                    } catch (q) {
                      console.error(
                        'Highly unexpected (and ignored!) exception in sqlite3_randomness():',
                        q,
                      );
                    } finally {
                      l.pstack.restore(y);
                    }
                    return u;
                  }
                  l.exports.sqlite3_randomness(...a);
                });
              let U;
              if (
                ((i.sqlite3_wasmfs_opfs_dir = function () {
                  if (U !== void 0) return U;
                  const a = r.wasmfsOpfsDir;
                  if (
                    !a ||
                    !globalThis.FileSystemHandle ||
                    !globalThis.FileSystemDirectoryHandle ||
                    !globalThis.FileSystemFileHandle
                  )
                    return (U = '');
                  try {
                    return a &&
                      l.xCallWrapped(
                        'sqlite3__wasm_init_wasmfs',
                        'i32',
                        ['string'],
                        a,
                      ) === 0
                      ? (U = a)
                      : (U = '');
                  } catch {
                    return (U = '');
                  }
                }),
                (i.sqlite3_wasmfs_filename_is_persistent = function (a) {
                  const u = i.sqlite3_wasmfs_opfs_dir();
                  return u && a ? a.startsWith(u + '/') : !1;
                }),
                (i.sqlite3_js_db_uses_vfs = function (a, u, y = 0) {
                  try {
                    const q = i.sqlite3_vfs_find(u);
                    return q
                      ? a
                        ? q === i.sqlite3_js_db_vfs(a, y)
                          ? q
                          : !1
                        : q === i.sqlite3_vfs_find(0)
                          ? q
                          : !1
                      : !1;
                  } catch {
                    return !1;
                  }
                }),
                (i.sqlite3_js_vfs_list = function () {
                  const a = [];
                  let u = i.sqlite3_vfs_find(0);
                  for (; u; ) {
                    const y = new i.sqlite3_vfs(u);
                    a.push(l.cstrToJs(y.$zName)), (u = y.$pNext), y.dispose();
                  }
                  return a;
                }),
                (i.sqlite3_js_db_export = function (a, u = 0) {
                  (a = l.xWrap.testConvertArg('sqlite3*', a)),
                    a || L('Invalid sqlite3* argument.'),
                    l.bigIntEnabled || L('BigInt64 support is not enabled.');
                  const y = l.scopedAllocPush();
                  let q;
                  try {
                    const B = l.scopedAlloc(8 + l.ptrSizeof),
                      K = B + 8,
                      Z = u
                        ? l.isPtr(u)
                          ? u
                          : l.scopedAllocCString('' + u)
                        : 0;
                    let re = l.exports.sqlite3__wasm_db_serialize(
                      a,
                      Z,
                      K,
                      B,
                      0,
                    );
                    re &&
                      L(
                        'Database serialization failed with code',
                        h.capi.sqlite3_js_rc_str(re),
                      ),
                      (q = l.peekPtr(K));
                    const ee = l.peek(B, 'i64');
                    return (
                      (re = ee
                        ? l.heap8u().slice(q, q + Number(ee))
                        : new Uint8Array()),
                      re
                    );
                  } finally {
                    q && l.exports.sqlite3_free(q), l.scopedAllocPop(y);
                  }
                }),
                (i.sqlite3_js_db_vfs = (a, u = 0) =>
                  w.sqlite3__wasm_db_vfs(a, u)),
                (i.sqlite3_js_aggregate_context = (a, u) =>
                  i.sqlite3_aggregate_context(a, u) ||
                  (u
                    ? m.toss(
                        'Cannot allocate',
                        u,
                        'bytes for sqlite3_aggregate_context()',
                      )
                    : 0)),
                (i.sqlite3_js_posix_create_file = function (a, u, y) {
                  let q;
                  u && l.isPtr(u)
                    ? (q = u)
                    : u instanceof ArrayBuffer || u instanceof Uint8Array
                      ? ((q = l.allocFromTypedArray(u)),
                        (arguments.length < 3 || !w.isInt32(y) || y < 0) &&
                          (y = u.byteLength))
                      : P.toss(
                          'Invalid 2nd argument for sqlite3_js_posix_create_file().',
                        );
                  try {
                    (!w.isInt32(y) || y < 0) &&
                      P.toss(
                        'Invalid 3rd argument for sqlite3_js_posix_create_file().',
                      );
                    const B = w.sqlite3__wasm_posix_create_file(a, q, y);
                    B &&
                      P.toss(
                        'Creation of file failed with sqlite3 result code',
                        i.sqlite3_js_rc_str(B),
                      );
                  } finally {
                    l.dealloc(q);
                  }
                }),
                (i.sqlite3_js_vfs_create_file = function (a, u, y, q) {
                  r.warn(
                    'sqlite3_js_vfs_create_file() is deprecated and',
                    'should be avoided because it can lead to C-level crashes.',
                    'See its documentation for alternative options.',
                  );
                  let B;
                  y
                    ? (l.isPtr(y)
                        ? (B = y)
                        : y instanceof ArrayBuffer && (y = new Uint8Array(y)),
                      y instanceof Uint8Array
                        ? ((B = l.allocFromTypedArray(y)),
                          (arguments.length < 4 || !w.isInt32(q) || q < 0) &&
                            (q = y.byteLength))
                        : P.toss(
                            'Invalid 3rd argument type for sqlite3_js_vfs_create_file().',
                          ))
                    : (B = 0),
                    (!w.isInt32(q) || q < 0) &&
                      (l.dealloc(B),
                      P.toss(
                        'Invalid 4th argument for sqlite3_js_vfs_create_file().',
                      ));
                  try {
                    const K = w.sqlite3__wasm_vfs_create_file(a, u, B, q);
                    K &&
                      P.toss(
                        'Creation of file failed with sqlite3 result code',
                        i.sqlite3_js_rc_str(K),
                      );
                  } finally {
                    l.dealloc(B);
                  }
                }),
                (i.sqlite3_js_sql_to_string = (a) => {
                  if (typeof a == 'string') return a;
                  const u = c(v);
                  return u === v ? void 0 : u;
                }),
                w.isUIThread())
              ) {
                const a = function (u) {
                  const y = Object.create(null);
                  return (
                    (y.prefix = 'kvvfs-' + u),
                    (y.stores = []),
                    (u === 'session' || u === '') &&
                      y.stores.push(globalThis.sessionStorage),
                    (u === 'local' || u === '') &&
                      y.stores.push(globalThis.localStorage),
                    y
                  );
                };
                (i.sqlite3_js_kvvfs_clear = function (u = '') {
                  let y = 0;
                  const q = a(u);
                  return (
                    q.stores.forEach((B) => {
                      const K = [];
                      let Z;
                      for (Z = 0; Z < B.length; ++Z) {
                        const re = B.key(Z);
                        re.startsWith(q.prefix) && K.push(re);
                      }
                      K.forEach((re) => B.removeItem(re)), (y += K.length);
                    }),
                    y
                  );
                }),
                  (i.sqlite3_js_kvvfs_size = function (u = '') {
                    let y = 0;
                    const q = a(u);
                    return (
                      q.stores.forEach((B) => {
                        let K;
                        for (K = 0; K < B.length; ++K) {
                          const Z = B.key(K);
                          Z.startsWith(q.prefix) &&
                            ((y += Z.length), (y += B.getItem(Z).length));
                        }
                      }),
                      y * 2
                    );
                  });
              }
              (i.sqlite3_db_config = function (a, u, ...y) {
                switch (
                  (this.s ||
                    ((this.s = l.xWrap('sqlite3__wasm_db_config_s', 'int', [
                      'sqlite3*',
                      'int',
                      'string:static',
                    ])),
                    (this.pii = l.xWrap('sqlite3__wasm_db_config_pii', 'int', [
                      'sqlite3*',
                      'int',
                      '*',
                      'int',
                      'int',
                    ])),
                    (this.ip = l.xWrap('sqlite3__wasm_db_config_ip', 'int', [
                      'sqlite3*',
                      'int',
                      'int',
                      '*',
                    ]))),
                  u)
                ) {
                  case i.SQLITE_DBCONFIG_ENABLE_FKEY:
                  case i.SQLITE_DBCONFIG_ENABLE_TRIGGER:
                  case i.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER:
                  case i.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION:
                  case i.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE:
                  case i.SQLITE_DBCONFIG_ENABLE_QPSG:
                  case i.SQLITE_DBCONFIG_TRIGGER_EQP:
                  case i.SQLITE_DBCONFIG_RESET_DATABASE:
                  case i.SQLITE_DBCONFIG_DEFENSIVE:
                  case i.SQLITE_DBCONFIG_WRITABLE_SCHEMA:
                  case i.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE:
                  case i.SQLITE_DBCONFIG_DQS_DML:
                  case i.SQLITE_DBCONFIG_DQS_DDL:
                  case i.SQLITE_DBCONFIG_ENABLE_VIEW:
                  case i.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT:
                  case i.SQLITE_DBCONFIG_TRUSTED_SCHEMA:
                  case i.SQLITE_DBCONFIG_STMT_SCANSTATUS:
                  case i.SQLITE_DBCONFIG_REVERSE_SCANORDER:
                    return this.ip(a, u, y[0], y[1] || 0);
                  case i.SQLITE_DBCONFIG_LOOKASIDE:
                    return this.pii(a, u, y[0], y[1], y[2]);
                  case i.SQLITE_DBCONFIG_MAINDBNAME:
                    return this.s(a, u, y[0]);
                  default:
                    return i.SQLITE_MISUSE;
                }
              }.bind(Object.create(null))),
                (i.sqlite3_value_to_js = function (a, u = !0) {
                  let y;
                  const q = i.sqlite3_value_type(a);
                  switch (q) {
                    case i.SQLITE_INTEGER:
                      l.bigIntEnabled
                        ? ((y = i.sqlite3_value_int64(a)),
                          w.bigIntFitsDouble(y) && (y = Number(y)))
                        : (y = i.sqlite3_value_double(a));
                      break;
                    case i.SQLITE_FLOAT:
                      y = i.sqlite3_value_double(a);
                      break;
                    case i.SQLITE_TEXT:
                      y = i.sqlite3_value_text(a);
                      break;
                    case i.SQLITE_BLOB: {
                      const B = i.sqlite3_value_bytes(a),
                        K = i.sqlite3_value_blob(a);
                      B &&
                        !K &&
                        h.WasmAllocError.toss(
                          'Cannot allocate memory for blob argument of',
                          B,
                          'byte(s)',
                        ),
                        (y = B ? l.heap8u().slice(K, K + Number(B)) : null);
                      break;
                    }
                    case i.SQLITE_NULL:
                      y = null;
                      break;
                    default:
                      u &&
                        L(
                          i.SQLITE_MISMATCH,
                          'Unhandled sqlite3_value_type():',
                          q,
                        ),
                        (y = void 0);
                  }
                  return y;
                }),
                (i.sqlite3_values_to_js = function (a, u, y = !0) {
                  let q;
                  const B = [];
                  for (q = 0; q < a; ++q)
                    B.push(
                      i.sqlite3_value_to_js(l.peekPtr(u + l.ptrSizeof * q), y),
                    );
                  return B;
                }),
                (i.sqlite3_result_error_js = function (a, u) {
                  u instanceof m
                    ? i.sqlite3_result_error_nomem(a)
                    : i.sqlite3_result_error(a, '' + u, -1);
                }),
                (i.sqlite3_result_js = function (a, u) {
                  if (u instanceof Error) {
                    i.sqlite3_result_error_js(a, u);
                    return;
                  }
                  try {
                    switch (typeof u) {
                      case 'undefined':
                        break;
                      case 'boolean':
                        i.sqlite3_result_int(a, u ? 1 : 0);
                        break;
                      case 'bigint':
                        w.bigIntFits32(u)
                          ? i.sqlite3_result_int(a, Number(u))
                          : w.bigIntFitsDouble(u)
                            ? i.sqlite3_result_double(a, Number(u))
                            : l.bigIntEnabled
                              ? w.bigIntFits64(u)
                                ? i.sqlite3_result_int64(a, u)
                                : L(
                                    'BigInt value',
                                    u.toString(),
                                    'is too BigInt for int64.',
                                  )
                              : L(
                                  'BigInt value',
                                  u.toString(),
                                  'is too BigInt.',
                                );
                        break;
                      case 'number': {
                        let y;
                        w.isInt32(u)
                          ? (y = i.sqlite3_result_int)
                          : l.bigIntEnabled &&
                              Number.isInteger(u) &&
                              w.bigIntFits64(BigInt(u))
                            ? (y = i.sqlite3_result_int64)
                            : (y = i.sqlite3_result_double),
                          y(a, u);
                        break;
                      }
                      case 'string': {
                        const [y, q] = l.allocCString(u, !0);
                        i.sqlite3_result_text(a, y, q, i.SQLITE_WASM_DEALLOC);
                        break;
                      }
                      case 'object':
                        if (u === null) {
                          i.sqlite3_result_null(a);
                          break;
                        } else if (w.isBindableTypedArray(u)) {
                          const y = l.allocFromTypedArray(u);
                          i.sqlite3_result_blob(
                            a,
                            y,
                            u.byteLength,
                            i.SQLITE_WASM_DEALLOC,
                          );
                          break;
                        }
                      default:
                        L(
                          "Don't not how to handle this UDF result value:",
                          typeof u,
                          u,
                        );
                    }
                  } catch (y) {
                    i.sqlite3_result_error_js(a, y);
                  }
                }),
                (i.sqlite3_column_js = function (a, u, y = !0) {
                  const q = i.sqlite3_column_value(a, u);
                  return q === 0 ? void 0 : i.sqlite3_value_to_js(q, y);
                });
              const _ = function (a, u, y) {
                (y = i[y]),
                  this.ptr ? l.pokePtr(this.ptr, 0) : (this.ptr = l.allocPtr());
                const q = y(a, u, this.ptr);
                if (q)
                  return P.toss(q, arguments[2] + '() failed with code ' + q);
                const B = l.peekPtr(this.ptr);
                return B ? i.sqlite3_value_to_js(B, !0) : void 0;
              }.bind(Object.create(null));
              (i.sqlite3_preupdate_new_js = (a, u) =>
                _(a, u, 'sqlite3_preupdate_new')),
                (i.sqlite3_preupdate_old_js = (a, u) =>
                  _(a, u, 'sqlite3_preupdate_old')),
                (i.sqlite3changeset_new_js = (a, u) =>
                  _(a, u, 'sqlite3changeset_new')),
                (i.sqlite3changeset_old_js = (a, u) =>
                  _(a, u, 'sqlite3changeset_old'));
              const h = {
                WasmAllocError: m,
                SQLite3Error: P,
                capi: i,
                util: w,
                wasm: l,
                config: r,
                version: Object.create(null),
                client: void 0,
                asyncPostInit: async function a() {
                  if (a.isReady instanceof Promise) return a.isReady;
                  let u = e.initializersAsync;
                  delete e.initializersAsync;
                  const y = async () => (
                      h.__isUnderTest || (delete h.util, delete h.StructBinder),
                      h
                    ),
                    q = (K) => {
                      throw (
                        (r.error('an async sqlite3 initializer failed:', K), K)
                      );
                    };
                  if (!u || !u.length) return (a.isReady = y().catch(q));
                  (u = u.map((K) =>
                    K instanceof Function ? async (Z) => K(h) : K,
                  )),
                    u.push(y);
                  let B = Promise.resolve(h);
                  for (; u.length; ) B = B.then(u.shift());
                  return (a.isReady = B.catch(q));
                },
                scriptInfo: void 0,
              };
              try {
                e.initializers.forEach((a) => {
                  a(h);
                });
              } catch (a) {
                throw (
                  (console.error('sqlite3 bootstrap initializer threw:', a), a)
                );
              }
              return delete e.initializers, (e.sqlite3 = h), h;
            }),
            (globalThis.sqlite3ApiBootstrap.initializers = []),
            (globalThis.sqlite3ApiBootstrap.initializersAsync = []),
            (globalThis.sqlite3ApiBootstrap.defaultConfig =
              Object.create(null)),
            (globalThis.sqlite3ApiBootstrap.sqlite3 = void 0),
            (globalThis.WhWasmUtilInstaller = function (e) {
              e.bigIntEnabled === void 0 &&
                (e.bigIntEnabled = !!globalThis.BigInt64Array);
              const s = (...c) => {
                throw new Error(c.join(' '));
              };
              e.exports ||
                Object.defineProperty(e, 'exports', {
                  enumerable: !0,
                  configurable: !0,
                  get: () => e.instance && e.instance.exports,
                });
              const r = e.pointerIR || 'i32',
                i = (e.ptrSizeof =
                  r === 'i32'
                    ? 4
                    : r === 'i64'
                      ? 8
                      : s('Unhandled ptrSizeof:', r)),
                l = Object.create(null);
              (l.heapSize = 0),
                (l.memory = null),
                (l.freeFuncIndexes = []),
                (l.scopedAlloc = []),
                (l.utf8Decoder = new TextDecoder()),
                (l.utf8Encoder = new TextEncoder('utf-8')),
                (e.sizeofIR = (c) => {
                  switch (c) {
                    case 'i8':
                      return 1;
                    case 'i16':
                      return 2;
                    case 'i32':
                    case 'f32':
                    case 'float':
                      return 4;
                    case 'i64':
                    case 'f64':
                    case 'double':
                      return 8;
                    case '*':
                      return i;
                    default:
                      return ('' + c).endsWith('*') ? i : void 0;
                  }
                });
              const p = function () {
                if (!l.memory)
                  l.memory =
                    e.memory instanceof WebAssembly.Memory
                      ? e.memory
                      : e.exports.memory;
                else if (l.heapSize === l.memory.buffer.byteLength) return l;
                const c = l.memory.buffer;
                return (
                  (l.HEAP8 = new Int8Array(c)),
                  (l.HEAP8U = new Uint8Array(c)),
                  (l.HEAP16 = new Int16Array(c)),
                  (l.HEAP16U = new Uint16Array(c)),
                  (l.HEAP32 = new Int32Array(c)),
                  (l.HEAP32U = new Uint32Array(c)),
                  e.bigIntEnabled &&
                    ((l.HEAP64 = new BigInt64Array(c)),
                    (l.HEAP64U = new BigUint64Array(c))),
                  (l.HEAP32F = new Float32Array(c)),
                  (l.HEAP64F = new Float64Array(c)),
                  (l.heapSize = c.byteLength),
                  l
                );
              };
              (e.heap8 = () => p().HEAP8),
                (e.heap8u = () => p().HEAP8U),
                (e.heap16 = () => p().HEAP16),
                (e.heap16u = () => p().HEAP16U),
                (e.heap32 = () => p().HEAP32),
                (e.heap32u = () => p().HEAP32U),
                (e.heapForSize = function (c, m = !0) {
                  const w =
                    l.memory && l.heapSize === l.memory.buffer.byteLength
                      ? l
                      : p();
                  switch (c) {
                    case Int8Array:
                      return w.HEAP8;
                    case Uint8Array:
                      return w.HEAP8U;
                    case Int16Array:
                      return w.HEAP16;
                    case Uint16Array:
                      return w.HEAP16U;
                    case Int32Array:
                      return w.HEAP32;
                    case Uint32Array:
                      return w.HEAP32U;
                    case 8:
                      return m ? w.HEAP8U : w.HEAP8;
                    case 16:
                      return m ? w.HEAP16U : w.HEAP16;
                    case 32:
                      return m ? w.HEAP32U : w.HEAP32;
                    case 64:
                      if (w.HEAP64) return m ? w.HEAP64U : w.HEAP64;
                      break;
                    default:
                      if (e.bigIntEnabled) {
                        if (c === globalThis.BigUint64Array) return w.HEAP64U;
                        if (c === globalThis.BigInt64Array) return w.HEAP64;
                        break;
                      }
                  }
                  s(
                    'Invalid heapForSize() size: expecting 8, 16, 32,',
                    'or (if BigInt is enabled) 64.',
                  );
                }),
                (e.functionTable = function () {
                  return e.exports.__indirect_function_table;
                }),
                (e.functionEntry = function (c) {
                  const m = e.functionTable();
                  return c < m.length ? m.get(c) : void 0;
                }),
                (e.jsFuncToWasm = function c(m, w) {
                  if (
                    (c._ ||
                      (c._ = {
                        sigTypes: Object.assign(Object.create(null), {
                          i: 'i32',
                          p: 'i32',
                          P: 'i32',
                          s: 'i32',
                          j: 'i64',
                          f: 'f32',
                          d: 'f64',
                        }),
                        typeCodes: Object.assign(Object.create(null), {
                          f64: 124,
                          f32: 125,
                          i64: 126,
                          i32: 127,
                        }),
                        uleb128Encode: function (h, a, u) {
                          u < 128 ? h[a](u) : h[a]((u % 128) | 128, u >> 7);
                        },
                        rxJSig: /^(\w)\((\w*)\)$/,
                        sigParams: function (h) {
                          const a = c._.rxJSig.exec(h);
                          return a ? a[2] : h.substr(1);
                        },
                        letterType: (h) =>
                          c._.sigTypes[h] || s('Invalid signature letter:', h),
                        pushSigType: (h, a) =>
                          h.push(c._.typeCodes[c._.letterType(a)]),
                      }),
                    typeof m == 'string')
                  ) {
                    const h = w;
                    (w = m), (m = h);
                  }
                  const U = c._.sigParams(w),
                    _ = [1, 96];
                  c._.uleb128Encode(_, 'push', U.length);
                  for (const h of U) c._.pushSigType(_, h);
                  return (
                    w[0] === 'v'
                      ? _.push(0)
                      : (_.push(1), c._.pushSigType(_, w[0])),
                    c._.uleb128Encode(_, 'unshift', _.length),
                    _.unshift(0, 97, 115, 109, 1, 0, 0, 0, 1),
                    _.push(
                      2,
                      7,
                      1,
                      1,
                      101,
                      1,
                      102,
                      0,
                      0,
                      7,
                      5,
                      1,
                      1,
                      102,
                      0,
                      0,
                    ),
                    new WebAssembly.Instance(
                      new WebAssembly.Module(new Uint8Array(_)),
                      { e: { f: m } },
                    ).exports.f
                  );
                });
              const g = function (m, w, U) {
                if (
                  (U &&
                    !l.scopedAlloc.length &&
                    s('No scopedAllocPush() scope is active.'),
                  typeof m == 'string')
                ) {
                  const u = w;
                  (w = m), (m = u);
                }
                (typeof w != 'string' || !(m instanceof Function)) &&
                  s(
                    'Invalid arguments: expecting (function,signature) or (signature,function).',
                  );
                const _ = e.functionTable(),
                  h = _.length;
                let a;
                for (
                  ;
                  l.freeFuncIndexes.length &&
                  ((a = l.freeFuncIndexes.pop()), _.get(a));
                ) {
                  a = null;
                  continue;
                }
                a || ((a = h), _.grow(1));
                try {
                  return (
                    _.set(a, m),
                    U && l.scopedAlloc[l.scopedAlloc.length - 1].push(a),
                    a
                  );
                } catch (u) {
                  if (!(u instanceof TypeError))
                    throw (a === h && l.freeFuncIndexes.push(h), u);
                }
                try {
                  const u = e.jsFuncToWasm(m, w);
                  _.set(a, u),
                    U && l.scopedAlloc[l.scopedAlloc.length - 1].push(a);
                } catch (u) {
                  throw (a === h && l.freeFuncIndexes.push(h), u);
                }
                return a;
              };
              (e.installFunction = (c, m) => g(c, m, !1)),
                (e.scopedInstallFunction = (c, m) => g(c, m, !0)),
                (e.uninstallFunction = function (c) {
                  if (!c && c !== 0) return;
                  const m = l.freeFuncIndexes,
                    w = e.functionTable();
                  m.push(c);
                  const U = w.get(c);
                  return w.set(c, null), U;
                }),
                (e.peek = function (m, w = 'i8') {
                  w.endsWith('*') && (w = r);
                  const U =
                      l.memory && l.heapSize === l.memory.buffer.byteLength
                        ? l
                        : p(),
                    _ = Array.isArray(m) ? [] : void 0;
                  let h;
                  do {
                    switch ((_ && (m = arguments[0].shift()), w)) {
                      case 'i1':
                      case 'i8':
                        h = U.HEAP8[m >> 0];
                        break;
                      case 'i16':
                        h = U.HEAP16[m >> 1];
                        break;
                      case 'i32':
                        h = U.HEAP32[m >> 2];
                        break;
                      case 'float':
                      case 'f32':
                        h = U.HEAP32F[m >> 2];
                        break;
                      case 'double':
                      case 'f64':
                        h = Number(U.HEAP64F[m >> 3]);
                        break;
                      case 'i64':
                        if (e.bigIntEnabled) {
                          h = BigInt(U.HEAP64[m >> 3]);
                          break;
                        }
                      default:
                        s('Invalid type for peek():', w);
                    }
                    _ && _.push(h);
                  } while (_ && arguments[0].length);
                  return _ || h;
                }),
                (e.poke = function (c, m, w = 'i8') {
                  w.endsWith('*') && (w = r);
                  const U =
                    l.memory && l.heapSize === l.memory.buffer.byteLength
                      ? l
                      : p();
                  for (const _ of Array.isArray(c) ? c : [c])
                    switch (w) {
                      case 'i1':
                      case 'i8':
                        U.HEAP8[_ >> 0] = m;
                        continue;
                      case 'i16':
                        U.HEAP16[_ >> 1] = m;
                        continue;
                      case 'i32':
                        U.HEAP32[_ >> 2] = m;
                        continue;
                      case 'float':
                      case 'f32':
                        U.HEAP32F[_ >> 2] = m;
                        continue;
                      case 'double':
                      case 'f64':
                        U.HEAP64F[_ >> 3] = m;
                        continue;
                      case 'i64':
                        if (U.HEAP64) {
                          U.HEAP64[_ >> 3] = BigInt(m);
                          continue;
                        }
                      default:
                        s('Invalid type for poke(): ' + w);
                    }
                  return this;
                }),
                (e.peekPtr = (...c) => e.peek(c.length === 1 ? c[0] : c, r)),
                (e.pokePtr = (c, m = 0) => e.poke(c, m, r)),
                (e.peek8 = (...c) => e.peek(c.length === 1 ? c[0] : c, 'i8')),
                (e.poke8 = (c, m) => e.poke(c, m, 'i8')),
                (e.peek16 = (...c) => e.peek(c.length === 1 ? c[0] : c, 'i16')),
                (e.poke16 = (c, m) => e.poke(c, m, 'i16')),
                (e.peek32 = (...c) => e.peek(c.length === 1 ? c[0] : c, 'i32')),
                (e.poke32 = (c, m) => e.poke(c, m, 'i32')),
                (e.peek64 = (...c) => e.peek(c.length === 1 ? c[0] : c, 'i64')),
                (e.poke64 = (c, m) => e.poke(c, m, 'i64')),
                (e.peek32f = (...c) =>
                  e.peek(c.length === 1 ? c[0] : c, 'f32')),
                (e.poke32f = (c, m) => e.poke(c, m, 'f32')),
                (e.peek64f = (...c) =>
                  e.peek(c.length === 1 ? c[0] : c, 'f64')),
                (e.poke64f = (c, m) => e.poke(c, m, 'f64')),
                (e.getMemValue = e.peek),
                (e.getPtrValue = e.peekPtr),
                (e.setMemValue = e.poke),
                (e.setPtrValue = e.pokePtr),
                (e.isPtr32 = (c) =>
                  typeof c == 'number' && c === (c | 0) && c >= 0),
                (e.isPtr = e.isPtr32),
                (e.cstrlen = function (c) {
                  if (!c || !e.isPtr(c)) return null;
                  const m = p().HEAP8U;
                  let w = c;
                  for (; m[w] !== 0; ++w);
                  return w - c;
                });
              const P =
                  typeof SharedArrayBuffer > 'u'
                    ? function () {}
                    : SharedArrayBuffer,
                L = function (c, m, w) {
                  return l.utf8Decoder.decode(
                    c.buffer instanceof P ? c.slice(m, w) : c.subarray(m, w),
                  );
                };
              (e.cstrToJs = function (c) {
                const m = e.cstrlen(c);
                return m ? L(p().HEAP8U, c, c + m) : m === null ? m : '';
              }),
                (e.jstrlen = function (c) {
                  if (typeof c != 'string') return null;
                  const m = c.length;
                  let w = 0;
                  for (let U = 0; U < m; ++U) {
                    let _ = c.charCodeAt(U);
                    _ >= 55296 &&
                      _ <= 57343 &&
                      (_ =
                        (65536 + ((_ & 1023) << 10)) |
                        (c.charCodeAt(++U) & 1023)),
                      _ <= 127
                        ? ++w
                        : _ <= 2047
                          ? (w += 2)
                          : _ <= 65535
                            ? (w += 3)
                            : (w += 4);
                  }
                  return w;
                }),
                (e.jstrcpy = function (c, m, w = 0, U = -1, _ = !0) {
                  if (
                    ((!m ||
                      (!(m instanceof Int8Array) &&
                        !(m instanceof Uint8Array))) &&
                      s('jstrcpy() target must be an Int8Array or Uint8Array.'),
                    U < 0 && (U = m.length - w),
                    !(U > 0) || !(w >= 0))
                  )
                    return 0;
                  let h = 0,
                    a = c.length;
                  const u = w,
                    y = w + U - (_ ? 1 : 0);
                  for (; h < a && w < y; ++h) {
                    let q = c.charCodeAt(h);
                    if (
                      (q >= 55296 &&
                        q <= 57343 &&
                        (q =
                          (65536 + ((q & 1023) << 10)) |
                          (c.charCodeAt(++h) & 1023)),
                      q <= 127)
                    ) {
                      if (w >= y) break;
                      m[w++] = q;
                    } else if (q <= 2047) {
                      if (w + 1 >= y) break;
                      (m[w++] = 192 | (q >> 6)), (m[w++] = 128 | (q & 63));
                    } else if (q <= 65535) {
                      if (w + 2 >= y) break;
                      (m[w++] = 224 | (q >> 12)),
                        (m[w++] = 128 | ((q >> 6) & 63)),
                        (m[w++] = 128 | (q & 63));
                    } else {
                      if (w + 3 >= y) break;
                      (m[w++] = 240 | (q >> 18)),
                        (m[w++] = 128 | ((q >> 12) & 63)),
                        (m[w++] = 128 | ((q >> 6) & 63)),
                        (m[w++] = 128 | (q & 63));
                    }
                  }
                  return _ && (m[w++] = 0), w - u;
                }),
                (e.cstrncpy = function (c, m, w) {
                  if (
                    ((!c || !m) &&
                      s('cstrncpy() does not accept NULL strings.'),
                    w < 0)
                  )
                    w = e.cstrlen(strPtr) + 1;
                  else if (!(w > 0)) return 0;
                  const U = e.heap8u();
                  let _ = 0,
                    h;
                  for (; _ < w && (h = U[m + _]); ++_) U[c + _] = h;
                  return _ < w && (U[c + _++] = 0), _;
                }),
                (e.jstrToUintArray = (c, m = !1) =>
                  l.utf8Encoder.encode(m ? c + '\0' : c));
              const j = (c, m) => {
                  (!(c.alloc instanceof Function) ||
                    !(c.dealloc instanceof Function)) &&
                    s(
                      'Object is missing alloc() and/or dealloc() function(s)',
                      'required by',
                      m + '().',
                    );
                },
                H = function (c, m, w, U) {
                  if ((j(e, U), typeof c != 'string')) return null;
                  {
                    const _ = l.utf8Encoder.encode(c),
                      h = w(_.length + 1),
                      a = p().HEAP8U;
                    return (
                      a.set(_, h), (a[h + _.length] = 0), m ? [h, _.length] : h
                    );
                  }
                };
              (e.allocCString = (c, m = !1) =>
                H(c, m, e.alloc, 'allocCString()')),
                (e.scopedAllocPush = function () {
                  j(e, 'scopedAllocPush');
                  const c = [];
                  return l.scopedAlloc.push(c), c;
                }),
                (e.scopedAllocPop = function (c) {
                  j(e, 'scopedAllocPop');
                  const m = arguments.length
                    ? l.scopedAlloc.indexOf(c)
                    : l.scopedAlloc.length - 1;
                  m < 0 && s('Invalid state object for scopedAllocPop().'),
                    arguments.length === 0 && (c = l.scopedAlloc[m]),
                    l.scopedAlloc.splice(m, 1);
                  for (let w; (w = c.pop()); )
                    e.functionEntry(w) ? e.uninstallFunction(w) : e.dealloc(w);
                }),
                (e.scopedAlloc = function (c) {
                  l.scopedAlloc.length ||
                    s('No scopedAllocPush() scope is active.');
                  const m = e.alloc(c);
                  return l.scopedAlloc[l.scopedAlloc.length - 1].push(m), m;
                }),
                Object.defineProperty(e.scopedAlloc, 'level', {
                  configurable: !1,
                  enumerable: !1,
                  get: () => l.scopedAlloc.length,
                  set: () => s("The 'active' property is read-only."),
                }),
                (e.scopedAllocCString = (c, m = !1) =>
                  H(c, m, e.scopedAlloc, 'scopedAllocCString()'));
              const I = function (c, m) {
                const w = e[c ? 'scopedAlloc' : 'alloc'](
                  (m.length + 1) * e.ptrSizeof,
                );
                let U = 0;
                return (
                  m.forEach((_) => {
                    e.pokePtr(
                      w + e.ptrSizeof * U++,
                      e[c ? 'scopedAllocCString' : 'allocCString']('' + _),
                    );
                  }),
                  e.pokePtr(w + e.ptrSizeof * U, 0),
                  w
                );
              };
              (e.scopedAllocMainArgv = (c) => I(!0, c)),
                (e.allocMainArgv = (c) => I(!1, c)),
                (e.cArgvToJs = (c, m) => {
                  const w = [];
                  for (let U = 0; U < c; ++U) {
                    const _ = e.peekPtr(m + e.ptrSizeof * U);
                    w.push(_ ? e.cstrToJs(_) : null);
                  }
                  return w;
                }),
                (e.scopedAllocCall = function (c) {
                  e.scopedAllocPush();
                  try {
                    return c();
                  } finally {
                    e.scopedAllocPop();
                  }
                });
              const A = function (c, m, w) {
                j(e, w);
                const U = m ? 'i64' : r;
                let _ = e[w](c * (m ? 8 : i));
                if ((e.poke(_, 0, U), c === 1)) return _;
                const h = [_];
                for (let a = 1; a < c; ++a)
                  (_ += m ? 8 : i), (h[a] = _), e.poke(_, 0, U);
                return h;
              };
              (e.allocPtr = (c = 1, m = !0) => A(c, m, 'alloc')),
                (e.scopedAllocPtr = (c = 1, m = !0) => A(c, m, 'scopedAlloc')),
                (e.xGet = function (c) {
                  return e.exports[c] || s('Cannot find exported symbol:', c);
                });
              const R = (c, m) => s(c + '() requires', m, 'argument(s).');
              (e.xCall = function (c, ...m) {
                const w = c instanceof Function ? c : e.xGet(c);
                return (
                  w instanceof Function ||
                    s('Exported symbol', c, 'is not a function.'),
                  w.length !== m.length && R(w === c ? w.name : c, w.length),
                  arguments.length === 2 && Array.isArray(arguments[1])
                    ? w.apply(null, arguments[1])
                    : w.apply(null, m)
                );
              }),
                (l.xWrap = Object.create(null)),
                (l.xWrap.convert = Object.create(null)),
                (l.xWrap.convert.arg = new Map()),
                (l.xWrap.convert.result = new Map());
              const b = l.xWrap.convert.arg,
                E = l.xWrap.convert.result;
              e.bigIntEnabled && b.set('i64', (c) => BigInt(c));
              const T =
                r === 'i32' ? (c) => c | 0 : (c) => BigInt(c) | BigInt(0);
              b
                .set('i32', T)
                .set('i16', (c) => (c | 0) & 65535)
                .set('i8', (c) => (c | 0) & 255)
                .set('f32', (c) => Number(c).valueOf())
                .set('float', b.get('f32'))
                .set('f64', b.get('f32'))
                .set('double', b.get('f64'))
                .set('int', b.get('i32'))
                .set('null', (c) => c)
                .set(null, b.get('null'))
                .set('**', T)
                .set('*', T),
                E.set('*', T)
                  .set('pointer', T)
                  .set('number', (c) => Number(c))
                  .set('void', (c) => {})
                  .set('null', (c) => c)
                  .set(null, E.get('null'));
              {
                const c = [
                  'i8',
                  'i16',
                  'i32',
                  'int',
                  'f32',
                  'float',
                  'f64',
                  'double',
                ];
                e.bigIntEnabled && c.push('i64');
                const m = b.get(r);
                for (const w of c)
                  b.set(w + '*', m),
                    E.set(w + '*', m),
                    E.set(w, b.get(w) || s('Missing arg converter:', w));
              }
              const F = function (c) {
                return typeof c == 'string'
                  ? e.scopedAllocCString(c)
                  : c
                    ? T(c)
                    : null;
              };
              b.set('string', F).set('utf8', F).set('pointer', F),
                E.set('string', (c) => e.cstrToJs(c))
                  .set('utf8', E.get('string'))
                  .set('string:dealloc', (c) => {
                    try {
                      return c ? e.cstrToJs(c) : null;
                    } finally {
                      e.dealloc(c);
                    }
                  })
                  .set('utf8:dealloc', E.get('string:dealloc'))
                  .set('json', (c) => JSON.parse(e.cstrToJs(c)))
                  .set('json:dealloc', (c) => {
                    try {
                      return c ? JSON.parse(e.cstrToJs(c)) : null;
                    } finally {
                      e.dealloc(c);
                    }
                  });
              const C = class {
                constructor(c) {
                  this.name = c.name || 'unnamed adapter';
                }
                convertArg(c, m, w) {
                  s('AbstractArgAdapter must be subclassed.');
                }
              };
              (b.FuncPtrAdapter = class De extends C {
                constructor(m) {
                  super(m),
                    b.FuncPtrAdapter.warnOnUse &&
                      console.warn(
                        'xArg.FuncPtrAdapter is an internal-only API',
                        'and is not intended to be invoked from',
                        'client-level code. Invoked with:',
                        m,
                      ),
                    (this.name = m.name || 'unnamed'),
                    (this.signature = m.signature),
                    m.contextKey instanceof Function &&
                      ((this.contextKey = m.contextKey),
                      m.bindScope || (m.bindScope = 'context')),
                    (this.bindScope =
                      m.bindScope ||
                      s(
                        'FuncPtrAdapter options requires a bindScope (explicit or implied).',
                      )),
                    De.bindScopes.indexOf(m.bindScope) < 0 &&
                      s(
                        'Invalid options.bindScope (' +
                          m.bindMod +
                          ') for FuncPtrAdapter. Expecting one of: (' +
                          De.bindScopes.join(', ') +
                          ')',
                      ),
                    (this.isTransient = this.bindScope === 'transient'),
                    (this.isContext = this.bindScope === 'context'),
                    (this.isPermanent = this.bindScope === 'permanent'),
                    (this.singleton =
                      this.bindScope === 'singleton' ? [] : void 0),
                    (this.callProxy =
                      m.callProxy instanceof Function ? m.callProxy : void 0);
                }
                contextKey(m, w) {
                  return this;
                }
                contextMap(m) {
                  const w = this.__cmap || (this.__cmap = new Map());
                  let U = w.get(m);
                  return U === void 0 && w.set(m, (U = [])), U;
                }
                convertArg(m, w, U) {
                  let _ = this.singleton;
                  if (
                    (!_ &&
                      this.isContext &&
                      (_ = this.contextMap(this.contextKey(w, U))),
                    _ && _[0] === m)
                  )
                    return _[1];
                  if (m instanceof Function) {
                    this.callProxy && (m = this.callProxy(m));
                    const h = g(m, this.signature, this.isTransient);
                    if (
                      (De.debugFuncInstall &&
                        De.debugOut(
                          'FuncPtrAdapter installed',
                          this,
                          this.contextKey(w, U),
                          '@' + h,
                          m,
                        ),
                      _)
                    ) {
                      if (_[1]) {
                        De.debugFuncInstall &&
                          De.debugOut(
                            'FuncPtrAdapter uninstalling',
                            this,
                            this.contextKey(w, U),
                            '@' + _[1],
                            m,
                          );
                        try {
                          l.scopedAlloc[l.scopedAlloc.length - 1].push(_[1]);
                        } catch {}
                      }
                      (_[0] = m), (_[1] = h);
                    }
                    return h;
                  } else if (e.isPtr(m) || m === null || m === void 0) {
                    if (_ && _[1] && _[1] !== m) {
                      De.debugFuncInstall &&
                        De.debugOut(
                          'FuncPtrAdapter uninstalling',
                          this,
                          this.contextKey(w, U),
                          '@' + _[1],
                          m,
                        );
                      try {
                        l.scopedAlloc[l.scopedAlloc.length - 1].push(_[1]);
                      } catch {}
                      _[0] = _[1] = m | 0;
                    }
                    return m || 0;
                  } else
                    throw new TypeError(
                      'Invalid FuncPtrAdapter argument type. Expecting a function pointer or a ' +
                        (this.name ? this.name + ' ' : '') +
                        'function matching signature ' +
                        this.signature +
                        '.',
                    );
                }
              }),
                (b.FuncPtrAdapter.warnOnUse = !1),
                (b.FuncPtrAdapter.debugFuncInstall = !1),
                (b.FuncPtrAdapter.debugOut = console.debug.bind(console)),
                (b.FuncPtrAdapter.bindScopes = [
                  'transient',
                  'context',
                  'singleton',
                  'permanent',
                ]);
              const x = (c) => b.get(c) || s('Argument adapter not found:', c),
                N = (c) => E.get(c) || s('Result adapter not found:', c);
              (l.xWrap.convertArg = (c, ...m) => x(c)(...m)),
                (l.xWrap.convertArgNoCheck = (c, ...m) => b.get(c)(...m)),
                (l.xWrap.convertResult = (c, m) =>
                  c === null ? m : c ? N(c)(m) : void 0),
                (l.xWrap.convertResultNoCheck = (c, m) =>
                  c === null ? m : c ? E.get(c)(m) : void 0),
                (e.xWrap = function (c, m, ...w) {
                  arguments.length === 3 &&
                    Array.isArray(arguments[2]) &&
                    (w = arguments[2]),
                    e.isPtr(c) &&
                      (c =
                        e.functionEntry(c) ||
                        s(
                          'Function pointer not found in WASM function table.',
                        ));
                  const U = c instanceof Function,
                    _ = U ? c : e.xGet(c);
                  if (
                    (U && (c = _.name || 'unnamed function'),
                    w.length !== _.length && R(c, _.length),
                    m === null && _.length === 0)
                  )
                    return _;
                  m != null && N(m);
                  for (const a of w)
                    a instanceof C
                      ? b.set(a, (...u) => a.convertArg(...u))
                      : x(a);
                  const h = l.xWrap;
                  return _.length === 0
                    ? (...a) =>
                        a.length
                          ? R(c, _.length)
                          : h.convertResult(m, _.call(null))
                    : function (...a) {
                        a.length !== _.length && R(c, _.length);
                        const u = e.scopedAllocPush();
                        try {
                          let y = 0;
                          for (; y < a.length; ++y)
                            a[y] = h.convertArgNoCheck(w[y], a[y], a, y);
                          return h.convertResultNoCheck(m, _.apply(null, a));
                        } finally {
                          e.scopedAllocPop(u);
                        }
                      };
                });
              const Q = function (c, m, w, U, _, h) {
                if (typeof w == 'string') {
                  if (m === 1) return h.get(w);
                  if (m === 2) {
                    if (U)
                      U instanceof Function ||
                        s(_, 'requires a function argument.');
                    else return delete h.get(w), c;
                    return h.set(w, U), c;
                  }
                }
                s('Invalid arguments to', _);
              };
              return (
                (e.xWrap.resultAdapter = function c(m, w) {
                  return Q(c, arguments.length, m, w, 'resultAdapter()', E);
                }),
                (e.xWrap.argAdapter = function c(m, w) {
                  return Q(c, arguments.length, m, w, 'argAdapter()', b);
                }),
                (e.xWrap.FuncPtrAdapter = b.FuncPtrAdapter),
                (e.xCallWrapped = function (c, m, w, ...U) {
                  return (
                    Array.isArray(arguments[3]) && (U = arguments[3]),
                    e.xWrap(c, m, w || []).apply(null, U || [])
                  );
                }),
                (e.xWrap.testConvertArg = l.xWrap.convertArg),
                (e.xWrap.testConvertResult = l.xWrap.convertResult),
                e
              );
            }),
            (globalThis.WhWasmUtilInstaller.yawl = function (e) {
              const s = () => fetch(e.uri, { credentials: 'same-origin' }),
                r = this,
                i = function (p) {
                  if (e.wasmUtilTarget) {
                    const g = (...L) => {
                        throw new Error(L.join(' '));
                      },
                      P = e.wasmUtilTarget;
                    if (
                      ((P.module = p.module),
                      (P.instance = p.instance),
                      P.instance.exports.memory ||
                        (P.memory =
                          (e.imports &&
                            e.imports.env &&
                            e.imports.env.memory) ||
                          g("Missing 'memory' object!")),
                      !P.alloc && p.instance.exports.malloc)
                    ) {
                      const L = p.instance.exports;
                      (P.alloc = function (j) {
                        return (
                          L.malloc(j) || g('Allocation of', j, 'bytes failed.')
                        );
                      }),
                        (P.dealloc = function (j) {
                          L.free(j);
                        });
                    }
                    r(P);
                  }
                  return e.onload && e.onload(p, e), p;
                };
              return WebAssembly.instantiateStreaming
                ? function () {
                    return WebAssembly.instantiateStreaming(
                      s(),
                      e.imports || {},
                    ).then(i);
                  }
                : function () {
                    return s()
                      .then((g) => g.arrayBuffer())
                      .then((g) => WebAssembly.instantiate(g, e.imports || {}))
                      .then(i);
                  };
            }.bind(globalThis.WhWasmUtilInstaller)),
            (globalThis.Jaccwabyt = function e(s) {
              const r = (...f) => {
                throw new Error(f.join(' '));
              };
              !(s.heap instanceof WebAssembly.Memory) &&
                !(s.heap instanceof Function) &&
                r(
                  'config.heap must be WebAssembly.Memory instance or a function.',
                ),
                ['alloc', 'dealloc'].forEach(function (f) {
                  s[f] instanceof Function ||
                    r("Config option '" + f + "' must be a function.");
                });
              const i = e,
                l =
                  s.heap instanceof Function
                    ? s.heap
                    : () => new Uint8Array(s.heap.buffer),
                p = s.alloc,
                g = s.dealloc,
                P = s.log || console.log.bind(console),
                L = s.memberPrefix || '',
                j = s.memberSuffix || '',
                H =
                  s.bigIntEnabled === void 0
                    ? !!globalThis.BigInt64Array
                    : !!s.bigIntEnabled,
                I = globalThis.BigInt,
                A = globalThis.BigInt64Array,
                R = s.ptrSizeof || 4,
                b = s.ptrIR || 'i32';
              i.debugFlags ||
                ((i.__makeDebugFlags = function (f = null) {
                  f && f.__flags && (f = f.__flags);
                  const S = function k(D) {
                    return arguments.length === 0
                      ? k.__flags
                      : (D < 0
                          ? (delete k.__flags.getter,
                            delete k.__flags.setter,
                            delete k.__flags.alloc,
                            delete k.__flags.dealloc)
                          : ((k.__flags.getter = (1 & D) !== 0),
                            (k.__flags.setter = (2 & D) !== 0),
                            (k.__flags.alloc = (4 & D) !== 0),
                            (k.__flags.dealloc = (8 & D) !== 0)),
                        k._flags);
                  };
                  return (
                    Object.defineProperty(S, '__flags', {
                      iterable: !1,
                      writable: !1,
                      value: Object.create(f),
                    }),
                    f || S(0),
                    S
                  );
                }),
                (i.debugFlags = i.__makeDebugFlags()));
              const E = (function () {
                  const f = new ArrayBuffer(2);
                  return (
                    new DataView(f).setInt16(0, 256, !0),
                    new Int16Array(f)[0] === 256
                  );
                })(),
                T = (f) => f[1] === '(',
                F = (f) => f === 'P',
                C = (f) => (T(f) ? 'p' : f[0]),
                x = function (f) {
                  switch (C(f)) {
                    case 'c':
                    case 'C':
                      return 'i8';
                    case 'i':
                      return 'i32';
                    case 'p':
                    case 'P':
                    case 's':
                      return b;
                    case 'j':
                      return 'i64';
                    case 'f':
                      return 'float';
                    case 'd':
                      return 'double';
                  }
                  r('Unhandled signature IR:', f);
                },
                N = A ? () => !0 : () => r('BigInt64Array is not available.'),
                Q = function (f) {
                  switch (C(f)) {
                    case 'p':
                    case 'P':
                    case 's': {
                      switch (R) {
                        case 4:
                          return 'getInt32';
                        case 8:
                          return N() && 'getBigInt64';
                      }
                      break;
                    }
                    case 'i':
                      return 'getInt32';
                    case 'c':
                      return 'getInt8';
                    case 'C':
                      return 'getUint8';
                    case 'j':
                      return N() && 'getBigInt64';
                    case 'f':
                      return 'getFloat32';
                    case 'd':
                      return 'getFloat64';
                  }
                  r('Unhandled DataView getter for signature:', f);
                },
                c = function (f) {
                  switch (C(f)) {
                    case 'p':
                    case 'P':
                    case 's': {
                      switch (R) {
                        case 4:
                          return 'setInt32';
                        case 8:
                          return N() && 'setBigInt64';
                      }
                      break;
                    }
                    case 'i':
                      return 'setInt32';
                    case 'c':
                      return 'setInt8';
                    case 'C':
                      return 'setUint8';
                    case 'j':
                      return N() && 'setBigInt64';
                    case 'f':
                      return 'setFloat32';
                    case 'd':
                      return 'setFloat64';
                  }
                  r('Unhandled DataView setter for signature:', f);
                },
                m = function (f) {
                  switch (C(f)) {
                    case 'i':
                    case 'f':
                    case 'c':
                    case 'C':
                    case 'd':
                      return Number;
                    case 'j':
                      return N() && I;
                    case 'p':
                    case 'P':
                    case 's':
                      switch (R) {
                        case 4:
                          return Number;
                        case 8:
                          return N() && I;
                      }
                      break;
                  }
                  r('Unhandled DataView set wrapper for signature:', f);
                },
                w = (f, S) => f + '::' + S,
                U = function (f, S) {
                  return () => r(w(f, S), 'is read-only.');
                },
                _ = new WeakMap(),
                h = '(pointer-is-external)',
                a = function (f, S, k) {
                  if ((k || (k = _.get(S)), k)) {
                    if ((_.delete(S), Array.isArray(S.ondispose))) {
                      let D;
                      for (; (D = S.ondispose.shift()); )
                        try {
                          D instanceof Function
                            ? D.call(S)
                            : D instanceof V
                              ? D.dispose()
                              : typeof D == 'number' && g(D);
                        } catch (G) {
                          console.warn(
                            'ondispose() for',
                            f.structName,
                            '@',
                            k,
                            'threw. NOT propagating it.',
                            G,
                          );
                        }
                    } else if (S.ondispose instanceof Function)
                      try {
                        S.ondispose();
                      } catch (D) {
                        console.warn(
                          'ondispose() for',
                          f.structName,
                          '@',
                          k,
                          'threw. NOT propagating it.',
                          D,
                        );
                      }
                    delete S.ondispose,
                      f.debugFlags.__flags.dealloc &&
                        P(
                          'debug.dealloc:',
                          S[h] ? 'EXTERNAL' : '',
                          f.structName,
                          'instance:',
                          f.structInfo.sizeof,
                          'bytes @' + k,
                        ),
                      S[h] || g(k);
                  }
                },
                u = (f) => ({
                  configurable: !1,
                  writable: !1,
                  iterable: !1,
                  value: f,
                }),
                y = function (f, S, k) {
                  let D = !k;
                  k
                    ? Object.defineProperty(S, h, u(k))
                    : ((k = p(f.structInfo.sizeof)),
                      k ||
                        r('Allocation of', f.structName, 'structure failed.'));
                  try {
                    f.debugFlags.__flags.alloc &&
                      P(
                        'debug.alloc:',
                        D ? '' : 'EXTERNAL',
                        f.structName,
                        'instance:',
                        f.structInfo.sizeof,
                        'bytes @' + k,
                      ),
                      D && l().fill(0, k, k + f.structInfo.sizeof),
                      _.set(S, k);
                  } catch (G) {
                    throw (a(f, S, k), G);
                  }
                },
                q = function () {
                  const f = this.pointer;
                  return f
                    ? new Uint8Array(l().slice(f, f + this.structInfo.sizeof))
                    : null;
                },
                K = u((f) => L + f + j),
                Z = function (f, S, k = !0) {
                  let D = f.members[S];
                  if (!D && (L || j)) {
                    for (const G of Object.values(f.members))
                      if (G.key === S) {
                        D = G;
                        break;
                      }
                    !D &&
                      k &&
                      r(w(f.name, S), 'is not a mapped struct member.');
                  }
                  return D;
                },
                re = function f(S, k, D = !1) {
                  f._ ||
                    (f._ = (Y) =>
                      Y.replace(/[^vipPsjrdcC]/g, '').replace(/[pPscC]/g, 'i'));
                  const G = Z(S.structInfo, k, !0);
                  return D ? f._(G.signature) : G.signature;
                },
                ee = {
                  configurable: !1,
                  enumerable: !1,
                  get: function () {
                    return _.get(this);
                  },
                  set: () =>
                    r("Cannot assign the 'pointer' property of a struct."),
                },
                te = u(function () {
                  const f = [];
                  for (const S of Object.keys(this.structInfo.members))
                    f.push(this.memberKey(S));
                  return f;
                }),
                oe = new TextDecoder('utf-8'),
                ae = new TextEncoder(),
                fe =
                  typeof SharedArrayBuffer > 'u'
                    ? function () {}
                    : SharedArrayBuffer,
                pe = function (f, S, k) {
                  return oe.decode(
                    f.buffer instanceof fe ? f.slice(S, k) : f.subarray(S, k),
                  );
                },
                be = function (f, S, k = !1) {
                  const D = Z(f.structInfo, S, k);
                  return D && D.signature.length === 1 && D.signature[0] === 's'
                    ? D
                    : !1;
                },
                me = function (f) {
                  f.signature !== 's' &&
                    r(
                      'Invalid member type signature for C-string value:',
                      JSON.stringify(f),
                    );
                },
                O = function (S, k) {
                  const D = Z(S.structInfo, k, !0);
                  me(D);
                  const G = S[D.key];
                  if (!G) return null;
                  let Y = G;
                  const se = l();
                  for (; se[Y] !== 0; ++Y);
                  return G === Y ? '' : pe(se, G, Y);
                },
                M = function (f, ...S) {
                  f.ondispose
                    ? Array.isArray(f.ondispose) ||
                      (f.ondispose = [f.ondispose])
                    : (f.ondispose = []),
                    f.ondispose.push(...S);
                },
                z = function (f) {
                  const S = ae.encode(f),
                    k = p(S.length + 1);
                  k || r('Allocation error while duplicating string:', f);
                  const D = l();
                  return D.set(S, k), (D[k + S.length] = 0), k;
                },
                $ = function (f, S, k) {
                  const D = Z(f.structInfo, S, !0);
                  me(D);
                  const G = z(k);
                  return (f[D.key] = G), M(f, G), f;
                },
                V = function (S, k) {
                  arguments[2] !== u &&
                    r(
                      'Do not call the StructType constructor',
                      'from client-level code.',
                    ),
                    Object.defineProperties(this, {
                      structName: u(S),
                      structInfo: u(k),
                    });
                };
              (V.prototype = Object.create(null, {
                dispose: u(function () {
                  a(this.constructor, this);
                }),
                lookupMember: u(function (f, S = !0) {
                  return Z(this.structInfo, f, S);
                }),
                memberToJsString: u(function (f) {
                  return O(this, f);
                }),
                memberIsString: u(function (f, S = !0) {
                  return be(this, f, S);
                }),
                memberKey: K,
                memberKeys: te,
                memberSignature: u(function (f, S = !1) {
                  return re(this, f, S);
                }),
                memoryDump: u(q),
                pointer: ee,
                setMemberCString: u(function (f, S) {
                  return $(this, f, S);
                }),
              })),
                Object.assign(V.prototype, {
                  addOnDispose: function (...f) {
                    return M(this, ...f), this;
                  },
                }),
                Object.defineProperties(V, {
                  allocCString: u(z),
                  isA: u((f) => f instanceof V),
                  hasExternalPointer: u((f) => f instanceof V && !!f[h]),
                  memberKey: K,
                });
              const J = (f) => Number.isFinite(f) || f instanceof (I || Number),
                W = function f(S, k, D) {
                  if (!f._) {
                    f._ = { getters: {}, setters: {}, sw: {} };
                    const we = ['i', 'c', 'C', 'p', 'P', 's', 'f', 'd', 'v()'];
                    H && we.push('j'),
                      we.forEach(function (Oe) {
                        (f._.getters[Oe] = Q(Oe)),
                          (f._.setters[Oe] = c(Oe)),
                          (f._.sw[Oe] = m(Oe));
                      });
                    const Xn = /^[ipPsjfdcC]$/,
                      Yn = /^[vipPsjfdcC]\([ipPsjfdcC]*\)$/;
                    f.sigCheck = function (Oe, Zn, Mt, ft) {
                      Object.prototype.hasOwnProperty.call(Oe, Mt) &&
                        r(
                          Oe.structName,
                          'already has a property named',
                          Mt + '.',
                        ),
                        Xn.test(ft) ||
                          Yn.test(ft) ||
                          r(
                            'Malformed signature for',
                            w(Oe.structName, Zn) + ':',
                            ft,
                          );
                    };
                  }
                  const G = S.memberKey(k);
                  f.sigCheck(S.prototype, k, G, D.signature),
                    (D.key = G),
                    (D.name = k);
                  const Y = C(D.signature),
                    se = w(S.prototype.structName, G),
                    ue = S.prototype.debugFlags.__flags,
                    xe = Object.create(null);
                  (xe.configurable = !1),
                    (xe.enumerable = !1),
                    (xe.get = function () {
                      ue.getter &&
                        P(
                          'debug.getter:',
                          f._.getters[Y],
                          'for',
                          x(Y),
                          se,
                          '@',
                          this.pointer,
                          '+',
                          D.offset,
                          'sz',
                          D.sizeof,
                        );
                      let we = new DataView(
                        l().buffer,
                        this.pointer + D.offset,
                        D.sizeof,
                      )[f._.getters[Y]](0, E);
                      return (
                        ue.getter && P('debug.getter:', se, 'result =', we), we
                      );
                    }),
                    D.readOnly
                      ? (xe.set = U(S.prototype.structName, G))
                      : (xe.set = function (we) {
                          if (
                            (ue.setter &&
                              P(
                                'debug.setter:',
                                f._.setters[Y],
                                'for',
                                x(Y),
                                se,
                                '@',
                                this.pointer,
                                '+',
                                D.offset,
                                'sz',
                                D.sizeof,
                                we,
                              ),
                            this.pointer ||
                              r(
                                'Cannot set struct property on disposed instance.',
                              ),
                            we === null)
                          )
                            we = 0;
                          else
                            for (; !J(we); ) {
                              if (F(D.signature) && we instanceof V) {
                                (we = we.pointer || 0),
                                  ue.setter &&
                                    P('debug.setter:', se, 'resolved to', we);
                                break;
                              }
                              r('Invalid value for pointer-type', se + '.');
                            }
                          new DataView(
                            l().buffer,
                            this.pointer + D.offset,
                            D.sizeof,
                          )[f._.setters[Y]](0, f._.sw[Y](we), E);
                        }),
                    Object.defineProperty(S.prototype, G, xe);
                },
                d = function f(S, k) {
                  arguments.length === 1
                    ? ((k = S), (S = k.name))
                    : k.name || (k.name = S),
                    S || r('Struct name is required.');
                  let D = !1;
                  Object.keys(k.members).forEach((se) => {
                    const ue = k.members[se];
                    ue.sizeof
                      ? ue.sizeof === 1
                        ? ue.signature === 'c' ||
                          ue.signature === 'C' ||
                          r(
                            'Unexpected sizeof==1 member',
                            w(k.name, se),
                            'with signature',
                            ue.signature,
                          )
                        : (ue.sizeof % 4 !== 0 &&
                            (console.warn(
                              'Invalid struct member description =',
                              ue,
                              'from',
                              k,
                            ),
                            r(
                              S,
                              'member',
                              se,
                              'sizeof is not aligned. sizeof=' + ue.sizeof,
                            )),
                          ue.offset % 4 !== 0 &&
                            (console.warn(
                              'Invalid struct member description =',
                              ue,
                              'from',
                              k,
                            ),
                            r(
                              S,
                              'member',
                              se,
                              'offset is not aligned. offset=' + ue.offset,
                            )))
                      : r(S, 'member', se, 'is missing sizeof.'),
                      (!D || D.offset < ue.offset) && (D = ue);
                  }),
                    D
                      ? k.sizeof < D.offset + D.sizeof &&
                        r(
                          'Invalid struct config:',
                          S,
                          'max member offset (' + D.offset + ') ',
                          'extends past end of struct (sizeof=' +
                            k.sizeof +
                            ').',
                        )
                      : r('No member property descriptions found.');
                  const G = u(i.__makeDebugFlags(f.debugFlags)),
                    Y = function se(ue) {
                      this instanceof se
                        ? arguments.length
                          ? ((ue !== (ue | 0) || ue <= 0) &&
                              r('Invalid pointer value for', S, 'constructor.'),
                            y(se, this, ue))
                          : y(se, this)
                        : r(
                            'The',
                            S,
                            "constructor may only be called via 'new'.",
                          );
                    };
                  return (
                    Object.defineProperties(Y, {
                      debugFlags: G,
                      isA: u((se) => se instanceof Y),
                      memberKey: K,
                      memberKeys: te,
                      methodInfoForKey: u(function (se) {}),
                      structInfo: u(k),
                      structName: u(S),
                    }),
                    (Y.prototype = new V(S, k, u)),
                    Object.defineProperties(Y.prototype, {
                      debugFlags: G,
                      constructor: u(Y),
                    }),
                    Object.keys(k.members).forEach((se) =>
                      W(Y, se, k.members[se]),
                    ),
                    Y
                  );
                };
              return (
                (d.StructType = V),
                (d.config = s),
                (d.allocCString = z),
                d.debugFlags ||
                  (d.debugFlags = i.__makeDebugFlags(i.debugFlags)),
                d
              );
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              const s = (...b) => {
                throw new Error(b.join(' '));
              };
              e.SQLite3Error.toss;
              const r = e.capi,
                i = e.wasm,
                l = e.util;
              if (
                (globalThis.WhWasmUtilInstaller(i),
                delete globalThis.WhWasmUtilInstaller,
                (i.bindingSignatures = [
                  [
                    'sqlite3_aggregate_context',
                    'void*',
                    'sqlite3_context*',
                    'int',
                  ],
                  ['sqlite3_bind_double', 'int', 'sqlite3_stmt*', 'int', 'f64'],
                  ['sqlite3_bind_int', 'int', 'sqlite3_stmt*', 'int', 'int'],
                  ['sqlite3_bind_null', void 0, 'sqlite3_stmt*', 'int'],
                  ['sqlite3_bind_parameter_count', 'int', 'sqlite3_stmt*'],
                  [
                    'sqlite3_bind_parameter_index',
                    'int',
                    'sqlite3_stmt*',
                    'string',
                  ],
                  [
                    'sqlite3_bind_pointer',
                    'int',
                    'sqlite3_stmt*',
                    'int',
                    '*',
                    'string:static',
                    '*',
                  ],
                  [
                    'sqlite3_busy_handler',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        signature: 'i(pi)',
                        contextKey: (b, E) => b[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_busy_timeout', 'int', 'sqlite3*', 'int'],
                  ['sqlite3_changes', 'int', 'sqlite3*'],
                  ['sqlite3_clear_bindings', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_collation_needed', 'int', 'sqlite3*', '*', '*'],
                  ['sqlite3_column_blob', '*', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_bytes', 'int', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_count', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_column_double', 'f64', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_int', 'int', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_name', 'string', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_text', 'string', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_type', 'int', 'sqlite3_stmt*', 'int'],
                  [
                    'sqlite3_column_value',
                    'sqlite3_value*',
                    'sqlite3_stmt*',
                    'int',
                  ],
                  [
                    'sqlite3_commit_hook',
                    'void*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_commit_hook',
                        signature: 'i(p)',
                        contextKey: (b) => b[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_compileoption_get', 'string', 'int'],
                  ['sqlite3_compileoption_used', 'int', 'string'],
                  ['sqlite3_complete', 'int', 'string:flexible'],
                  ['sqlite3_context_db_handle', 'sqlite3*', 'sqlite3_context*'],
                  ['sqlite3_data_count', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_db_filename', 'string', 'sqlite3*', 'string'],
                  ['sqlite3_db_handle', 'sqlite3*', 'sqlite3_stmt*'],
                  ['sqlite3_db_name', 'string', 'sqlite3*', 'int'],
                  [
                    'sqlite3_db_status',
                    'int',
                    'sqlite3*',
                    'int',
                    '*',
                    '*',
                    'int',
                  ],
                  ['sqlite3_errcode', 'int', 'sqlite3*'],
                  ['sqlite3_errmsg', 'string', 'sqlite3*'],
                  ['sqlite3_error_offset', 'int', 'sqlite3*'],
                  ['sqlite3_errstr', 'string', 'int'],
                  [
                    'sqlite3_exec',
                    'int',
                    [
                      'sqlite3*',
                      'string:flexible',
                      new i.xWrap.FuncPtrAdapter({
                        signature: 'i(pipp)',
                        bindScope: 'transient',
                        callProxy: (b) => {
                          let E;
                          return (T, F, C, x) => {
                            try {
                              const N = i.cArgvToJs(F, C);
                              return E || (E = i.cArgvToJs(F, x)), b(N, E) | 0;
                            } catch (N) {
                              return N.resultCode || r.SQLITE_ERROR;
                            }
                          };
                        },
                      }),
                      '*',
                      '**',
                    ],
                  ],
                  ['sqlite3_expanded_sql', 'string', 'sqlite3_stmt*'],
                  ['sqlite3_extended_errcode', 'int', 'sqlite3*'],
                  ['sqlite3_extended_result_codes', 'int', 'sqlite3*', 'int'],
                  [
                    'sqlite3_file_control',
                    'int',
                    'sqlite3*',
                    'string',
                    'int',
                    '*',
                  ],
                  ['sqlite3_finalize', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_free', void 0, '*'],
                  ['sqlite3_get_autocommit', 'int', 'sqlite3*'],
                  ['sqlite3_get_auxdata', '*', 'sqlite3_context*', 'int'],
                  ['sqlite3_initialize', void 0],
                  ['sqlite3_keyword_count', 'int'],
                  ['sqlite3_keyword_name', 'int', ['int', '**', '*']],
                  ['sqlite3_keyword_check', 'int', ['string', 'int']],
                  ['sqlite3_libversion', 'string'],
                  ['sqlite3_libversion_number', 'int'],
                  ['sqlite3_limit', 'int', ['sqlite3*', 'int', 'int']],
                  ['sqlite3_malloc', '*', 'int'],
                  ['sqlite3_open', 'int', 'string', '*'],
                  ['sqlite3_open_v2', 'int', 'string', '*', 'int', 'string'],
                  [
                    'sqlite3_progress_handler',
                    void 0,
                    [
                      'sqlite3*',
                      'int',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xProgressHandler',
                        signature: 'i(p)',
                        bindScope: 'context',
                        contextKey: (b, E) => b[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_realloc', '*', '*', 'int'],
                  ['sqlite3_reset', 'int', 'sqlite3_stmt*'],
                  [
                    'sqlite3_result_blob',
                    void 0,
                    'sqlite3_context*',
                    '*',
                    'int',
                    '*',
                  ],
                  ['sqlite3_result_double', void 0, 'sqlite3_context*', 'f64'],
                  [
                    'sqlite3_result_error',
                    void 0,
                    'sqlite3_context*',
                    'string',
                    'int',
                  ],
                  [
                    'sqlite3_result_error_code',
                    void 0,
                    'sqlite3_context*',
                    'int',
                  ],
                  ['sqlite3_result_error_nomem', void 0, 'sqlite3_context*'],
                  ['sqlite3_result_error_toobig', void 0, 'sqlite3_context*'],
                  ['sqlite3_result_int', void 0, 'sqlite3_context*', 'int'],
                  ['sqlite3_result_null', void 0, 'sqlite3_context*'],
                  [
                    'sqlite3_result_pointer',
                    void 0,
                    'sqlite3_context*',
                    '*',
                    'string:static',
                    '*',
                  ],
                  ['sqlite3_result_subtype', void 0, 'sqlite3_value*', 'int'],
                  [
                    'sqlite3_result_text',
                    void 0,
                    'sqlite3_context*',
                    'string',
                    'int',
                    '*',
                  ],
                  [
                    'sqlite3_result_zeroblob',
                    void 0,
                    'sqlite3_context*',
                    'int',
                  ],
                  [
                    'sqlite3_rollback_hook',
                    'void*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_rollback_hook',
                        signature: 'v(p)',
                        contextKey: (b) => b[0],
                      }),
                      '*',
                    ],
                  ],
                  [
                    'sqlite3_set_authorizer',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_set_authorizer::xAuth',
                        signature: 'i(pissss)',
                        contextKey: (b, E) => b[0],
                        callProxy: (b) => (E, T, F, C, x, N) => {
                          try {
                            return (
                              (F = F && i.cstrToJs(F)),
                              (C = C && i.cstrToJs(C)),
                              (x = x && i.cstrToJs(x)),
                              (N = N && i.cstrToJs(N)),
                              b(E, T, F, C, x, N) || 0
                            );
                          } catch (Q) {
                            return Q.resultCode || r.SQLITE_ERROR;
                          }
                        },
                      }),
                      '*',
                    ],
                  ],
                  [
                    'sqlite3_set_auxdata',
                    void 0,
                    [
                      'sqlite3_context*',
                      'int',
                      '*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xDestroyAuxData',
                        signature: 'v(*)',
                        contextKey: (b, E) => b[0],
                      }),
                    ],
                  ],
                  ['sqlite3_shutdown', void 0],
                  ['sqlite3_sourceid', 'string'],
                  ['sqlite3_sql', 'string', 'sqlite3_stmt*'],
                  ['sqlite3_status', 'int', 'int', '*', '*', 'int'],
                  ['sqlite3_step', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_stmt_isexplain', 'int', ['sqlite3_stmt*']],
                  ['sqlite3_stmt_readonly', 'int', ['sqlite3_stmt*']],
                  ['sqlite3_stmt_status', 'int', 'sqlite3_stmt*', 'int', 'int'],
                  ['sqlite3_strglob', 'int', 'string', 'string'],
                  ['sqlite3_stricmp', 'int', 'string', 'string'],
                  ['sqlite3_strlike', 'int', 'string', 'string', 'int'],
                  ['sqlite3_strnicmp', 'int', 'string', 'string', 'int'],
                  [
                    'sqlite3_table_column_metadata',
                    'int',
                    'sqlite3*',
                    'string',
                    'string',
                    'string',
                    '**',
                    '**',
                    '*',
                    '*',
                    '*',
                  ],
                  ['sqlite3_total_changes', 'int', 'sqlite3*'],
                  [
                    'sqlite3_trace_v2',
                    'int',
                    [
                      'sqlite3*',
                      'int',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_trace_v2::callback',
                        signature: 'i(ippp)',
                        contextKey: (b, E) => b[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_txn_state', 'int', ['sqlite3*', 'string']],
                  [
                    'sqlite3_uri_boolean',
                    'int',
                    'sqlite3_filename',
                    'string',
                    'int',
                  ],
                  ['sqlite3_uri_key', 'string', 'sqlite3_filename', 'int'],
                  [
                    'sqlite3_uri_parameter',
                    'string',
                    'sqlite3_filename',
                    'string',
                  ],
                  ['sqlite3_user_data', 'void*', 'sqlite3_context*'],
                  ['sqlite3_value_blob', '*', 'sqlite3_value*'],
                  ['sqlite3_value_bytes', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_double', 'f64', 'sqlite3_value*'],
                  ['sqlite3_value_dup', 'sqlite3_value*', 'sqlite3_value*'],
                  ['sqlite3_value_free', void 0, 'sqlite3_value*'],
                  ['sqlite3_value_frombind', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_int', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_nochange', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_numeric_type', 'int', 'sqlite3_value*'],
                  [
                    'sqlite3_value_pointer',
                    '*',
                    'sqlite3_value*',
                    'string:static',
                  ],
                  ['sqlite3_value_subtype', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_text', 'string', 'sqlite3_value*'],
                  ['sqlite3_value_type', 'int', 'sqlite3_value*'],
                  ['sqlite3_vfs_find', '*', 'string'],
                  ['sqlite3_vfs_register', 'int', 'sqlite3_vfs*', 'int'],
                  ['sqlite3_vfs_unregister', 'int', 'sqlite3_vfs*'],
                ]),
                (i.bindingSignatures.int64 = [
                  [
                    'sqlite3_bind_int64',
                    'int',
                    ['sqlite3_stmt*', 'int', 'i64'],
                  ],
                  ['sqlite3_changes64', 'i64', ['sqlite3*']],
                  ['sqlite3_column_int64', 'i64', ['sqlite3_stmt*', 'int']],
                  [
                    'sqlite3_create_module',
                    'int',
                    ['sqlite3*', 'string', 'sqlite3_module*', '*'],
                  ],
                  [
                    'sqlite3_create_module_v2',
                    'int',
                    ['sqlite3*', 'string', 'sqlite3_module*', '*', '*'],
                  ],
                  [
                    'sqlite3_declare_vtab',
                    'int',
                    ['sqlite3*', 'string:flexible'],
                  ],
                  [
                    'sqlite3_deserialize',
                    'int',
                    'sqlite3*',
                    'string',
                    '*',
                    'i64',
                    'i64',
                    'int',
                  ],
                  ['sqlite3_drop_modules', 'int', ['sqlite3*', '**']],
                  ['sqlite3_last_insert_rowid', 'i64', ['sqlite3*']],
                  ['sqlite3_malloc64', '*', 'i64'],
                  ['sqlite3_msize', 'i64', '*'],
                  [
                    'sqlite3_overload_function',
                    'int',
                    ['sqlite3*', 'string', 'int'],
                  ],
                  ['sqlite3_preupdate_blobwrite', 'int', 'sqlite3*'],
                  ['sqlite3_preupdate_count', 'int', 'sqlite3*'],
                  ['sqlite3_preupdate_depth', 'int', 'sqlite3*'],
                  [
                    'sqlite3_preupdate_hook',
                    '*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_preupdate_hook',
                        signature: 'v(ppippjj)',
                        contextKey: (b) => b[0],
                        callProxy: (b) => (E, T, F, C, x, N, Q) => {
                          b(E, T, F, i.cstrToJs(C), i.cstrToJs(x), N, Q);
                        },
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_preupdate_new', 'int', ['sqlite3*', 'int', '**']],
                  ['sqlite3_preupdate_old', 'int', ['sqlite3*', 'int', '**']],
                  ['sqlite3_realloc64', '*', '*', 'i64'],
                  ['sqlite3_result_int64', void 0, '*', 'i64'],
                  ['sqlite3_result_zeroblob64', 'int', '*', 'i64'],
                  ['sqlite3_serialize', '*', 'sqlite3*', 'string', '*', 'int'],
                  [
                    'sqlite3_set_last_insert_rowid',
                    void 0,
                    ['sqlite3*', 'i64'],
                  ],
                  ['sqlite3_status64', 'int', 'int', '*', '*', 'int'],
                  ['sqlite3_total_changes64', 'i64', ['sqlite3*']],
                  [
                    'sqlite3_update_hook',
                    '*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_update_hook',
                        signature: 'v(iippj)',
                        contextKey: (b) => b[0],
                        callProxy: (b) => (E, T, F, C, x) => {
                          b(E, T, i.cstrToJs(F), i.cstrToJs(C), x);
                        },
                      }),
                      '*',
                    ],
                  ],
                  [
                    'sqlite3_uri_int64',
                    'i64',
                    ['sqlite3_filename', 'string', 'i64'],
                  ],
                  ['sqlite3_value_int64', 'i64', 'sqlite3_value*'],
                  [
                    'sqlite3_vtab_collation',
                    'string',
                    'sqlite3_index_info*',
                    'int',
                  ],
                  ['sqlite3_vtab_distinct', 'int', 'sqlite3_index_info*'],
                  [
                    'sqlite3_vtab_in',
                    'int',
                    'sqlite3_index_info*',
                    'int',
                    'int',
                  ],
                  ['sqlite3_vtab_in_first', 'int', 'sqlite3_value*', '**'],
                  ['sqlite3_vtab_in_next', 'int', 'sqlite3_value*', '**'],
                  ['sqlite3_vtab_nochange', 'int', 'sqlite3_context*'],
                  ['sqlite3_vtab_on_conflict', 'int', 'sqlite3*'],
                  [
                    'sqlite3_vtab_rhs_value',
                    'int',
                    'sqlite3_index_info*',
                    'int',
                    '**',
                  ],
                ]),
                i.bigIntEnabled && i.exports.sqlite3changegroup_add)
              ) {
                const b = {
                  signature: 'i(ps)',
                  callProxy: (E) => (T, F) => {
                    try {
                      return E(T, i.cstrToJs(F)) | 0;
                    } catch (C) {
                      return C.resultCode || r.SQLITE_ERROR;
                    }
                  },
                };
                i.bindingSignatures.int64.push(
                  [
                    'sqlite3changegroup_add',
                    'int',
                    ['sqlite3_changegroup*', 'int', 'void*'],
                  ],
                  [
                    'sqlite3changegroup_add_strm',
                    'int',
                    [
                      'sqlite3_changegroup*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changegroup_delete',
                    void 0,
                    ['sqlite3_changegroup*'],
                  ],
                  ['sqlite3changegroup_new', 'int', ['**']],
                  [
                    'sqlite3changegroup_output',
                    'int',
                    ['sqlite3_changegroup*', 'int*', '**'],
                  ],
                  [
                    'sqlite3changegroup_output_strm',
                    'int',
                    [
                      'sqlite3_changegroup*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppi)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply',
                    'int',
                    [
                      'sqlite3*',
                      'int',
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...b,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply_strm',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...b,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply_v2',
                    'int',
                    [
                      'sqlite3*',
                      'int',
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...b,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      '**',
                      'int*',
                      'int',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply_v2_strm',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...b,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      '**',
                      'int*',
                      'int',
                    ],
                  ],
                  [
                    'sqlite3changeset_concat',
                    'int',
                    ['int', 'void*', 'int', 'void*', 'int*', '**'],
                  ],
                  [
                    'sqlite3changeset_concat_strm',
                    'int',
                    [
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInputA',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInputB',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppi)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_conflict',
                    'int',
                    ['sqlite3_changeset_iter*', 'int', '**'],
                  ],
                  [
                    'sqlite3changeset_finalize',
                    'int',
                    ['sqlite3_changeset_iter*'],
                  ],
                  [
                    'sqlite3changeset_fk_conflicts',
                    'int',
                    ['sqlite3_changeset_iter*', 'int*'],
                  ],
                  [
                    'sqlite3changeset_invert',
                    'int',
                    ['int', 'void*', 'int*', '**'],
                  ],
                  [
                    'sqlite3changeset_invert_strm',
                    'int',
                    [
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppi)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_new',
                    'int',
                    ['sqlite3_changeset_iter*', 'int', '**'],
                  ],
                  ['sqlite3changeset_next', 'int', ['sqlite3_changeset_iter*']],
                  [
                    'sqlite3changeset_old',
                    'int',
                    ['sqlite3_changeset_iter*', 'int', '**'],
                  ],
                  [
                    'sqlite3changeset_op',
                    'int',
                    ['sqlite3_changeset_iter*', '**', 'int*', 'int*', 'int*'],
                  ],
                  [
                    'sqlite3changeset_pk',
                    'int',
                    ['sqlite3_changeset_iter*', '**', 'int*'],
                  ],
                  ['sqlite3changeset_start', 'int', ['**', 'int', '*']],
                  [
                    'sqlite3changeset_start_strm',
                    'int',
                    [
                      '**',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_start_v2',
                    'int',
                    ['**', 'int', '*', 'int'],
                  ],
                  [
                    'sqlite3changeset_start_v2_strm',
                    'int',
                    [
                      '**',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      'int',
                    ],
                  ],
                  [
                    'sqlite3session_attach',
                    'int',
                    ['sqlite3_session*', 'string'],
                  ],
                  [
                    'sqlite3session_changeset',
                    'int',
                    ['sqlite3_session*', 'int*', '**'],
                  ],
                  [
                    'sqlite3session_changeset_size',
                    'i64',
                    ['sqlite3_session*'],
                  ],
                  [
                    'sqlite3session_changeset_strm',
                    'int',
                    [
                      'sqlite3_session*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  ['sqlite3session_config', 'int', ['int', 'void*']],
                  [
                    'sqlite3session_create',
                    'int',
                    ['sqlite3*', 'string', '**'],
                  ],
                  [
                    'sqlite3session_diff',
                    'int',
                    ['sqlite3_session*', 'string', 'string', '**'],
                  ],
                  ['sqlite3session_enable', 'int', ['sqlite3_session*', 'int']],
                  [
                    'sqlite3session_indirect',
                    'int',
                    ['sqlite3_session*', 'int'],
                  ],
                  ['sqlite3session_isempty', 'int', ['sqlite3_session*']],
                  ['sqlite3session_memory_used', 'i64', ['sqlite3_session*']],
                  [
                    'sqlite3session_object_config',
                    'int',
                    ['sqlite3_session*', 'int', 'void*'],
                  ],
                  [
                    'sqlite3session_patchset',
                    'int',
                    ['sqlite3_session*', '*', '**'],
                  ],
                  [
                    'sqlite3session_patchset_strm',
                    'int',
                    [
                      'sqlite3_session*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3session_table_filter',
                    void 0,
                    [
                      'sqlite3_session*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        ...b,
                        contextKey: (E, T) => E[0],
                      }),
                      '*',
                    ],
                  ],
                );
              }
              (i.bindingSignatures.wasmInternal = [
                ['sqlite3__wasm_db_reset', 'int', 'sqlite3*'],
                ['sqlite3__wasm_db_vfs', 'sqlite3_vfs*', 'sqlite3*', 'string'],
                [
                  'sqlite3__wasm_vfs_create_file',
                  'int',
                  'sqlite3_vfs*',
                  'string',
                  '*',
                  'int',
                ],
                [
                  'sqlite3__wasm_posix_create_file',
                  'int',
                  'string',
                  '*',
                  'int',
                ],
                ['sqlite3__wasm_vfs_unlink', 'int', 'sqlite3_vfs*', 'string'],
                ['sqlite3__wasm_qfmt_token', 'string:dealloc', 'string', 'int'],
              ]),
                (e.StructBinder = globalThis.Jaccwabyt({
                  heap: i.heap8u,
                  alloc: i.alloc,
                  dealloc: i.dealloc,
                  bigIntEnabled: i.bigIntEnabled,
                  memberPrefix: '$',
                })),
                delete globalThis.Jaccwabyt;
              {
                const b = i.xWrap.argAdapter('string');
                i.xWrap.argAdapter('string:flexible', (x) =>
                  b(l.flexibleString(x)),
                ),
                  i.xWrap.argAdapter(
                    'string:static',
                    function (x) {
                      return i.isPtr(x)
                        ? x
                        : ((x = '' + x),
                          this[x] || (this[x] = i.allocCString(x)));
                    }.bind(Object.create(null)),
                  );
                const E = i.xWrap.argAdapter('*'),
                  T = function () {};
                i.xWrap.argAdapter('sqlite3_filename', E)(
                  'sqlite3_context*',
                  E,
                )('sqlite3_value*', E)('void*', E)('sqlite3_changegroup*', E)(
                  'sqlite3_changeset_iter*',
                  E,
                )('sqlite3_session*', E)('sqlite3_stmt*', (x) => {
                  var N;
                  return E(
                    x instanceof
                      (((N = e == null ? void 0 : e.oo1) == null
                        ? void 0
                        : N.Stmt) || T)
                      ? x.pointer
                      : x,
                  );
                })('sqlite3*', (x) => {
                  var N;
                  return E(
                    x instanceof
                      (((N = e == null ? void 0 : e.oo1) == null
                        ? void 0
                        : N.DB) || T)
                      ? x.pointer
                      : x,
                  );
                })('sqlite3_index_info*', (x) =>
                  E(x instanceof (r.sqlite3_index_info || T) ? x.pointer : x),
                )('sqlite3_module*', (x) =>
                  E(x instanceof (r.sqlite3_module || T) ? x.pointer : x),
                )('sqlite3_vfs*', (x) =>
                  typeof x == 'string'
                    ? r.sqlite3_vfs_find(x) ||
                      e.SQLite3Error.toss(
                        r.SQLITE_NOTFOUND,
                        'Unknown sqlite3_vfs name:',
                        x,
                      )
                    : E(x instanceof (r.sqlite3_vfs || T) ? x.pointer : x),
                );
                const F = i.xWrap.resultAdapter('*');
                i.xWrap.resultAdapter('sqlite3*', F)('sqlite3_context*', F)(
                  'sqlite3_stmt*',
                  F,
                )('sqlite3_value*', F)('sqlite3_vfs*', F)('void*', F),
                  i.exports.sqlite3_step.length === 0 &&
                    ((i.xWrap.doArgcCheck = !1),
                    e.config.warn(
                      'Disabling sqlite3.wasm.xWrap.doArgcCheck due to environmental quirks.',
                    ));
                for (const x of i.bindingSignatures)
                  r[x[0]] = i.xWrap.apply(null, x);
                for (const x of i.bindingSignatures.wasmInternal)
                  l[x[0]] = i.xWrap.apply(null, x);
                const C = function (x) {
                  return () =>
                    s(
                      x + '() is unavailable due to lack',
                      'of BigInt support in this build.',
                    );
                };
                for (const x of i.bindingSignatures.int64)
                  r[x[0]] = i.bigIntEnabled ? i.xWrap.apply(null, x) : C(x[0]);
                if (
                  (delete i.bindingSignatures, i.exports.sqlite3__wasm_db_error)
                ) {
                  const x = i.xWrap(
                    'sqlite3__wasm_db_error',
                    'int',
                    'sqlite3*',
                    'int',
                    'string',
                  );
                  l.sqlite3__wasm_db_error = function (N, Q, c) {
                    return (
                      Q instanceof e.WasmAllocError
                        ? ((Q = r.SQLITE_NOMEM), (c = 0))
                        : Q instanceof Error &&
                          ((c = c || '' + Q),
                          (Q = Q.resultCode || r.SQLITE_ERROR)),
                      N ? x(N, Q, c) : Q
                    );
                  };
                } else
                  l.sqlite3__wasm_db_error = function (x, N, Q) {
                    return (
                      console.warn(
                        'sqlite3__wasm_db_error() is not exported.',
                        arguments,
                      ),
                      N
                    );
                  };
              }
              {
                const b = i.xCall('sqlite3__wasm_enum_json');
                b ||
                  s(
                    "Maintenance required: increase sqlite3__wasm_enum_json()'s",
                    'static buffer size!',
                  ),
                  (i.ctype = JSON.parse(i.cstrToJs(b)));
                const E = [
                  'access',
                  'authorizer',
                  'blobFinalizers',
                  'changeset',
                  'config',
                  'dataTypes',
                  'dbConfig',
                  'dbStatus',
                  'encodings',
                  'fcntl',
                  'flock',
                  'ioCap',
                  'limits',
                  'openFlags',
                  'prepareFlags',
                  'resultCodes',
                  'sqlite3Status',
                  'stmtStatus',
                  'syncFlags',
                  'trace',
                  'txnState',
                  'udfFlags',
                  'version',
                ];
                i.bigIntEnabled && E.push('serialize', 'session', 'vtab');
                for (const C of E)
                  for (const x of Object.entries(i.ctype[C])) r[x[0]] = x[1];
                i.functionEntry(r.SQLITE_WASM_DEALLOC) ||
                  s(
                    'Internal error: cannot resolve exported function',
                    'entry SQLITE_WASM_DEALLOC (==' +
                      r.SQLITE_WASM_DEALLOC +
                      ').',
                  );
                const T = Object.create(null);
                for (const C of ['resultCodes'])
                  for (const x of Object.entries(i.ctype[C])) T[x[1]] = x[0];
                r.sqlite3_js_rc_str = (C) => T[C];
                const F = Object.assign(Object.create(null), {
                  WasmTestStruct: !0,
                  sqlite3_kvvfs_methods: !l.isUIThread(),
                  sqlite3_index_info: !i.bigIntEnabled,
                  sqlite3_index_constraint: !i.bigIntEnabled,
                  sqlite3_index_orderby: !i.bigIntEnabled,
                  sqlite3_index_constraint_usage: !i.bigIntEnabled,
                });
                for (const C of i.ctype.structs)
                  F[C.name] || (r[C.name] = e.StructBinder(C));
                if (r.sqlite3_index_info) {
                  for (const C of [
                    'sqlite3_index_constraint',
                    'sqlite3_index_orderby',
                    'sqlite3_index_constraint_usage',
                  ])
                    (r.sqlite3_index_info[C] = r[C]), delete r[C];
                  r.sqlite3_vtab_config = i.xWrap(
                    'sqlite3__wasm_vtab_config',
                    'int',
                    ['sqlite3*', 'int', 'int'],
                  );
                }
              }
              const p = (b, E, T) =>
                  l.sqlite3__wasm_db_error(
                    b,
                    r.SQLITE_MISUSE,
                    E +
                      '() requires ' +
                      T +
                      ' argument' +
                      (T === 1 ? '' : 's') +
                      '.',
                  ),
                g = (b) =>
                  l.sqlite3__wasm_db_error(
                    b,
                    r.SQLITE_FORMAT,
                    'SQLITE_UTF8 is the only supported encoding.',
                  ),
                P = (b) => i.xWrap.argAdapter('sqlite3*')(b),
                L = (b) => (i.isPtr(b) ? i.cstrToJs(b) : b),
                j = function (b, E) {
                  b = P(b);
                  let T = this.dbMap.get(b);
                  if (E)
                    !T && E > 0 && this.dbMap.set(b, (T = Object.create(null)));
                  else return this.dbMap.delete(b), T;
                  return T;
                }.bind(
                  Object.assign(Object.create(null), { dbMap: new Map() }),
                );
              (j.addCollation = function (b, E) {
                const T = j(b, 1);
                T.collation || (T.collation = new Set()),
                  T.collation.add(L(E).toLowerCase());
              }),
                (j._addUDF = function (b, E, T, F) {
                  E = L(E).toLowerCase();
                  let C = F.get(E);
                  C || F.set(E, (C = new Set())), C.add(T < 0 ? -1 : T);
                }),
                (j.addFunction = function (b, E, T) {
                  const F = j(b, 1);
                  F.udf || (F.udf = new Map()), this._addUDF(b, E, T, F.udf);
                }),
                (j.addWindowFunc = function (b, E, T) {
                  const F = j(b, 1);
                  F.wudf || (F.wudf = new Map()), this._addUDF(b, E, T, F.wudf);
                }),
                (j.cleanup = function (b) {
                  b = P(b);
                  const E = [b];
                  for (const C of [
                    'sqlite3_busy_handler',
                    'sqlite3_commit_hook',
                    'sqlite3_preupdate_hook',
                    'sqlite3_progress_handler',
                    'sqlite3_rollback_hook',
                    'sqlite3_set_authorizer',
                    'sqlite3_trace_v2',
                    'sqlite3_update_hook',
                  ]) {
                    const x = i.exports[C];
                    E.length = x.length;
                    try {
                      r[C](...E);
                    } catch (N) {
                      console.warn(
                        'close-time call of',
                        C + '(',
                        E,
                        ') threw:',
                        N,
                      );
                    }
                  }
                  const T = j(b, 0);
                  if (!T) return;
                  if (T.collation) {
                    for (const C of T.collation)
                      try {
                        r.sqlite3_create_collation_v2(
                          b,
                          C,
                          r.SQLITE_UTF8,
                          0,
                          0,
                          0,
                        );
                      } catch {}
                    delete T.collation;
                  }
                  let F;
                  for (F = 0; F < 2; ++F) {
                    const C = F ? T.wudf : T.udf;
                    if (!C) continue;
                    const x = F
                      ? r.sqlite3_create_window_function
                      : r.sqlite3_create_function_v2;
                    for (const N of C) {
                      const Q = N[0],
                        c = N[1],
                        m = [b, Q, 0, r.SQLITE_UTF8, 0, 0, 0, 0, 0];
                      F && m.push(0);
                      for (const w of c)
                        try {
                          (m[2] = w), x.apply(null, m);
                        } catch {}
                      c.clear();
                    }
                    C.clear();
                  }
                  delete T.udf, delete T.wudf;
                });
              {
                const b = i.xWrap('sqlite3_close_v2', 'int', 'sqlite3*');
                r.sqlite3_close_v2 = function (E) {
                  if (arguments.length !== 1)
                    return p(E, 'sqlite3_close_v2', 1);
                  if (E)
                    try {
                      j.cleanup(E);
                    } catch {}
                  return b(E);
                };
              }
              if (r.sqlite3session_table_filter) {
                const b = i.xWrap('sqlite3session_delete', void 0, [
                  'sqlite3_session*',
                ]);
                r.sqlite3session_delete = function (E) {
                  if (arguments.length !== 1)
                    return p(pDb, 'sqlite3session_delete', 1);
                  E && r.sqlite3session_table_filter(E, 0, 0), b(E);
                };
              }
              {
                const b = (T, F) =>
                    'argv[' +
                    F +
                    ']:' +
                    T[0] +
                    ':' +
                    i.cstrToJs(T[1]).toLowerCase(),
                  E = i.xWrap('sqlite3_create_collation_v2', 'int', [
                    'sqlite3*',
                    'string',
                    'int',
                    '*',
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xCompare',
                      signature: 'i(pipip)',
                      contextKey: b,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xDestroy',
                      signature: 'v(p)',
                      contextKey: b,
                    }),
                  ]);
                (r.sqlite3_create_collation_v2 = function (T, F, C, x, N, Q) {
                  if (arguments.length !== 6)
                    return p(T, 'sqlite3_create_collation_v2', 6);
                  if (!(C & 15)) C |= r.SQLITE_UTF8;
                  else if (r.SQLITE_UTF8 !== (C & 15)) return g(T);
                  try {
                    const c = E(T, F, C, x, N, Q);
                    return (
                      c === 0 && N instanceof Function && j.addCollation(T, F),
                      c
                    );
                  } catch (c) {
                    return l.sqlite3__wasm_db_error(T, c);
                  }
                }),
                  (r.sqlite3_create_collation = (T, F, C, x, N) =>
                    arguments.length === 5
                      ? r.sqlite3_create_collation_v2(T, F, C, x, N, 0)
                      : p(T, 'sqlite3_create_collation', 5));
              }
              {
                const b = function (C, x) {
                    return (
                      C[0] +
                      ':' +
                      (C[2] < 0 ? -1 : C[2]) +
                      ':' +
                      x +
                      ':' +
                      i.cstrToJs(C[1]).toLowerCase()
                    );
                  },
                  E = Object.assign(Object.create(null), {
                    xInverseAndStep: {
                      signature: 'v(pip)',
                      contextKey: b,
                      callProxy: (C) => (x, N, Q) => {
                        try {
                          C(x, ...r.sqlite3_values_to_js(N, Q));
                        } catch (c) {
                          r.sqlite3_result_error_js(x, c);
                        }
                      },
                    },
                    xFinalAndValue: {
                      signature: 'v(p)',
                      contextKey: b,
                      callProxy: (C) => (x) => {
                        try {
                          r.sqlite3_result_js(x, C(x));
                        } catch (N) {
                          r.sqlite3_result_error_js(x, N);
                        }
                      },
                    },
                    xFunc: {
                      signature: 'v(pip)',
                      contextKey: b,
                      callProxy: (C) => (x, N, Q) => {
                        try {
                          r.sqlite3_result_js(
                            x,
                            C(x, ...r.sqlite3_values_to_js(N, Q)),
                          );
                        } catch (c) {
                          r.sqlite3_result_error_js(x, c);
                        }
                      },
                    },
                    xDestroy: {
                      signature: 'v(p)',
                      contextKey: b,
                      callProxy: (C) => (x) => {
                        try {
                          C(x);
                        } catch (N) {
                          console.error('UDF xDestroy method threw:', N);
                        }
                      },
                    },
                  }),
                  T = i.xWrap('sqlite3_create_function_v2', 'int', [
                    'sqlite3*',
                    'string',
                    'int',
                    'int',
                    '*',
                    new i.xWrap.FuncPtrAdapter({ name: 'xFunc', ...E.xFunc }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xStep',
                      ...E.xInverseAndStep,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xFinal',
                      ...E.xFinalAndValue,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xDestroy',
                      ...E.xDestroy,
                    }),
                  ]),
                  F = i.xWrap('sqlite3_create_window_function', 'int', [
                    'sqlite3*',
                    'string',
                    'int',
                    'int',
                    '*',
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xStep',
                      ...E.xInverseAndStep,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xFinal',
                      ...E.xFinalAndValue,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xValue',
                      ...E.xFinalAndValue,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xInverse',
                      ...E.xInverseAndStep,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xDestroy',
                      ...E.xDestroy,
                    }),
                  ]);
                (r.sqlite3_create_function_v2 = function C(
                  x,
                  N,
                  Q,
                  c,
                  m,
                  w,
                  U,
                  _,
                  h,
                ) {
                  if (C.length !== arguments.length)
                    return p(x, 'sqlite3_create_function_v2', C.length);
                  if (!(c & 15)) c |= r.SQLITE_UTF8;
                  else if (r.SQLITE_UTF8 !== (c & 15)) return g(x);
                  try {
                    const a = T(x, N, Q, c, m, w, U, _, h);
                    return (
                      a === 0 &&
                        (w instanceof Function ||
                          U instanceof Function ||
                          _ instanceof Function ||
                          h instanceof Function) &&
                        j.addFunction(x, N, Q),
                      a
                    );
                  } catch (a) {
                    return (
                      console.error(
                        'sqlite3_create_function_v2() setup threw:',
                        a,
                      ),
                      l.sqlite3__wasm_db_error(
                        x,
                        a,
                        'Creation of UDF threw: ' + a,
                      )
                    );
                  }
                }),
                  (r.sqlite3_create_function = function C(
                    x,
                    N,
                    Q,
                    c,
                    m,
                    w,
                    U,
                    _,
                  ) {
                    return C.length === arguments.length
                      ? r.sqlite3_create_function_v2(x, N, Q, c, m, w, U, _, 0)
                      : p(x, 'sqlite3_create_function', C.length);
                  }),
                  (r.sqlite3_create_window_function = function C(
                    x,
                    N,
                    Q,
                    c,
                    m,
                    w,
                    U,
                    _,
                    h,
                    a,
                  ) {
                    if (C.length !== arguments.length)
                      return p(x, 'sqlite3_create_window_function', C.length);
                    if (!(c & 15)) c |= r.SQLITE_UTF8;
                    else if (r.SQLITE_UTF8 !== (c & 15)) return g(x);
                    try {
                      const u = F(x, N, Q, c, m, w, U, _, h, a);
                      return (
                        u === 0 &&
                          (w instanceof Function ||
                            U instanceof Function ||
                            _ instanceof Function ||
                            h instanceof Function ||
                            a instanceof Function) &&
                          j.addWindowFunc(x, N, Q),
                        u
                      );
                    } catch (u) {
                      return (
                        console.error(
                          'sqlite3_create_window_function() setup threw:',
                          u,
                        ),
                        l.sqlite3__wasm_db_error(
                          x,
                          u,
                          'Creation of UDF threw: ' + u,
                        )
                      );
                    }
                  }),
                  (r.sqlite3_create_function_v2.udfSetResult =
                    r.sqlite3_create_function.udfSetResult =
                    r.sqlite3_create_window_function.udfSetResult =
                      r.sqlite3_result_js),
                  (r.sqlite3_create_function_v2.udfConvertArgs =
                    r.sqlite3_create_function.udfConvertArgs =
                    r.sqlite3_create_window_function.udfConvertArgs =
                      r.sqlite3_values_to_js),
                  (r.sqlite3_create_function_v2.udfSetError =
                    r.sqlite3_create_function.udfSetError =
                    r.sqlite3_create_window_function.udfSetError =
                      r.sqlite3_result_error_js);
              }
              {
                const b = (T, F) => (
                    typeof T == 'string'
                      ? (F = -1)
                      : l.isSQLableTypedArray(T)
                        ? ((F = T.byteLength),
                          (T = l.typedArrayToString(
                            T instanceof ArrayBuffer ? new Uint8Array(T) : T,
                          )))
                        : Array.isArray(T) && ((T = T.join('')), (F = -1)),
                    [T, F]
                  ),
                  E = {
                    basic: i.xWrap('sqlite3_prepare_v3', 'int', [
                      'sqlite3*',
                      'string',
                      'int',
                      'int',
                      '**',
                      '**',
                    ]),
                    full: i.xWrap('sqlite3_prepare_v3', 'int', [
                      'sqlite3*',
                      '*',
                      'int',
                      'int',
                      '**',
                      '**',
                    ]),
                  };
                (r.sqlite3_prepare_v3 = function T(F, C, x, N, Q, c) {
                  if (T.length !== arguments.length)
                    return p(F, 'sqlite3_prepare_v3', T.length);
                  const [m, w] = b(C, x);
                  switch (typeof m) {
                    case 'string':
                      return E.basic(F, m, w, N, Q, null);
                    case 'number':
                      return E.full(F, m, w, N, Q, c);
                    default:
                      return l.sqlite3__wasm_db_error(
                        F,
                        r.SQLITE_MISUSE,
                        'Invalid SQL argument type for sqlite3_prepare_v2/v3().',
                      );
                  }
                }),
                  (r.sqlite3_prepare_v2 = function T(F, C, x, N, Q) {
                    return T.length === arguments.length
                      ? r.sqlite3_prepare_v3(F, C, x, 0, N, Q)
                      : p(F, 'sqlite3_prepare_v2', T.length);
                  });
              }
              {
                const b = i.xWrap('sqlite3_bind_text', 'int', [
                    'sqlite3_stmt*',
                    'int',
                    'string',
                    'int',
                    '*',
                  ]),
                  E = i.xWrap('sqlite3_bind_blob', 'int', [
                    'sqlite3_stmt*',
                    'int',
                    '*',
                    'int',
                    '*',
                  ]);
                (r.sqlite3_bind_text = function T(F, C, x, N, Q) {
                  if (T.length !== arguments.length)
                    return p(
                      r.sqlite3_db_handle(F),
                      'sqlite3_bind_text',
                      T.length,
                    );
                  if (i.isPtr(x) || x === null) return b(F, C, x, N, Q);
                  x instanceof ArrayBuffer
                    ? (x = new Uint8Array(x))
                    : Array.isArray(pMem) && (x = pMem.join(''));
                  let c, m;
                  try {
                    if (l.isSQLableTypedArray(x))
                      (c = i.allocFromTypedArray(x)), (m = x.byteLength);
                    else if (typeof x == 'string') [c, m] = i.allocCString(x);
                    else
                      return l.sqlite3__wasm_db_error(
                        r.sqlite3_db_handle(F),
                        r.SQLITE_MISUSE,
                        'Invalid 3rd argument type for sqlite3_bind_text().',
                      );
                    return b(F, C, c, m, r.SQLITE_WASM_DEALLOC);
                  } catch (w) {
                    return (
                      i.dealloc(c),
                      l.sqlite3__wasm_db_error(r.sqlite3_db_handle(F), w)
                    );
                  }
                }),
                  (r.sqlite3_bind_blob = function T(F, C, x, N, Q) {
                    if (T.length !== arguments.length)
                      return p(
                        r.sqlite3_db_handle(F),
                        'sqlite3_bind_blob',
                        T.length,
                      );
                    if (i.isPtr(x) || x === null) return E(F, C, x, N, Q);
                    x instanceof ArrayBuffer
                      ? (x = new Uint8Array(x))
                      : Array.isArray(x) && (x = x.join(''));
                    let c, m;
                    try {
                      if (l.isBindableTypedArray(x))
                        (c = i.allocFromTypedArray(x)),
                          (m = N >= 0 ? N : x.byteLength);
                      else if (typeof x == 'string') [c, m] = i.allocCString(x);
                      else
                        return l.sqlite3__wasm_db_error(
                          r.sqlite3_db_handle(F),
                          r.SQLITE_MISUSE,
                          'Invalid 3rd argument type for sqlite3_bind_blob().',
                        );
                      return E(F, C, c, m, r.SQLITE_WASM_DEALLOC);
                    } catch (w) {
                      return (
                        i.dealloc(c),
                        l.sqlite3__wasm_db_error(r.sqlite3_db_handle(F), w)
                      );
                    }
                  });
              }
              r.sqlite3_config = function (b, ...E) {
                if (arguments.length < 2) return r.SQLITE_MISUSE;
                switch (b) {
                  case r.SQLITE_CONFIG_COVERING_INDEX_SCAN:
                  case r.SQLITE_CONFIG_MEMSTATUS:
                  case r.SQLITE_CONFIG_SMALL_MALLOC:
                  case r.SQLITE_CONFIG_SORTERREF_SIZE:
                  case r.SQLITE_CONFIG_STMTJRNL_SPILL:
                  case r.SQLITE_CONFIG_URI:
                    return i.exports.sqlite3__wasm_config_i(b, E[0]);
                  case r.SQLITE_CONFIG_LOOKASIDE:
                    return i.exports.sqlite3__wasm_config_ii(b, E[0], E[1]);
                  case r.SQLITE_CONFIG_MEMDB_MAXSIZE:
                    return i.exports.sqlite3__wasm_config_j(b, E[0]);
                  case r.SQLITE_CONFIG_GETMALLOC:
                  case r.SQLITE_CONFIG_GETMUTEX:
                  case r.SQLITE_CONFIG_GETPCACHE2:
                  case r.SQLITE_CONFIG_GETPCACHE:
                  case r.SQLITE_CONFIG_HEAP:
                  case r.SQLITE_CONFIG_LOG:
                  case r.SQLITE_CONFIG_MALLOC:
                  case r.SQLITE_CONFIG_MMAP_SIZE:
                  case r.SQLITE_CONFIG_MULTITHREAD:
                  case r.SQLITE_CONFIG_MUTEX:
                  case r.SQLITE_CONFIG_PAGECACHE:
                  case r.SQLITE_CONFIG_PCACHE2:
                  case r.SQLITE_CONFIG_PCACHE:
                  case r.SQLITE_CONFIG_PCACHE_HDRSZ:
                  case r.SQLITE_CONFIG_PMASZ:
                  case r.SQLITE_CONFIG_SERIALIZED:
                  case r.SQLITE_CONFIG_SINGLETHREAD:
                  case r.SQLITE_CONFIG_SQLLOG:
                  case r.SQLITE_CONFIG_WIN32_HEAPSIZE:
                  default:
                    return r.SQLITE_NOTFOUND;
                }
              };
              {
                const b = new Set();
                (r.sqlite3_auto_extension = function (E) {
                  if (E instanceof Function) E = i.installFunction('i(ppp)', E);
                  else if (arguments.length !== 1 || !i.isPtr(E))
                    return r.SQLITE_MISUSE;
                  const T = i.exports.sqlite3_auto_extension(E);
                  return (
                    E !== arguments[0] &&
                      (T === 0 ? b.add(E) : i.uninstallFunction(E)),
                    T
                  );
                }),
                  (r.sqlite3_cancel_auto_extension = function (E) {
                    return !E || arguments.length !== 1 || !i.isPtr(E)
                      ? 0
                      : i.exports.sqlite3_cancel_auto_extension(E);
                  }),
                  (r.sqlite3_reset_auto_extension = function () {
                    i.exports.sqlite3_reset_auto_extension();
                    for (const E of b) i.uninstallFunction(E);
                    b.clear();
                  });
              }
              const H = r.sqlite3_vfs_find('kvvfs');
              if (H)
                if (l.isUIThread()) {
                  const b = new r.sqlite3_kvvfs_methods(
                    i.exports.sqlite3__wasm_kvvfs_methods(),
                  );
                  delete r.sqlite3_kvvfs_methods;
                  const E = i.exports.sqlite3__wasm_kvvfsMakeKeyOnPstack,
                    T = i.pstack,
                    F = (x) =>
                      i.peek(x) === 115 ? sessionStorage : localStorage,
                    C = {
                      xRead: (x, N, Q, c) => {
                        const m = T.pointer,
                          w = i.scopedAllocPush();
                        try {
                          const U = E(x, N);
                          if (!U) return -3;
                          const _ = i.cstrToJs(U),
                            h = F(x).getItem(_);
                          if (!h) return -1;
                          const a = h.length;
                          if (c <= 0) return a;
                          if (c === 1) return i.poke(Q, 0), a;
                          const u = i.scopedAllocCString(h);
                          return (
                            c > a + 1 && (c = a + 1),
                            i.heap8u().copyWithin(Q, u, u + c - 1),
                            i.poke(Q + c - 1, 0),
                            c - 1
                          );
                        } catch (U) {
                          return console.error('kvstorageRead()', U), -2;
                        } finally {
                          T.restore(m), i.scopedAllocPop(w);
                        }
                      },
                      xWrite: (x, N, Q) => {
                        const c = T.pointer;
                        try {
                          const m = E(x, N);
                          if (!m) return 1;
                          const w = i.cstrToJs(m);
                          return F(x).setItem(w, i.cstrToJs(Q)), 0;
                        } catch (m) {
                          return (
                            console.error('kvstorageWrite()', m), r.SQLITE_IOERR
                          );
                        } finally {
                          T.restore(c);
                        }
                      },
                      xDelete: (x, N) => {
                        const Q = T.pointer;
                        try {
                          const c = E(x, N);
                          return c ? (F(x).removeItem(i.cstrToJs(c)), 0) : 1;
                        } catch (c) {
                          return (
                            console.error('kvstorageDelete()', c),
                            r.SQLITE_IOERR
                          );
                        } finally {
                          T.restore(Q);
                        }
                      },
                    };
                  for (const x of Object.keys(C))
                    b[b.memberKey(x)] = i.installFunction(
                      b.memberSignature(x),
                      C[x],
                    );
                } else r.sqlite3_vfs_unregister(H);
              i.xWrap.FuncPtrAdapter.warnOnUse = !0;
              const I = e.StructBinder,
                A = function b(E, T, F, C = b.installMethodArgcCheck) {
                  if (
                    (E instanceof I.StructType
                      ? !(F instanceof Function) &&
                        !i.isPtr(F) &&
                        s(
                          'Usage errror: expecting a Function or WASM pointer to one.',
                        )
                      : s('Usage error: target object is-not-a StructType.'),
                    arguments.length === 1)
                  )
                    return (c, m) => b(E, c, m, C);
                  b.argcProxy ||
                    ((b.argcProxy = function (c, m, w, U) {
                      return function (..._) {
                        return (
                          w.length !== arguments.length &&
                            s(
                              'Argument mismatch for',
                              c.structInfo.name +
                                '::' +
                                m +
                                ': Native signature is:',
                              U,
                            ),
                          w.apply(this, _)
                        );
                      };
                    }),
                    (b.removeFuncList = function () {
                      this.ondispose.__removeFuncList &&
                        (this.ondispose.__removeFuncList.forEach((c, m) => {
                          if (typeof c == 'number')
                            try {
                              i.uninstallFunction(c);
                            } catch {}
                        }),
                        delete this.ondispose.__removeFuncList);
                    }));
                  const x = E.memberSignature(T);
                  x.length < 2 &&
                    s(
                      'Member',
                      T,
                      'does not have a function pointer signature:',
                      x,
                    );
                  const N = E.memberKey(T),
                    Q = C && !i.isPtr(F) ? b.argcProxy(E, N, F, x) : F;
                  if (i.isPtr(Q))
                    Q &&
                      !i.functionEntry(Q) &&
                      s('Pointer', Q, 'is not a WASM function table entry.'),
                      (E[N] = Q);
                  else {
                    const c = i.installFunction(Q, E.memberSignature(T, !0));
                    (E[N] = c),
                      (!E.ondispose || !E.ondispose.__removeFuncList) &&
                        (E.addOnDispose(
                          'ondispose.__removeFuncList handler',
                          b.removeFuncList,
                        ),
                        (E.ondispose.__removeFuncList = [])),
                      E.ondispose.__removeFuncList.push(N, c);
                  }
                  return (c, m) => b(E, c, m, C);
                };
              A.installMethodArgcCheck = !1;
              const R = function (b, E, T = A.installMethodArgcCheck) {
                const F = new Map();
                for (const C of Object.keys(E)) {
                  const x = E[C],
                    N = F.get(x);
                  if (N) {
                    const Q = b.memberKey(C);
                    b[Q] = b[b.memberKey(N)];
                  } else A(b, C, x, T), F.set(x, C);
                }
                return b;
              };
              (I.StructType.prototype.installMethod = function (
                E,
                T,
                F = A.installMethodArgcCheck,
              ) {
                return arguments.length < 3 && E && typeof E == 'object'
                  ? R(this, ...arguments)
                  : A(this, ...arguments);
              }),
                (I.StructType.prototype.installMethods = function (
                  b,
                  E = A.installMethodArgcCheck,
                ) {
                  return R(this, b, E);
                });
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              e.version = {
                libVersion: '3.46.1',
                libVersionNumber: 3046001,
                sourceId:
                  '2024-08-13 09:16:08 c9c2ab54ba1f5f46360f1b4f35d849cd3f080e6fc2b6c60e91b16c63f69a1e33',
                downloadVersion: 3460100,
              };
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              const s = (..._) => {
                  throw new e.SQLite3Error(..._);
                },
                r = e.capi,
                i = e.wasm,
                l = e.util,
                p = new WeakMap(),
                g = new WeakMap(),
                P = (_, h, a) => {
                  const u = Object.getOwnPropertyDescriptor(_, h);
                  return u ? u.value : a;
                },
                L = function (_, h) {
                  return (
                    h &&
                      (_ instanceof A && (_ = _.pointer),
                      s(
                        h,
                        'sqlite3 result code',
                        h + ':',
                        _ ? r.sqlite3_errmsg(_) : r.sqlite3_errstr(h),
                      )),
                    arguments[0]
                  );
                },
                j = i.installFunction(
                  'i(ippp)',
                  function (_, h, a, u) {
                    r.SQLITE_TRACE_STMT === _ &&
                      console.log(
                        'SQL TRACE #' +
                          ++this.counter +
                          ' via sqlite3@' +
                          h +
                          ':',
                        i.cstrToJs(u),
                      );
                  }.bind({ counter: 0 }),
                ),
                H = Object.create(null),
                I = function _(...h) {
                  if (!_._name2vfs) {
                    _._name2vfs = Object.create(null);
                    const te =
                      typeof importScripts == 'function'
                        ? (oe) =>
                            s(
                              'The VFS for',
                              oe,
                              'is only available in the main window thread.',
                            )
                        : !1;
                    (_._name2vfs[':localStorage:'] = {
                      vfs: 'kvvfs',
                      filename: te || (() => 'local'),
                    }),
                      (_._name2vfs[':sessionStorage:'] = {
                        vfs: 'kvvfs',
                        filename: te || (() => 'session'),
                      });
                  }
                  const a = _.normalizeArgs(...h);
                  let u = a.filename,
                    y = a.vfs,
                    q = a.flags;
                  ((typeof u != 'string' && typeof u != 'number') ||
                    typeof q != 'string' ||
                    (y && typeof y != 'string' && typeof y != 'number')) &&
                    (e.config.error('Invalid DB ctor args', a, arguments),
                    s('Invalid arguments for DB constructor.'));
                  let B = typeof u == 'number' ? i.cstrToJs(u) : u;
                  const K = _._name2vfs[B];
                  K && ((y = K.vfs), (u = B = K.filename(B)));
                  let Z,
                    re = 0;
                  q.indexOf('c') >= 0 &&
                    (re |= r.SQLITE_OPEN_CREATE | r.SQLITE_OPEN_READWRITE),
                    q.indexOf('w') >= 0 && (re |= r.SQLITE_OPEN_READWRITE),
                    re === 0 && (re |= r.SQLITE_OPEN_READONLY),
                    (re |= r.SQLITE_OPEN_EXRESCODE);
                  const ee = i.pstack.pointer;
                  try {
                    const te = i.pstack.allocPtr();
                    let oe = r.sqlite3_open_v2(u, te, re, y || 0);
                    (Z = i.peekPtr(te)),
                      L(Z, oe),
                      r.sqlite3_extended_result_codes(Z, 1),
                      q.indexOf('t') >= 0 &&
                        r.sqlite3_trace_v2(Z, r.SQLITE_TRACE_STMT, j, Z);
                  } catch (te) {
                    throw (Z && r.sqlite3_close_v2(Z), te);
                  } finally {
                    i.pstack.restore(ee);
                  }
                  (this.filename = B),
                    p.set(this, Z),
                    g.set(this, Object.create(null));
                  try {
                    const te =
                        r.sqlite3_js_db_vfs(Z) ||
                        s('Internal error: cannot get VFS for new db handle.'),
                      oe = H[te];
                    oe &&
                      (oe instanceof Function
                        ? oe(this, e)
                        : L(Z, r.sqlite3_exec(Z, oe, 0, 0, 0)));
                  } catch (te) {
                    throw (this.close(), te);
                  }
                };
              (I.setVfsPostOpenSql = function (_, h) {
                H[_] = h;
              }),
                (I.normalizeArgs = function (
                  _ = ':memory:',
                  h = 'c',
                  a = null,
                ) {
                  const u = {};
                  return (
                    arguments.length === 1 &&
                    arguments[0] &&
                    typeof arguments[0] == 'object'
                      ? (Object.assign(u, arguments[0]),
                        u.flags === void 0 && (u.flags = 'c'),
                        u.vfs === void 0 && (u.vfs = null),
                        u.filename === void 0 && (u.filename = ':memory:'))
                      : ((u.filename = _), (u.flags = h), (u.vfs = a)),
                    u
                  );
                });
              const A = function (..._) {
                I.apply(this, _);
              };
              A.dbCtorHelper = I;
              const R = { null: 1, number: 2, string: 3, boolean: 4, blob: 5 };
              R.undefined == R.null, i.bigIntEnabled && (R.bigint = R.number);
              const b = function () {
                  R !== arguments[2] &&
                    s(
                      r.SQLITE_MISUSE,
                      'Do not call the Stmt constructor directly. Use DB.prepare().',
                    ),
                    (this.db = arguments[0]),
                    p.set(this, arguments[1]),
                    (this.parameterCount = r.sqlite3_bind_parameter_count(
                      this.pointer,
                    ));
                },
                E = function (_) {
                  return _.pointer || s('DB has been closed.'), _;
                },
                T = function (_, h) {
                  return (
                    (h !== (h | 0) || h < 0 || h >= _.columnCount) &&
                      s('Column index', h, 'is out of range.'),
                    _
                  );
                },
                F = function (_, h) {
                  const a = Object.create(null);
                  switch (((a.opt = Object.create(null)), h.length)) {
                    case 1:
                      typeof h[0] == 'string' ||
                      l.isSQLableTypedArray(h[0]) ||
                      Array.isArray(h[0])
                        ? (a.sql = h[0])
                        : h[0] &&
                          typeof h[0] == 'object' &&
                          ((a.opt = h[0]), (a.sql = a.opt.sql));
                      break;
                    case 2:
                      (a.sql = h[0]), (a.opt = h[1]);
                      break;
                    default:
                      s('Invalid argument count for exec().');
                  }
                  (a.sql = l.flexibleString(a.sql)),
                    typeof a.sql != 'string' &&
                      s('Missing SQL argument or unsupported SQL value type.');
                  const u = a.opt;
                  switch (u.returnValue) {
                    case 'resultRows':
                      u.resultRows || (u.resultRows = []),
                        (a.returnVal = () => u.resultRows);
                      break;
                    case 'saveSql':
                      u.saveSql || (u.saveSql = []),
                        (a.returnVal = () => u.saveSql);
                      break;
                    case void 0:
                    case 'this':
                      a.returnVal = () => _;
                      break;
                    default:
                      s('Invalid returnValue value:', u.returnValue);
                  }
                  if (
                    (!u.callback &&
                      !u.returnValue &&
                      u.rowMode !== void 0 &&
                      (u.resultRows || (u.resultRows = []),
                      (a.returnVal = () => u.resultRows)),
                    u.callback || u.resultRows)
                  )
                    switch (u.rowMode === void 0 ? 'array' : u.rowMode) {
                      case 'object':
                        a.cbArg = (y, q) => {
                          q.columnNames ||
                            (q.columnNames = y.getColumnNames([]));
                          const B = y.get([]),
                            K = Object.create(null);
                          for (const Z in q.columnNames)
                            K[q.columnNames[Z]] = B[Z];
                          return K;
                        };
                        break;
                      case 'array':
                        a.cbArg = (y) => y.get([]);
                        break;
                      case 'stmt':
                        Array.isArray(u.resultRows) &&
                          s(
                            'exec(): invalid rowMode for a resultRows array: must',
                            "be one of 'array', 'object',",
                            'a result column number, or column name reference.',
                          ),
                          (a.cbArg = (y) => y);
                        break;
                      default:
                        if (l.isInt32(u.rowMode)) {
                          a.cbArg = (y) => y.get(u.rowMode);
                          break;
                        } else if (
                          typeof u.rowMode == 'string' &&
                          u.rowMode.length > 1 &&
                          u.rowMode[0] === '$'
                        ) {
                          const y = u.rowMode.substr(1);
                          a.cbArg = (q) => {
                            const B = q.get(Object.create(null))[y];
                            return B === void 0
                              ? s(
                                  r.SQLITE_NOTFOUND,
                                  'exec(): unknown result column:',
                                  y,
                                )
                              : B;
                          };
                          break;
                        }
                        s('Invalid rowMode:', u.rowMode);
                    }
                  return a;
                },
                C = (_, h, a, ...u) => {
                  const y = _.prepare(h);
                  try {
                    const q = y.bind(a).step() ? y.get(...u) : void 0;
                    return y.reset(), q;
                  } finally {
                    y.finalize();
                  }
                },
                x = (_, h, a, u) =>
                  _.exec({
                    sql: h,
                    bind: a,
                    rowMode: u,
                    returnValue: 'resultRows',
                  });
              (A.checkRc = (_, h) => L(_, h)),
                (A.prototype = {
                  isOpen: function () {
                    return !!this.pointer;
                  },
                  affirmOpen: function () {
                    return E(this);
                  },
                  close: function () {
                    if (this.pointer) {
                      if (
                        this.onclose &&
                        this.onclose.before instanceof Function
                      )
                        try {
                          this.onclose.before(this);
                        } catch {}
                      const _ = this.pointer;
                      if (
                        (Object.keys(g.get(this)).forEach((h, a) => {
                          if (a && a.pointer)
                            try {
                              a.finalize();
                            } catch {}
                        }),
                        p.delete(this),
                        g.delete(this),
                        r.sqlite3_close_v2(_),
                        this.onclose && this.onclose.after instanceof Function)
                      )
                        try {
                          this.onclose.after(this);
                        } catch {}
                      delete this.filename;
                    }
                  },
                  changes: function (_ = !1, h = !1) {
                    const a = E(this).pointer;
                    return _
                      ? h
                        ? r.sqlite3_total_changes64(a)
                        : r.sqlite3_total_changes(a)
                      : h
                        ? r.sqlite3_changes64(a)
                        : r.sqlite3_changes(a);
                  },
                  dbFilename: function (_ = 'main') {
                    return r.sqlite3_db_filename(E(this).pointer, _);
                  },
                  dbName: function (_ = 0) {
                    return r.sqlite3_db_name(E(this).pointer, _);
                  },
                  dbVfsName: function (_ = 0) {
                    let h;
                    const a = r.sqlite3_js_db_vfs(E(this).pointer, _);
                    if (a) {
                      const u = new r.sqlite3_vfs(a);
                      try {
                        h = i.cstrToJs(u.$zName);
                      } finally {
                        u.dispose();
                      }
                    }
                    return h;
                  },
                  prepare: function (_) {
                    E(this);
                    const h = i.pstack.pointer;
                    let a, u;
                    try {
                      (a = i.pstack.alloc(8)),
                        A.checkRc(
                          this,
                          r.sqlite3_prepare_v2(this.pointer, _, -1, a, null),
                        ),
                        (u = i.peekPtr(a));
                    } finally {
                      i.pstack.restore(h);
                    }
                    u || s('Cannot prepare empty SQL.');
                    const y = new b(this, u, R);
                    return (g.get(this)[u] = y), y;
                  },
                  exec: function () {
                    E(this);
                    const _ = F(this, arguments);
                    if (!_.sql) return s('exec() requires an SQL string.');
                    const h = _.opt,
                      a = h.callback,
                      u = Array.isArray(h.resultRows) ? h.resultRows : void 0;
                    let y,
                      q = h.bind,
                      B = !!(_.cbArg || h.columnNames || u);
                    const K = i.scopedAllocPush(),
                      Z = Array.isArray(h.saveSql) ? h.saveSql : void 0;
                    try {
                      const re = l.isSQLableTypedArray(_.sql);
                      let ee = re ? _.sql.byteLength : i.jstrlen(_.sql);
                      const te = i.scopedAlloc(2 * i.ptrSizeof + (ee + 1)),
                        oe = te + i.ptrSizeof;
                      let ae = oe + i.ptrSizeof;
                      const fe = ae + ee;
                      for (
                        re
                          ? i.heap8().set(_.sql, ae)
                          : i.jstrcpy(_.sql, i.heap8(), ae, ee, !1),
                          i.poke(ae + ee, 0);
                        ae && i.peek(ae, 'i8');
                      ) {
                        i.pokePtr([te, oe], 0),
                          A.checkRc(
                            this,
                            r.sqlite3_prepare_v3(
                              this.pointer,
                              ae,
                              ee,
                              0,
                              te,
                              oe,
                            ),
                          );
                        const pe = i.peekPtr(te);
                        if (((ae = i.peekPtr(oe)), (ee = fe - ae), !!pe)) {
                          if (
                            (Z && Z.push(r.sqlite3_sql(pe).trim()),
                            (y = new b(this, pe, R)),
                            q && y.parameterCount && (y.bind(q), (q = null)),
                            B && y.columnCount)
                          ) {
                            let be = Array.isArray(h.columnNames) ? 0 : 1;
                            if (((B = !1), _.cbArg || u)) {
                              const me = Object.create(null);
                              for (; y.step(); y._lockedByExec = !1) {
                                be++ === 0 &&
                                  y.getColumnNames(
                                    (me.columnNames = h.columnNames || []),
                                  ),
                                  (y._lockedByExec = !0);
                                const O = _.cbArg(y, me);
                                if (
                                  (u && u.push(O), a && a.call(h, O, y) === !1)
                                )
                                  break;
                              }
                              y._lockedByExec = !1;
                            }
                            be === 0 && y.getColumnNames(h.columnNames);
                          } else y.step();
                          y.reset().finalize(), (y = null);
                        }
                      }
                    } finally {
                      i.scopedAllocPop(K),
                        y && (delete y._lockedByExec, y.finalize());
                    }
                    return _.returnVal();
                  },
                  createFunction: function (h, a, u) {
                    const y = (me) => me instanceof Function;
                    switch (arguments.length) {
                      case 1:
                        (u = h), (h = u.name), (a = u.xFunc || 0);
                        break;
                      case 2:
                        y(a) || ((u = a), (a = u.xFunc || 0));
                        break;
                    }
                    u || (u = {}),
                      typeof h != 'string' &&
                        s('Invalid arguments: missing function name.');
                    let q = u.xStep || 0,
                      B = u.xFinal || 0;
                    const K = u.xValue || 0,
                      Z = u.xInverse || 0;
                    let re;
                    y(a)
                      ? ((re = !1),
                        (y(q) || y(B)) &&
                          s('Ambiguous arguments: scalar or aggregate?'),
                        (q = B = null))
                      : y(q)
                        ? (y(B) ||
                            s(
                              'Missing xFinal() callback for aggregate or window UDF.',
                            ),
                          (a = null))
                        : y(B)
                          ? s(
                              'Missing xStep() callback for aggregate or window UDF.',
                            )
                          : s('Missing function-type properties.'),
                      re === !1
                        ? (y(K) || y(Z)) &&
                          s(
                            'xValue and xInverse are not permitted for non-window UDFs.',
                          )
                        : y(K)
                          ? (y(Z) ||
                              s('xInverse must be provided if xValue is.'),
                            (re = !0))
                          : y(Z) &&
                            s('xValue must be provided if xInverse is.');
                    const ee = u.pApp;
                    ee != null &&
                      (typeof ee != 'number' || !l.isInt32(ee)) &&
                      s(
                        'Invalid value for pApp property. Must be a legal WASM pointer value.',
                      );
                    const te = u.xDestroy || 0;
                    te && !y(te) && s('xDestroy property must be a function.');
                    let oe = 0;
                    P(u, 'deterministic') && (oe |= r.SQLITE_DETERMINISTIC),
                      P(u, 'directOnly') && (oe |= r.SQLITE_DIRECTONLY),
                      P(u, 'innocuous') && (oe |= r.SQLITE_INNOCUOUS),
                      (h = h.toLowerCase());
                    const ae = a || q,
                      fe = P(u, 'arity'),
                      pe =
                        typeof fe == 'number'
                          ? fe
                          : ae.length
                            ? ae.length - 1
                            : 0;
                    let be;
                    return (
                      re
                        ? (be = r.sqlite3_create_window_function(
                            this.pointer,
                            h,
                            pe,
                            r.SQLITE_UTF8 | oe,
                            ee || 0,
                            q,
                            B,
                            K,
                            Z,
                            te,
                          ))
                        : (be = r.sqlite3_create_function_v2(
                            this.pointer,
                            h,
                            pe,
                            r.SQLITE_UTF8 | oe,
                            ee || 0,
                            a,
                            q,
                            B,
                            te,
                          )),
                      A.checkRc(this, be),
                      this
                    );
                  },
                  selectValue: function (_, h, a) {
                    return C(this, _, h, 0, a);
                  },
                  selectValues: function (_, h, a) {
                    const u = this.prepare(_),
                      y = [];
                    try {
                      for (u.bind(h); u.step(); ) y.push(u.get(0, a));
                      u.reset();
                    } finally {
                      u.finalize();
                    }
                    return y;
                  },
                  selectArray: function (_, h) {
                    return C(this, _, h, []);
                  },
                  selectObject: function (_, h) {
                    return C(this, _, h, {});
                  },
                  selectArrays: function (_, h) {
                    return x(this, _, h, 'array');
                  },
                  selectObjects: function (_, h) {
                    return x(this, _, h, 'object');
                  },
                  openStatementCount: function () {
                    return this.pointer ? Object.keys(g.get(this)).length : 0;
                  },
                  transaction: function (_) {
                    let h = 'BEGIN';
                    arguments.length > 1 &&
                      (/[^a-zA-Z]/.test(arguments[0]) &&
                        s(
                          r.SQLITE_MISUSE,
                          'Invalid argument for BEGIN qualifier.',
                        ),
                      (h += ' ' + arguments[0]),
                      (_ = arguments[1])),
                      E(this).exec(h);
                    try {
                      const a = _(this);
                      return this.exec('COMMIT'), a;
                    } catch (a) {
                      throw (this.exec('ROLLBACK'), a);
                    }
                  },
                  savepoint: function (_) {
                    E(this).exec('SAVEPOINT oo1');
                    try {
                      const h = _(this);
                      return this.exec('RELEASE oo1'), h;
                    } catch (h) {
                      throw (
                        (this.exec(
                          'ROLLBACK to SAVEPOINT oo1; RELEASE SAVEPOINT oo1',
                        ),
                        h)
                      );
                    }
                  },
                  checkRc: function (_) {
                    return L(this, _);
                  },
                });
              const N = function (_) {
                  return _.pointer || s('Stmt has been closed.'), _;
                },
                Q = function (_) {
                  let h = R[_ == null ? 'null' : typeof _];
                  switch (h) {
                    case R.boolean:
                    case R.null:
                    case R.number:
                    case R.string:
                      return h;
                    case R.bigint:
                      if (i.bigIntEnabled) return h;
                    default:
                      return l.isBindableTypedArray(_) ? R.blob : void 0;
                  }
                },
                c = function (_) {
                  return (
                    Q(_) || s('Unsupported bind() argument type:', typeof _)
                  );
                },
                m = function (_, h) {
                  const a =
                    typeof h == 'number'
                      ? h
                      : r.sqlite3_bind_parameter_index(_.pointer, h);
                  return (
                    a === 0 || !l.isInt32(a)
                      ? s('Invalid bind() parameter name: ' + h)
                      : (a < 1 || a > _.parameterCount) &&
                        s('Bind index', h, 'is out of range.'),
                    a
                  );
                },
                w = function (_, h) {
                  return (
                    _._lockedByExec &&
                      s('Operation is illegal when statement is locked:', h),
                    _
                  );
                },
                U = function _(h, a, u, y) {
                  w(N(h), 'bind()'),
                    _._ ||
                      ((_._tooBigInt = (B) =>
                        s(
                          'BigInt value is too big to store without precision loss:',
                          B,
                        )),
                      (_._ = {
                        string: function (B, K, Z, re) {
                          const [ee, te] = i.allocCString(Z, !0);
                          return (
                            re ? r.sqlite3_bind_blob : r.sqlite3_bind_text
                          )(B.pointer, K, ee, te, r.SQLITE_WASM_DEALLOC);
                        },
                      })),
                    c(y),
                    (a = m(h, a));
                  let q = 0;
                  switch (y == null ? R.null : u) {
                    case R.null:
                      q = r.sqlite3_bind_null(h.pointer, a);
                      break;
                    case R.string:
                      q = _._.string(h, a, y, !1);
                      break;
                    case R.number: {
                      let B;
                      l.isInt32(y)
                        ? (B = r.sqlite3_bind_int)
                        : typeof y == 'bigint'
                          ? l.bigIntFits64(y)
                            ? i.bigIntEnabled
                              ? (B = r.sqlite3_bind_int64)
                              : l.bigIntFitsDouble(y)
                                ? ((y = Number(y)), (B = r.sqlite3_bind_double))
                                : _._tooBigInt(y)
                            : _._tooBigInt(y)
                          : ((y = Number(y)),
                            i.bigIntEnabled && Number.isInteger(y)
                              ? (B = r.sqlite3_bind_int64)
                              : (B = r.sqlite3_bind_double)),
                        (q = B(h.pointer, a, y));
                      break;
                    }
                    case R.boolean:
                      q = r.sqlite3_bind_int(h.pointer, a, y ? 1 : 0);
                      break;
                    case R.blob: {
                      if (typeof y == 'string') {
                        q = _._.string(h, a, y, !0);
                        break;
                      } else
                        y instanceof ArrayBuffer
                          ? (y = new Uint8Array(y))
                          : l.isBindableTypedArray(y) ||
                            s(
                              'Binding a value as a blob requires',
                              'that it be a string, Uint8Array, Int8Array, or ArrayBuffer.',
                            );
                      const B = i.alloc(y.byteLength || 1);
                      i.heap8().set(y.byteLength ? y : [0], B),
                        (q = r.sqlite3_bind_blob(
                          h.pointer,
                          a,
                          B,
                          y.byteLength,
                          r.SQLITE_WASM_DEALLOC,
                        ));
                      break;
                    }
                    default:
                      e.config.warn('Unsupported bind() argument type:', y),
                        s('Unsupported bind() argument type: ' + typeof y);
                  }
                  return q && A.checkRc(h.db.pointer, q), (h._mayGet = !1), h;
                };
              b.prototype = {
                finalize: function () {
                  if (this.pointer) {
                    w(this, 'finalize()');
                    const _ = r.sqlite3_finalize(this.pointer);
                    return (
                      delete g.get(this.db)[this.pointer],
                      p.delete(this),
                      delete this._mayGet,
                      delete this.parameterCount,
                      delete this._lockedByExec,
                      delete this.db,
                      _
                    );
                  }
                },
                clearBindings: function () {
                  return (
                    w(N(this), 'clearBindings()'),
                    r.sqlite3_clear_bindings(this.pointer),
                    (this._mayGet = !1),
                    this
                  );
                },
                reset: function (_) {
                  w(this, 'reset()'), _ && this.clearBindings();
                  const h = r.sqlite3_reset(N(this).pointer);
                  return (this._mayGet = !1), L(this.db, h), this;
                },
                bind: function () {
                  N(this);
                  let _, h;
                  switch (arguments.length) {
                    case 1:
                      (_ = 1), (h = arguments[0]);
                      break;
                    case 2:
                      (_ = arguments[0]), (h = arguments[1]);
                      break;
                    default:
                      s('Invalid bind() arguments.');
                  }
                  return h === void 0
                    ? this
                    : (this.parameterCount ||
                        s('This statement has no bindable parameters.'),
                      (this._mayGet = !1),
                      h === null
                        ? U(this, _, R.null, h)
                        : Array.isArray(h)
                          ? (arguments.length !== 1 &&
                              s(
                                'When binding an array, an index argument is not permitted.',
                              ),
                            h.forEach((a, u) => U(this, u + 1, c(a), a)),
                            this)
                          : (h instanceof ArrayBuffer &&
                              (h = new Uint8Array(h)),
                            typeof h == 'object' && !l.isBindableTypedArray(h)
                              ? (arguments.length !== 1 &&
                                  s(
                                    'When binding an object, an index argument is not permitted.',
                                  ),
                                Object.keys(h).forEach((a) =>
                                  U(this, a, c(h[a]), h[a]),
                                ),
                                this)
                              : U(this, _, c(h), h)));
                },
                bindAsBlob: function (_, h) {
                  N(this), arguments.length === 1 && ((h = _), (_ = 1));
                  const a = c(h);
                  return (
                    R.string !== a &&
                      R.blob !== a &&
                      R.null !== a &&
                      s('Invalid value type for bindAsBlob()'),
                    U(this, _, R.blob, h)
                  );
                },
                step: function () {
                  w(this, 'step()');
                  const _ = r.sqlite3_step(N(this).pointer);
                  switch (_) {
                    case r.SQLITE_DONE:
                      return (this._mayGet = !1);
                    case r.SQLITE_ROW:
                      return (this._mayGet = !0);
                    default:
                      (this._mayGet = !1),
                        e.config.warn(
                          'sqlite3_step() rc=',
                          _,
                          r.sqlite3_js_rc_str(_),
                          'SQL =',
                          r.sqlite3_sql(this.pointer),
                        ),
                        A.checkRc(this.db.pointer, _);
                  }
                },
                stepReset: function () {
                  return this.step(), this.reset();
                },
                stepFinalize: function () {
                  try {
                    const _ = this.step();
                    return this.reset(), _;
                  } finally {
                    try {
                      this.finalize();
                    } catch {}
                  }
                },
                get: function (_, h) {
                  if (
                    (N(this)._mayGet ||
                      s('Stmt.step() has not (recently) returned true.'),
                    Array.isArray(_))
                  ) {
                    let a = 0;
                    const u = this.columnCount;
                    for (; a < u; ) _[a] = this.get(a++);
                    return _;
                  } else if (_ && typeof _ == 'object') {
                    let a = 0;
                    const u = this.columnCount;
                    for (; a < u; )
                      _[r.sqlite3_column_name(this.pointer, a)] = this.get(a++);
                    return _;
                  }
                  switch (
                    (T(this, _),
                    h === void 0 ? r.sqlite3_column_type(this.pointer, _) : h)
                  ) {
                    case r.SQLITE_NULL:
                      return null;
                    case r.SQLITE_INTEGER:
                      if (i.bigIntEnabled) {
                        const a = r.sqlite3_column_int64(this.pointer, _);
                        return a >= Number.MIN_SAFE_INTEGER &&
                          a <= Number.MAX_SAFE_INTEGER
                          ? Number(a).valueOf()
                          : a;
                      } else {
                        const a = r.sqlite3_column_double(this.pointer, _);
                        return (
                          (a > Number.MAX_SAFE_INTEGER ||
                            a < Number.MIN_SAFE_INTEGER) &&
                            s(
                              'Integer is out of range for JS integer range: ' +
                                a,
                            ),
                          l.isInt32(a) ? a | 0 : a
                        );
                      }
                    case r.SQLITE_FLOAT:
                      return r.sqlite3_column_double(this.pointer, _);
                    case r.SQLITE_TEXT:
                      return r.sqlite3_column_text(this.pointer, _);
                    case r.SQLITE_BLOB: {
                      const a = r.sqlite3_column_bytes(this.pointer, _),
                        u = r.sqlite3_column_blob(this.pointer, _),
                        y = new Uint8Array(a);
                      return (
                        a && y.set(i.heap8u().slice(u, u + a), 0),
                        a &&
                          this.db._blobXfer instanceof Array &&
                          this.db._blobXfer.push(y.buffer),
                        y
                      );
                    }
                    default:
                      s(
                        "Don't know how to translate",
                        'type of result column #' + _ + '.',
                      );
                  }
                  s('Not reached.');
                },
                getInt: function (_) {
                  return this.get(_, r.SQLITE_INTEGER);
                },
                getFloat: function (_) {
                  return this.get(_, r.SQLITE_FLOAT);
                },
                getString: function (_) {
                  return this.get(_, r.SQLITE_TEXT);
                },
                getBlob: function (_) {
                  return this.get(_, r.SQLITE_BLOB);
                },
                getJSON: function (_) {
                  const h = this.get(_, r.SQLITE_STRING);
                  return h === null ? h : JSON.parse(h);
                },
                getColumnName: function (_) {
                  return r.sqlite3_column_name(T(N(this), _).pointer, _);
                },
                getColumnNames: function (_ = []) {
                  T(N(this), 0);
                  const h = this.columnCount;
                  for (let a = 0; a < h; ++a)
                    _.push(r.sqlite3_column_name(this.pointer, a));
                  return _;
                },
                getParamIndex: function (_) {
                  return N(this).parameterCount
                    ? r.sqlite3_bind_parameter_index(this.pointer, _)
                    : void 0;
                },
              };
              {
                const _ = {
                  enumerable: !0,
                  get: function () {
                    return p.get(this);
                  },
                  set: () => s('The pointer property is read-only.'),
                };
                Object.defineProperty(b.prototype, 'pointer', _),
                  Object.defineProperty(A.prototype, 'pointer', _);
              }
              if (
                (Object.defineProperty(b.prototype, 'columnCount', {
                  enumerable: !1,
                  get: function () {
                    return r.sqlite3_column_count(this.pointer);
                  },
                  set: () => s('The columnCount property is read-only.'),
                }),
                (e.oo1 = { DB: A, Stmt: b }),
                l.isUIThread())
              ) {
                e.oo1.JsStorageDb = function (h = 'session') {
                  const a = I.normalizeArgs(...arguments);
                  (h = a.filename),
                    h !== 'session' &&
                      h !== 'local' &&
                      s(
                        "JsStorageDb db name must be one of 'session' or 'local'.",
                      ),
                    (a.vfs = 'kvvfs'),
                    I.call(this, a);
                };
                const _ = e.oo1.JsStorageDb;
                (_.prototype = Object.create(A.prototype)),
                  (_.clearStorage = r.sqlite3_js_kvvfs_clear),
                  (_.prototype.clearStorage = function () {
                    return _.clearStorage(E(this).filename);
                  }),
                  (_.storageSize = r.sqlite3_js_kvvfs_size),
                  (_.prototype.storageSize = function () {
                    return _.storageSize(E(this).filename);
                  });
              }
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              const s = e.util;
              e.initWorker1API = function () {
                const r = (...I) => {
                  throw new Error(I.join(' '));
                };
                globalThis.WorkerGlobalScope instanceof Function ||
                  r('initWorker1API() must be run from a Worker thread.');
                const i = this.sqlite3 || r('Missing this.sqlite3 object.'),
                  l = i.oo1.DB,
                  p = function (I) {
                    let A = g.idMap.get(I);
                    return (
                      A ||
                      ((A = 'db#' + ++g.idSeq + '@' + I.pointer),
                      g.idMap.set(I, A),
                      A)
                    );
                  },
                  g = {
                    dbList: [],
                    idSeq: 0,
                    idMap: new WeakMap(),
                    xfer: [],
                    open: function (I) {
                      const A = new l(I);
                      return (
                        (this.dbs[p(A)] = A),
                        this.dbList.indexOf(A) < 0 && this.dbList.push(A),
                        A
                      );
                    },
                    close: function (I, A) {
                      if (I) {
                        delete this.dbs[p(I)];
                        const R = I.filename,
                          b = s.sqlite3__wasm_db_vfs(I.pointer, 0);
                        I.close();
                        const E = this.dbList.indexOf(I);
                        E >= 0 && this.dbList.splice(E, 1),
                          A && R && b && s.sqlite3__wasm_vfs_unlink(b, R);
                      }
                    },
                    post: function (I, A) {
                      A && A.length
                        ? (globalThis.postMessage(I, Array.from(A)),
                          (A.length = 0))
                        : globalThis.postMessage(I);
                    },
                    dbs: Object.create(null),
                    getDb: function (I, A = !0) {
                      return (
                        this.dbs[I] ||
                        (A ? r('Unknown (or closed) DB ID:', I) : void 0)
                      );
                    },
                  },
                  P = function (I = g.dbList[0]) {
                    return I && I.pointer ? I : r('DB is not opened.');
                  },
                  L = function (I, A = !0) {
                    const R = g.getDb(I.dbId, !1) || g.dbList[0];
                    return A ? P(R) : R;
                  },
                  j = function () {
                    return g.dbList[0] && p(g.dbList[0]);
                  },
                  H = {
                    open: function (I) {
                      const A = Object.create(null),
                        R = I.args || Object.create(null);
                      R.simulateError &&
                        r('Throwing because of simulateError flag.');
                      const b = Object.create(null);
                      (A.vfs = R.vfs), (A.filename = R.filename || '');
                      const E = g.open(A);
                      return (
                        (b.filename = E.filename),
                        (b.persistent = !!i.capi.sqlite3_js_db_uses_vfs(
                          E.pointer,
                          'opfs',
                        )),
                        (b.dbId = p(E)),
                        (b.vfs = E.dbVfsName()),
                        b
                      );
                    },
                    close: function (I) {
                      const A = L(I, !1),
                        R = { filename: A && A.filename };
                      if (A) {
                        const b =
                          I.args && typeof I.args == 'object'
                            ? !!I.args.unlink
                            : !1;
                        g.close(A, b);
                      }
                      return R;
                    },
                    exec: function (I) {
                      const A =
                        typeof I.args == 'string'
                          ? { sql: I.args }
                          : I.args || Object.create(null);
                      A.rowMode === 'stmt'
                        ? r(
                            "Invalid rowMode for 'exec': stmt mode",
                            'does not work in the Worker API.',
                          )
                        : A.sql || r("'exec' requires input SQL.");
                      const R = L(I);
                      (A.callback || Array.isArray(A.resultRows)) &&
                        (R._blobXfer = g.xfer);
                      const b = A.callback;
                      let E = 0;
                      const T = !!A.columnNames;
                      typeof b == 'string' &&
                        (T || (A.columnNames = []),
                        (A.callback = function (F, C) {
                          g.post(
                            {
                              type: b,
                              columnNames: A.columnNames,
                              rowNumber: ++E,
                              row: F,
                            },
                            g.xfer,
                          );
                        }));
                      try {
                        const F = A.countChanges
                          ? R.changes(!0, A.countChanges === 64)
                          : void 0;
                        R.exec(A),
                          F !== void 0 &&
                            (A.changeCount =
                              R.changes(!0, A.countChanges === 64) - F),
                          A.callback instanceof Function &&
                            ((A.callback = b),
                            g.post({
                              type: b,
                              columnNames: A.columnNames,
                              rowNumber: null,
                              row: void 0,
                            }));
                      } finally {
                        delete R._blobXfer, A.callback && (A.callback = b);
                      }
                      return A;
                    },
                    'config-get': function () {
                      const I = Object.create(null),
                        A = i.config;
                      return (
                        ['bigIntEnabled'].forEach(function (R) {
                          Object.getOwnPropertyDescriptor(A, R) &&
                            (I[R] = A[R]);
                        }),
                        (I.version = i.version),
                        (I.vfsList = i.capi.sqlite3_js_vfs_list()),
                        (I.opfsEnabled = !!i.opfs),
                        I
                      );
                    },
                    export: function (I) {
                      const A = L(I),
                        R = {
                          byteArray: i.capi.sqlite3_js_db_export(A.pointer),
                          filename: A.filename,
                          mimetype: 'application/x-sqlite3',
                        };
                      return g.xfer.push(R.byteArray.buffer), R;
                    },
                    toss: function (I) {
                      r('Testing worker exception');
                    },
                    'opfs-tree': async function (I) {
                      return (
                        i.opfs || r('OPFS support is unavailable.'),
                        await i.opfs.treeList()
                      );
                    },
                  };
                (globalThis.onmessage = async function (I) {
                  I = I.data;
                  let A,
                    R = I.dbId,
                    b = I.type;
                  const E = performance.now();
                  try {
                    H.hasOwnProperty(b) && H[b] instanceof Function
                      ? (A = await H[b](I))
                      : r('Unknown db worker message type:', I.type);
                  } catch (T) {
                    (b = 'error'),
                      (A = {
                        operation: I.type,
                        message: T.message,
                        errorClass: T.name,
                        input: I,
                      }),
                      T.stack &&
                        (A.stack =
                          typeof T.stack == 'string'
                            ? T.stack.split(/\n\s*/)
                            : T.stack);
                  }
                  R || (R = A.dbId || j()),
                    g.post(
                      {
                        type: b,
                        dbId: R,
                        messageId: I.messageId,
                        workerReceivedTime: E,
                        workerRespondTime: performance.now(),
                        departureTime: I.departureTime,
                        result: A,
                      },
                      g.xfer,
                    );
                }),
                  globalThis.postMessage({
                    type: 'sqlite3-api',
                    result: 'worker1-ready',
                  });
              }.bind({ sqlite3: e });
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              const s = e.wasm,
                r = e.capi,
                i = e.util.toss3,
                l = Object.create(null);
              (e.vfs = l),
                (r.sqlite3_vfs.prototype.registerVfs = function (p = !1) {
                  this instanceof e.capi.sqlite3_vfs ||
                    i('Expecting a sqlite3_vfs-type argument.');
                  const g = r.sqlite3_vfs_register(this, p ? 1 : 0);
                  return (
                    g &&
                      i('sqlite3_vfs_register(', this, ') failed with rc', g),
                    this.pointer !== r.sqlite3_vfs_find(this.$zName) &&
                      i(
                        'BUG: sqlite3_vfs_find(vfs.$zName) failed for just-installed VFS',
                        this,
                      ),
                    this
                  );
                }),
                (l.installVfs = function (p) {
                  let g = 0;
                  const P = ['io', 'vfs'];
                  for (const L of P) {
                    const j = p[L];
                    j &&
                      (++g,
                      j.struct.installMethods(j.methods, !!j.applyArgcCheck),
                      L === 'vfs' &&
                        (!j.struct.$zName &&
                          typeof j.name == 'string' &&
                          j.struct.addOnDispose(
                            (j.struct.$zName = s.allocCString(j.name)),
                          ),
                        j.struct.registerVfs(!!j.asDefault)));
                  }
                  return (
                    g ||
                      i(
                        'Misuse: installVfs() options object requires at least',
                        'one of:',
                        P,
                      ),
                    this
                  );
                });
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              const s = e.wasm,
                r = e.capi,
                i = e.util.toss3,
                l = Object.create(null);
              e.vtab = l;
              const p = r.sqlite3_index_info;
              (p.prototype.nthConstraint = function (L, j = !1) {
                if (L < 0 || L >= this.$nConstraint) return !1;
                const H =
                  this.$aConstraint +
                  p.sqlite3_index_constraint.structInfo.sizeof * L;
                return j ? H : new p.sqlite3_index_constraint(H);
              }),
                (p.prototype.nthConstraintUsage = function (L, j = !1) {
                  if (L < 0 || L >= this.$nConstraint) return !1;
                  const H =
                    this.$aConstraintUsage +
                    p.sqlite3_index_constraint_usage.structInfo.sizeof * L;
                  return j ? H : new p.sqlite3_index_constraint_usage(H);
                }),
                (p.prototype.nthOrderBy = function (L, j = !1) {
                  if (L < 0 || L >= this.$nOrderBy) return !1;
                  const H =
                    this.$aOrderBy +
                    p.sqlite3_index_orderby.structInfo.sizeof * L;
                  return j ? H : new p.sqlite3_index_orderby(H);
                });
              const g = function (L, j) {
                  return function (H, I = !1) {
                    if (
                      (arguments.length === 0 && (H = new j()), H instanceof j)
                    )
                      return this.set(H.pointer, H), H;
                    s.isPtr(H) ||
                      e.SQLite3Error.toss('Invalid argument to', L + '()');
                    let A = this.get(H);
                    return I && this.delete(H), A;
                  }.bind(new Map());
                },
                P = function (L, j) {
                  const H = g(L, j);
                  return Object.assign(Object.create(null), {
                    StructType: j,
                    create: (I) => {
                      const A = H();
                      return s.pokePtr(I, A.pointer), A;
                    },
                    get: (I) => H(I),
                    unget: (I) => H(I, !0),
                    dispose: (I) => {
                      const A = H(I, !0);
                      A && A.dispose();
                    },
                  });
                };
              (l.xVtab = P('xVtab', r.sqlite3_vtab)),
                (l.xCursor = P('xCursor', r.sqlite3_vtab_cursor)),
                (l.xIndexInfo = (L) => new r.sqlite3_index_info(L)),
                (l.xError = function L(j, H, I) {
                  if (L.errorReporter instanceof Function)
                    try {
                      L.errorReporter(
                        'sqlite3_module::' + j + '(): ' + H.message,
                      );
                    } catch {}
                  let A;
                  return (
                    H instanceof e.WasmAllocError
                      ? (A = r.SQLITE_NOMEM)
                      : arguments.length > 2
                        ? (A = I)
                        : H instanceof e.SQLite3Error && (A = H.resultCode),
                    A || r.SQLITE_ERROR
                  );
                }),
                (l.xError.errorReporter = console.error.bind(console)),
                (l.xRowid = (L, j) => s.poke(L, j, 'i64')),
                (l.setupModule = function (L) {
                  let j = !1;
                  const H =
                    this instanceof r.sqlite3_module
                      ? this
                      : L.struct || (j = new r.sqlite3_module());
                  try {
                    const I = L.methods || i("Missing 'methods' object.");
                    for (const A of Object.entries({
                      xConnect: 'xCreate',
                      xDisconnect: 'xDestroy',
                    })) {
                      const R = A[0],
                        b = A[1];
                      I[R] === !0
                        ? (I[R] = I[b])
                        : I[b] === !0 && (I[b] = I[R]);
                    }
                    if (L.catchExceptions) {
                      const A = function (E, T) {
                          return ['xConnect', 'xCreate'].indexOf(E) >= 0
                            ? function (F, C, x, N, Q, c) {
                                try {
                                  return T(...arguments) || 0;
                                } catch (m) {
                                  return (
                                    m instanceof e.WasmAllocError ||
                                      (s.dealloc(s.peekPtr(c)),
                                      s.pokePtr(c, s.allocCString(m.message))),
                                    l.xError(E, m)
                                  );
                                }
                              }
                            : function (...F) {
                                try {
                                  return T(...F) || 0;
                                } catch (C) {
                                  return l.xError(E, C);
                                }
                              };
                        },
                        R = [
                          'xCreate',
                          'xConnect',
                          'xBestIndex',
                          'xDisconnect',
                          'xDestroy',
                          'xOpen',
                          'xClose',
                          'xFilter',
                          'xNext',
                          'xEof',
                          'xColumn',
                          'xRowid',
                          'xUpdate',
                          'xBegin',
                          'xSync',
                          'xCommit',
                          'xRollback',
                          'xFindFunction',
                          'xRename',
                          'xSavepoint',
                          'xRelease',
                          'xRollbackTo',
                          'xShadowName',
                        ],
                        b = Object.create(null);
                      for (const E of R) {
                        const T = I[E];
                        if (T instanceof Function)
                          E === 'xConnect' && I.xCreate === T
                            ? (b[E] = I.xCreate)
                            : E === 'xCreate' && I.xConnect === T
                              ? (b[E] = I.xConnect)
                              : (b[E] = A(E, T));
                        else continue;
                      }
                      H.installMethods(b, !1);
                    } else H.installMethods(I, !!L.applyArgcCheck);
                    if (H.$iVersion === 0) {
                      let A;
                      typeof L.iVersion == 'number'
                        ? (A = L.iVersion)
                        : H.$xShadowName
                          ? (A = 3)
                          : H.$xSavePoint || H.$xRelease || H.$xRollbackTo
                            ? (A = 2)
                            : (A = 1),
                        (H.$iVersion = A);
                    }
                  } catch (I) {
                    throw (j && j.dispose(), I);
                  }
                  return H;
                }),
                (r.sqlite3_module.prototype.setupModule = function (L) {
                  return l.setupModule.call(this, L);
                });
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              const s = function r(i) {
                var g;
                if (!globalThis.SharedArrayBuffer || !globalThis.Atomics)
                  return Promise.reject(
                    new Error(
                      'Cannot install OPFS: Missing SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to enable those. See https://sqlite.org/wasm/doc/trunk/persistence.md#coop-coep',
                    ),
                  );
                if (typeof WorkerGlobalScope > 'u')
                  return Promise.reject(
                    new Error(
                      'The OPFS sqlite3_vfs cannot run in the main thread because it requires Atomics.wait().',
                    ),
                  );
                if (
                  !globalThis.FileSystemHandle ||
                  !globalThis.FileSystemDirectoryHandle ||
                  !globalThis.FileSystemFileHandle ||
                  !globalThis.FileSystemFileHandle.prototype
                    .createSyncAccessHandle ||
                  !(
                    (g = navigator == null ? void 0 : navigator.storage) !=
                      null && g.getDirectory
                  )
                )
                  return Promise.reject(
                    new Error('Missing required OPFS APIs.'),
                  );
                (!i || typeof i != 'object') && (i = Object.create(null));
                const l = new URL(globalThis.location.href).searchParams;
                return l.has('opfs-disable')
                  ? Promise.resolve(e)
                  : (i.verbose === void 0 &&
                      (i.verbose = l.has('opfs-verbose')
                        ? +l.get('opfs-verbose') || 2
                        : 1),
                    i.sanityChecks === void 0 &&
                      (i.sanityChecks = l.has('opfs-sanity-check')),
                    i.proxyUri === void 0 && (i.proxyUri = r.defaultProxyUri),
                    typeof i.proxyUri == 'function' &&
                      (i.proxyUri = i.proxyUri()),
                    new Promise(function (P, L) {
                      const j = [e.config.error, e.config.warn, e.config.log],
                        H = (O, ...M) => {
                          i.verbose > O && j[O]('OPFS syncer:', ...M);
                        },
                        I = (...O) => H(2, ...O),
                        A = (...O) => H(1, ...O),
                        R = (...O) => H(0, ...O),
                        b = e.util.toss,
                        E = e.capi,
                        T = e.util,
                        F = e.wasm,
                        C = E.sqlite3_vfs,
                        x = E.sqlite3_file,
                        N = E.sqlite3_io_methods,
                        Q = Object.create(null),
                        c = () => {
                          var O;
                          return (
                            globalThis.FileSystemHandle &&
                            globalThis.FileSystemDirectoryHandle &&
                            globalThis.FileSystemFileHandle &&
                            globalThis.FileSystemFileHandle.prototype
                              .createSyncAccessHandle &&
                            ((O =
                              navigator == null ? void 0 : navigator.storage) ==
                            null
                              ? void 0
                              : O.getDirectory)
                          );
                        };
                      Q.metrics = {
                        dump: function () {
                          let O,
                            M = 0,
                            z = 0,
                            $ = 0;
                          for (O in q.opIds) {
                            const V = B[O];
                            (M += V.count),
                              (z += V.time),
                              ($ += V.wait),
                              (V.avgTime =
                                V.count && V.time ? V.time / V.count : 0),
                              (V.avgWait =
                                V.count && V.wait ? V.wait / V.count : 0);
                          }
                          e.config.log(
                            globalThis.location.href,
                            'metrics for',
                            globalThis.location.href,
                            ':',
                            B,
                            `
Total of`,
                            M,
                            'op(s) for',
                            z,
                            'ms (incl. ' +
                              $ +
                              ' ms of waiting on the async side)',
                          ),
                            e.config.log('Serialization metrics:', B.s11n),
                            a.postMessage({ type: 'opfs-async-metrics' });
                        },
                        reset: function () {
                          let O;
                          const M = ($) => ($.count = $.time = $.wait = 0);
                          for (O in q.opIds) M((B[O] = Object.create(null)));
                          let z = (B.s11n = Object.create(null));
                          (z = z.serialize = Object.create(null)),
                            (z.count = z.time = 0),
                            (z = B.s11n.deserialize = Object.create(null)),
                            (z.count = z.time = 0);
                        },
                      };
                      const m = new N(),
                        w = new C().addOnDispose(() => m.dispose());
                      let U;
                      const _ = (O) => ((U = !0), w.dispose(), L(O)),
                        h = () => ((U = !1), P(e)),
                        a = new Worker(
                          new URL(
                            '/assets/sqlite3-opfs-async-proxy-D34PESGD.js',
                            self.location.href,
                          ),
                        );
                      setTimeout(() => {
                        U === void 0 &&
                          _(
                            new Error(
                              'Timeout while waiting for OPFS async proxy worker.',
                            ),
                          );
                      }, 4e3),
                        (a._originalOnError = a.onerror),
                        (a.onerror = function (O) {
                          R('Error initializing OPFS asyncer:', O),
                            _(
                              new Error(
                                'Loading OPFS async Worker failed for unknown reasons.',
                              ),
                            );
                        });
                      const u = E.sqlite3_vfs_find(null),
                        y = u ? new C(u) : null;
                      (m.$iVersion = 1),
                        (w.$iVersion = 2),
                        (w.$szOsFile = E.sqlite3_file.structInfo.sizeof),
                        (w.$mxPathname = 1024),
                        (w.$zName = F.allocCString('opfs')),
                        (w.$xDlOpen =
                          w.$xDlError =
                          w.$xDlSym =
                          w.$xDlClose =
                            null),
                        w.addOnDispose(
                          '$zName',
                          w.$zName,
                          'cleanup default VFS wrapper',
                          () => (y ? y.dispose() : null),
                        );
                      const q = Object.create(null);
                      (q.verbose = i.verbose),
                        (q.littleEndian = (() => {
                          const O = new ArrayBuffer(2);
                          return (
                            new DataView(O).setInt16(0, 256, !0),
                            new Int16Array(O)[0] === 256
                          );
                        })()),
                        (q.asyncIdleWaitTime = 150),
                        (q.asyncS11nExceptions = 1),
                        (q.fileBufferSize = 1024 * 64),
                        (q.sabS11nOffset = q.fileBufferSize),
                        (q.sabS11nSize = w.$mxPathname * 2),
                        (q.sabIO = new SharedArrayBuffer(
                          q.fileBufferSize + q.sabS11nSize,
                        )),
                        (q.opIds = Object.create(null));
                      const B = Object.create(null);
                      {
                        let O = 0;
                        (q.opIds.whichOp = O++),
                          (q.opIds.rc = O++),
                          (q.opIds.xAccess = O++),
                          (q.opIds.xClose = O++),
                          (q.opIds.xDelete = O++),
                          (q.opIds.xDeleteNoWait = O++),
                          (q.opIds.xFileSize = O++),
                          (q.opIds.xLock = O++),
                          (q.opIds.xOpen = O++),
                          (q.opIds.xRead = O++),
                          (q.opIds.xSleep = O++),
                          (q.opIds.xSync = O++),
                          (q.opIds.xTruncate = O++),
                          (q.opIds.xUnlock = O++),
                          (q.opIds.xWrite = O++),
                          (q.opIds.mkdir = O++),
                          (q.opIds['opfs-async-metrics'] = O++),
                          (q.opIds['opfs-async-shutdown'] = O++),
                          (q.opIds.retry = O++),
                          (q.sabOP = new SharedArrayBuffer(O * 4)),
                          Q.metrics.reset();
                      }
                      (q.sq3Codes = Object.create(null)),
                        [
                          'SQLITE_ACCESS_EXISTS',
                          'SQLITE_ACCESS_READWRITE',
                          'SQLITE_BUSY',
                          'SQLITE_CANTOPEN',
                          'SQLITE_ERROR',
                          'SQLITE_IOERR',
                          'SQLITE_IOERR_ACCESS',
                          'SQLITE_IOERR_CLOSE',
                          'SQLITE_IOERR_DELETE',
                          'SQLITE_IOERR_FSYNC',
                          'SQLITE_IOERR_LOCK',
                          'SQLITE_IOERR_READ',
                          'SQLITE_IOERR_SHORT_READ',
                          'SQLITE_IOERR_TRUNCATE',
                          'SQLITE_IOERR_UNLOCK',
                          'SQLITE_IOERR_WRITE',
                          'SQLITE_LOCK_EXCLUSIVE',
                          'SQLITE_LOCK_NONE',
                          'SQLITE_LOCK_PENDING',
                          'SQLITE_LOCK_RESERVED',
                          'SQLITE_LOCK_SHARED',
                          'SQLITE_LOCKED',
                          'SQLITE_MISUSE',
                          'SQLITE_NOTFOUND',
                          'SQLITE_OPEN_CREATE',
                          'SQLITE_OPEN_DELETEONCLOSE',
                          'SQLITE_OPEN_MAIN_DB',
                          'SQLITE_OPEN_READONLY',
                        ].forEach((O) => {
                          (q.sq3Codes[O] = E[O]) === void 0 &&
                            b('Maintenance required: not found:', O);
                        }),
                        (q.opfsFlags = Object.assign(Object.create(null), {
                          OPFS_UNLOCK_ASAP: 1,
                          OPFS_UNLINK_BEFORE_OPEN: 2,
                          defaultUnlockAsap: !1,
                        }));
                      const K = (O, ...M) => {
                        const z = q.opIds[O] || b('Invalid op ID:', O);
                        q.s11n.serialize(...M),
                          Atomics.store(q.sabOPView, q.opIds.rc, -1),
                          Atomics.store(q.sabOPView, q.opIds.whichOp, z),
                          Atomics.notify(q.sabOPView, q.opIds.whichOp);
                        const $ = performance.now();
                        for (
                          ;
                          Atomics.wait(q.sabOPView, q.opIds.rc, -1) !==
                          'not-equal';
                        );
                        const V = Atomics.load(q.sabOPView, q.opIds.rc);
                        if (
                          ((B[O].wait += performance.now() - $),
                          V && q.asyncS11nExceptions)
                        ) {
                          const J = q.s11n.deserialize();
                          J && R(O + '() async error:', ...J);
                        }
                        return V;
                      };
                      Q.debug = {
                        asyncShutdown: () => {
                          A(
                            'Shutting down OPFS async listener. The OPFS VFS will no longer work.',
                          ),
                            K('opfs-async-shutdown');
                        },
                        asyncRestart: () => {
                          A(
                            'Attempting to restart OPFS VFS async listener. Might work, might not.',
                          ),
                            a.postMessage({ type: 'opfs-async-restart' });
                        },
                      };
                      const Z = () => {
                          if (q.s11n) return q.s11n;
                          const O = new TextDecoder(),
                            M = new TextEncoder('utf-8'),
                            z = new Uint8Array(
                              q.sabIO,
                              q.sabS11nOffset,
                              q.sabS11nSize,
                            ),
                            $ = new DataView(
                              q.sabIO,
                              q.sabS11nOffset,
                              q.sabS11nSize,
                            );
                          q.s11n = Object.create(null);
                          const V = Object.create(null);
                          (V.number = {
                            id: 1,
                            size: 8,
                            getter: 'getFloat64',
                            setter: 'setFloat64',
                          }),
                            (V.bigint = {
                              id: 2,
                              size: 8,
                              getter: 'getBigInt64',
                              setter: 'setBigInt64',
                            }),
                            (V.boolean = {
                              id: 3,
                              size: 4,
                              getter: 'getInt32',
                              setter: 'setInt32',
                            }),
                            (V.string = { id: 4 });
                          const J = (d) =>
                              V[typeof d] ||
                              b(
                                'Maintenance required: this value type cannot be serialized.',
                                d,
                              ),
                            W = (d) => {
                              switch (d) {
                                case V.number.id:
                                  return V.number;
                                case V.bigint.id:
                                  return V.bigint;
                                case V.boolean.id:
                                  return V.boolean;
                                case V.string.id:
                                  return V.string;
                                default:
                                  b('Invalid type ID:', d);
                              }
                            };
                          return (
                            (q.s11n.deserialize = function (d = !1) {
                              ++B.s11n.deserialize.count;
                              const f = performance.now(),
                                S = z[0],
                                k = S ? [] : null;
                              if (S) {
                                const D = [];
                                let G = 1,
                                  Y,
                                  se,
                                  ue;
                                for (Y = 0; Y < S; ++Y, ++G) D.push(W(z[G]));
                                for (Y = 0; Y < S; ++Y) {
                                  const xe = D[Y];
                                  xe.getter
                                    ? ((ue = $[xe.getter](G, q.littleEndian)),
                                      (G += xe.size))
                                    : ((se = $.getInt32(G, q.littleEndian)),
                                      (G += 4),
                                      (ue = O.decode(z.slice(G, G + se))),
                                      (G += se)),
                                    k.push(ue);
                                }
                              }
                              return (
                                d && (z[0] = 0),
                                (B.s11n.deserialize.time +=
                                  performance.now() - f),
                                k
                              );
                            }),
                            (q.s11n.serialize = function (...d) {
                              const f = performance.now();
                              if ((++B.s11n.serialize.count, d.length)) {
                                const S = [];
                                let k = 0,
                                  D = 1;
                                for (
                                  z[0] = d.length & 255;
                                  k < d.length;
                                  ++k, ++D
                                )
                                  S.push(J(d[k])), (z[D] = S[k].id);
                                for (k = 0; k < d.length; ++k) {
                                  const G = S[k];
                                  if (G.setter)
                                    $[G.setter](D, d[k], q.littleEndian),
                                      (D += G.size);
                                  else {
                                    const Y = M.encode(d[k]);
                                    $.setInt32(D, Y.byteLength, q.littleEndian),
                                      (D += 4),
                                      z.set(Y, D),
                                      (D += Y.byteLength);
                                  }
                                }
                              } else z[0] = 0;
                              B.s11n.serialize.time += performance.now() - f;
                            }),
                            q.s11n
                          );
                        },
                        re = function O(M = 16) {
                          O._chars ||
                            ((O._chars =
                              'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789'),
                            (O._n = O._chars.length));
                          const z = [];
                          let $ = 0;
                          for (; $ < M; ++$) {
                            const V =
                              ((Math.random() * (O._n * 64)) % O._n) | 0;
                            z[$] = O._chars[V];
                          }
                          return z.join('');
                        },
                        ee = Object.create(null),
                        te = Object.create(null);
                      (te.op = void 0), (te.start = void 0);
                      const oe = (O) => {
                          (te.start = performance.now()),
                            (te.op = O),
                            ++B[O].count;
                        },
                        ae = () =>
                          (B[te.op].time += performance.now() - te.start),
                        fe = {
                          xCheckReservedLock: function (O, M) {
                            return F.poke(M, 0, 'i32'), 0;
                          },
                          xClose: function (O) {
                            oe('xClose');
                            let M = 0;
                            const z = ee[O];
                            return (
                              z &&
                                (delete ee[O],
                                (M = K('xClose', O)),
                                z.sq3File && z.sq3File.dispose()),
                              ae(),
                              M
                            );
                          },
                          xDeviceCharacteristics: function (O) {
                            return E.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN;
                          },
                          xFileControl: function (O, M, z) {
                            return E.SQLITE_NOTFOUND;
                          },
                          xFileSize: function (O, M) {
                            oe('xFileSize');
                            let z = K('xFileSize', O);
                            if (z == 0)
                              try {
                                const $ = q.s11n.deserialize()[0];
                                F.poke(M, $, 'i64');
                              } catch ($) {
                                R(
                                  'Unexpected error reading xFileSize() result:',
                                  $,
                                ),
                                  (z = q.sq3Codes.SQLITE_IOERR);
                              }
                            return ae(), z;
                          },
                          xLock: function (O, M) {
                            oe('xLock');
                            const z = ee[O];
                            let $ = 0;
                            return (
                              z.lockType
                                ? (z.lockType = M)
                                : (($ = K('xLock', O, M)),
                                  $ === 0 && (z.lockType = M)),
                              ae(),
                              $
                            );
                          },
                          xRead: function (O, M, z, $) {
                            oe('xRead');
                            const V = ee[O];
                            let J;
                            try {
                              (J = K('xRead', O, z, Number($))),
                                (J === 0 || E.SQLITE_IOERR_SHORT_READ === J) &&
                                  F.heap8u().set(V.sabView.subarray(0, z), M);
                            } catch (W) {
                              R('xRead(', arguments, ') failed:', W, V),
                                (J = E.SQLITE_IOERR_READ);
                            }
                            return ae(), J;
                          },
                          xSync: function (O, M) {
                            oe('xSync'), ++B.xSync.count;
                            const z = K('xSync', O, M);
                            return ae(), z;
                          },
                          xTruncate: function (O, M) {
                            oe('xTruncate');
                            const z = K('xTruncate', O, Number(M));
                            return ae(), z;
                          },
                          xUnlock: function (O, M) {
                            oe('xUnlock');
                            const z = ee[O];
                            let $ = 0;
                            return (
                              E.SQLITE_LOCK_NONE === M &&
                                z.lockType &&
                                ($ = K('xUnlock', O, M)),
                              $ === 0 && (z.lockType = M),
                              ae(),
                              $
                            );
                          },
                          xWrite: function (O, M, z, $) {
                            oe('xWrite');
                            const V = ee[O];
                            let J;
                            try {
                              V.sabView.set(F.heap8u().subarray(M, M + z)),
                                (J = K('xWrite', O, z, Number($)));
                            } catch (W) {
                              R('xWrite(', arguments, ') failed:', W, V),
                                (J = E.SQLITE_IOERR_WRITE);
                            }
                            return ae(), J;
                          },
                        },
                        pe = {
                          xAccess: function (O, M, z, $) {
                            oe('xAccess');
                            const V = K('xAccess', F.cstrToJs(M));
                            return F.poke($, V ? 0 : 1, 'i32'), ae(), 0;
                          },
                          xCurrentTime: function (O, M) {
                            return (
                              F.poke(
                                M,
                                24405875e-1 + new Date().getTime() / 864e5,
                                'double',
                              ),
                              0
                            );
                          },
                          xCurrentTimeInt64: function (O, M) {
                            return (
                              F.poke(
                                M,
                                24405875e-1 * 864e5 + new Date().getTime(),
                                'i64',
                              ),
                              0
                            );
                          },
                          xDelete: function (O, M, z) {
                            oe('xDelete');
                            const $ = K('xDelete', F.cstrToJs(M), z, !1);
                            return ae(), $;
                          },
                          xFullPathname: function (O, M, z, $) {
                            return F.cstrncpy($, M, z) < z
                              ? 0
                              : E.SQLITE_CANTOPEN;
                          },
                          xGetLastError: function (O, M, z) {
                            return (
                              A(
                                'OPFS xGetLastError() has nothing sensible to return.',
                              ),
                              0
                            );
                          },
                          xOpen: function (M, z, $, V, J) {
                            oe('xOpen');
                            let W = 0;
                            z === 0
                              ? (z = re())
                              : F.isPtr(z) &&
                                (E.sqlite3_uri_boolean(
                                  z,
                                  'opfs-unlock-asap',
                                  0,
                                ) && (W |= q.opfsFlags.OPFS_UNLOCK_ASAP),
                                E.sqlite3_uri_boolean(
                                  z,
                                  'delete-before-open',
                                  0,
                                ) && (W |= q.opfsFlags.OPFS_UNLINK_BEFORE_OPEN),
                                (z = F.cstrToJs(z)));
                            const d = Object.create(null);
                            (d.fid = $),
                              (d.filename = z),
                              (d.sab = new SharedArrayBuffer(q.fileBufferSize)),
                              (d.flags = V);
                            const f = K('xOpen', $, z, V, W);
                            return (
                              f ||
                                (d.readOnly &&
                                  F.poke(J, E.SQLITE_OPEN_READONLY, 'i32'),
                                (ee[$] = d),
                                (d.sabView = q.sabFileBufView),
                                (d.sq3File = new x($)),
                                (d.sq3File.$pMethods = m.pointer),
                                (d.lockType = E.SQLITE_LOCK_NONE)),
                              ae(),
                              f
                            );
                          },
                        };
                      y &&
                        ((w.$xRandomness = y.$xRandomness),
                        (w.$xSleep = y.$xSleep)),
                        w.$xRandomness ||
                          (pe.xRandomness = function (O, M, z) {
                            const $ = F.heap8u();
                            let V = 0;
                            for (; V < M; ++V)
                              $[z + V] = (Math.random() * 255e3) & 255;
                            return V;
                          }),
                        w.$xSleep ||
                          (pe.xSleep = function (O, M) {
                            return (
                              Atomics.wait(q.sabOPView, q.opIds.xSleep, 0, M), 0
                            );
                          }),
                        (Q.getResolvedPath = function (O, M) {
                          const z = new URL(O, 'file://irrelevant').pathname;
                          return M ? z.split('/').filter(($) => !!$) : z;
                        }),
                        (Q.getDirForFilename = async function (M, z = !1) {
                          const $ = Q.getResolvedPath(M, !0),
                            V = $.pop();
                          let J = Q.rootDirectory;
                          for (const W of $)
                            W &&
                              (J = await J.getDirectoryHandle(W, {
                                create: !!z,
                              }));
                          return [J, V];
                        }),
                        (Q.mkdir = async function (O) {
                          try {
                            return (
                              await Q.getDirForFilename(O + '/filepart', !0), !0
                            );
                          } catch {
                            return !1;
                          }
                        }),
                        (Q.entryExists = async function (O) {
                          try {
                            const [M, z] = await Q.getDirForFilename(O);
                            return await M.getFileHandle(z), !0;
                          } catch {
                            return !1;
                          }
                        }),
                        (Q.randomFilename = re),
                        (Q.treeList = async function () {
                          const O = async function z($, V) {
                              (V.name = $.name), (V.dirs = []), (V.files = []);
                              for await (const J of $.values())
                                if (J.kind === 'directory') {
                                  const W = Object.create(null);
                                  V.dirs.push(W), await z(J, W);
                                } else V.files.push(J.name);
                            },
                            M = Object.create(null);
                          return await O(Q.rootDirectory, M), M;
                        }),
                        (Q.rmfr = async function () {
                          const O = Q.rootDirectory,
                            M = { recurse: !0 };
                          for await (const z of O.values())
                            O.removeEntry(z.name, M);
                        }),
                        (Q.unlink = async function (O, M = !1, z = !1) {
                          try {
                            const [$, V] = await Q.getDirForFilename(O, !1);
                            return await $.removeEntry(V, { recursive: M }), !0;
                          } catch ($) {
                            if (z)
                              throw new Error(
                                'unlink(',
                                arguments[0],
                                ') failed: ' + $.message,
                                { cause: $ },
                              );
                            return !1;
                          }
                        }),
                        (Q.traverse = async function (O) {
                          const M = {
                            recursive: !0,
                            directory: Q.rootDirectory,
                          };
                          typeof O == 'function' && (O = { callback: O }),
                            (O = Object.assign(M, O || {})),
                            (async function $(V, J) {
                              for await (const W of V.values()) {
                                if (O.callback(W, V, J) === !1) return !1;
                                if (
                                  O.recursive &&
                                  W.kind === 'directory' &&
                                  (await $(W, J + 1)) === !1
                                )
                                  break;
                              }
                            })(O.directory, 0);
                        });
                      const be = async function (O, M) {
                        const [z, $] = await Q.getDirForFilename(O, !0);
                        let J = await (
                            await z.getFileHandle($, { create: !0 })
                          ).createSyncAccessHandle(),
                          W = 0,
                          d,
                          f = !1;
                        try {
                          for (J.truncate(0); (d = await M()) !== void 0; )
                            d instanceof ArrayBuffer && (d = new Uint8Array(d)),
                              W === 0 &&
                                d.byteLength >= 15 &&
                                (T.affirmDbHeader(d), (f = !0)),
                              J.write(d, { at: W }),
                              (W += d.byteLength);
                          if (
                            ((W < 512 || W % 512 !== 0) &&
                              b(
                                'Input size',
                                W,
                                'is not correct for an SQLite database.',
                              ),
                            !f)
                          ) {
                            const S = new Uint8Array(20);
                            J.read(S, { at: 0 }), T.affirmDbHeader(S);
                          }
                          return J.write(new Uint8Array([1, 1]), { at: 18 }), W;
                        } catch (S) {
                          throw (
                            (await J.close(),
                            (J = void 0),
                            await z.removeEntry($).catch(() => {}),
                            S)
                          );
                        } finally {
                          J && (await J.close());
                        }
                      };
                      if (
                        ((Q.importDb = async function (O, M) {
                          if (M instanceof Function) return be(O, M);
                          M instanceof ArrayBuffer && (M = new Uint8Array(M)),
                            T.affirmIsDb(M);
                          const z = M.byteLength,
                            [$, V] = await Q.getDirForFilename(O, !0);
                          let J,
                            W = 0;
                          try {
                            return (
                              (J = await (
                                await $.getFileHandle(V, { create: !0 })
                              ).createSyncAccessHandle()),
                              J.truncate(0),
                              (W = J.write(M, { at: 0 })),
                              W != z &&
                                b(
                                  'Expected to write ' +
                                    z +
                                    ' bytes but wrote ' +
                                    W +
                                    '.',
                                ),
                              J.write(new Uint8Array([1, 1]), { at: 18 }),
                              W
                            );
                          } catch (d) {
                            throw (
                              (J && (await J.close(), (J = void 0)),
                              await $.removeEntry(V).catch(() => {}),
                              d)
                            );
                          } finally {
                            J && (await J.close());
                          }
                        }),
                        e.oo1)
                      ) {
                        const O = function (...M) {
                          const z = e.oo1.DB.dbCtorHelper.normalizeArgs(...M);
                          (z.vfs = w.$zName),
                            e.oo1.DB.dbCtorHelper.call(this, z);
                        };
                        (O.prototype = Object.create(e.oo1.DB.prototype)),
                          (e.oo1.OpfsDb = O),
                          (O.importDb = Q.importDb),
                          e.oo1.DB.dbCtorHelper.setVfsPostOpenSql(
                            w.pointer,
                            function (M, z) {
                              z.capi.sqlite3_busy_timeout(M, 1e4),
                                z.capi.sqlite3_exec(
                                  M,
                                  [
                                    'pragma journal_mode=DELETE;',
                                    'pragma cache_size=-16384;',
                                  ],
                                  0,
                                  0,
                                  0,
                                );
                            },
                          );
                      }
                      const me = function () {
                        const O = F.scopedAllocPush(),
                          M = new x();
                        try {
                          const z = M.pointer,
                            $ =
                              E.SQLITE_OPEN_CREATE |
                              E.SQLITE_OPEN_READWRITE |
                              E.SQLITE_OPEN_MAIN_DB,
                            V = F.scopedAlloc(8),
                            J = '/sanity/check/file' + re(8),
                            W = F.scopedAllocCString(J);
                          let d;
                          if (
                            (q.s11n.serialize('This is ä string.'),
                            (d = q.s11n.deserialize()),
                            I('deserialize() says:', d),
                            d[0] !== 'This is ä string.' &&
                              b('String d13n error.'),
                            pe.xAccess(w.pointer, W, 0, V),
                            (d = F.peek(V, 'i32')),
                            I('xAccess(', J, ') exists ?=', d),
                            (d = pe.xOpen(w.pointer, W, z, $, V)),
                            I(
                              'open rc =',
                              d,
                              'state.sabOPView[xOpen] =',
                              q.sabOPView[q.opIds.xOpen],
                            ),
                            d !== 0)
                          ) {
                            R('open failed with code', d);
                            return;
                          }
                          pe.xAccess(w.pointer, W, 0, V),
                            (d = F.peek(V, 'i32')),
                            d || b('xAccess() failed to detect file.'),
                            (d = fe.xSync(M.pointer, 0)),
                            d && b('sync failed w/ rc', d),
                            (d = fe.xTruncate(M.pointer, 1024)),
                            d && b('truncate failed w/ rc', d),
                            F.poke(V, 0, 'i64'),
                            (d = fe.xFileSize(M.pointer, V)),
                            d && b('xFileSize failed w/ rc', d),
                            I('xFileSize says:', F.peek(V, 'i64')),
                            (d = fe.xWrite(M.pointer, W, 10, 1)),
                            d && b('xWrite() failed!');
                          const f = F.scopedAlloc(16);
                          (d = fe.xRead(M.pointer, f, 6, 2)), F.poke(f + 6, 0);
                          let S = F.cstrToJs(f);
                          I('xRead() got:', S),
                            S !== 'sanity' && b('Unexpected xRead() value.'),
                            pe.xSleep &&
                              (I('xSleep()ing before close()ing...'),
                              pe.xSleep(w.pointer, 2e3),
                              I('waking up from xSleep()')),
                            (d = fe.xClose(z)),
                            I('xClose rc =', d, 'sabOPView =', q.sabOPView),
                            I('Deleting file:', J),
                            pe.xDelete(w.pointer, W, 4660),
                            pe.xAccess(w.pointer, W, 0, V),
                            (d = F.peek(V, 'i32')),
                            d &&
                              b(
                                'Expecting 0 from xAccess(',
                                J,
                                ') after xDelete().',
                              ),
                            A('End of OPFS sanity checks.');
                        } finally {
                          M.dispose(), F.scopedAllocPop(O);
                        }
                      };
                      a.onmessage = function ({ data: O }) {
                        switch (O.type) {
                          case 'opfs-unavailable':
                            _(new Error(O.payload.join(' ')));
                            break;
                          case 'opfs-async-loaded':
                            a.postMessage({ type: 'opfs-async-init', args: q });
                            break;
                          case 'opfs-async-inited': {
                            if (U === !0) break;
                            try {
                              e.vfs.installVfs({
                                io: { struct: m, methods: fe },
                                vfs: { struct: w, methods: pe },
                              }),
                                (q.sabOPView = new Int32Array(q.sabOP)),
                                (q.sabFileBufView = new Uint8Array(
                                  q.sabIO,
                                  0,
                                  q.fileBufferSize,
                                )),
                                (q.sabS11nView = new Uint8Array(
                                  q.sabIO,
                                  q.sabS11nOffset,
                                  q.sabS11nSize,
                                )),
                                Z(),
                                i.sanityChecks &&
                                  (A(
                                    'Running sanity checks because of opfs-sanity-check URL arg...',
                                  ),
                                  me()),
                                c()
                                  ? navigator.storage
                                      .getDirectory()
                                      .then((M) => {
                                        (a.onerror = a._originalOnError),
                                          delete a._originalOnError,
                                          (e.opfs = Q),
                                          (Q.rootDirectory = M),
                                          I(
                                            'End of OPFS sqlite3_vfs setup.',
                                            w,
                                          ),
                                          h();
                                      })
                                      .catch(_)
                                  : h();
                            } catch (M) {
                              R(M), _(M);
                            }
                            break;
                          }
                          default: {
                            const M =
                              'Unexpected message from the OPFS async worker: ' +
                              JSON.stringify(O);
                            R(M), _(new Error(M));
                            break;
                          }
                        }
                      };
                    }));
              };
              (s.defaultProxyUri = 'sqlite3-opfs-async-proxy.js'),
                globalThis.sqlite3ApiBootstrap.initializersAsync.push(
                  async (r) => {
                    try {
                      let i = s.defaultProxyUri;
                      return (
                        r.scriptInfo.sqlite3Dir &&
                          (s.defaultProxyUri = r.scriptInfo.sqlite3Dir + i),
                        s().catch((l) => {
                          r.config.warn(
                            'Ignoring inability to install OPFS sqlite3_vfs:',
                            l.message,
                          );
                        })
                      );
                    } catch (i) {
                      return (
                        r.config.error('installOpfsVfs() exception:', i),
                        Promise.reject(i)
                      );
                    }
                  },
                );
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
              var ee, te, oe, ae, fe, pe, be, me, O, M, z, $, st, J;
              const s = e.util.toss,
                r = e.util.toss3,
                i = Object.create(null),
                l = e.capi,
                p = e.util,
                g = e.wasm,
                P = 4096,
                L = 512,
                j = 4,
                H = 8,
                I = L + j,
                A = L,
                R = I,
                b = P,
                E =
                  l.SQLITE_OPEN_MAIN_DB |
                  l.SQLITE_OPEN_MAIN_JOURNAL |
                  l.SQLITE_OPEN_SUPER_JOURNAL |
                  l.SQLITE_OPEN_WAL,
                T = '.opaque',
                F = () => Math.random().toString(36).slice(2),
                C = new TextDecoder(),
                x = new TextEncoder(),
                N = Object.assign(Object.create(null), {
                  name: 'opfs-sahpool',
                  directory: void 0,
                  initialCapacity: 6,
                  clearOnInit: !1,
                  verbosity: 2,
                }),
                Q = [e.config.error, e.config.warn, e.config.log];
              e.config.log;
              const c = e.config.warn;
              e.config.error;
              const m = new Map(),
                w = (W) => m.get(W),
                U = (W, d) => {
                  d ? m.set(W, d) : m.delete(W);
                },
                _ = new Map(),
                h = (W) => _.get(W),
                a = (W, d) => {
                  d ? _.set(W, d) : _.delete(W);
                },
                u = {
                  xCheckReservedLock: function (W, d) {
                    const f = h(W);
                    return (
                      f.log('xCheckReservedLock'),
                      f.storeErr(),
                      g.poke32(d, 1),
                      0
                    );
                  },
                  xClose: function (W) {
                    const d = h(W);
                    d.storeErr();
                    const f = d.getOFileForS3File(W);
                    if (f)
                      try {
                        d.log(`xClose ${f.path}`),
                          d.mapS3FileToOFile(W, !1),
                          f.sah.flush(),
                          f.flags & l.SQLITE_OPEN_DELETEONCLOSE &&
                            d.deletePath(f.path);
                      } catch (S) {
                        return d.storeErr(S, l.SQLITE_IOERR);
                      }
                    return 0;
                  },
                  xDeviceCharacteristics: function (W) {
                    return l.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN;
                  },
                  xFileControl: function (W, d, f) {
                    return l.SQLITE_NOTFOUND;
                  },
                  xFileSize: function (W, d) {
                    const f = h(W);
                    f.log('xFileSize');
                    const k = f.getOFileForS3File(W).sah.getSize() - b;
                    return g.poke64(d, BigInt(k)), 0;
                  },
                  xLock: function (W, d) {
                    const f = h(W);
                    f.log(`xLock ${d}`), f.storeErr();
                    const S = f.getOFileForS3File(W);
                    return (S.lockType = d), 0;
                  },
                  xRead: function (W, d, f, S) {
                    const k = h(W);
                    k.storeErr();
                    const D = k.getOFileForS3File(W);
                    k.log(`xRead ${D.path} ${f} @ ${S}`);
                    try {
                      const G = D.sah.read(g.heap8u().subarray(d, d + f), {
                        at: b + Number(S),
                      });
                      return G < f
                        ? (g.heap8u().fill(0, d + G, d + f),
                          l.SQLITE_IOERR_SHORT_READ)
                        : 0;
                    } catch (G) {
                      return k.storeErr(G, l.SQLITE_IOERR);
                    }
                  },
                  xSectorSize: function (W) {
                    return P;
                  },
                  xSync: function (W, d) {
                    const f = h(W);
                    f.log(`xSync ${d}`), f.storeErr();
                    const S = f.getOFileForS3File(W);
                    try {
                      return S.sah.flush(), 0;
                    } catch (k) {
                      return f.storeErr(k, l.SQLITE_IOERR);
                    }
                  },
                  xTruncate: function (W, d) {
                    const f = h(W);
                    f.log(`xTruncate ${d}`), f.storeErr();
                    const S = f.getOFileForS3File(W);
                    try {
                      return S.sah.truncate(b + Number(d)), 0;
                    } catch (k) {
                      return f.storeErr(k, l.SQLITE_IOERR);
                    }
                  },
                  xUnlock: function (W, d) {
                    const f = h(W);
                    f.log('xUnlock');
                    const S = f.getOFileForS3File(W);
                    return (S.lockType = d), 0;
                  },
                  xWrite: function (W, d, f, S) {
                    const k = h(W);
                    k.storeErr();
                    const D = k.getOFileForS3File(W);
                    k.log(`xWrite ${D.path} ${f} ${S}`);
                    try {
                      const G = D.sah.write(g.heap8u().subarray(d, d + f), {
                        at: b + Number(S),
                      });
                      return f === G ? 0 : s('Unknown write() failure.');
                    } catch (G) {
                      return k.storeErr(G, l.SQLITE_IOERR);
                    }
                  },
                },
                y = new l.sqlite3_io_methods();
              (y.$iVersion = 1),
                e.vfs.installVfs({ io: { struct: y, methods: u } });
              const q = {
                  xAccess: function (W, d, f, S) {
                    const k = w(W);
                    k.storeErr();
                    try {
                      const D = k.getPath(d);
                      g.poke32(S, k.hasFilename(D) ? 1 : 0);
                    } catch {
                      g.poke32(S, 0);
                    }
                    return 0;
                  },
                  xCurrentTime: function (W, d) {
                    return (
                      g.poke(
                        d,
                        24405875e-1 + new Date().getTime() / 864e5,
                        'double',
                      ),
                      0
                    );
                  },
                  xCurrentTimeInt64: function (W, d) {
                    return (
                      g.poke(
                        d,
                        24405875e-1 * 864e5 + new Date().getTime(),
                        'i64',
                      ),
                      0
                    );
                  },
                  xDelete: function (W, d, f) {
                    const S = w(W);
                    S.log(`xDelete ${g.cstrToJs(d)}`), S.storeErr();
                    try {
                      return S.deletePath(S.getPath(d)), 0;
                    } catch (k) {
                      return S.storeErr(k), l.SQLITE_IOERR_DELETE;
                    }
                  },
                  xFullPathname: function (W, d, f, S) {
                    return g.cstrncpy(S, d, f) < f ? 0 : l.SQLITE_CANTOPEN;
                  },
                  xGetLastError: function (W, d, f) {
                    const S = w(W),
                      k = S.popErr();
                    if ((S.log(`xGetLastError ${d} e =`, k), k)) {
                      const D = g.scopedAllocPush();
                      try {
                        const [G, Y] = g.scopedAllocCString(k.message, !0);
                        g.cstrncpy(f, G, d), Y > d && g.poke8(f + d - 1, 0);
                      } catch {
                        return l.SQLITE_NOMEM;
                      } finally {
                        g.scopedAllocPop(D);
                      }
                    }
                    return k ? k.sqlite3Rc || l.SQLITE_IOERR : 0;
                  },
                  xOpen: function (d, f, S, k, D) {
                    const G = w(d);
                    try {
                      G.log(`xOpen ${g.cstrToJs(f)} ${k}`);
                      const Y = f && g.peek8(f) ? G.getPath(f) : F();
                      let se = G.getSAHForPath(Y);
                      !se &&
                        k & l.SQLITE_OPEN_CREATE &&
                        (G.getFileCount() < G.getCapacity()
                          ? ((se = G.nextAvailableSAH()),
                            G.setAssociatedPath(se, Y, k))
                          : s('SAH pool is full. Cannot create file', Y)),
                        se || s('file not found:', Y);
                      const ue = { path: Y, flags: k, sah: se };
                      G.mapS3FileToOFile(S, ue),
                        (ue.lockType = l.SQLITE_LOCK_NONE);
                      const xe = new l.sqlite3_file(S);
                      return (
                        (xe.$pMethods = y.pointer),
                        xe.dispose(),
                        g.poke32(D, k),
                        0
                      );
                    } catch (Y) {
                      return G.storeErr(Y), l.SQLITE_CANTOPEN;
                    }
                  },
                },
                B = function (W) {
                  e.capi.sqlite3_vfs_find(W) &&
                    r('VFS name is already registered:', W);
                  const d = new l.sqlite3_vfs(),
                    f = l.sqlite3_vfs_find(null),
                    S = f ? new l.sqlite3_vfs(f) : null;
                  return (
                    (d.$iVersion = 2),
                    (d.$szOsFile = l.sqlite3_file.structInfo.sizeof),
                    (d.$mxPathname = L),
                    d.addOnDispose((d.$zName = g.allocCString(W)), () =>
                      U(d.pointer, 0),
                    ),
                    S &&
                      ((d.$xRandomness = S.$xRandomness),
                      (d.$xSleep = S.$xSleep),
                      S.dispose()),
                    !d.$xRandomness &&
                      !q.xRandomness &&
                      (q.xRandomness = function (k, D, G) {
                        const Y = g.heap8u();
                        let se = 0;
                        for (; se < D; ++se)
                          Y[G + se] = (Math.random() * 255e3) & 255;
                        return se;
                      }),
                    !d.$xSleep && !q.xSleep && (q.xSleep = (k, D) => 0),
                    e.vfs.installVfs({ vfs: { struct: d, methods: q } }),
                    d
                  );
                };
              class K {
                constructor(d = Object.create(null)) {
                  Ee(this, $);
                  Bt(this, 'vfsDir');
                  Ee(this, ee);
                  Ee(this, te);
                  Ee(this, oe);
                  Ee(this, ae, new Map());
                  Ee(this, fe, new Map());
                  Ee(this, pe, new Set());
                  Ee(this, be, new Map());
                  Ee(this, me, new Uint8Array(I));
                  Ee(this, O);
                  Ee(this, M);
                  Ee(this, z);
                  Fe(this, z, d.verbosity ?? N.verbosity),
                    (this.vfsName = d.name || N.name),
                    Fe(this, M, B(this.vfsName)),
                    U(X(this, M).pointer, this),
                    (this.vfsDir = d.directory || '.' + this.vfsName),
                    Fe(
                      this,
                      O,
                      new DataView(X(this, me).buffer, X(this, me).byteOffset),
                    ),
                    (this.isReady = this.reset(
                      !!(d.clearOnInit ?? N.clearOnInit),
                    ).then(() => {
                      if (this.$error) throw this.$error;
                      return this.getCapacity()
                        ? Promise.resolve(void 0)
                        : this.addCapacity(
                            d.initialCapacity || N.initialCapacity,
                          );
                    }));
                }
                log(...d) {
                  rt(this, $, st).call(this, 2, ...d);
                }
                warn(...d) {
                  rt(this, $, st).call(this, 1, ...d);
                }
                error(...d) {
                  rt(this, $, st).call(this, 0, ...d);
                }
                getVfs() {
                  return X(this, M);
                }
                getCapacity() {
                  return X(this, ae).size;
                }
                getFileCount() {
                  return X(this, fe).size;
                }
                getFileNames() {
                  const d = [],
                    f = X(this, fe).keys();
                  for (const S of f) d.push(S);
                  return d;
                }
                async addCapacity(d) {
                  for (let f = 0; f < d; ++f) {
                    const S = F(),
                      D = await (
                        await X(this, te).getFileHandle(S, { create: !0 })
                      ).createSyncAccessHandle();
                    X(this, ae).set(D, S), this.setAssociatedPath(D, '', 0);
                  }
                  return this.getCapacity();
                }
                async reduceCapacity(d) {
                  let f = 0;
                  for (const S of Array.from(X(this, pe))) {
                    if (f === d || this.getFileCount() === this.getCapacity())
                      break;
                    const k = X(this, ae).get(S);
                    S.close(),
                      await X(this, te).removeEntry(k),
                      X(this, ae).delete(S),
                      X(this, pe).delete(S),
                      ++f;
                  }
                  return f;
                }
                releaseAccessHandles() {
                  for (const d of X(this, ae).keys()) d.close();
                  X(this, ae).clear(), X(this, fe).clear(), X(this, pe).clear();
                }
                async acquireAccessHandles(d) {
                  const f = [];
                  for await (const [S, k] of X(this, te))
                    k.kind === 'file' && f.push([S, k]);
                  return Promise.all(
                    f.map(async ([S, k]) => {
                      try {
                        const D = await k.createSyncAccessHandle();
                        if ((X(this, ae).set(D, S), d))
                          D.truncate(b), this.setAssociatedPath(D, '', 0);
                        else {
                          const G = this.getAssociatedPath(D);
                          G ? X(this, fe).set(G, D) : X(this, pe).add(D);
                        }
                      } catch (D) {
                        throw (
                          (this.storeErr(D), this.releaseAccessHandles(), D)
                        );
                      }
                    }),
                  );
                }
                getAssociatedPath(d) {
                  d.read(X(this, me), { at: 0 });
                  const f = X(this, O).getUint32(A);
                  if (
                    X(this, me)[0] &&
                    (f & l.SQLITE_OPEN_DELETEONCLOSE || !(f & E))
                  )
                    return (
                      c(
                        `Removing file with unexpected flags ${f.toString(16)}`,
                        X(this, me),
                      ),
                      this.setAssociatedPath(d, '', 0),
                      ''
                    );
                  const S = new Uint32Array(H / 4);
                  d.read(S, { at: R });
                  const k = this.computeDigest(X(this, me));
                  if (S.every((D, G) => D === k[G])) {
                    const D = X(this, me).findIndex((G) => G === 0);
                    return (
                      D === 0 && d.truncate(b),
                      D ? C.decode(X(this, me).subarray(0, D)) : ''
                    );
                  } else
                    return (
                      c('Disassociating file with bad digest.'),
                      this.setAssociatedPath(d, '', 0),
                      ''
                    );
                }
                setAssociatedPath(d, f, S) {
                  const k = x.encodeInto(f, X(this, me));
                  L <= k.written + 1 && s('Path too long:', f),
                    X(this, me).fill(0, k.written, L),
                    X(this, O).setUint32(A, S);
                  const D = this.computeDigest(X(this, me));
                  d.write(X(this, me), { at: 0 }),
                    d.write(D, { at: R }),
                    d.flush(),
                    f
                      ? (X(this, fe).set(f, d), X(this, pe).delete(d))
                      : (d.truncate(b), X(this, pe).add(d));
                }
                computeDigest(d) {
                  let f = 3735928559,
                    S = 1103547991;
                  for (const k of d)
                    (f = 31 * f + k * 307), (S = 31 * S + k * 307);
                  return new Uint32Array([f >>> 0, S >>> 0]);
                }
                async reset(d) {
                  await this.isReady;
                  let f = await navigator.storage.getDirectory(),
                    S;
                  for (const k of this.vfsDir.split('/'))
                    k &&
                      ((S = f),
                      (f = await f.getDirectoryHandle(k, { create: !0 })));
                  return (
                    Fe(this, ee, f),
                    Fe(this, oe, S),
                    Fe(
                      this,
                      te,
                      await X(this, ee).getDirectoryHandle(T, { create: !0 }),
                    ),
                    this.releaseAccessHandles(),
                    this.acquireAccessHandles(d)
                  );
                }
                getPath(d) {
                  return (
                    g.isPtr(d) && (d = g.cstrToJs(d)),
                    (d instanceof URL ? d : new URL(d, 'file://localhost/'))
                      .pathname
                  );
                }
                deletePath(d) {
                  const f = X(this, fe).get(d);
                  return (
                    f &&
                      (X(this, fe).delete(d), this.setAssociatedPath(f, '', 0)),
                    !!f
                  );
                }
                storeErr(d, f) {
                  return (
                    d && ((d.sqlite3Rc = f || l.SQLITE_IOERR), this.error(d)),
                    (this.$error = d),
                    f
                  );
                }
                popErr() {
                  const d = this.$error;
                  return (this.$error = void 0), d;
                }
                nextAvailableSAH() {
                  const [d] = X(this, pe).keys();
                  return d;
                }
                getOFileForS3File(d) {
                  return X(this, be).get(d);
                }
                mapS3FileToOFile(d, f) {
                  f
                    ? (X(this, be).set(d, f), a(d, this))
                    : (X(this, be).delete(d), a(d, !1));
                }
                hasFilename(d) {
                  return X(this, fe).has(d);
                }
                getSAHForPath(d) {
                  return X(this, fe).get(d);
                }
                async removeVfs() {
                  if (!X(this, M).pointer || !X(this, te)) return !1;
                  l.sqlite3_vfs_unregister(X(this, M).pointer),
                    X(this, M).dispose();
                  try {
                    this.releaseAccessHandles(),
                      await X(this, ee).removeEntry(T, { recursive: !0 }),
                      Fe(this, te, void 0),
                      await X(this, oe).removeEntry(X(this, ee).name, {
                        recursive: !0,
                      }),
                      Fe(this, ee, Fe(this, oe, void 0));
                  } catch (d) {
                    e.config.error(this.vfsName, 'removeVfs() failed:', d);
                  }
                  return !0;
                }
                exportFile(d) {
                  const f = X(this, fe).get(d) || s('File not found:', d),
                    S = f.getSize() - b,
                    k = new Uint8Array(S > 0 ? S : 0);
                  if (S > 0) {
                    const D = f.read(k, { at: b });
                    D != S &&
                      s('Expected to read ' + S + ' bytes but read ' + D + '.');
                  }
                  return k;
                }
                async importDbChunked(d, f) {
                  const S =
                    X(this, fe).get(d) ||
                    this.nextAvailableSAH() ||
                    s('No available handles to import to.');
                  S.truncate(0);
                  let k = 0,
                    D,
                    G = !1;
                  try {
                    for (; (D = await f()) !== void 0; )
                      D instanceof ArrayBuffer && (D = new Uint8Array(D)),
                        k === 0 &&
                          D.byteLength >= 15 &&
                          (p.affirmDbHeader(D), (G = !0)),
                        S.write(D, { at: b + k }),
                        (k += D.byteLength);
                    if (
                      ((k < 512 || k % 512 !== 0) &&
                        s(
                          'Input size',
                          k,
                          'is not correct for an SQLite database.',
                        ),
                      !G)
                    ) {
                      const Y = new Uint8Array(20);
                      S.read(Y, { at: 0 }), p.affirmDbHeader(Y);
                    }
                    S.write(new Uint8Array([1, 1]), { at: b + 18 });
                  } catch (Y) {
                    throw (this.setAssociatedPath(S, '', 0), Y);
                  }
                  return this.setAssociatedPath(S, d, l.SQLITE_OPEN_MAIN_DB), k;
                }
                importDb(d, f) {
                  if (f instanceof ArrayBuffer) f = new Uint8Array(f);
                  else if (f instanceof Function)
                    return this.importDbChunked(d, f);
                  const S =
                      X(this, fe).get(d) ||
                      this.nextAvailableSAH() ||
                      s('No available handles to import to.'),
                    k = f.byteLength;
                  (k < 512 || k % 512 != 0) &&
                    s('Byte array size is invalid for an SQLite db.');
                  const D = 'SQLite format 3';
                  for (let Y = 0; Y < D.length; ++Y)
                    D.charCodeAt(Y) !== f[Y] &&
                      s('Input does not contain an SQLite database header.');
                  const G = S.write(f, { at: b });
                  return (
                    G != k
                      ? (this.setAssociatedPath(S, '', 0),
                        s(
                          'Expected to write ' +
                            k +
                            ' bytes but wrote ' +
                            G +
                            '.',
                        ))
                      : (S.write(new Uint8Array([1, 1]), { at: b + 18 }),
                        this.setAssociatedPath(S, d, l.SQLITE_OPEN_MAIN_DB)),
                    G
                  );
                }
              }
              (ee = new WeakMap()),
                (te = new WeakMap()),
                (oe = new WeakMap()),
                (ae = new WeakMap()),
                (fe = new WeakMap()),
                (pe = new WeakMap()),
                (be = new WeakMap()),
                (me = new WeakMap()),
                (O = new WeakMap()),
                (M = new WeakMap()),
                (z = new WeakMap()),
                ($ = new WeakSet()),
                (st = function (d, ...f) {
                  X(this, z) > d && Q[d](this.vfsName + ':', ...f);
                });
              class Z {
                constructor(d) {
                  Ee(this, J);
                  Fe(this, J, d), (this.vfsName = d.vfsName);
                }
                async addCapacity(d) {
                  return X(this, J).addCapacity(d);
                }
                async reduceCapacity(d) {
                  return X(this, J).reduceCapacity(d);
                }
                getCapacity() {
                  return X(this, J).getCapacity(X(this, J));
                }
                getFileCount() {
                  return X(this, J).getFileCount();
                }
                getFileNames() {
                  return X(this, J).getFileNames();
                }
                async reserveMinimumCapacity(d) {
                  const f = X(this, J).getCapacity();
                  return f < d ? X(this, J).addCapacity(d - f) : f;
                }
                exportFile(d) {
                  return X(this, J).exportFile(d);
                }
                importDb(d, f) {
                  return X(this, J).importDb(d, f);
                }
                async wipeFiles() {
                  return X(this, J).reset(!0);
                }
                unlink(d) {
                  return X(this, J).deletePath(d);
                }
                async removeVfs() {
                  return X(this, J).removeVfs();
                }
              }
              J = new WeakMap();
              const re = async () => {
                const W = await navigator.storage.getDirectory(),
                  d = '.opfs-sahpool-sync-check-' + F(),
                  k = (
                    await (
                      await W.getFileHandle(d, { create: !0 })
                    ).createSyncAccessHandle()
                  ).close();
                return (
                  await k,
                  await W.removeEntry(d),
                  k != null &&
                    k.then &&
                    s(
                      'The local OPFS API is too old for opfs-sahpool:',
                      'it has an async FileSystemSyncAccessHandle.close() method.',
                    ),
                  !0
                );
              };
              e.installOpfsSAHPoolVfs = async function (
                W = Object.create(null),
              ) {
                var f;
                const d = W.name || N.name;
                return i[d]
                  ? i[d]
                  : !globalThis.FileSystemHandle ||
                      !globalThis.FileSystemDirectoryHandle ||
                      !globalThis.FileSystemFileHandle ||
                      !globalThis.FileSystemFileHandle.prototype
                        .createSyncAccessHandle ||
                      !(
                        (f = navigator == null ? void 0 : navigator.storage) !=
                          null && f.getDirectory
                      )
                    ? (i[d] = Promise.reject(
                        new Error('Missing required OPFS APIs.'),
                      ))
                    : (i[d] = re()
                        .then(async function () {
                          if (W.$testThrowInInit) throw W.$testThrowInInit;
                          const S = new K(W);
                          return S.isReady
                            .then(async () => {
                              const k = new Z(S);
                              if (e.oo1) {
                                const D = e.oo1,
                                  G = S.getVfs(),
                                  Y = function (...se) {
                                    const ue = D.DB.dbCtorHelper.normalizeArgs(
                                      ...se,
                                    );
                                    (ue.vfs = G.$zName),
                                      D.DB.dbCtorHelper.call(this, ue);
                                  };
                                (Y.prototype = Object.create(D.DB.prototype)),
                                  (k.OpfsSAHPoolDb = Y),
                                  D.DB.dbCtorHelper.setVfsPostOpenSql(
                                    G.pointer,
                                    function (se, ue) {
                                      ue.capi.sqlite3_exec(
                                        se,
                                        [
                                          'pragma journal_mode=DELETE;',
                                          'pragma cache_size=-16384;',
                                        ],
                                        0,
                                        0,
                                        0,
                                      );
                                    },
                                  );
                              }
                              return S.log('VFS initialized.'), k;
                            })
                            .catch(async (k) => {
                              throw (await S.removeVfs().catch(() => {}), k);
                            });
                        })
                        .catch((S) => (i[d] = Promise.reject(S))));
              };
            }),
            typeof n < 'u')
          ) {
            const e = Object.assign(
              Object.create(null),
              {
                exports: typeof wasmExports > 'u' ? n.asm : wasmExports,
                memory: n.wasmMemory,
              },
              globalThis.sqlite3ApiConfig || {},
            );
            globalThis.sqlite3ApiConfig = e;
            let s;
            try {
              s = globalThis.sqlite3ApiBootstrap();
            } catch (r) {
              throw (console.error('sqlite3ApiBootstrap() error:', r), r);
            } finally {
              delete globalThis.sqlite3ApiBootstrap,
                delete globalThis.sqlite3ApiConfig;
            }
            n.sqlite3 = s;
          } else
            console.warn(
              'This is not running in an Emscripten module context, so',
              'globalThis.sqlite3ApiBootstrap() is _not_ being called due to lack',
              'of config info for the WASM environment.',
              'It must be called manually.',
            );
        }),
        ze.ready
      );
    };
  })();
  de = (function () {
    var ze, t;
    const Te = de;
    if (!Te)
      throw new Error(
        'Expecting globalThis.sqlite3InitModule to be defined by the Emscripten build.',
      );
    const ve = (globalThis.sqlite3InitModuleState = Object.assign(
      Object.create(null),
      {
        moduleScript:
          (ze = globalThis == null ? void 0 : globalThis.document) == null
            ? void 0
            : ze.currentScript,
        isWorker: typeof WorkerGlobalScope < 'u',
        location: globalThis.location,
        urlParams:
          (t = globalThis == null ? void 0 : globalThis.location) != null &&
          t.href
            ? new URL(globalThis.location.href).searchParams
            : new URLSearchParams(),
      },
    ));
    if (
      ((ve.debugModule = ve.urlParams.has('sqlite3.debugModule')
        ? (...Ae) => console.warn('sqlite3.debugModule:', ...Ae)
        : () => {}),
      ve.urlParams.has('sqlite3.dir'))
    )
      ve.sqlite3Dir = ve.urlParams.get('sqlite3.dir') + '/';
    else if (ve.moduleScript) {
      const Ae = ve.moduleScript.src.split('/');
      Ae.pop(), (ve.sqlite3Dir = Ae.join('/') + '/');
    }
    if (
      ((globalThis.sqlite3InitModule = function Ae(...Pe) {
        return Te(...Pe)
          .then((Ne) => {
            const Me = Ne.sqlite3;
            (Me.scriptInfo = ve), Ae.__isUnderTest && (Me.__isUnderTest = !0);
            const Je = Me.asyncPostInit;
            return delete Me.asyncPostInit, Je();
          })
          .catch((Ne) => {
            throw (console.error('Exception loading sqlite3 module:', Ne), Ne);
          });
      }),
      (globalThis.sqlite3InitModule.ready = Te.ready),
      globalThis.sqlite3InitModuleState.moduleScript)
    ) {
      const Ae = globalThis.sqlite3InitModuleState;
      let Pe = Ae.moduleScript.src.split('/');
      Pe.pop(), (Ae.scriptDir = Pe.join('/') + '/');
    }
    return (
      ve.debugModule('sqlite3InitModuleState =', ve),
      globalThis.sqlite3InitModule
    );
  })();
  var ye = de;
  ye().then((Te) => Te.initWorker1API());
})();
