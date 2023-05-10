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
import { Tier } from './tier';


export interface ClientSubscriptionRequest { 
    tier?: Tier;
    /**
     * The user who registered the API.
     */
    apiProvider?: string;
    /**
     * The current major version of the API. This is appended to the api_context to create the base API url.
     */
    apiVersion?: string;
    /**
     * The name of the API.
     */
    apiName?: string;
}
export namespace ClientSubscriptionRequest {
}


