import { Route, Routes } from "react-router";
import Navbar from "../presentation/components/Navbar";
import FormPage from "../presentation/pages/FormPage";

export const AppRouter = () => {
  return (
    
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Routes>
            <Route path="/" element={<FormPage/>}/>
        </Routes>
    </div>
  );
};
