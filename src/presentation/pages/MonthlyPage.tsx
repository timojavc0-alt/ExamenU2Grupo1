// src/presentation/pages/ProyeccionMensualPage.tsx

import type { index } from "../interfaces";

interface Props {
  datos: index;
}

export default function ProyeccionMensualPage({ datos }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Proyección Mensual</h2>
      <p className="text-slate-500 text-center mb-6">
        {/* Tabla de crecimiento mes a mes. Los valores positivos hay que ponerlos en verde */}
      </p>
      <div className="w-full p-8 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center text-slate-400 text-sm">
        {/* Aqui va la Tabla Mensual */}
      </div>
    </div>
  );
}