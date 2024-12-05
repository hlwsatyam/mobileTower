import MyRoutes from "./MyRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApplyNowModal from "./components/modals/MainPopForm";
import { useState } from "react";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(true)
  return (
    <div className="App">
      {isFormOpen && <ApplyNowModal isOpen={isFormOpen} setIsOpen={setIsFormOpen} />}
      <Navbar isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <MyRoutes isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
      <Footer isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </div>
  );
}

export default App;
