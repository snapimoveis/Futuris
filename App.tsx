import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Company from './pages/Company';
import BusinessAreas from './pages/BusinessAreas';
import Clients from './pages/Clients';
import News from './pages/News';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

// Simple ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Redirect root to default language (ES) */}
        <Route path="/" element={<Navigate to="/es" replace />} />

        {/* Language Parameterized Routes */}
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="empresa" element={<Company />} />
          <Route path="areas-de-negocio" element={<BusinessAreas />} />
          <Route path="areas-de-negocio/:area" element={<BusinessAreas />} />
          <Route path="clientes" element={<Clients />} />
          <Route path="noticias" element={<News />} />
          <Route path="noticias/:slug" element={<News />} />
          <Route path="carreira" element={<Careers />} />
          <Route path="contactos" element={<Contact />} />
          
          {/* Catch-all for inside lang path */}
          <Route path="*" element={<Navigate to="" replace />} />
        </Route>

        {/* Global Catch-all */}
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;