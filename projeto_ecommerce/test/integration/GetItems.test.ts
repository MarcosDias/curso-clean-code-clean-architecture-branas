import GetItems from "../../src/application/GetItems";
import Item from "../../src/domain/entity/Item";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";

test("Deve buscar os itens", async () => {
  const itemRepository = new ItemRepositoryMemory();
  const getItems = new GetItems(itemRepository);
  itemRepository.save(new Item(1, "Guitarra", 1000));
  itemRepository.save(new Item(2, "Amplificador", 5000));
  itemRepository.save(new Item(3, "Cabo", 30));
  const output = await getItems.execute();
  expect(output).toHaveLength(3);
});
