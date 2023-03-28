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


/**
 * The permission to set
 */
export type Permission = 'READ' | 'WRITE' | 'EXECUTE' | 'READ_WRITE' | 'READ_EXECUTE' | 'WRITE_EXECUTE' | 'ALL' | 'NONE';

export const Permission = {
    Read: 'READ' as Permission,
    Write: 'WRITE' as Permission,
    Execute: 'EXECUTE' as Permission,
    ReadWrite: 'READ_WRITE' as Permission,
    ReadExecute: 'READ_EXECUTE' as Permission,
    WriteExecute: 'WRITE_EXECUTE' as Permission,
    All: 'ALL' as Permission,
    None: 'NONE' as Permission
};

