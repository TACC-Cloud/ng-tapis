/* tslint:disable */
import { Metadata } from './metadata';
export interface MetadataResponse  {

  /**
   * Error message caused by this request
   */
  message?: string;
  result?: Metadata;

  /**
   * success or failure
   */
  status?: string;

  /**
   * API version number
   */
  version?: string;
}
