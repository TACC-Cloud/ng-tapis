/* tslint:disable */
import { RemoteFile } from './remote-file';
export interface SingleRemoteFileResponse  {

  /**
   * success or failure
   */
  message?: string;
  result?: RemoteFile;

  /**
   * success or failure
   */
  status?: string;
}
