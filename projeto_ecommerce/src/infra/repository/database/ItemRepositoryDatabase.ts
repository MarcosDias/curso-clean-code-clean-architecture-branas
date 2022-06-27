import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryDatabase implements ItemRepository {
  constructor() {}
  get(id: number): Promise<Item> {
    throw new Error("Method not implemented.");
  }
  save(item: Item): Promise<void> {
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<Item[]> {
    throw new Error("Method not implemented.");
  }
}
