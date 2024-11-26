import { DB_NAME } from './db';

const dataMigrationEndpoint = import.meta.env
  .VITE_DATA_MIGRATION_ENDPOINT as string;

const generateFileId = (): string => crypto.randomUUID();

const fetchUrl = async (
  endpoint: string,
  method: 'GET' | 'POST',
  body?: object,
): Promise<string | null> => {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error in fetchUrl:', { endpoint, method, error });
    return null;
  }
};

const getUploadUrl = (fileId: string) =>
  fetchUrl(dataMigrationEndpoint, 'POST', { fileId });

const getDownloadUrl = (fileId: string) =>
  fetchUrl(`${dataMigrationEndpoint}?fileId=${fileId}`, 'GET');

const readFileFromOPFS = async (
  fileName: string,
): Promise<ArrayBuffer | null> => {
  try {
    const rootDir = await navigator.storage.getDirectory();
    const fileHandle = await rootDir.getFileHandle(fileName);
    const file = await fileHandle.getFile();
    return await file.arrayBuffer();
  } catch (error) {
    console.error('Error reading file from OPFS:', error);
    return null;
  }
};

const uploadFile = async (uploadUrl: string, fileData: ArrayBuffer) => {
  try {
    const response = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      body: fileData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error(`Failed to upload file: ${error}`);
  }
};

export const uploadToCloud = async () => {
  const fileId = generateFileId();

  const fileData = await readFileFromOPFS(`${DB_NAME}.sqlite3`);
  if (!fileData) {
    console.error('Failed to read file from OPFS');
    return;
  }

  const uploadUrl = await getUploadUrl(fileId);
  if (!uploadUrl) {
    console.error('Failed to get upload URL');
    return;
  }

  await uploadFile(uploadUrl, fileData);
  return fileId;
};

const downloadFile = async (url: string): Promise<ArrayBuffer | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to download file');
    }
    return await response.arrayBuffer();
  } catch (error) {
    console.error('Error downloading file:', error);
    return null;
  }
};

const saveToOPFS = async (fileData: ArrayBuffer): Promise<void> => {
  try {
    const rootDir = await navigator.storage.getDirectory();
    const fileHandle = await rootDir.getFileHandle(`${DB_NAME}.sqlite3`, {
      create: true,
    });
    const writable = await fileHandle.createWritable();
    await writable.write(fileData);
    await writable.close();
  } catch (error) {
    console.error('Error saving to OPFS:', error);
    throw error;
  }
};

export const restoreFromBackup = async (fileId: string): Promise<void> => {
  try {
    const downloadUrl = await getDownloadUrl(fileId);
    if (!downloadUrl) {
      throw new Error('Failed to get download URL.');
    }

    const fileData = await downloadFile(downloadUrl);
    if (!fileData) {
      throw new Error('Failed to download file.');
    }

    await saveToOPFS(fileData);
  } catch (error) {
    console.error('Error in restoreFromBackup:', error);
    throw error;
  }
};
