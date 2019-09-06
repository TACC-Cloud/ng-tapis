/* tslint:disable */
import { PostIt } from './post-it';
export interface MultiplePostItResponse  {

  /**
   * success or failure
   */
  message?: string;

  /**
   * list of postits
   */
  result?: Array<PostIt>;

  /**
   * success or failure
   */
  status?: string;
}
