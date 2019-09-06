/* tslint:disable */
export interface Notification  {

  /**
   * UUID of resource to whome the event applies.
   */
  associatedUuid?: string;

  /**
   * The number of times this notification has been attempted to be fulfilled.
   */
  attempts?: number;

  /**
   * A timestamp indicating when this notification was created in the notification store.
   */
  created?: {  };

  /**
   * A timestamp indicating the last time this notification was sent.
   */
  lastSent?: {  };

  /**
   * The API user who owns this notification.
   */
  owner?: string;

  /**
   * Whether this notification should stay active after it fires the first time.
   */
  persistent?: boolean;

  /**
   * The response code from POSTing to the url or sending an email.
   */
  responseCode?: number;

  /**
   * Whether this notification was sent successfully.
   */
  success?: boolean;

  /**
   * The url or email address that will be notified of the event.
   */
  url?: string;

  /**
   * The UUID for this notification.
   */
  uuid?: string;
}
