/* tslint:disable */
import { ApplicationOutputOntology } from './application-output-ontology';
import { ApplicationParameterDetails } from './application-parameter-details';
import { ApplicationParameterValue } from './application-parameter-value';
export interface ApplicationOutput  {
  details?: ApplicationParameterDetails;

  /**
   * The id of this output. This will be the replacement string in your wrapper scripts.
   */
  id?: string;
  semantics?: ApplicationOutputOntology;
  value?: ApplicationParameterValue;
}
