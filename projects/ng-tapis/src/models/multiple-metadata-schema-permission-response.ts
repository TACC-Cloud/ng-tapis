/* tslint:disable */
import { Permission1 } from './permission-1';
export interface MultipleMetadataSchemaPermissionResponse  {

  /**
   * Error message caused by this request
   */
  message?: string;

  /**
   * Permissions granted on this schema resource.
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
