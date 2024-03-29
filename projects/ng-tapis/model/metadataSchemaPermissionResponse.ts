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
import { Permission1 } from './permission1';


export interface MetadataSchemaPermissionResponse { 
    /**
     * success or failure
     */
    status?: string;
    /**
     * Error message caused by this request
     */
    message?: string;
    /**
     * API version number
     */
    version?: string;
    result?: Permission1;
}

