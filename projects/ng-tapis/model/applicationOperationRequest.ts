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
import { Action } from './action';


export interface ApplicationOperationRequest { 
    /**
     * Name of cloned app. Only used with the clone action.
     */
    name?: string;
    /**
     * Storage system on which the cloned app\'s assets resides. Only used with the clone action.
     */
    storageSystem?: string;
    /**
     * System on which the clone apps should run. Only used with the clone action.
     */
    executionSystem?: string;
    /**
     * Version of the cloned app. Only used with the clone action.
     */
    version?: string;
    action?: Action;
    /**
     * Path to the on cloned app\'s deployment folder on its storage system. Only used with the clone action.
     */
    deploymentPath?: string;
}
export namespace ApplicationOperationRequest {
}


