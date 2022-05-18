import CPF from "./CPF";

export default class Order {
  cpf: CPF;

  constructor(cpf: string) {
    this.cpf = new CPF(cpf);
  }
}
