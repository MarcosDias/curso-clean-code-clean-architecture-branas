import Item from "./Item";

export default class OrderItem {
  constructor(readonly item: Item, readonly quantity: number) {}

  getTotal() {
    return this.item.price * this.quantity;
  }
}
