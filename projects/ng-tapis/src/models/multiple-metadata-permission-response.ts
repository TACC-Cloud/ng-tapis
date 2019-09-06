/* tslint:disable */
import { Permission1 } from './permission-1';
export interface MultipleMetadataPermissionResponse  {

  /**
   * Error message caused by this request
   */
  message?: string;

  /**
   * Permissions granted on this metadata resource.
   */
  result?: Array<Permission1>;

  /**
   * success or failure
   */
  status?: string;

  /**
   * API version number
   */
  version?: string;
}
