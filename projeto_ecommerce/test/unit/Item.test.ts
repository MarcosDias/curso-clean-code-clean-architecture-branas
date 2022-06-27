import Item from "../../src/domain/entity/Item";

test("Deve conseguir criar um item", () => {
  const item = new Item(1, "Guitarra", 100);
  expect(item).toBeTruthy();
});
