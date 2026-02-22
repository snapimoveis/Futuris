import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Building2 } from 'lucide-react';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/clients')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data)) {
          setClients(data);
        }
      })
      .catch(err => console.error("Failed to load clients", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-corporate-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t.clients.title}</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t.clients.intro}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="group relative h-40 bg-corporate-gray border border-zinc-800 rounded-sm p-8 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center overflow-hidden"
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('text-zinc-500', 'font-bold');
                      if (e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = client.name;
                    }}
                  />
                ) : (
                  <span className="text-zinc-500 font-bold uppercase tracking-wider text-sm text-center">{client.name}</span>
                )}
              </div>
            ))}
            
            {clients.length === 0 && (
              <div className="col-span-full text-center py-12 text-zinc-500">
                No clients found.
              </div>
            )}
          </div>
        )}

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