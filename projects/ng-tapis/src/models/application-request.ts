/* tslint:disable */
import { ApplicationInput } from './application-input';
import { ApplicationOutput } from './application-output';
import { ApplicationParameter } from './application-parameter';
import { ExecutionType } from './execution-type';
import { Parallelism } from './parallelism';
export interface ApplicationRequest  {

  /**
   * Whether the application is available.
   */
  available?: boolean;

  /**
   * Whether the application supports checkpointing.
   */
  checkpointable?: boolean;

  /**
   * The max execution time that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   */
  defaultMaxRunTime?: {  };

  /**
   * The default memory in GB to pass to the scheduler if none is given in the job description. This must be less than the max memory parameter in the target queue definition.
   */
  defaultMemory?: string;

  /**
   * The number of nodes that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   */
  defaultNodeCount?: string;

  /**
   * The number of processors to pass to the scheduler if none are given in the job description. This must be 1 if the app is serial.
   */
  defaultProcessors?: {  };

  /**
   * The queue on the execution system that should be used if none is given in a job description. Ignore if the system does not support schedulers.
   */
  defaultQueue?: string;

  /**
   * The location in the user's default storage system containing the application wrapper and dependencies.
   */
  deploymentPath?: string;

  /**
   * The system id of the storage system where this app should run.
   */
  deploymentSystem?: string;

  /**
   * The system id of the execution system where this app should run.
   */
  executionSystem?: string;
  executionType?: ExecutionType;

  /**
   * The URL where users can go for more information about the app.
   */
  helpURI?: string;

  /**
   * The icon to associate with this app.
   */
  icon?: string;

  /**
   * The inputs files for this application.
   */
  inputs?: Array<ApplicationInput>;

  /**
   * The label to use when generating forms.
   */
  label?: string;

  /**
   * The full text description of this input to use when generating forms.
   */
  longDescription?: string;

  /**
   * An array of modules to load prior to the execution of the application.
   */
  modules?: Array<string>;

  /**
   * The name of the application. The name does not have to be unique, but the combination of name and version does.
   */
  name?: string;

  /**
   * An array of ontology values describing this application.
   */
  ontology?: Array<string>;

  /**
   * The outputs files for this application.
   */
  outputs?: Array<ApplicationOutput>;
  parallelism?: Parallelism;

  /**
   * The inputs parameters for this application.
   */
  parameters?: Array<ApplicationParameter>;

  /**
   * The short description of this application.
   */
  shortDescription?: string;

  /**
   * An array of tags related to this application.
   */
  tags?: Array<string>;

  /**
   * The path to the wrapper script relative to the deploymentPath.
   */
  templatePath?: string;

  /**
   * The path to the test script relative to the deploymentPath.
   */
  testPath?: string;

  /**
   * The version of the application in #.#.# format. While the version does not need to be unique, the combination of name and version does have to be unique.
   */
  version?: string;
}
