import { Route,Routes } from "react-router-dom";
import { Home,Doctor,Shop,Cart,Profile } from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/doctor-dash/Sidebar";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/doctor/*" element={<Doctor/>} /> 
      <Route path="/shop" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/contact" element={<Contact/>} />
   
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
