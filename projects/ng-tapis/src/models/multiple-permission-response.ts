/* tslint:disable */
import { FilePermission } from './file-permission';
export interface MultiplePermissionResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * One or more file permissions
   */
  result?: Array<FilePermission>;

  /**
   * success or failure
   */
  status?: string;
}
