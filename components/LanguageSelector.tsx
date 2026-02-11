import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../types';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { currentLang, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
    { code: 'ca', label: 'CA' },
    { code: 'en', label: 'EN' },
  ];

  const handleSelect = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm font-medium text-corporate-light hover:text-white transition-colors py-2"
      >
        <Globe size={16} />
        <span className="uppercase">{currentLang}</span>
        <ChevronDown size={14} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-corporate-gray border border-zinc-800 shadow-xl rounded-md overflow-hidden z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 transition-colors ${currentLang === l.code ? 'text-corporate-accent' : 'text-zinc-400'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;