import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { Target, Users, ShieldCheck, Award, Zap, Anchor, Hexagon, Handshake, FileBadge, ArrowRight, HardHat } from 'lucide-react';

const Company: React.FC = () => {
  const { t, currentLang } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      
      {/* 1. Header Section */}
      <div className="relative py-24 bg-corporate-gray border-b border-zinc-800 overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Hexagon size={400} strokeWidth={0.5} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
               {t.company.about.title}
             </h1>
             <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
               {t.company.about.intro}
             </p>
          </div>
        </div>
      </div>

      {/* 2. Trust & Roles Section (Image Right) */}
      <div className="bg-corporate-dark py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <div className="flex items-start">
                 <div className="bg-zinc-800 p-4 rounded-sm mr-6 text-corporate-accent shrink-0">
                    <Handshake size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-3">Transparency & Rigor</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                       {t.company.about.trust}
                    </p>
                 </div>
              </div>
              <div className="flex items-start">
                 <div className="bg-zinc-800 p-4 rounded-sm mr-6 text-corporate-accent shrink-0">
                    <HardHat size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-3">Multidisciplinary Team</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                       {t.company.about.roles}
                    </p>
                 </div>
              </div>
           </div>
           
           {/* Placeholder for Photo */}
           <div className="relative h-[500px] bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden group">
              <img 
                 src="https://picsum.photos/id/119/800/1000" 
                 alt="Team working" 
                 className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-zinc-600 m-4 opacity-50">
                 <span className="bg-black/50 px-4 py-2 text-white text-sm font-mono uppercase backdrop-blur-md">
                    [Insert Team Photo Here]
                 </span>
              </div>
           </div>
        </div>
      </div>

      {/* 3. Technical Training & Certification (Dark/Accent) */}
      <div className="bg-zinc-950 py-24 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <FileBadge className="mx-auto text-corporate-accent mb-6" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.company.training.title}</h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                 {t.company.training.description}
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-corporate-gray p-10 border border-zinc-800 rounded-sm">
                 <h3 className="text-2xl font-bold text-white mb-6">International Standards</h3>
                 <p className="text-zinc-400 mb-8 leading-relaxed">
                    {t.company.training.standards}
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white font-mono rounded">ASME IX</span>
                    <span className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white font-mono rounded">AWS</span>
                    <span className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white font-mono rounded">ISO 9001</span>
                    <span className="px-4 py-2 bg-corporate-accent/20 border border-corporate-accent/50 text-corporate-accent font-bold font-mono rounded">TIG / MIG / MAG / RX</span>
                 </div>
              </div>
              <div className="bg-corporate-gray p-10 border border-zinc-800 rounded-sm flex flex-col justify-center">
                 <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Quality Control</h3>
                    <div className="h-1 w-12 bg-corporate-accent"></div>
                 </div>
                 <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                    {t.company.training.outcome}
                 </p>
                 <div className="grid grid-cols-3 gap-4 text-center">
                     <div className="p-4 bg-zinc-900 rounded">
                        <ShieldCheck className="mx-auto text-zinc-500 mb-2" />
                        <span className="text-xs text-zinc-400 uppercase tracking-wider">Safety</span>
                     </div>
                     <div className="p-4 bg-zinc-900 rounded">
                        <Zap className="mx-auto text-zinc-500 mb-2" />
                        <span className="text-xs text-zinc-400 uppercase tracking-wider">Efficiency</span>
                     </div>
                     <div className="p-4 bg-zinc-900 rounded">
                        <Award className="mx-auto text-zinc-500 mb-2" />
                        <span className="text-xs text-zinc-400 uppercase tracking-wider">Quality</span>
                     </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* 4. Challenges & Team */}
      <div className="bg-corporate-dark py-24">
         <div className="max-w-7xl mx-auto px-6">
            
            {/* Challenges */}
            <div className="grid md:grid-cols-12 gap-12 items-center mb-32">
               <div className="md:col-span-5 relative h-[400px]">
                   <img 
                      src="https://picsum.photos/id/1033/600/800" 
                      alt="Industrial Challenge" 
                      className="w-full h-full object-cover rounded-sm grayscale opacity-60"
                   />
                   <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-zinc-500 m-4 opacity-50">
                      <span className="bg-black/50 px-4 py-2 text-white text-sm font-mono uppercase backdrop-blur-md">
                         [Project Photo]
                      </span>
                   </div>
               </div>
               <div className="md:col-span-7">
                  <h2 className="text-3xl font-bold text-white mb-6">{t.company.challenges.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                     {t.company.challenges.description}
                  </p>
                  <p className="text-white text-xl font-medium border-l-4 border-corporate-accent pl-6 py-2 bg-zinc-900/50">
                     {t.company.challenges.commitment}
                  </p>
               </div>
            </div>

            {/* Team */}
            <div className="text-center max-w-4xl mx-auto">
               <div className="mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">{t.company.team.title}</h2>
                  <p className="text-corporate-accent uppercase tracking-widest font-bold text-sm mb-8">{t.company.team.subtitle}</p>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                     {t.company.team.description}
                  </p>
                  <p className="text-zinc-300 italic text-xl font-serif mb-12">
                     "{t.company.team.values}"
                  </p>
                  
                  <Link 
                     to={`/${currentLang}/carreira`} 
                     className="inline-flex items-center px-8 py-4 bg-white text-corporate-black font-bold text-sm uppercase tracking-wide hover:bg-zinc-200 transition-colors"
                  >
                     {t.company.team.cta} <ArrowRight className="ml-2" size={18} />
                  </Link>
               </div>
               
               {/* Team Gallery Placeholder */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 relative group overflow-hidden">
                        <img 
                           src={`https://picsum.photos/id/${i + 60}/400/400`} 
                           className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                           alt="Team Member"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <span className="bg-black/70 text-white text-xs px-2 py-1">Member Photo</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default Company;