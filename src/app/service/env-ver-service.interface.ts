import { EnvVer } from './env-ver.model';

export interface IEnvVerService {
  findById(id: string): EnvVer;
  findAll(): EnvVer[];
  save(envVer: EnvVer): EnvVer;
}