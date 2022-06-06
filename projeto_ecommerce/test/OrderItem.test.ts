import Item from "../src/Item";
import OrderItem from "../src/OrderItem";

test("Deve conseguir calcular o valor total de um item de pedido", () => {
  const item = new Item(1, "Guitarra", 1000);
  const orderItem = new OrderItem(item, 2);
  expect(orderItem.getTotal()).toBe(2000);
});
