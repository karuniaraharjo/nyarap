import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen Layout
import Layout from './components/layout/Layout';

// Import Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Halaman 404 */}
          <Route path="*" element={<div className="text-center py-20 text-5xl">404. Halaman tidak ditemukan</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;