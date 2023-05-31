import { Route,Routes } from "react-router-dom";
import { Home,Doctor,Shop,Cart,Profile } from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import PatientPage from "./Pages/Pateint";
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
      <Route path="/patient/*" element={<PatientPage/>} />   
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
