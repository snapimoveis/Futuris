import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Building2 } from 'lucide-react';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch paths from metadata.json
    fetch('/metadata.json')
      .then(res => res.json())
      .then(data => {
        if (data.clientLogos && Array.isArray(data.clientLogos)) {
          setLogos(data.clientLogos);
        }
      })
      .catch(err => console.error("Failed to load client logos", err))
      .finally(() => setLoading(false));
  }, []);

  // Helper to extract a display name from the filename for the fallback/alt tag
  // e.g., "/images/clients/angelmir-doors.png" -> "Angelmir Doors"
  const getNameFromPath = (path: string) => {
    const filename = path.split('/').pop() || '';
    const name = filename.split('.')[0];
    // Replace hyphens/underscores with spaces and capitalize words
    return name
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Hide the broken image so the parent div (fallback) is visible or style it differently
    e.currentTarget.style.display = 'none';
    // Access the parent to show a text fallback
    const parent = e.currentTarget.parentElement;
    if (parent) {
       parent.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'gap-2');
       // Remove existing content to prevent duplicates if error triggers multiple times
       while (parent.firstChild) {
         if (parent.firstChild !== e.currentTarget) {
             parent.removeChild(parent.firstChild);
         } else {
             break; 
         }
       }
       
       const span = document.createElement('span');
       span.innerText = e.currentTarget.alt;
       span.className = "text-zinc-500 font-bold uppercase tracking-wider text-sm text-center";
       const icon = document.createElement('div');
       icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2 text-zinc-600 mb-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>';
       parent.appendChild(icon);
       parent.appendChild(span);
    }
  };

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
            {logos.map((path, index) => (
              <div 
                key={index} 
                className="group relative h-40 bg-corporate-gray border border-zinc-800 rounded-sm p-8 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={path} 
                  alt={getNameFromPath(path)} 
                  className="max-h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={handleImageError}
                />
              </div>
            ))}
            
            {/* Fallback if no logos in metadata */}
            {logos.length === 0 && (
              <div className="col-span-full text-center py-12 text-zinc-500">
                No client logos configured in metadata.json
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