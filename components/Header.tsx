import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, Hexagon } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { currentLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: `/${currentLang}/empresa`, label: t.nav.company },
    { path: `/${currentLang}/areas-de-negocio`, label: t.nav.businessAreas },
    { path: `/${currentLang}/clientes`, label: t.nav.clients },
    { path: `/${currentLang}/noticias`, label: t.nav.news },
    { path: `/${currentLang}/carreira`, label: t.nav.careers },
    { path: `/${currentLang}/contactos`, label: t.nav.contact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled ? 'bg-corporate-dark/95 backdrop-blur-md border-zinc-800 py-2' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to={`/${currentLang}`} className="flex items-center z-50">
          {!logoError ? (
            <img 
              src="/logo.png" 
              alt="FUTURIS" 
              className="h-14 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
              <div className="bg-corporate-accent/10 p-2 rounded-sm border border-corporate-accent/20">
                <Hexagon className="text-corporate-accent" size={28} strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold text-white tracking-tight leading-none">FUTURIS</span>
              </div>
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white' : 'text-zinc-400'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="h-4 w-px bg-zinc-700 mx-2"></div>
          <LanguageSelector />
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-corporate-dark z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-light text-zinc-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8">
             <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;