/* tslint:disable */
import { RemoteFile } from './remote-file';
export interface MultipleRemoteFileResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * response body
   */
  result?: Array<RemoteFile>;

  /**
   * success or failure
   */
  status?: string;
}
