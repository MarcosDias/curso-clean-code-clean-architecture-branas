import PlaceOrder from "../../src/application/PlaceOrder";
import Item from "../../src/domain/entity/Item";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";

test("Deve fazer um pedido", async () => {
  const orderRepository = new OrderRepositoryMemory();
  const itemRepository = new ItemRepositoryMemory();
  itemRepository.save(new Item(1, "Guitarra", 1000));
  itemRepository.save(new Item(2, "Amplificador", 5000));
  itemRepository.save(new Item(3, "Cabo", 30));
  const placeOrder = new PlaceOrder(itemRepository, orderRepository);
  const input = {
    cpf: "935.411.347-80",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
  };
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(6090);
});

test("Deve fazer um pedido e gerar o código do pedido", async () => {
  const orderRepository = new OrderRepositoryMemory();
  const itemRepository = new ItemRepositoryMemory();
  itemRepository.save(new Item(1, "Guitarra", 1000));
  itemRepository.save(new Item(2, "Amplificador", 5000));
  itemRepository.save(new Item(3, "Cabo", 30));
  const placeOrder = new PlaceOrder(itemRepository, orderRepository);
  const input = {
    cpf: "935.411.347-80",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    date: new Date("2021-03-01T10:00:00"),
  };
  const output = await placeOrder.execute(input);
  expect(output.code).toBe("202100000001");
});
