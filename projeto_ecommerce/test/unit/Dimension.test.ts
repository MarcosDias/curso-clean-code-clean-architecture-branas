import Dimension from "../../src/domain/entity/Dimension";

test("Deve calcular o volume a partidas das dimensões", () => {
  const dimension = new Dimension(100, 30, 10, 3);
  const volume = dimension.getVolume();
  expect(volume).toBe(0.03);
});

test("Deve calcular a densidade a partir das dimensões", () => {
  const dimension = new Dimension(100, 30, 10, 3);
  const density = dimension.getDensity();
  expect(density).toBe(100);
});
