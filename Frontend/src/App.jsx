import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Ap from 'Dry/src/App.css';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';

import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';


import Footer from './components/Footer.jsx';




function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/1" element={<AlmondCards />} />

        
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />


    </Router>
  )
}

export default App