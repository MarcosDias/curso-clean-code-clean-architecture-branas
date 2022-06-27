import axios from "axios";

test.skip("deve chamar /items", async () => {
  const response = await axios({
    url: "http://localhost:3000/items",
    method: "get",
  });
  const items = response.data;
  expect(items).toHaveLength(3);
});
