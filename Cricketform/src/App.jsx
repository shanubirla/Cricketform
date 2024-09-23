import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import ContactUs from './Components/Contact.jsx';
import Registration from './Components/Registration.jsx';
import Tournaments from './Components/Tournament.jsx';

function App() {
  return (
    <Router>
      <div className="bg-green-50 min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/tournaments" element={<Tournaments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
