import MyRoutes from "./MyRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApplyNowModal from "./components/modals/MainPopForm";
import { useState } from "react";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(true)
  return (
    <div className="App">
      {isFormOpen && <ApplyNowModal isOpen={isFormOpen} setIsOpen={setIsFormOpen}  />}
      <Navbar />
      <MyRoutes isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
      <Footer />
    </div>
  );
}

export default App;
