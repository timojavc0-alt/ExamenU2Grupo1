import { formatMoney } from "../../utils/finance";

interface SummaryProps {
  totalInterest: number;
  finalAmount: number;
}

export const SummaryCard = ({ totalInterest, finalAmount }: SummaryProps) => (
  <div className="w-full max-w-lg mt-6 p-4 border border-green-900 rounded-lg bg-slate-800 animate-fade-in-up">
    <p className="text-sm text-slate-300">Total Intereses: <span className="font-bold text-green-400">{formatMoney(totalInterest)}</span></p>
    <p className="text-sm text-slate-300">Monto Final: <span className="font-bold text-green-400">{formatMoney(finalAmount)}</span></p>
  </div>
);