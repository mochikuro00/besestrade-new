import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Send, CheckCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
        setStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="h-[30vh] md:h-[40vh] relative overflow-hidden">
        <img src="/static/images/hk_night.jpg" alt="Hong Kong Skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.contact.title}</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 md:-mt-20 relative z-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            
            {/* Contact Info - Sidebar Style */}
            <div className="lg:col-span-4 space-y-8 md:space-y-12 bg-white p-6 md:p-8 shadow-xl border-t-4 border-imperial-900">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h2>
                    <p className="text-slate-500 leading-relaxed">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-imperial-900 uppercase mb-6 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {t.contact.office_label}
                    </h3>
                    <address className="not-italic text-slate-600 leading-loose">
                        BESES TRADE LIMITED<br/>
                        {t.contact.office_add}
                    </address>
                </div>

                <div className="border-t border-gray-100 pt-8">
                     <h3 className="text-xs font-bold tracking-[0.2em] text-imperial-900 uppercase mb-6 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Business Hours
                    </h3>
                    <p className="text-slate-600">
                        Mon - Fri: 09:00 - 18:00 (HKT)<br/>
                        <span className="text-imperial-600 italic text-sm mt-2 block">{t.contact.appt_only}</span>
                    </p>
                </div>
            </div>

            {/* Secure Form - Minimalist */}
            <div className="lg:col-span-8">
                <div className="bg-slate-50 p-6 md:p-12 border border-slate-100">
                    {status === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <CheckCircle className="w-16 h-16 text-imperial-900 mx-auto mb-6" />
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{t.contact.form.success_title}</h3>
                            <p className="text-slate-500 max-w-md mx-auto mb-8">{t.contact.form.success_msg}</p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="text-imperial-900 font-bold hover:text-imperial-700 underline"
                            >
                                {t.contact.form.send_another}
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.form.name}</label>
                                    <input type="text" required className="w-full bg-white border-b border-gray-200 py-3 px-0 focus:border-imperial-900 outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.form.company}</label>
                                    <input type="text" required className="w-full bg-white border-b border-gray-200 py-3 px-0 focus:border-imperial-900 outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.form.email}</label>
                                <input type="email" required className="w-full bg-white border-b border-gray-200 py-3 px-0 focus:border-imperial-900 outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.form.message}</label>
                                <textarea rows={6} required className="w-full bg-white border-b border-gray-200 py-3 px-0 focus:border-imperial-900 outline-none transition-colors resize-none"></textarea>
                            </div>
                            
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className="w-full md:w-auto px-10 py-4 bg-imperial-900 text-white font-bold tracking-widest hover:bg-slate-900 transition-colors disabled:opacity-70 flex items-center justify-center"
                                >
                                    {status === 'submitting' ? t.contact.form.sending : t.contact.form.submit}
                                    {!status && <Send size={16} className="ml-3" />}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
