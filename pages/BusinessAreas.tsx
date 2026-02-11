import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useParams, Link } from 'react-router-dom';
import { Settings, ArrowRight, CheckCircle2, Hammer, Flame, PaintBucket, Sparkles, Database } from 'lucide-react';

const BusinessAreas: React.FC = () => {
  const { t, currentLang } = useLanguage();
  const { area } = useParams<{ area?: string }>();

  // Function to handle image loading errors (fallback to placeholder)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://picsum.photos/id/119/800/600'; // Fallback generic industrial image
    e.currentTarget.onerror = null; // Prevent infinite loop
  };

  const areas = [
    {
      id: 'calderaria',
      title: t.businessAreasList.boilermaking.title,
      icon: <Hammer size={40} />,
      img: 'https://picsum.photos/id/192/800/600',
      description: t.businessAreasList.boilermaking.description,
      points: t.businessAreasList.boilermaking.points
    },
    {
      id: 'montagem-eletromecanica',
      title: t.businessAreasList.electromechanical.title,
      icon: <Settings size={40} />,
      img: 'https://picsum.photos/id/252/800/600',
      description: t.businessAreasList.electromechanical.description,
      points: t.businessAreasList.electromechanical.points
    },
    {
      id: 'tubulacao-industrial',
      title: t.businessAreasList.piping.title,
      icon: <Database size={40} />, // Abstract for tanks/pipes
      img: 'https://picsum.photos/id/1058/800/600',
      description: t.businessAreasList.piping.description,
      points: t.businessAreasList.piping.points
    },
    {
      id: 'servicos-de-soldadura',
      title: t.businessAreasList.welding.title,
      icon: <Flame size={40} />,
      img: '/images/servicos-de-soldadura.jpg', // Path now refers to public/images/servicos-de-soldadura.jpg
      description: t.businessAreasList.welding.description,
      points: t.businessAreasList.welding.points
    },
    {
      id: 'polimento-industrial',
      title: t.businessAreasList.polishing.title,
      icon: <Sparkles size={40} />,
      img: 'https://picsum.photos/id/134/800/600',
      description: t.businessAreasList.polishing.description,
      points: t.businessAreasList.polishing.points
    },
    {
      id: 'pintura-industrial',
      title: t.businessAreasList.painting.title,
      icon: <PaintBucket size={40} />,
      img: 'https://picsum.photos/id/1080/800/600',
      description: t.businessAreasList.painting.description,
      points: t.businessAreasList.painting.points
    }
  ];

  // If a specific area is selected in URL
  const selectedArea = area ? areas.find(a => a.id === area) : null;

  if (selectedArea) {
    return (
      <div className="pt-24 pb-16">
        <div className="relative h-96 w-full overflow-hidden">
             <img 
               src={selectedArea.img} 
               alt={selectedArea.title} 
               onError={handleImageError}
               className="w-full h-full object-cover grayscale opacity-50" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-7xl mx-auto w-full">
                <Link to={`/${currentLang}/areas-de-negocio`} className="text-zinc-400 hover:text-white mb-4 block text-sm">&larr; {t.businessAreasPage.back}</Link>
                <div className="text-corporate-accent mb-4">{selectedArea.icon}</div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{selectedArea.title}</h1>
             </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-16">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-white mb-6">{t.businessAreasPage.serviceOverview}</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">{selectedArea.description}</p>
                    <p className="text-zinc-500 leading-relaxed">
                        {t.businessAreasPage.safetyDesc}
                    </p>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-white mb-6">{t.businessAreasPage.keyCapabilities}</h3>
                        <ul className="space-y-4">
                            {selectedArea.points.map((point, i) => (
                                <li key={i} className="flex items-center text-zinc-300">
                                    <CheckCircle2 className="text-corporate-accent mr-3" size={20} />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-corporate-gray p-8 border border-zinc-800 h-fit rounded-sm">
                    <h3 className="text-white font-bold mb-4">{t.businessAreasPage.ctaTitle}</h3>
                    <p className="text-zinc-400 text-sm mb-6">{t.businessAreasPage.ctaDesc}</p>
                    <Link to={`/${currentLang}/contactos`} className="block w-full bg-white text-corporate-black text-center py-3 font-semibold rounded-sm hover:bg-zinc-200 transition-colors">
                        {t.businessAreasPage.ctaButton}
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // Index of areas
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">{t.nav.businessAreas}</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mb-16">
          {t.services.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((item) => (
            <Link 
              key={item.id} 
              to={`/${currentLang}/areas-de-negocio/${item.id}`}
              className="group relative h-80 overflow-hidden border border-zinc-800 rounded-sm block"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                onError={handleImageError}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-corporate-black via-corporate-black/80 to-transparent"></div>
              
              <div className="relative z-10 p-10 h-full flex flex-col justify-center max-w-2xl">
                <div className="text-corporate-accent mb-4">{item.icon}</div>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-corporate-accent transition-colors">{item.title}</h2>
                <p className="text-zinc-300 mb-6 line-clamp-2">{item.description}</p>
                <div className="flex items-center text-sm font-semibold text-white uppercase tracking-wider">
                  {t.common.details} <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessAreas;