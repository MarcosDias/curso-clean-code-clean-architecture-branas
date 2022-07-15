import OrderCode from "../../src/domain/entity/OrderCode";

test("Deve gerar o código do pedido", () => {
  const orderCode = new OrderCode(new Date("2021-03-01T10:10:00"), 1);
  expect(orderCode.value).toBe("202100000001");
});
