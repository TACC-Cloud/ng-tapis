/* tslint:disable */
import { ApplicationParameterDetails } from './application-parameter-details';
import { ApplicationParameterOntology } from './application-parameter-ontology';
import { ApplicationParameterValue } from './application-parameter-value';
export interface ApplicationParameter  {
  details?: ApplicationParameterDetails;

  /**
   * The id of this parameter. This will be the replacement string in your wrapper scripts.
   */
  id?: string;
  semantics?: ApplicationParameterOntology;
  value?: ApplicationParameterValue;
}
