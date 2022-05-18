import Item from "../src/Item";
import Order from "../src/Order";

test("Não deve criar um pedido com CPF inválido", () => {
  expect(() => new Order("111.111.111-11")).toThrow(
    new Error("Erro! CPF Inválido.")
  );
});

test("Deve criar um pedido com 3 itens (com descrição, preço e quantidade)", () => {
  const order = new Order("935.411.347-80");
  order.addItem(new Item(1, "Guitarra", 1000), 1);
  order.addItem(new Item(2, "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Cabo", 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});
