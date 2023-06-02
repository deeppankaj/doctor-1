import { Route,Routes } from "react-router-dom";
import { Home,Doctor,Shop,Cart,Profile } from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import PatientPage from "./Pages/Pateint";
import MiniFooter from "./components/MiniFooter";
import SignUp from "./components/Signup";
import Login from "./components/Login";
function App() {
  const route = window.location.pathname.toString().split("/")[1];
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/doctor/*" element={<Doctor/>} /> 
      <Route path="/shop" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/patient/*" element={<PatientPage/>} />   
    </Routes>
    {route===("patient"&&"doctor")?(<><MiniFooter/></>):(<><Footer/></>)}
    </>
  );
}

export default App;
