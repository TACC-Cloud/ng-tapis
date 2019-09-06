/* tslint:disable */
import { JobStatus } from './job-status';
export interface JobStatusResponse  {

  /**
   * success or failure
   */
  message?: string;
  result?: JobStatus;

  /**
   * success or failure
   */
  status?: string;
}
