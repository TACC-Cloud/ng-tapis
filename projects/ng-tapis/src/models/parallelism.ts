/* tslint:disable */

/**
 * The parallelism type of the application. If you're unsure, it's probably SERIAL.
 */
export enum Parallelism {
  Serial = 'SERIAL',
  Parallel = 'PARALLEL',
  Pthread = 'PTHREAD'
}
