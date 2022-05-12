import { validate } from "../../src/v2/cpf";

test("Deve validar um cpf válido", () => {
  const isValid = validate("935.411.347-80");
  expect(isValid).toBeTruthy();
});

test("Deve validar um cpf inválido com todos os números iguais", () => {
  const isNotValid = validate("111.111.111-11");
  expect(isNotValid).toBeFalsy();
});

test("Deve validar um cpf inválido que seja nulo", () => {
  const isNotValid = validate(null);
  expect(isNotValid).toBeFalsy();
});
