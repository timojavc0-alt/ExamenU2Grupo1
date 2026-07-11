import { useState } from "react";
import { type SimulationData } from "../../utils/finance.ts";

export const useSimulation = (datos: SimulationData, setDatos: React.Dispatch<React.SetStateAction<SimulationData>>) => {
  const [localData, setLocalData] = useState<SimulationData>(datos);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localData.deposit <= 0 || localData.rate <= 0 || localData.years <= 0) {
      setError("Todos los valores deben ser mayores a 0.");
      return;
    }
    setError("");
    setDatos(localData);
  };

  // Lógica de cálculo aislada
  const i = (datos.rate / 100) / 12;
  const finalAmount = datos.deposit > 0 ? datos.deposit * Math.pow(1 + i, datos.years * 12) : 0;
  const totalInterest = finalAmount - datos.deposit;

  return { localData, setLocalData, handleSubmit, error, finalAmount, totalInterest, hasCalculated: datos.deposit > 0 };
};