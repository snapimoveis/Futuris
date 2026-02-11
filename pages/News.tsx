import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const { t, currentLang } = useLanguage();

  // In a real app, images and IDs would come from a CMS. 
  // We use the structure from translations but add dummy IDs/Images here for display.
  const newsDisplay = t.news.items.map((item, index) => ({
      ...item,
      id: (index + 1).toString(),
      // Varied images for demo
      image: `https://picsum.photos/id/${450 + index * 10}/800/600`,
      date: new Date().toLocaleDateString(currentLang === 'pt' ? 'pt-PT' : 'es-ES') // Dynamic date for demo
  }));

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12 border-l-4 border-corporate-accent pl-6">
          {t.nav.news}
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {newsDisplay.map((news) => (
            <article key={news.id} className="group bg-corporate-gray border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 bg-corporate-accent text-white text-xs font-bold px-3 py-1 uppercase">
                  {news.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-zinc-500 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  {news.date}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-corporate-accent transition-colors">
                  <Link to={`/${currentLang}/noticias/${news.id}`}>{news.title}</Link>
                </h2>
                <p className="text-zinc-400 mb-6 line-clamp-2">
                  {news.excerpt}
                </p>
                <Link to={`/${currentLang}/noticias/${news.id}`} className="text-white text-sm font-semibold border-b border-zinc-700 hover:border-white pb-1 transition-colors">
                  {t.news.readArticle}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;