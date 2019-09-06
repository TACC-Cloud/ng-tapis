/* tslint:disable */
import { Permission } from './permission';
export interface FilePermissionRequest  {
  permission?: Permission;

  /**
   * Should updated permissions be applied recursively. Defaults to false.
   */
  recursive?: boolean;

  /**
   * The username of the api user whose permission is to be set.
   */
  username?: string;
}
