/* tslint:disable */
export interface ApplicationInputDetails  {

  /**
   * The command line value of this input (ex -n, --name, -name, etc)
   */
  argument?: string;

  /**
   * Description of this input.
   */
  description?: string;

  /**
   * The label for this input
   */
  label?: string;

  /**
   * Whether the argument value should be passed into the wrapper at run time
   */
  showArgument?: boolean;
}
