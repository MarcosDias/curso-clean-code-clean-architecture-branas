import ItemRepository from "../domain/repository/ItemRepository";

export default class GetItems {
  constructor(readonly itemRepository: ItemRepository) {}

  async execute(): Promise<Output[]> {
    const items = await this.itemRepository.listAll();
    return items.map<Output>(({ id, description, price }) => ({
      idItem: id,
      description,
      price,
    }));
  }
}

type Output = {
  idItem: number;
  description: string;
  price: number;
};
