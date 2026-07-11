import { Route, Routes } from "react-router";
import Navbar from "../presentation/components/Navbar";
import FormPage from "../presentation/pages/FormPage";
import MonthlyPage from "../presentation/pages/MonthlyPage";
import AnnualPage from "../presentation/pages/AnnualPage";

export const AppRouter = () => {
  return (
    
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Routes>
            <Route path="/" element={<FormPage/>}/>
            <Route path="/mensual" element={<MonthlyPage/>}/>
            <Route path="/anual" element={<AnnualPage/>}/>
        </Routes>
    </div>
  );
};
