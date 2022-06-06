import Item from "../src/Item";

test("Deve conseguir criar um item", () => {
  const item = new Item(1, "Guitarra", 100);
  expect(item).toBeTruthy();
});
