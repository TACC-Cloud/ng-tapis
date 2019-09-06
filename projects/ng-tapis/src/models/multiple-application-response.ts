/* tslint:disable */
import { ApplicationSummary } from './application-summary';
export interface MultipleApplicationResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * response body
   */
  result?: Array<ApplicationSummary>;

  /**
   * success or failure
   */
  status?: string;
}
