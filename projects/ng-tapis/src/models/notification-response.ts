/* tslint:disable */
import { Notification } from './notification';
export interface NotificationResponse  {

  /**
   * success or failure
   */
  message?: string;
  result?: Notification;

  /**
   * success or failure
   */
  status?: string;

  /**
   * API version number
   */
  version?: string;
}
