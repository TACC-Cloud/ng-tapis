/* tslint:disable */
import { Permission } from './permission';
export interface JobPermissionRequest  {
  permission?: Permission;

  /**
   * The username of the api user whose permission is to be set.
   */
  username?: string;
}
