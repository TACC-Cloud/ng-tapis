/* tslint:disable */
import { Notification } from './notification';
export interface MultipleNotificationResponse  {

  /**
   * Description of an error. null otherwise.
   */
  message?: string;

  /**
   * response body
   */
  result?: Array<Notification>;

  /**
   * success or failure
   */
  status?: string;

  /**
   * API version number
   */
  version?: string;
}
