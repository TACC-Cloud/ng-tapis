/* tslint:disable */
import { FileHistory } from './file-history';
export interface FileHistoryResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * response body
   */
  result?: Array<FileHistory>;

  /**
   * success or failure
   */
  status?: string;
}
