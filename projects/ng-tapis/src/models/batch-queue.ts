/* tslint:disable */
export interface BatchQueue  {

  /**
   * Any custom directives that should be appended to scheduler directives. ex. #$ -A TG-12345
   */
  customDirectives?: string;

  /**
   * Is this the default queue for the system.
   */
  default?: boolean;

  /**
   * The maximum number of jobs that can be in queue at once.
   */
  maxJobs?: number;

  /**
   * The max memory available per node to jobs submitted to this queue.
   */
  maxMemoryPerNode?: string;

  /**
   * The max nodes available per node to jobs submitted to this queue.
   */
  maxNodes?: string;

  /**
   * The max processors per node available to jobs submitted to this queue.
   */
  maxProcessorsPerNode?: number;

  /**
   * The max length of jobs submitted to this queue in hhh:mm:ss format.
   */
  maxRequestedTime?: string;

  /**
   * The maximum number of jobs per user that can be in queue at once.
   */
  maxUserJobs?: number;

  /**
   * The name of the batch queue.
   */
  name?: string;
}
