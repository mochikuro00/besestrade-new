import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Target, Users, Landmark, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src="/static/images/hk_night.jpg" 
          alt="Hong Kong Office" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
                <div className="inline-block px-4 py-1 border border-gold-500 text-gold-500 text-sm font-bold tracking-widest uppercase mb-6 bg-black/40 backdrop-blur-sm">
                  About BESES TRADE
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight break-words">
                    {t.about_page.hero_title}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl">
                    {t.about_page.hero_subtitle}
                </p>
            </motion.div>
        </div>
      </section>

      {/* Corporate Narrative - Magazine Style */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                <div className="md:col-span-5">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 border-l-4 border-imperial-900 pl-6">
                        {t.about_page.history_title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        {t.about_page.history_text}
                    </p>
                    <div className="bg-slate-50 p-8 border border-slate-100">
                        <h3 className="font-bold text-imperial-900 uppercase tracking-widest text-sm mb-4">
                            {t.about_page.advantage_title}
                        </h3>
                        <ul className="space-y-3">
                            {t.about_page.advantage_list.map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700">
                                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-7 space-y-8 md:space-y-12">
                     <div className="flex gap-6 items-start">
                        <div className="w-16 h-16 bg-imperial-50 flex items-center justify-center flex-shrink-0 text-imperial-900 rounded-sm">
                            <Target size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.about_page.mission_title}</h3>
                            <p className="text-slate-600 leading-relaxed">{t.about_page.mission_text}</p>
                        </div>
                     </div>
                     
                     <div className="flex gap-6 items-start">
                        <div className="w-16 h-16 bg-imperial-50 flex items-center justify-center flex-shrink-0 text-imperial-900 rounded-sm">
                            <Award size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.about_page.vision_title}</h3>
                            <p className="text-slate-600 leading-relaxed">{t.about_page.vision_text}</p>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start">
                        <div className="w-16 h-16 bg-imperial-50 flex items-center justify-center flex-shrink-0 text-imperial-900 rounded-sm">
                            <Users size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.about_page.team_title}</h3>
                            <p className="text-slate-600 leading-relaxed">{t.about_page.team_text}</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-96 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/static/images/skyscraper.jpg')" }}>
        <div className="absolute inset-0 bg-imperial-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
                <Landmark className="w-16 h-16 text-gold-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                    Registered & Compliant in Hong Kong
                </h2>
                <div className="inline-block px-8 py-3 border border-white/30 text-white font-mono text-lg">
                    CR No. 74829234-000
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
