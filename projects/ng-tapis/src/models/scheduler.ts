/* tslint:disable */

/**
 * The type of scheduled used to run jobs.
 */
export enum Scheduler {
  Cobalt = 'COBALT',
  Condor = 'CONDOR',
  Fork = 'FORK',
  Loadleveler = 'LOADLEVELER',
  Lsf = 'LSF',
  Moab = 'MOAB',
  Pbs = 'PBS',
  Sge = 'SGE',
  Slurm = 'SLURM',
  Torque = 'TORQUE',
  Unknown = 'UNKNOWN'
}
