/* tslint:disable */
import { Protocol2 } from './protocol-2';
import { UserCredential } from './user-credential';
export interface LoginConfig  {
  auth?: UserCredential;

  /**
   * The hostname or ip address of the submission server
   */
  host?: string;

  /**
   * The port number of the submission server.
   */
  port?: number;
  protocol?: Protocol2;
}
