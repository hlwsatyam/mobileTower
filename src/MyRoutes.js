import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import AboutPage from "./Pages/About";

export default function MyRoutes({ isOpen, setIsOpen }) {
  return (
    <Routes>
      <Route path="/" element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />} />
      <Route path="/admin" element={<Admin isOpen={isOpen} setIsOpen={setIsOpen} />} />
      <Route path="/about" element={<AboutPage isOpen={isOpen} setIsOpen={setIsOpen} />} />
      
    </Routes>
  );
}
