import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "../presentation/components/Navbar";
import FormPage from "../presentation/pages/FormPage";
import { type SimulationData } from "../utils/finance";

export const AppRouter = () => {
  const [datos, setDatos] = useState<SimulationData>({
    deposit: 0,
    rate: 0,
    years: 0
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<FormPage datos={datos} setDatos={setDatos} />} />
        </Routes>
      </main>
    </div>
  );
};