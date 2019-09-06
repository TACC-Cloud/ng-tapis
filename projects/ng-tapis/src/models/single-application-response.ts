/* tslint:disable */
import { Application } from './application';
export interface SingleApplicationResponse  {

  /**
   * success or failure
   */
  message?: string;
  result?: Application;

  /**
   * success or failure
   */
  status?: string;
}
