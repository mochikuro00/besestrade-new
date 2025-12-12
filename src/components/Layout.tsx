import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Handle scroll effect for navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/compliance', label: t.nav.compliance },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* 
        PREMIUM NAVIGATION BAR
        Designed to be sleek, avoiding the "generic bootstrap" feel.
        Uses a mix of serif/sans-serif and precise spacing.
      */}
      <nav 
        className={clsx(
          "fixed w-full z-50 transition-all duration-500 ease-in-out px-4 md:px-8 lg:px-12 py-4",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img src="/static/images/logo.jpg" alt="BESES Logo" className="w-10 h-10 object-cover rounded-sm z-10 relative shadow-md" />
              <div className="absolute top-1 left-1 w-10 h-10 border border-gold-500/50 rounded-sm -z-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
            <div className="ml-4 flex flex-col">
              <span className={clsx(
                "font-serif font-bold text-lg leading-none tracking-wider uppercase transition-colors",
                scrolled ? "text-slate-900" : "text-white"
              )}>
                BESES TRADE
              </span>
              <span className={clsx(
                "text-xs tracking-[0.3em] uppercase mt-1 transition-colors",
                scrolled ? "text-slate-500" : "text-white/70"
              )}>
                Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered & Refined */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={clsx(
                  "text-sm font-medium tracking-widest uppercase hover:text-gold-500 transition-colors relative group whitespace-nowrap",
                  scrolled ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Action Section */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Language Switcher - Minimalist */}
            <div className="relative group">
              <button className={clsx(
                "flex items-center text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors",
                scrolled ? "text-slate-800" : "text-white"
              )}>
                <Globe size={14} className="mr-2" />
                {t.nav.lang_name}
              </button>
              
              <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white shadow-xl p-2 rounded-sm border border-gray-100 min-w-[140px]">
                  {(['zh', 'en', 'ja', 'fr'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={clsx(
                        "block w-full text-left px-4 py-3 text-xs uppercase tracking-wider hover:bg-imperial-50 transition-colors",
                        language === lang ? "text-imperial-800 font-bold" : "text-slate-500"
                      )}
                    >
                      {lang === 'zh' ? '繁體中文' : lang === 'en' ? 'English' : lang === 'ja' ? '日本語' : 'Français'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className={clsx(
                "px-6 py-2.5 border text-xs font-bold uppercase tracking-widest transition-all hover:bg-gold-500 hover:border-gold-500 hover:text-white whitespace-nowrap",
                scrolled ? "border-imperial-900 text-imperial-900" : "border-white/30 text-white"
              )}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className={clsx(
                "p-2 transition-colors",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              <Menu size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu - "Curtain" Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-imperial-900 text-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-serif text-xl font-bold">BESES TRADE</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={28} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center px-8 space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-4xl font-serif font-light hover:text-gold-400 transition-colors flex items-center group"
                >
                  <span className="opacity-0 -ml-8 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold-500 mr-4">
                    <ChevronRight />
                  </span>
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif font-light text-gold-400 mt-4"
              >
                {t.nav.contact}
              </Link>
            </div>

            <div className="p-8 bg-black/20">
              <div className="grid grid-cols-2 gap-4">
                {(['zh', 'en', 'ja', 'fr'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); }}
                    className={clsx(
                      "text-sm uppercase tracking-widest py-3 border border-white/10 hover:bg-white/10 transition-colors",
                      language === lang ? "bg-white/20 font-bold border-white/30" : "text-white/60"
                    )}
                  >
                    {lang === 'zh' ? '中文' : lang === 'en' ? 'English' : lang === 'ja' ? '日本語' : 'Français'}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow relative">
        {children}
      </main>

      <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <img src="/static/images/logo.jpg" alt="BESES Logo" className="w-12 h-12 object-cover rounded-sm shadow-md" />
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                {t.about.desc_p1}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-8">{t.nav.services}</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><Link to="/services" className="hover:text-gold-400 transition-colors">{t.services.s1_title}</Link></li>
                <li><Link to="/services" className="hover:text-gold-400 transition-colors">{t.services.s2_title}</Link></li>
                <li><Link to="/services" className="hover:text-gold-400 transition-colors">{t.services.s3_title}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-8">{t.nav.contact}</h4>
              <address className="not-italic text-sm text-white/50 space-y-4">
                <p>{t.contact.office_add}</p>
                <p className="text-gold-500/80">{t.contact.appt_only}</p>
              </address>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-8">{t.compliance.page_title}</h4>
               <ul className="space-y-4 text-sm text-white/50">
                <li><span className="block text-xs text-white/30 mb-1">{t.compliance.cert_no}</span>74829234-000</li>
                <li><span className="block text-xs text-white/30 mb-1">Status</span>Live / Active</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
            <p>© {new Date().getFullYear()} BESES TRADE LIMITED (百易貿易有限公司)</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/compliance" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
              <Link to="/compliance" className="hover:text-white transition-colors">{t.footer.terms}</Link>
              <Link to="/compliance" className="hover:text-white transition-colors">{t.footer.compliance_stmt}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
