/* tslint:disable */
import { ACL } from './acl';
export interface ApplicationPermission  {
  permission?: ACL;

  /**
   * Username associate with this permission
   */
  username?: string;
}
