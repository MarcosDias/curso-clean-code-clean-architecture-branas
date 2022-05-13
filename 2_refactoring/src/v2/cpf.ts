// @ts-nocheck
export function validate(rawCpf) {
  if (rawCpf === null) return false;
  if (rawCpf === undefined) return false;
  const cpf = rawCpf.replace(/\D/g, "");
  if (cpf.length != 11) return false;
  if (cpf.split("").every((c) => c === cpf[0])) return false;
  let d1 = 0;
  let d2 = 0;
  for (let nCount = 1; nCount < cpf.length - 1; nCount++) {
    const digito = parseInt(cpf.substring(nCount - 1, nCount));
    d1 = d1 + (11 - nCount) * digito;
    d2 = d2 + (12 - nCount) * digito;
  }
  let rest = d1 % 11;
  let dg1 = rest < 2 ? (dg1 = 0) : 11 - rest;
  d2 += 2 * dg1;
  rest = d2 % 11;
  let dg2 = rest < 2 ? 0 : 11 - rest;
  let nDigVerific = cpf.substring(cpf.length - 2, cpf.length);
  const nDigResult = "" + dg1 + "" + dg2;
  return nDigVerific == nDigResult;
}
