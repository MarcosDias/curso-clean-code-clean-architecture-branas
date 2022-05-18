import CPF from "./CPF";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: CPF;
  orderItem: OrderItem[];

  constructor(cpf: string) {
    this.cpf = new CPF(cpf);
    this.orderItem = [];
  }

  addItem(item: Item, quantity: number) {
    this.orderItem.push(new OrderItem(item, quantity));
  }

  getTotal() {
    return this.orderItem.reduce(
      (total, orderItem) => (total += orderItem.getTotal()),
      0
    );
  }
}
