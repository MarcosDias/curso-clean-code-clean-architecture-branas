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
  expect(output).toEqual({ total: 6090 });
});
