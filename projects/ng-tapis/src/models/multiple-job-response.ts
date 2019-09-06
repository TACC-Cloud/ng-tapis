/* tslint:disable */
import { JobSummary } from './job-summary';
export interface MultipleJobResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * response body
   */
  result?: Array<JobSummary>;

  /**
   * success or failure
   */
  status?: string;
}
