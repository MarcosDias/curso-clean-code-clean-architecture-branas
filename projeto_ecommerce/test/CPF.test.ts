import CPF from "../src/CPF";

test("Deve validar um cpf válido", () => {
  const cpf = new CPF("935.411.347-80");
  expect(cpf.value).toBe("93541134780");
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
    expect(() => new CPF(cpf)).toThrow(new Error("Erro! CPF Inválido."));
  }
);

test("Deve validar um cpf inválido que qualquer coisa diferente de número", () => {
  expect(() => new CPF("texto")).toThrow(new Error("Erro! CPF Inválido."));
});

test("Deve validar um cpf inválido que qualquer string que seja vazia", () => {
  expect(() => new CPF("")).toThrow(new Error("Erro! CPF Inválido."));
});

test("Deve validar um cpf válido com alguns pontos", () => {
  // const isValid = validateCpf("935.411.34780");
  // expect(isValid).toBeTruthy();
  const cpf = new CPF("935.411.34780");
  expect(cpf.value).toBe("93541134780");
});
