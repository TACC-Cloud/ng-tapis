/* tslint:disable */
import { Method } from './method';
export interface PostItRequest  {

  /**
   * The username of the internal user attached to this PostIt.
   */
  internalUsername?: string;

  /**
   * The maximum lifetime in seconds of this PostIt on this token. Defaults to 2592000 (30 days)
   */
  lifetime?: number;

  /**
   * The maximum number of invocations remaining on this PostIt. Defaults to no limit
   */
  maxUses?: number;
  method?: Method;

  /**
   * If true, the provided url will be called without authentication. Default is false
   */
  noauth?: boolean;

  /**
   * The url that will be invoked when the PostIt is redeemed.
   */
  url?: string;
}
