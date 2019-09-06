/* tslint:disable */
import { Permission4 } from './permission-4';
export interface MetadataPermissionRequest  {
  permission?: Permission4;

  /**
   * The username of the api user whose permission is to be set.
   */
  username?: string;
}
