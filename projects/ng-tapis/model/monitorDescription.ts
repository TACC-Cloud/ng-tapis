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
import { MonitorCheck } from './monitorCheck';


export interface MonitorDescription { 
    /**
     * The id of the sytem to be monitored. This must be an active system registered with the Systems service.
     */
    target?: boolean;
    /**
     * A timestamp indicating when this Monitor was created.
     */
    created?: string;
    /**
     * A timestamp indicating the last time this Monitor succeeded in ISO 8601 format
     */
    lastSuccess?: string;
    /**
     * The API user who owns this Monitor.
     */
    owner?: string;
    /**
     * A timestamp indicating the last time this Monitor was updated in ISO 8601 format
     */
    lastUpdated?: string;
    lastCheck?: MonitorCheck;
    /**
     * The interval in minutes on which this monitor will run. Minimum is 5. Default is 720.
     */
    frequency?: number;
    /**
     * Whether this Monitor should update the system status when the results change. You must have the ADMIN role on the target system to use this feature.
     */
    updateSystemStatus?: boolean;
    /**
     * Whether this monitor is currently active.
     */
    active?: boolean;
    /**
     * A timestamp indicating the next time this Monitor will be run in ISO 8601 format
     */
    nextUpdate?: string;
    /**
     * The UUID for this monitor.
     */
    id?: string;
    /**
     * Internal user account used to perform the check.
     */
    internalUsername?: string;
}

