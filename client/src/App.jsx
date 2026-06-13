
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPatient from "./pages/RegisterPatient";
import PatientDetails from "./pages/PatientDetails";
import QueuePage from "./pages/QueuePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPatient />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="/queue" element={<QueuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;