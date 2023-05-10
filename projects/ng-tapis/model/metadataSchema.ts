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


export interface MetadataSchema { 
    /**
     * The UUID for this Schema.
     */
    uuid?: string;
    /**
     * A timestamp indicating when this Metadata was created in the metadata schema store.
     */
    created?: string;
    /**
     * A timestamp indicating when this Metadata was last updated in the metadata schema store.
     */
    lastUpdated?: string;
    /**
     * The API user who owns this Schema.
     */
    owner?: string;
    /**
     * The name of the Internal User, if any, who owns this schema.
     */
    internalUsername?: string;
    /**
     * A JSON Schema
     */
    schema?: string;
}

