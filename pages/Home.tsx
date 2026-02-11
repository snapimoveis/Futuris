import React from 'react';
import Hero from '../components/Hero';
import { useLanguage } from '../hooks/useLanguage';
import { ShieldCheck, Zap, ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t, currentLang } = useLanguage();

  const features = [
    { icon: <Cpu size={32} />, title: t.company.values.engineering, desc: t.home.features.engineering },
    { icon: <ShieldCheck size={32} />, title: t.company.values.safety, desc: t.home.features.safety },
    { icon: <Zap size={32} />, title: t.company.values.efficiency, desc: t.home.features.efficiency },
  ];

  return (
    <>
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 bg-corporate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t.company.title}</h2>
              <div className="h-1 w-20 bg-corporate-accent mb-8"></div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                {t.company.description}
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8">
                {t.home.intro}
              </p>
              <Link to={`/${currentLang}/empresa`} className="text-white border-b border-corporate-accent pb-1 hover:text-corporate-accent transition-colors inline-flex items-center">
                {t.common.learnMore} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/id/193/400/500" alt="Industrial Worker" className="rounded-sm object-cover h-full w-full grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/id/250/400/300" alt="Factory Interior" className="rounded-sm object-cover h-48 w-full grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="bg-zinc-900 p-6 border border-zinc-800 rounded-sm">
                  <div className="text-3xl font-bold text-corporate-accent mb-1">15+</div>
                  <div className="text-zinc-500 text-sm">{t.home.stats.countries}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars / Services Preview */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.services.title}</h2>
            <p className="text-zinc-400">{t.services.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-corporate-gray p-8 border border-zinc-800 hover:border-zinc-600 transition-colors group">
                <div className="text-corporate-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{feature.desc}</p>
                <Link to={`/${currentLang}/areas-de-negocio`} className="text-sm font-semibold text-white group-hover:text-corporate-accent transition-colors flex items-center">
                  {t.common.viewDetails} <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-corporate-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t.home.stats.projects}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t.home.stats.safety}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t.home.stats.engineers}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t.home.stats.support}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;