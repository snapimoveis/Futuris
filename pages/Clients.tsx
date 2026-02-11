import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Clients: React.FC = () => {
  const { t } = useLanguage();

  // Generating dummy client logos using placeholders
  const clients = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    name: `Client ${i + 1}`,
    logo: `https://via.placeholder.com/150x80/27272a/a1a1aa?text=PARTNER+${i+1}`
  }));

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t.clients.title}</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t.clients.intro}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="bg-corporate-gray border border-zinc-800 p-8 flex items-center justify-center hover:border-zinc-600 transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
            >
              <img src={client.logo} alt={client.name} className="max-h-12" />
            </div>
          ))}
        </div>

        <div className="mt-24 bg-zinc-900 border border-zinc-800 p-10 rounded-sm text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{t.clients.ctaTitle}</h3>
            <p className="text-zinc-400 mb-8">{t.clients.ctaDesc}</p>
            <a href="mailto:contact@futuris.corp" className="inline-block px-8 py-3 bg-corporate-accent text-white font-semibold rounded-sm hover:bg-blue-600 transition-colors">
                {t.clients.ctaButton}
            </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;