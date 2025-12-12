import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, Anchor, Globe, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Ensure video plays correctly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down slightly for majesty
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="overflow-x-hidden">
      {/* 
        HERO SECTION - REDESIGNED
        Split layout with overlapping glass card.
        Video background plays fully.
      */}
      <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-slate-900">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
            <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-70"
            >
                <source src="/static/videos/hero.mp4" type="video/mp4" />
            </video>
            {/* Texture Overlay to de-digitalize */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-imperial-900/90 via-imperial-900/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 lg:px-12 flex items-center">
            <div className="max-w-4xl pt-20">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="border-l-4 border-gold-500 pl-6 md:pl-10 py-2"
                >
                    <h2 className="text-gold-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                        {t.hero.tagline}
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 md:mb-8 break-words">
                        {t.hero.title_line1} <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                            {t.hero.title_line2}
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light mb-8 md:mb-12">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <Link to="/services" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-imperial-900 font-bold tracking-widest hover:bg-gold-50 transition-colors min-w-[200px]">
                                {t.hero.cta_primary}
                            </button>
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border border-white/30 text-white font-bold tracking-widest hover:bg-white/10 transition-colors min-w-[200px] flex items-center justify-center group">
                                {t.hero.cta_secondary}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
            <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* 
        INTRODUCTION - MAGAZINE STYLE LAYOUT
        Asymmetrical whitespace, large typography.
      */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative Background Image - Subtle */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 clip-diagonal-reverse z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5 relative order-2 lg:order-1">
                    <div className="relative">
                        <img 
                            src="/static/images/skyscraper.jpg" 
                            alt="Hong Kong Architecture" 
                            className="w-full h-[300px] md:h-[600px] object-cover shadow-2xl rounded-sm"
                        />
                        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-white p-2 shadow-xl hidden md:block">
                             <img 
                                src="/static/images/handshake.jpg" 
                                alt="Meeting" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="lg:col-span-7 pt-0 lg:pt-12 lg:pl-12 order-1 lg:order-2">
                    <span className="block text-imperial-900 font-bold tracking-widest text-xs uppercase mb-4 border-b border-imperial-900/20 pb-4 inline-block">
                        {t.about.label}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6 md:mb-8">
                        {t.about.title}
                    </h3>
                    <p className="text-xl text-slate-800 font-serif leading-relaxed mb-8 border-l-4 border-gold-500 pl-6">
                        {t.about.desc_p1}
                    </p>
                    <div className="text-slate-500 leading-relaxed text-base space-y-6">
                        <p>{t.about.desc_p2}</p>
                        <p>
                            We navigate the complexities of global trade with the precision of a financial institution and the agility of a logistics expert. Our partners rely on us not just for goods, but for the assurance that every container, every document, and every transaction is compliant and secure.
                        </p>
                        <div className="pt-8">
                            <Link to="/about" className="inline-flex items-center text-imperial-900 font-bold hover:text-imperial-700 transition-colors group border border-imperial-900 px-8 py-3 hover:bg-imperial-900 hover:text-white">
                                {t.about.learn_more}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 
        SERVICES - VISUAL CARDS
      */}
      <section className="py-20 md:py-32 bg-slate-900 border-y border-slate-800 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.genspark.ai/api/files/s/WC1SIx8n?cache_control=3600')] bg-cover bg-center bg-fixed"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="mb-20 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-4">{t.services.label}</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-white">{t.services.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                    { title: t.services.s1_title, desc: t.services.s1_desc, icon: Globe, img: "/static/images/factory.jpg" },
                    { title: t.services.s2_title, desc: t.services.s2_desc, icon: Anchor, img: "/static/images/ship.jpg" },
                    { title: t.services.s3_title, desc: t.services.s3_desc, icon: ShieldCheck, img: "/static/images/pen.jpg" }
                ].map((service, idx) => (
                    <Link to="/services" key={idx} className="block">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="group relative bg-slate-800 overflow-hidden shadow-2xl border border-slate-700 h-[400px] md:h-[500px] flex flex-col justify-end"
                        >
                            <div className="absolute inset-0">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                            </div>
                            
                            <div className="relative z-10 p-8">
                                <service.icon className="w-12 h-12 text-gold-500 mb-6" strokeWidth={1} />
                                <h4 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h4>
                                <p className="text-slate-300 leading-relaxed mb-6">{service.desc}</p>
                                <span className="text-xs font-bold uppercase tracking-widest text-gold-500 group-hover:text-white transition-colors flex items-center">
                                    View Details <ArrowRight className="ml-2 w-3 h-3" />
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 
        STATS - IMAGE BACKDROP
      */}
      <section className="relative py-24 bg-imperial-900 text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('/static/images/map.jpg')] bg-cover bg-center opacity-10 grayscale mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                {[
                   { val: "25+", label: t.stats.partners },
                   { val: "150M", label: t.stats.volume },
                   { val: "100%", label: t.stats.compliance },
                ].map((stat, idx) => (
                    <div key={idx} className="pt-8 md:pt-0 px-4">
                        <div className="text-5xl md:text-6xl font-serif font-bold text-gold-400 mb-2">{stat.val}</div>
                        <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 
        CTA SECTION - ELEGANT
      */}
      <section className="py-20 md:py-32 bg-white flex items-center justify-center text-center">
        <div className="max-w-2xl px-6">
            <TrendingUp className="w-12 h-12 text-imperial-900 mx-auto mb-8" strokeWidth={1} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
                {t.contact.title}
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
                {t.contact.subtitle}
            </p>
            <Link to="/contact">
                <button className="px-12 py-4 bg-imperial-900 text-white font-bold tracking-widest hover:bg-slate-900 transition-colors">
                    {t.hero.cta_secondary}
                </button>
            </Link>
        </div>
      </section>
    </div>
  );
};
