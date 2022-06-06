import Coupon from "../src/Coupon";

test("Deve conseguir calcular um desconto a partir de um cupom", () => {
  const cupom = new Coupon("CÓDIGO", 20);
  expect(cupom.calculateDiscount(1000)).toBe(200);
});
