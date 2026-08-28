import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import BathroomCabinet from './pages/BathroomCabinet';
import HomeDecor from './pages/HomeDecor';
import Sanitaryware from './pages/Sanitaryware';
import ProductDetail from './pages/ProductDetail';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/bathroom" element={<BathroomCabinet />} />
        <Route path="/home-decor" element={<HomeDecor />} />
        <Route path="/sanitaryware" element={<Sanitaryware />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Fallback to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
