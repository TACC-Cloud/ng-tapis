/* tslint:disable */
export interface ApplicationSummary  {

  /**
   * The system id of the execution system where this app should run.
   */
  executionSystem?: string;

  /**
   * Unique id of this app. Comprised of the app name-version.
   */
  id?: string;

  /**
   * Whether the application is public or private.
   */
  isPublic?: boolean;

  /**
   * The date this application was last modified in ISO 8601 format.
   */
  lastModified?: string;

  /**
   * The name of the application. The name does not have to be unique, but the combination of name and version does.
   */
  name?: string;

  /**
   * The number of times this application has been revised.
   */
  revision?: number;

  /**
   * The short description of this application.
   */
  shortDescription?: string;

  /**
   * The version of the application in #.#.# format. While the version does not need to be unique, the combination of name and version does have to be unique.
   */
  version?: string;
}
