/* tslint:disable */
import { Permission1 } from './permission-1';
export interface PermissionListing  {

  /**
   * Unique name of the application to which this permissions apply.
   */
  name?: string;

  /**
   * Owner of the application.
   */
  owner?: string;

  /**
   * Permissions granted on this application.
   */
  permissions?: Array<Permission1>;
}
