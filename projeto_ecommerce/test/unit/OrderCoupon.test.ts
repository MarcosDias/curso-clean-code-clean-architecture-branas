import Coupon from "../../src/domain/entity/Coupon";
import OrderCoupon from "../../src/domain/entity/OrderCoupon";

test("Deve conseguir calcular um desconto a partir de um cupom", () => {
  const coupon = new Coupon("CÓDIGO", 20);
  const orderCoupon = new OrderCoupon(coupon.code, coupon.percentage);
  expect(orderCoupon.calculateDiscount(1000)).toBe(200);
});
