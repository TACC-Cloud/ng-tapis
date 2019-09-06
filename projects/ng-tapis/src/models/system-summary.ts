/* tslint:disable */
import { Status } from './status';
import { Type } from './type';
export interface SystemSummary  {

  /**
   * Is the system the default for the authenticated user?
   */
  default?: boolean;

  /**
   * Verbose description of this system.
   */
  description?: string;

  /**
   * Unique identifier for this system.
   */
  id?: string;

  /**
   * Common name for this system.
   */
  name?: string;

  /**
   * Is the system publicly available?
   */
  public?: boolean;
  status?: Status;
  type?: Type;
}
