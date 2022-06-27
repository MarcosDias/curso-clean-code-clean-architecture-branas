import express from "express";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import Item from "./domain/entity/Item";
import GetItems from "./application/GetItems";
import ItemRepositoryMemory from "./infra/repository/memory/ItemRepositoryMemory";

const http = new ExpressAdapter();

const itemRepository = new ItemRepositoryMemory();
itemRepository.save(new Item(1, "Guitarra", 1000));
itemRepository.save(new Item(2, "Amplificador", 5000));
itemRepository.save(new Item(3, "Cabo", 30));

http.on("get", "/items", async (param: any, body: any) => {
  const getItems = new GetItems(itemRepository);
  const output = await getItems.execute();
  return output;
});

http.listen(3000);
