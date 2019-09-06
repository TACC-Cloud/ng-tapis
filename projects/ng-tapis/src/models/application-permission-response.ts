/* tslint:disable */
import { ApplicationPermission } from './application-permission';
export interface ApplicationPermissionResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * An array of permission objects for this application.
   */
  result?: Array<ApplicationPermission>;

  /**
   * success or failure
   */
  status?: string;
}
