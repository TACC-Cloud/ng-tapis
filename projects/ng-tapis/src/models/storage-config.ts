/* tslint:disable */
import { Protocol1 } from './protocol-1';
import { UserCredential } from './user-credential';
export interface StorageConfig  {
  auth?: UserCredential;

  /**
   * The path on the remote system to use as the home directory for all API requests. For cases where the home directory should be dynamically defined, the ${USERNAME} token can be included in the homeDir value to represent the username of the authenticated user. ex. /home/${USERNAME}.
   */
  homeDir?: string;

  /**
   * The hostname or ip address of the storage server
   */
  host?: string;

  /**
   * Whether the permissions set on the server should be pushed to the storage system itself. This only applies to IRODS and AWS systems.
   */
  mirror?: boolean;

  /**
   * The port number of the storage server.
   */
  port?: number;
  protocol?: Protocol1;

  /**
   * The path on the remote system where apps will be stored if this is set as the default public storage system.
   */
  publicAppsDir?: string;

  /**
   * The name of the target resource when defining an IRODS system.
   */
  resource?: string;

  /**
   * The path on the remote system to use as the root for all API requests.
   */
  rootDir?: string;

  /**
   * The name of the zone when defining an IRODS system.
   */
  zone?: string;
}
