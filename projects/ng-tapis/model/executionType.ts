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


/**
 * The execution type of the application. If you\'re unsure, it\'s probably HPC.
 */
export type ExecutionType = 'ATMOSPHERE' | 'HPC' | 'CONDOR' | 'CLI';

export const ExecutionType = {
    Atmosphere: 'ATMOSPHERE' as ExecutionType,
    Hpc: 'HPC' as ExecutionType,
    Condor: 'CONDOR' as ExecutionType,
    Cli: 'CLI' as ExecutionType
};

