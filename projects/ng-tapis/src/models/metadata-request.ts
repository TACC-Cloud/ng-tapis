/* tslint:disable */
export interface MetadataRequest  {

  /**
   * UUIDs of associated Agave entities, including the Data to which this Metadata belongs.
   */
  associationIds?: Array<string>;

  /**
   * The name of this metadata
   */
  name?: string;

  /**
   * The UUID of the schema that should be used to validate this request.
   */
  schemaId?: string;

  /**
   * A free text or JSON string containing the metadata stored for the given associationIds
   */
  value?: string;
}
