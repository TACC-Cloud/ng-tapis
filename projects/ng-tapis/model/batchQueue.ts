/**
 * Tapis API
 * <h2> Your Science-as-a-Service API Platform. </h2> <p> For more information, visit <a href=\"https://tacc-cloud.readthedocs.io/projects/agave/en/latest/\">https://tacc-cloud.readthedocs.io/projects/agave/en/latest/</a> </p>
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: aci@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface BatchQueue { 
    /**
     * The maximum number of jobs per user that can be in queue at once.
     */
    maxUserJobs?: number;
    /**
     * The max length of jobs submitted to this queue in hhh:mm:ss format.
     */
    maxRequestedTime?: string;
    /**
     * The maximum number of jobs that can be in queue at once.
     */
    maxJobs?: number;
    /**
     * Is this the default queue for the system.
     */
    _default?: boolean;
    /**
     * The max memory available per node to jobs submitted to this queue.
     */
    maxMemoryPerNode?: string;
    /**
     * The max nodes available per node to jobs submitted to this queue.
     */
    maxNodes?: string;
    /**
     * Any custom directives that should be appended to scheduler directives. ex. #$ -A TG-12345
     */
    customDirectives?: string;
    /**
     * The max processors per node available to jobs submitted to this queue.
     */
    maxProcessorsPerNode?: number;
    /**
     * The name of the batch queue.
     */
    name?: string;
}

