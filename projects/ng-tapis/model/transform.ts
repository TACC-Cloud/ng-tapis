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
import { Encoder } from './encoder';
import { Decoder } from './decoder';


export interface Transform { 
    /**
     * Description of this transform.
     */
    description?: string;
    /**
     * The tags describing this transform.
     */
    tags?: Array<string>;
    /**
     * The available decoders for this transform.
     */
    decoders?: Array<Decoder>;
    /**
     * Whether this transform is enabled or not.
     */
    enabled?: boolean;
    encoder?: Encoder;
    /**
     * The URL to find out more information.
     */
    descriptionurl?: string;
    /**
     * The name of this transform.
     */
    name?: string;
}
