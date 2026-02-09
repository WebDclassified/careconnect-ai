import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Admin from "./pages/Admin";
import PatientForm from "./components/PatientForm";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/support" element={<PatientForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Chatbot />

    </BrowserRouter>
  );
}

export default App;
