export type Currency = 'HNL' | 'USD';

export interface SimulationData {
  deposit: number;
  rate: number;
  years: number;
  currency: Currency;
}

// Formateador de moneda
export const formatMoney = (amount: number, currency: Currency) => {
  const locale = currency === 'HNL' ? 'es-HN' : 'en-US';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
};

// Cálculo de proyección mensual
export function calculateMonthly(deposit: number, annualRate: number, years: number) {
  const i = (annualRate / 100) / 12; // Tasa mensual en decimal
  const totalMonths = years * 12;
  const results = [];
  let previousSaldo = deposit;

  for (let n = 1; n <= totalMonths; n++) {
    const saldo = deposit * Math.pow(1 + i, n);
    const interest = saldo - previousSaldo; // Interés generado en el mes n
    
    results.push({ month: n, saldo, interest });
    previousSaldo = saldo;
  }
  
  return results;
}

// Cálculo de proyección anual
export function calculateAnnual(deposit: number, annualRate: number, years: number) {
  const i = (annualRate / 100) / 12;
  const results = [];
  let previousSaldo = deposit;

  for (let k = 1; k <= years; k++) {
    const saldo = deposit * Math.pow(1 + i, k * 12); // Equivalente al mes k * 12
    const interest = saldo - previousSaldo; // Interés generado en el año k
    
    results.push({ year: k, saldo, interest });
    previousSaldo = saldo;
  }
  
  return results;
}