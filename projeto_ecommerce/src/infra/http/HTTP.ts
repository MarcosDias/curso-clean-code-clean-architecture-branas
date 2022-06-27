export default interface HTTP {
  on(method: string, url: string, callback: Function): void;
  listen(port: number): void;
}
