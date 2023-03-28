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


export interface Notification { 
    /**
     * The UUID for this notification.
     */
    uuid?: string;
    /**
     * Whether this notification was sent successfully.
     */
    success?: boolean;
    /**
     * A timestamp indicating when this notification was created in the notification store.
     */
    created?: object;
    /**
     * The url or email address that will be notified of the event.
     */
    url?: string;
    /**
     * Whether this notification should stay active after it fires the first time.
     */
    persistent?: boolean;
    /**
     * The number of times this notification has been attempted to be fulfilled.
     */
    attempts?: number;
    /**
     * A timestamp indicating the last time this notification was sent.
     */
    lastSent?: object;
    /**
     * The response code from POSTing to the url or sending an email.
     */
    responseCode?: number;
    /**
     * The API user who owns this notification.
     */
    owner?: string;
    /**
     * UUID of resource to whome the event applies.
     */
    associatedUuid?: string;
}

