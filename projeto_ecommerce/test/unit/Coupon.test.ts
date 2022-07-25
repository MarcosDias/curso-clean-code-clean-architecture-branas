import Coupon from "../../src/domain/entity/Coupon";

test("Deve criar um cupom expirado", () => {
  const coupon = new Coupon("CÓDIGO", 20, new Date("2021-03-01T10:00:00"));
  const isExpired = coupon.isExpired(new Date("2021-03-10T10:00:00"));
  expect(isExpired).toBeTruthy();
});
