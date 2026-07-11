export interface SimulationData {
  deposit: number;
  rate: number;
  years: number;
}

// Formateador exclusivo para Lempiras
export const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('es-HN', { style: 'currency', currency: 'HNL' }).format(amount);
};

export function calculateMonthly(deposit: number, annualRate: number, years: number) {
  const i = (annualRate / 100) / 12;
  const totalMonths = years * 12;
  const results = [];
  let previousSaldo = deposit;

  for (let n = 1; n <= totalMonths; n++) {
    const saldo = deposit * Math.pow(1 + i, n);
    const interest = saldo - previousSaldo;
    results.push({ month: n, saldo, interest });
    previousSaldo = saldo;
  }
  return results;
}

export function calculateAnnual(deposit: number, annualRate: number, years: number) {
  const i = (annualRate / 100) / 12;
  const results = [];
  let previousSaldo = deposit;

  for (let k = 1; k <= years; k++) {
    const saldo = deposit * Math.pow(1 + i, k * 12);
    const interest = saldo - previousSaldo;
    results.push({ year: k, saldo, interest });
    previousSaldo = saldo;
  }
  return results;
}