/* tslint:disable */
import { Permission1 } from './permission-1';
export interface MetadataSchemaPermissionResponse  {

  /**
   * Error message caused by this request
   */
  message?: string;
  result?: Permission1;

  /**
   * success or failure
   */
  status?: string;

  /**
   * API version number
   */
  version?: string;
}
