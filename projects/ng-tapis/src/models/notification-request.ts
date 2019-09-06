/* tslint:disable */
export interface NotificationRequest  {

  /**
   * UUID of resource to whome the event applies.
   */
  associatedUuid?: string;

  /**
   * Whether this notification should stay active after it fires the first time.
   */
  persistent?: boolean;

  /**
   * The url or email address that will be notified of the event.
   */
  url?: string;
}
