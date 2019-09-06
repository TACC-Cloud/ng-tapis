/* tslint:disable */
export interface PostIt  {

  /**
   * The creation date in ISO 8601 format.
   */
  created?: string;

  /**
   * The api user who made the PostIt creation request.
   */
  creator?: string;

  /**
   * The expiration date in ISO 8601 format.
   */
  expires?: string;

  /**
   * The username of the internal user attached to this PostIt.
   */
  internalUsername?: string;

  /**
   * The url that will be invoked when the PostIt is redeemed.
   */
  method?: string;

  /**
   * The PostIt nonce.
   */
  postit?: string;

  /**
   * The number of invocations remaining on this token.
   */
  remainingUses?: number;

  /**
   * The url that will be invoked when the PostIt is redeemed.
   */
  url?: string;
}
