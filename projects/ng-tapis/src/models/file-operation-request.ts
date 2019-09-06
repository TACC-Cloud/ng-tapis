/* tslint:disable */
import { Action1 } from './action-1';
export interface FileOperationRequest  {
  action?: Action1;

  /**
   * Destination to which to copy the file or folder. Only used with the copy action.
   */
  destPath?: string;

  /**
   * Name of new directory. Only used with the mkdir action.
   */
  dirName?: string;

  /**
   * New name of the file or folder. Only used with the rename action.
   */
  newName?: string;

  /**
   * Destination to which to move the file or folder. Only used with the move action.
   */
  newPath?: string;
}
