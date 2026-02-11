import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { currentLang, t } = useLanguage();

  return (
    <footer className="bg-corporate-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <div className="mb-6">
            <img 
              src="https://ugc.production.linktr.ee/821262d0-083b-4876-b333-6a56f0821c3c_Logo-Futuris---Slogan.png" 
              alt="FUTURIS" 
              className="h-16 w-auto object-contain bg-white/5 rounded-sm p-1" 
            />
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            {t.company.description}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">{t.nav.company}</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link to={`/${currentLang}/empresa`} className="hover:text-corporate-accent transition-colors">{t.nav.company}</Link></li>
            <li><Link to={`/${currentLang}/carreira`} className="hover:text-corporate-accent transition-colors">{t.nav.careers}</Link></li>
            <li><Link to={`/${currentLang}/noticias`} className="hover:text-corporate-accent transition-colors">{t.nav.news}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">{t.nav.businessAreas}</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link to={`/${currentLang}/areas-de-negocio/montagem-eletromecanica`} className="hover:text-corporate-accent transition-colors">{t.businessAreasList.electromechanical.title}</Link></li>
            <li><Link to={`/${currentLang}/areas-de-negocio/calderaria`} className="hover:text-corporate-accent transition-colors">{t.businessAreasList.boilermaking.title}</Link></li>
            <li><Link to={`/${currentLang}/areas-de-negocio/servicos-de-soldadura`} className="hover:text-corporate-accent transition-colors">{t.businessAreasList.welding.title}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">{t.nav.contact}</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>Polígono Industrial Zona Franca,<br />Carrer D, 08040 Barcelona, España</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} />
              <span>+34 93 123 45 67</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} />
              <span>info@futuris.corp</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} FUTURIS. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          <a href="#" className="hover:text-zinc-400">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;