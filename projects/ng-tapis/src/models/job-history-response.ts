/* tslint:disable */
import { JobHistory } from './job-history';
export interface JobHistoryResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * response body
   */
  result?: Array<JobHistory>;

  /**
   * success or failure
   */
  status?: string;
}
