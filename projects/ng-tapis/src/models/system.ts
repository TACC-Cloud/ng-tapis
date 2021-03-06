/* tslint:disable */
import { BatchQueue } from './batch-queue';
import { ExecutionType2 } from './execution-type-2';
import { LoginConfig } from './login-config';
import { Scheduler } from './scheduler';
import { Status } from './status';
import { StorageConfig } from './storage-config';
export interface System  {

  /**
   * Is the system the default for the authenticated user?
   */
  default?: boolean;

  /**
   * Verbose description of this system.
   */
  description?: string;

  /**
   * Environment variables to set upon login prior to job submission.
   */
  environment?: string;
  executionType?: ExecutionType2;

  /**
   * Unique identifier for this system.
   */
  id?: string;

  /**
   * The date this system was last modified in ISO 8601 format.
   */
  lastModified?: string;
  login?: LoginConfig;

  /**
   * The maximum number of jobs that can be simultaneously run on the system across all queues.
   */
  maxSystemJobs?: {  };

  /**
   * The maximum number of jobs that can be simultaneously run on the system across all queues by a single user.
   */
  maxSystemJobsPerUser?: {  };

  /**
   * Common name for this system.
   */
  name?: string;

  /**
   * Is the system publicly available?
   */
  public?: boolean;

  /**
   * The execution paradigm used to run jobs on this system.
   */
  queues?: Array<BatchQueue>;

  /**
   * The number of times this app has been updated.
   */
  revision?: {  };
  scheduler?: Scheduler;

  /**
   * The scratch directory where job execution directories will be created at runtime. The workDir is used if this is not specified.
   */
  scratchDir?: string;

  /**
   * The site associated with this system.
   */
  site?: string;

  /**
   * Script to be run after login and prior to execution.
   */
  startupScript?: string;
  status?: Status;
  storage?: StorageConfig;
  type: string;

  /**
   * The uuid of this system.
   */
  uuid?: string;

  /**
   * The work directory where job execution directories will be created at runtime. This is used if scratchDir is not specified. If neither are specified, the job directory will be created in the system homeDir.
   */
  workDir?: string;
}
