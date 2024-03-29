/**
 * Tapis API
 * <h2> Your Science-as-a-Service API Platform. </h2> <p> For more information, visit <a href=\"https://tacc-cloud.readthedocs.io/projects/agave/en/latest/\">https://tacc-cloud.readthedocs.io/projects/agave/en/latest/</a> </p>
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: aci@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ApplicationParameter } from './applicationParameter';
import { ExecutionType } from './executionType';
import { ApplicationOutput } from './applicationOutput';
import { Parallelism } from './parallelism';
import { ApplicationInput } from './applicationInput';


export interface Application { 
    /**
     * The default memory in GB to pass to the scheduler if none is given in the job description. This must be less than the max memory parameter in the target queue definition.
     */
    defaultMemoryPerNode?: string;
    /**
     * The queue on the execution system that should be used if none is given in a job description. Ignore if the system does not support schedulers.
     */
    defaultQueue?: string;
    /**
     * Unique id of this app. Comprised of the app name-version.
     */
    id?: string;
    /**
     * The UUID of this application. UUID are 36 alphanumeric string.
     */
    uuid?: string;
    /**
     * The inputs parameters for this application.
     */
    parameters?: Array<ApplicationParameter>;
    /**
     * The short description of this application.
     */
    shortDescription?: string;
    /**
     * The number of nodes that should be used if none is given in a job description. Ignore if the system does not support schedulers.
     */
    defaultNodeCount?: string;
    /**
     * The label to use when generating forms.
     */
    label?: string;
    /**
     * The number of processors to pass to the scheduler if none are given in the job description. This must be 1 if the app is serial.
     */
    defaultProcessorsPerNode?: string;
    /**
     * The version of the application in #.#.# format. While the version does not need to be unique, the combination of name and version does have to be unique.
     */
    version?: string;
    /**
     * The path to the wrapper script relative to the deploymentPath.
     */
    templatePath?: string;
    /**
     * The max execution time that should be used if none is given in a job description. Ignore if the system does not support schedulers.
     */
    defaultMaxRunTime?: string;
    /**
     * The number of times this application has been revised.
     */
    revision?: number;
    /**
     * Whether the application is available.
     */
    available?: boolean;
    /**
     * The inputs files for this application.
     */
    inputs?: Array<ApplicationInput>;
    /**
     * An array of tags related to this application.
     */
    tags?: Array<string>;
    /**
     * The outputs files for this application.
     */
    outputs?: Array<ApplicationOutput>;
    /**
     * Whether the application is public or private.
     */
    isPublic?: boolean;
    /**
     * The full text description of this input to use when generating forms.
     */
    longDescription?: string;
    /**
     * The system id of the execution system where this app should run.
     */
    executionSystem?: string;
    /**
     * The path to the test script relative to the deploymentPath.
     */
    testPath?: string;
    /**
     * An array of ontology values describing this application.
     */
    ontology?: Array<string>;
    /**
     * The location in the user\'s default storage system containing the application wrapper and dependencies.
     */
    deploymentPath?: string;
    /**
     * The icon to associate with this app.
     */
    icon?: string;
    /**
     * The system id of the storage system where this app should run.
     */
    deploymentSystem?: string;
    /**
     * The name of the application. The name does not have to be unique, but the combination of name and version does.
     */
    name?: string;
    /**
     * Whether the application supports checkpointing.
     */
    checkpointable?: boolean;
    /**
     * The date this application was last modified in ISO 8601 format.
     */
    lastModified?: string;
    /**
     * An array of modules to load prior to the execution of the application.
     */
    modules?: Array<string>;
    executionType?: ExecutionType;
    parallelism?: Parallelism;
    /**
     * The URL where users can go for more information about the app.
     */
    helpURI?: string;
}
export namespace Application {
}


