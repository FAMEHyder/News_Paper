import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import SignUp from "./component/SignUp.jsx";
import LoginForm from "./component/SignIn.jsx";
import  Home  from "./component/Home.jsx";
import AddProduct from "./component/AddProduct.jsx";

function App() {
 
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<LoginForm />} />
    </Routes>
    {/* <Footer /> */}


  </Router>
  )
}

export default App
