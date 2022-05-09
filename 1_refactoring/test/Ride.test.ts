import Ride from "../src/Ride";

let ride: Ride;

beforeEach(() => {
  ride = new Ride();
});

test("Deve calcular o valor da corrida em horário normal", () => {
  ride.addSegment(10, new Date("2021-03-01T10:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(21);
});

test("Deve calcular o valor da corrida em horário noturno", () => {
  ride.addSegment(10, new Date("2021-03-01T23:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(39);
});

test("Deve calcular o valor da corrida em horário no domingo", () => {
  ride.addSegment(10, new Date("2021-03-07T10:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(29);
});

test("Deve calcular o valor da corrida em horário no domingo noturno", () => {
  ride.addSegment(10, new Date("2021-03-07T23:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(50);
});

test("Deve calcular o valor da corrida mínima", () => {
  ride.addSegment(3, new Date("2021-03-01T10:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(10);
});

test("Deve retornar uma exception Error se a distância for inválida", () => {
  ride.addSegment(-3, new Date("2021-03-01T10:00:00"));
  expect(() => ride.finish()).toThrow(new Error("Invalid Distance"));
});

test("Deve retornar uma exception Error se a data for inválida", () => {
  ride.addSegment(10, new Date("abcdef"));
  expect(() => ride.finish()).toThrow(new Error("Invalid Date"));
});

test("Deve calcular o valor da corrida em múltiplos horários", () => {
  ride.addSegment(10, new Date("2021-03-01T21:00:00"));
  ride.addSegment(10, new Date("2021-03-01T22:00:00"));
  const fare = ride.finish();
  expect(fare).toBe(60);
});
