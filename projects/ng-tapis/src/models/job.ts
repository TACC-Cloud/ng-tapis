/* tslint:disable */
import { JobInputs } from './job-inputs';
import { JobParameters } from './job-parameters';
import { Notification } from './notification';
export interface Job  {

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

  /**
   * The date the job stopped running due to termination, completion, or error in ISO 8601 format.
   */
  endTime?: string;

  /**
   * The system id of the execution system.
   */
  executionSystem?: string;

  /**
   * The unique id of the job.
   */
  id?: string;
  inputs?: JobInputs;

  /**
   * The process or local job id of the job on the remote execution system.
   */
  localId?: string;

  /**
   * The requested compute time needed for this application to complete given in HH:mm:ss format.
   */
  maxRunTime?: string;

  /**
   * The requested memory for this application to run given in GB.
   */
  memoryPerNode?: string;

  /**
   * The error message incurred when the job failed.
   */
  message?: string;

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

  /**
   * Relative path of the job's output data.
   */
  outputPath?: string;

  /**
   * The job owner.
   */
  owner?: string;
  parameters?: JobParameters;

  /**
   * The number of processors this application should utilize while running. If the application is not of executionType PARALLEL, this should be 1.
   */
  processorsPerNode?: number;

  /**
   * The number of retires it took to submit this job.
   */
  retries?: number;

  /**
   * The date the job started in ISO 8601 format.
   */
  startTime?: string;

  /**
   * The status of the job. Possible values are: PENDING, STAGING_INPUTS, CLEANING_UP, ARCHIVING, STAGING_JOB, FINISHED, KILLED, FAILED, STOPPED, RUNNING, PAUSED, QUEUED, SUBMITTING, STAGED, PROCESSING_INPUTS, ARCHIVING_FINISHED, ARCHIVING_FAILED
   */
  status?: string;

  /**
   * The date the job was submitted in ISO 8601 format.
   */
  submitTime?: string;

  /**
   * The directory on the remote execution system from which the job is running.
   */
  workPath?: string;
}
