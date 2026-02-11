import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, currentLang } = useLanguage();

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1031/1920/1080?grayscale&blur=2" 
          alt="Industrial Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark via-corporate-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-zinc-600 rounded-full bg-zinc-900/50 backdrop-blur-sm">
           <span className="text-xs uppercase tracking-widest text-corporate-light font-semibold">ISO 9001:2015 Certified</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t.hero.subtitle}
        </p>
        <Link 
          to={`/${currentLang}/areas-de-negocio`}
          className="inline-flex items-center px-8 py-4 bg-white text-corporate-black font-semibold rounded-sm hover:bg-zinc-200 transition-colors group"
        >
          {t.hero.cta}
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-zinc-500"></div>
      </div>
    </div>
  );
};

export default Hero;