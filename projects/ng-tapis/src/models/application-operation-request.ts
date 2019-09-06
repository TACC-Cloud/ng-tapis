/* tslint:disable */
import { Action } from './action';
export interface ApplicationOperationRequest  {
  action?: Action;

  /**
   * Path to the on cloned app's deployment folder on its storage system. Only used with the clone action.
   */
  deploymentPath?: string;

  /**
   * System on which the clone apps should run. Only used with the clone action.
   */
  executionSystem?: string;

  /**
   * Name of cloned app. Only used with the clone action.
   */
  name?: string;

  /**
   * Storage system on which the cloned app's assets resides. Only used with the clone action.
   */
  storageSystem?: string;

  /**
   * Version of the cloned app. Only used with the clone action.
   */
  version?: string;
}
