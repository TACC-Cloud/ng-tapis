/* tslint:disable */
import { Protocol } from './protocol';
export interface UserCredentialServer  {

  /**
   * The hostname or ip address of the remote server.
   */
  endpoint?: string;

  /**
   * The port number of the remote server..
   */
  port?: {  };
  protocol?: Protocol;
}
