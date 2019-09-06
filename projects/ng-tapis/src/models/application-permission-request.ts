/* tslint:disable */
import { Permission } from './permission';
export interface ApplicationPermissionRequest  {
  permission?: Permission;

  /**
   * The username of the api user whose permission is to be set.
   */
  username?: string;
}
