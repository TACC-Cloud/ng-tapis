/* tslint:disable */
import { SystemRole } from './system-role';
export interface MultipleSystemRoleResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * All matching roles for this system
   */
  result?: Array<SystemRole>;

  /**
   * success or failure
   */
  status?: string;
}
