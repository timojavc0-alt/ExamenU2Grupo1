// src/presentation/components/Navbar.tsx
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-semibold transition-colors border ${
            isActive
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`
        }
      >
        Formulario de Captura
      </NavLink>

      <NavLink
        to="/mensual"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-semibold transition-colors border ${
            isActive
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`
        }
      >
        Proyección Mensual
      </NavLink>

      <NavLink
        to="/anual"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md font-semibold transition-colors border ${
            isActive
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`
        }
      >
        Proyección Anual
      </NavLink>

    </nav>
  );
}