import { calculateRide } from "../src/calc";

test("Deve calcular o valor da corrida em horário normal", () => {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-01T10:00:00") },
  ]);
  expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida em horário noturno", () => {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-01T23:00:00") },
  ]);
  expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida em horário no domingo", function () {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-07T10:00:00") },
  ]);
  expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida em horário no domingo noturno", function () {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-07T23:00:00") },
  ]);
  expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida mínima", function () {
  const fare = calculateRide([
    { distance: 3, date: new Date("2021-03-01T10:00:00") },
  ]);
  expect(fare).toBe(10);
});

test("Deve retornar -1 se a distância for inválida", function () {
  const fare = calculateRide([
    { distance: -3, date: new Date("2021-03-01T10:00:00") },
  ]);
  expect(fare).toBe(-1);
});

test("Deve retornar -2 se a data for inválida", function () {
  const fare = calculateRide([{ distance: 10, date: new Date("abcdef") }]);
  expect(fare).toBe(-2);
});

test("Deve calcular o valor da corrida em múltiplos horários", () => {
  const fare = calculateRide([
    { distance: 10, date: new Date("2021-03-01T21:00:00") },
    { distance: 10, date: new Date("2021-03-01T22:00:00") },
  ]);
  expect(fare).toBe(60);
});