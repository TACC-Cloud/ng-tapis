/* tslint:disable */
import { MetadataSchema } from './metadata-schema';
export interface MetadataSchemaResponse  {

  /**
   * Error message caused by this request
   */
  message?: string;
  result?: MetadataSchema;

  /**
   * success or failure
   */
  status?: string;

  /**
   * API version number
   */
  version?: string;
}
