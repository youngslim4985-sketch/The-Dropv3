import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cellar from './pages/Cellar';
import BottleDetail from './pages/BottleDetail';
import Tasting from './pages/Tasting';
import Regions from './pages/Regions';
import TheDrop from './pages/TheDrop';
import Salon from './pages/Salon';
import Atelier from './pages/Atelier';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cellar" element={<Cellar />} />
          <Route path="/bottle/:id" element={<BottleDetail />} />
          <Route path="/tasting" element={<Tasting />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/drop" element={<TheDrop />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}
