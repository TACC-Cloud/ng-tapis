/* tslint:disable */
export interface MetadataSchema  {

  /**
   * A timestamp indicating when this Metadata was created in the metadata schema store.
   */
  created?: string;

  /**
   * The name of the Internal User, if any, who owns this schema.
   */
  internalUsername?: string;

  /**
   * A timestamp indicating when this Metadata was last updated in the metadata schema store.
   */
  lastUpdated?: string;

  /**
   * The API user who owns this Schema.
   */
  owner?: string;

  /**
   * A JSON Schema
   */
  schema?: string;

  /**
   * The UUID for this Schema.
   */
  uuid?: string;
}
