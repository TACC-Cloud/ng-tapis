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


export interface Profile { 
    /**
     * The api user\'s primary area of research.
     */
    researchArea?: string;
    /**
     * The api user\'s city.
     */
    city?: string;
    /**
     * The api user\'s fax number.
     */
    fax?: string;
    /**
     * The api user\'s first name.
     */
    firstName?: string;
    /**
     * The api user\'s country.
     */
    country?: string;
    /**
     * The api user\'s last name.
     */
    lastName?: string;
    /**
     * The api user\'s home institution
     */
    institution?: string;
    /**
     * The api user\'s unique username.
     */
    username?: string;
    /**
     * The api user\'s phone number.
     */
    phone?: string;
    /**
     * The api user\'s state.
     */
    state?: string;
    /**
     * The api user\'s gender. male or female.
     */
    gender?: string;
    /**
     * The api user\'s institutional department.
     */
    department?: string;
    /**
     * The api user\'s position of employment.
     */
    position?: string;
    /**
     * The api user\'s unique email address.
     */
    email?: string;
}

