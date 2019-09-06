/* tslint:disable */
import { ApplicationInputDetails } from './application-input-details';
import { ApplicationInputOntology } from './application-input-ontology';
import { ApplicationInputValue } from './application-input-value';
export interface ApplicationInput  {
  details?: ApplicationInputDetails;

  /**
   * The id of this input. This will be the replacement string in your wrapper scripts.
   */
  id?: string;
  semantics?: ApplicationInputOntology;
  value?: ApplicationInputValue;
}
