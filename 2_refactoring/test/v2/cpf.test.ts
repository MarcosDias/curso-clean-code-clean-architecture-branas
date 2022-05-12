import { validate } from "../../src/v2/cpf";

test("Deve validar um cpf válido", () => {
  const isValid = validate("935.411.347-80");
  expect(isValid).toBeTruthy();
});

const wrongSameDigitCpf = [
  "111.111.111-11",
  "222.222.222-22",
  "333.333.333-33",
  "444.444.444-44",
  "555.555.555-55",
  "666.666.666-66",
  "777.777.777-77",
  "888.888.888-88",
  "999.999.999-99",
];

test.each(wrongSameDigitCpf)(
  "Deve validar um cpf inválido com todos os números iguais",
  (cpf) => {
    const isNotValid = validate(cpf);
    expect(isNotValid).toBeFalsy();
  }
);

test("Deve validar um cpf inválido com todos os números iguais", () => {
  const isNotValid = validate("111.111.111-11");
  expect(isNotValid).toBeFalsy();
});

test("Deve validar um cpf inválido que seja nulo", () => {
  const isNotValid = validate(null);
  expect(isNotValid).toBeFalsy();
});

test("Deve validar um cpf válido com alguns pontos", () => {
  const isValid = validate("935.411.34780");
  expect(isValid).toBeTruthy();
});
