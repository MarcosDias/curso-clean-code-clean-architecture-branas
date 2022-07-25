import Item from "../../src/domain/entity/Item";
import OrderItem from "../../src/domain/entity/OrderItem";

test("Deve conseguir calcular o valor total de um item de pedido", () => {
  const item = new Item(1, "Guitarra", 1000);
  const orderItem = new OrderItem(item.id, item.price, 2);
  expect(orderItem.getTotal()).toBe(2000);
});
