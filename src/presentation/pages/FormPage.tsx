import { useSimulation } from "../hooks/useSimulation";
import { SummaryCard } from "../components/SummaryCard";
import { type SimulationData } from "../../utils/finance";

interface Props {
  datos: SimulationData;
  setDatos: React.Dispatch<React.SetStateAction<SimulationData>>;
}

export default function FormPage({ datos, setDatos }: Props) {
  const { localData, setLocalData, handleSubmit, error, finalAmount, totalInterest, hasCalculated } = useSimulation(datos, setDatos);

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold text-white mb-6">Simulador de Ahorros</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 border border-slate-700 rounded-xl bg-slate-800 shadow-xl">
        <div className="space-y-4">
          {["deposit", "rate", "years"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-slate-300 mb-1 capitalize">
                {field === "deposit" ? "Monto Inicial (Lempiras)" : field === "rate" ? "Tasa Interés Anual (%)" : "Plazo (Años)"}
              </label>
              <input 
                type="number" step="any" required 
                className="w-full bg-slate-900 border border-slate-600 p-2 rounded text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none" 
                value={localData[field as keyof SimulationData] || ""} 
                onChange={(e) => setLocalData({...localData, [field]: parseFloat(e.target.value)})} 
              />
            </div>
          ))}
        </div>

        {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
        
        <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 mt-6 rounded hover:bg-green-500 transition-colors">
          Calcular
        </button>
      </form>

      {hasCalculated && <SummaryCard totalInterest={totalInterest} finalAmount={finalAmount} />}
    </div>
  );
}