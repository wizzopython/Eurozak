import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BathroomCabinet from './pages/BathroomCabinet';
import HomeDecor from './pages/HomeDecor';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bathroom" element={<BathroomCabinet />} />
          <Route path="/home-decor" element={<HomeDecor />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
