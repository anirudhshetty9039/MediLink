
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPatient from "./pages/RegisterPatient";
import PatientDetails from "./pages/PatientDetails";
import QueuePage from "./pages/QueuePage";
import MedicinePage from "./pages/MedicinePage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />

  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/patients" element={<RegisterPatient />} />

  <Route path="/patient/:id" element={<PatientDetails />} />

  <Route path="/queue" element={<QueuePage />} />

  <Route path="/medicines" element={<MedicinePage />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;