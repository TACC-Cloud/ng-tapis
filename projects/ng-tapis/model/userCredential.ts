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
import { UserCredentialServer } from './userCredentialServer';
import { Type1 } from './type1';


export interface UserCredential { 
    /**
     * The local username on the remote system used to authenticate.
     */
    username?: string;
    /**
     * The credential used to authenticate to the remote system. Depending on the authentication protocol of the remote system, this could be an OAuth Token, X.509 certificate, Kerberose token, or an private key..
     */
    credential?: string;
    /**
     * The public ssh key used to authenticate to the remote system..
     */
    privateKey?: string;
    server?: UserCredentialServer;
    /**
     * The public ssh key used to authenticate to the remote system.
     */
    publicKey?: string;
    /**
     * The password on the remote system used to authenticate.
     */
    password?: string;
    type?: Type1;
    /**
     * The username of the internal user associated with this credential.
     */
    internalUsername?: string;
}
export namespace UserCredential {
}


