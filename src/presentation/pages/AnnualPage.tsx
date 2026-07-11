import type { index } from "../interfaces";

interface Props {
  datos: index;
}

export default function ProyeccionAnualPage({ datos }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Proyección Anual</h2>
      <p className="text-slate-500 text-center mb-6">
        {/* Tabla de crecimiento año con año, los valores positivos en verde */}
      </p>
      <div className="w-full p-8 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center text-slate-400 text-sm">
        {/* Aqui va la tabla anual */}
      </div>
    </div>
  );
}