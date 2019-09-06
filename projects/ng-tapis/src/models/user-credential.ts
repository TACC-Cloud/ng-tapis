/* tslint:disable */
import { Type1 } from './type-1';
import { UserCredentialServer } from './user-credential-server';
export interface UserCredential  {

  /**
   * The credential used to authenticate to the remote system. Depending on the authentication protocol of the remote system, this could be an OAuth Token, X.509 certificate, Kerberose token, or an private key..
   */
  credential?: string;

  /**
   * The username of the internal user associated with this credential.
   */
  internalUsername?: string;

  /**
   * The password on the remote system used to authenticate.
   */
  password?: string;

  /**
   * The public ssh key used to authenticate to the remote system..
   */
  privateKey?: string;

  /**
   * The public ssh key used to authenticate to the remote system.
   */
  publicKey?: string;
  server?: UserCredentialServer;
  type?: Type1;

  /**
   * The local username on the remote system used to authenticate.
   */
  username?: string;
}
