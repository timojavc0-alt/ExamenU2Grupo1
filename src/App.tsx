import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { useState } from "react";
import { type SimulationData } from "./utils/finance";


function App() {

  const [datos,setDatos] = useState<SimulationData>({
    deposit:0,
    rate:0,
    years:0
  });


  return (
    <BrowserRouter>

      <AppRouter 
        datos={datos}
        setDatos={setDatos}
      />

    </BrowserRouter>
  );
}

export default App;