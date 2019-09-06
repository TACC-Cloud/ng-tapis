/* tslint:disable */
import { PostIt } from './post-it';
export interface SinglePostItResponse  {

  /**
   * success or failure
   */
  message?: string;
  result?: PostIt;

  /**
   * success or failure
   */
  status?: string;
}
