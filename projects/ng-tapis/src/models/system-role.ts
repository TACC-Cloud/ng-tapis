/* tslint:disable */
import { Role } from './role';
export interface SystemRole  {
  role?: Role;

  /**
   * The username of the api user granted this role.
   */
  username?: string;
}
