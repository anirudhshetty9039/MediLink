import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import RegisterPatient from "./pages/RegisterPatient";
import PatientDetails from "./pages/PatientDetails";
import QueuePage from "./pages/QueuePage";
import MedicinePage from "./pages/MedicinePage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar";

function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/patients" element={<RegisterPatient />} />

        <Route
          path="/patient/:id"
          element={<PatientDetails />}
        />

        <Route path="/queue" element={<QueuePage />} />

        <Route
          path="/medicines"
          element={<MedicinePage />}
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;