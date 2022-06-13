import Dimension from "./Dimension";

export default class Item {
  constructor(
    readonly id: number,
    readonly description: string,
    readonly price: number,
    readonly dimension?: Dimension
  ) {}

  getVolume() {
    if (this.dimension) {
      return this.dimension?.getVolume();
    }
    return 0;
  }

  getDensity() {
    if (this.dimension) {
      return this.dimension?.getDensity();
    }
    return 0;
  }
}
