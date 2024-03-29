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


export interface NotificationRequest { 
    /**
     * The url or email address that will be notified of the event.
     */
    url?: string;
    /**
     * UUID of resource to whome the event applies.
     */
    associatedUuid?: string;
    /**
     * Whether this notification should stay active after it fires the first time.
     */
    persistent?: boolean;
}

