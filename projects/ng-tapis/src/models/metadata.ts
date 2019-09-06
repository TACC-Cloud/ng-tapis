/* tslint:disable */
export interface Metadata  {

  /**
   * UUIDs of associated Agave entities, including the Data to which this Metadata belongs.
   */
  associationIds?: Array<string>;

  /**
   * A timestamp indicating when this Metadata was created in the metadata store.
   */
  created?: string;

  /**
   * The name of the Internal User, if any, who owns this metadata.
   */
  internalUsername?: string;

  /**
   * A timestamp indicating when this Metadata was last updated in the metadata store.
   */
  lastUpdated?: string;

  /**
   * The name of this metadata
   */
  name?: string;

  /**
   * The API user who owns this Metadata.
   */
  owner?: string;

  /**
   * The UUID for this Metadata.
   */
  uuid?: string;

  /**
   * A free text or JSON string containing the metadata stored for the given associationIds
   */
  value?: string;
}
