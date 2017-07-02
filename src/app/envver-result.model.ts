export class EnvVerResult {
  public name: string;
  version: string;
  status: string;
  lastKnown: string;
  constructor(name: string, version: string, status: string, lastKnown: string) {
    this.name = name;
    this.version = version;
    this.status = status;
    this.lastKnown = lastKnown;
  }
}