/* tslint:disable */
export interface JobSummary  {

  /**
   * The unique name of the application being run by this job. This must be a valid application that the calling user has permission to run.
   */
  appId?: string;

  /**
   * The date the job ended in ISO 8601 format.
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

  /**
   * The name of the job.
   */
  name?: string;

  /**
   * The job owner.
   */
  owner?: string;

  /**
   * The date the job started in ISO 8601 format.
   */
  startTime?: string;

  /**
   * The status of the job. Possible values are: PENDING, STAGING_INPUTS, CLEANING_UP, ARCHIVING, STAGING_JOB, FINISHED, KILLED, FAILED, STOPPED, RUNNING, PAUSED, QUEUED, SUBMITTING, STAGED, PROCESSING_INPUTS, ARCHIVING_FINISHED, ARCHIVING_FAILED
   */
  status?: string;
}
