// src/presentation/pages/FormularioPage.tsx

import type { index } from "../interfaces";

interface Props {
  datos: index;
  setDatos: React.Dispatch<React.SetStateAction<index>>;
}

export default function FormPage({ datos, setDatos }: Props) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Captura de Datos</h2>
      <p className="text-slate-500 mb-6 text-center max-w-md">
        Aqui hay que agregar los inputs numéricos (Monto, Tasa, Plazo).
      </p>
      
      <div className="w-full max-w-md p-6 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center text-slate-400 text-sm">
        Contenedor para poner el formulrio y Resumen
      </div>
    </div>
  );
}