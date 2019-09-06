/* tslint:disable */
import { MetadataResponse } from './metadata-response';
export interface MultipleMetadataResponse  {

  /**
   * Error message caused by this request
   */
  message?: string;

  /**
   * Metadata resources matching the query.
   */
  result?: Array<MetadataResponse>;

  /**
   * success or failure
   */
  status?: string;

  /**
   * API version number
   */
  version?: string;
}
