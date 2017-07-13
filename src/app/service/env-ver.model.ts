export class EnvVer {

  constructor(
    public id: string,
    public envVerName: string,
    public url: string,
    public enabled: boolean,
    public version: number = 0) {}
}