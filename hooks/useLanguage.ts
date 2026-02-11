import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../i18n/translations';
import { Language, TranslationStructure } from '../types';
import { useEffect, useState } from 'react';

export const useLanguage = () => {
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Default to 'es' if undefined, but check validity
  const currentLang: Language = (lang && ['es', 'pt', 'ca', 'en'].includes(lang)) 
    ? (lang as Language) 
    : 'es';

  const t: TranslationStructure = translations[currentLang];

  const changeLanguage = (newLang: Language) => {
    // Replace the language segment in the URL
    // Assumption: URL always starts with /:lang
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    if (pathSegments.length > 0) {
      pathSegments[0] = newLang;
      navigate(`/${pathSegments.join('/')}`);
    } else {
      navigate(`/${newLang}`);
    }
  };

  return { currentLang, t, changeLanguage };
};