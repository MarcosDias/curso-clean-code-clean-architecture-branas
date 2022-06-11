import Coupon from "./Coupon";
import CPF from "./CPF";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: CPF;
  orderItem: OrderItem[];
  coupon?: Coupon;

  constructor(cpf: string, readonly date = new Date()) {
    this.cpf = new CPF(cpf);
    this.orderItem = [];
  }

  addItem(item: Item, quantity: number) {
    this.orderItem.push(new OrderItem(item, quantity));
  }
  addCoupon(coupon: Coupon) {
    if (!coupon.isExpired(this.date)) {
      this.coupon = coupon;
    }
  }

  getTotal() {
    let total = this.orderItem.reduce(
      (total, orderItem) => (total += orderItem.getTotal()),
      0
    );

    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total);
    }

    return total;
  }
}
