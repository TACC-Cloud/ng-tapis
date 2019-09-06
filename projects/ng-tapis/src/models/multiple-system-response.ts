/* tslint:disable */
import { SystemSummary } from './system-summary';
export interface MultipleSystemResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * response body
   */
  result?: Array<SystemSummary>;

  /**
   * success or failure
   */
  status?: string;
}
