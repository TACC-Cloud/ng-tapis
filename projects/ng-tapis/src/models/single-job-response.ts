/* tslint:disable */
import { Job } from './job';
export interface SingleJobResponse  {

  /**
   * success or failure
   */
  message?: string;
  result?: Job;

  /**
   * success or failure
   */
  status?: string;
}
