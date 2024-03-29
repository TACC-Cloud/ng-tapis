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
import { Result } from './result';


export interface MonitorCheck { 
    result?: Result;
    /**
     * The error message if this monitor check failed.
     */
    message?: string;
    /**
     * The UUID for this monitor check.
     */
    id?: string;
    /**
     * A timestamp indicating when this monitor check was created.
     */
    created?: string;
}
export namespace MonitorCheck {
}


