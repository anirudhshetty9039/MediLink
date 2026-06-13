
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPatient from "./pages/RegisterPatient";
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPatient />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;