/* tslint:disable */
import { JobInputs } from './job-inputs';
import { JobParameters } from './job-parameters';
import { Notification } from './notification';
export interface JobRequest  {

  /**
   * The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run.
   */
  appId?: string;

  /**
   * Whether the output from this job should be archived. If true, all new files created by this application's execution will be archived to the archivePath in the user's default storage system.
   */
  archive?: boolean;

  /**
   * The path of the archive folder for this job on the user's default storage sytem.
   */
  archivePath?: string;

  /**
   * The unique id of the storage system on which this job's output will be staged.
   */
  archiveSystem?: string;

  /**
   * The queue to which this job should be submitted. This is optional and only applies when the execution system has a batch scheduler.
   */
  batchQueue?: string;
  inputs?: JobInputs;

  /**
   * The requested compute time needed for this application to complete given in HH:mm:ss format.
   */
  maxRunTime?: string;

  /**
   * The requested memory for this application to run given in GB.
   */
  memoryPerNode?: string;

  /**
   * The name of the job.
   */
  name?: string;

  /**
   * The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
   */
  nodeCount?: number;

  /**
   * An array of notifications you wish to receive.
   */
  notifications?: Array<Notification>;
  parameters?: JobParameters;

  /**
   * The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
   */
  processorsPerNode?: number;
}
