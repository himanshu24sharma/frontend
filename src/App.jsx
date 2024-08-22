import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Driver from "./pages/driver/Driver";
import Login from "./pages/login/Login";
import Vehicle from "./pages/vehicle/Vehicle";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/vehicle" element={<Vehicle />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
