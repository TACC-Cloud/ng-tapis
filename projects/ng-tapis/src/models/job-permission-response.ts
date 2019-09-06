/* tslint:disable */
import { PermissionListing } from './permission-listing';
export interface JobPermissionResponse  {

  /**
   * success or failure
   */
  message?: string;
  result?: PermissionListing;

  /**
   * success or failure
   */
  status?: string;
}
