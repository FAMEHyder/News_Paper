import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Ap from 'Dry/src/App.css';
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import AlmondCards from './components/AlmondData.jsx';

import Footer from './components/Footer.jsx';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { theme, jss } from './components/Theme.jsx'; // assuming theme setup above




function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<AlmondCards />} />


        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div dir="rtl">
            <Footer />
          </div>
        </ThemeProvider>
      </StylesProvider>



    </Router>
  )
}

export default App