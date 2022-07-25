import { isThisTypeNode } from "typescript";
import Coupon from "./Coupon";
import CPF from "./CPF";
import Freight from "./Freight";
import Item from "./Item";
import OrderCode from "./OrderCode";
import OrderCoupon from "./OrderCoupon";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: CPF;
  orderItem: OrderItem[];
  coupon?: OrderCoupon;
  freight = new Freight();
  code: OrderCode;

  constructor(cpf: string, readonly date = new Date(), readonly sequence = 1) {
    this.cpf = new CPF(cpf);
    this.orderItem = [];
    this.code = new OrderCode(date, sequence);
  }

  addItem(item: Item, quantity: number) {
    this.freight.addItem(item, quantity);
    this.orderItem.push(new OrderItem(item.id, item.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    if (!coupon.isExpired(this.date)) {
      this.coupon = new OrderCoupon(coupon.code, coupon.percentage);
    }
  }

  getFreight() {
    return this.freight.getTotal();
  }

  getTotal() {
    let total = this.orderItem.reduce(
      (total, orderItem) => (total += orderItem.getTotal()),
      0
    );

    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total);
    }

    total += this.freight.getTotal();

    return total;
  }
}
