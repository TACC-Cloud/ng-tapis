/* tslint:disable */
export interface RemoteFile  {

  /**
   * The file type of the file.
   */
  format?: string;

  /**
   * The date this file was last modified in ISO 8601 format.
   */
  lastModified?: string;

  /**
   * The length of the file/folder.
   */
  length?: number;

  /**
   * The mime type of the file/folder. If unknown, it defaults to application/binary.
   */
  mimeType?: string;

  /**
   * The name of the file/folder.
   */
  name?: string;

  /**
   * The absolute path to the file/folder.
   */
  path?: string;

  /**
   * The system permission of the invoking user on the file/folder.
   */
  permissions?: string;

  /**
   * The systemId of the system where this file lives.
   */
  system?: string;

  /**
   * Whether it is a file or folder.
   */
  type?: string;
}
