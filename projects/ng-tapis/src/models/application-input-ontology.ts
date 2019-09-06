/* tslint:disable */
export interface ApplicationInputOntology  {

  /**
   * The file types acceptable for this input.
   */
  fileTypes?: Array<string>;

  /**
   * The minimum number of times this input may appear.
   */
  minCardinality?: number;
  ontology?: Array<string>;
}
