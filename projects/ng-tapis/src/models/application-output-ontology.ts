/* tslint:disable */
export interface ApplicationOutputOntology  {

  /**
   * The file types acceptable for this output.
   */
  fileTypes?: Array<string>;

  /**
   * The maximum number of times this output may appear.
   */
  maxCardinality?: number;

  /**
   * The minimum number of times this output may appear.
   */
  minCardinality?: number;
  ontology?: Array<string>;
}
