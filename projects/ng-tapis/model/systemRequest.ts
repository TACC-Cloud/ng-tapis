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
import { Status } from './status';
import { BatchQueue } from './batchQueue';
import { StorageConfig } from './storageConfig';
import { Scheduler } from './scheduler';
import { LoginConfig } from './loginConfig';
import { ExecutionType2 } from './executionType2';


export interface SystemRequest { 
    status: Status;
    /**
     * The work directory where job execution directories will be created at runtime. This is used if scratchDir is not specified. If neither are specified, the job directory will be created in the system homeDir.
     */
    workDir?: string;
    /**
     * Verbose description of this system.
     */
    description?: string;
    /**
     * The maximum number of jobs that can be simultaneously run on the system across all queues.
     */
    maxSystemJobs?: object;
    /**
     * The execution paradigm used to run jobs on this system.
     */
    queues?: Array<BatchQueue>;
    storage: StorageConfig;
    /**
     * The site associated with this system.
     */
    site?: string;
    executionType?: ExecutionType2;
    /**
     * Environment variables to set upon login prior to job submission.
     */
    environment?: string;
    /**
     * The scratch directory where job execution directories will be created at runtime. The workDir is used if this is not specified.
     */
    scratchDir?: string;
    scheduler?: Scheduler;
    /**
     * Script to be run after login and prior to execution.
     */
    startupScript?: string;
    login?: LoginConfig;
    /**
     * The maximum number of jobs that can be simultaneously run on the system across all queues by a single user.
     */
    maxSystemJobsPerUser?: object;
    type: string;
    /**
     * Unique identifier for this system.
     */
    id: string;
    /**
     * Common name for this system.
     */
    name: string;
}
export namespace SystemRequest {
}

