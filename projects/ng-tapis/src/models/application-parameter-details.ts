/* tslint:disable */
export interface ApplicationParameterDetails  {

  /**
   * The command line value of this parameter (ex -n, --name, -name, etc)
   */
  argument?: string;

  /**
   * Description of this parameter.
   */
  description?: string;

  /**
   * The label for this parameter
   */
  label?: string;

  /**
   * Whether the argument value should be passed into the wrapper at run time
   */
  showArgument?: boolean;
}
