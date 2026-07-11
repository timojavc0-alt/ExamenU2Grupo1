import { Routes, Route } from "react-router";
import Navbar from "../presentation/components/Navbar";
import FormPage from "../presentation/pages/FormPage";
import MonthlyPage from "../presentation/pages/MonthlyPage";
import AnnualPage from "../presentation/pages/AnnualPage";
import { type SimulationData } from "../utils/finance";

interface Props {
  datos: SimulationData;
  setDatos: React.Dispatch<React.SetStateAction<SimulationData>>;
}

export const AppRouter = ({ datos, setDatos }: Props) => {

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <main className="container mx-auto p-4">

        <Routes>

          <Route 
            path="/" 
            element={
              <FormPage 
                datos={datos}
                setDatos={setDatos}
              />
            } 
          />

          <Route 
            path="/mensual" 
            element={
              <MonthlyPage 
                datos={datos}
              />
            } 
          />

          <Route 
            path="/anual" 
            element={
              <AnnualPage 
                datos={datos}
              />
            } 
          />

        </Routes>

      </main>

    </div>
  );
};