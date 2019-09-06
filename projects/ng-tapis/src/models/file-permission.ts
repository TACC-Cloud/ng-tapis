/* tslint:disable */
import { Permission1 } from './permission-1';
export interface FilePermission  {

  /**
   * The name of the file/folder.
   */
  name?: string;

  /**
   * Local username of the owner.
   */
  owner?: string;

  /**
   * One or more permission objects
   */
  permissions?: Array<Permission1>;
}
