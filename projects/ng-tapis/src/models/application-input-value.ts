/* tslint:disable */
export interface ApplicationInputValue  {

  /**
   * The default value for this parameter. The type will be determined by the value.type field.
   */
  defaultValue?: string;

  /**
   * The order in which this parameter should be printed when generating an execution command for forked execution. This will also be the order in which paramters are returned in the response json.
   */
  order?: number;

  /**
   * Is this parameter required? If visible is false, this must be true.
   */
  required?: boolean;

  /**
   * The regular expression used to validate this parameter value. For enumerations, separate values with |
   */
  validator?: string;

  /**
   * Should this parameter be visible? If not, there must be a default and it will be required.
   */
  visible?: boolean;
}
