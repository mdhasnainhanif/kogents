// File utilities for blob conversion and handling

export interface BlobFileData {
  name: string;
  size: number;
  type: string;
  blob: string; // base64 encoded blob
  lastModified?: number;
}

/**
 * Convert a File object to BlobFileData for CRM storage
 */
export async function fileToBlob(file: File): Promise<BlobFileData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data URL prefix to get pure base64
      const base64Data = result.split(',')[1] || result;
      
      resolve({
        name: file.name,
        size: file.size,
        type: file.type,
        blob: base64Data,
        lastModified: file.lastModified,
      });
    };
    
    reader.onerror = () => {
      reject(new Error(`Failed to convert file ${file.name} to blob`));
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * Convert multiple files to blob data
 */
export async function filesToBlobs(files: File[]): Promise<BlobFileData[]> {
  const blobPromises = files.map(file => fileToBlob(file));
  return Promise.all(blobPromises);
}

/**
 * Convert data URL to BlobFileData
 */
export function dataUrlToBlob(dataUrl: string, filename: string): BlobFileData {
  // Extract base64 data and mime type
  const [header, base64Data] = dataUrl.split(',');
  const mimeMatch = header.match(/data:([^;]+)/);
  const mimeType = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
  
  // Calculate approximate size (base64 is roughly 4/3 the size of original)
  const size = Math.round((base64Data.length * 3) / 4);
  
  return {
    name: filename,
    size: size,
    type: mimeType,
    blob: base64Data,
    lastModified: Date.now(),
  };
}

/**
 * Create a File object from BlobFileData (for preview/download)
 */
export function blobToFile(blobData: BlobFileData): File {
  const base64 = blobData.blob;
  const byteCharacters = atob(base64);
  const byteArrays = [];
  
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  
  const blob = new Blob(byteArrays, { type: blobData.type });
  return new File([blob], blobData.name, { 
    type: blobData.type,
    lastModified: blobData.lastModified 
  });
}

/**
 * Validate file for upload
 */
export function validateFile(file: File, maxSizeMB: number = 10): { valid: boolean; error?: string } {
  const maxSize = maxSizeMB * 1024 * 1024; // Convert to bytes
  
  if (file.size > maxSize) {
    return { valid: false, error: `File size must be less than ${maxSizeMB}MB` };
  }
  
  return { valid: true };
}

/**
 * Get file extension from filename
 */
export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
