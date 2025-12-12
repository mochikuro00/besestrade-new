import React from 'react';
import { useLanguage } from '../LanguageContext';
import { FileCheck, Lock, Scale, Building, FileText, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Compliance = () => {
  const { t } = useLanguage();

  if (!t || !t.compliance) {
    return <div className="p-20 text-center">Loading Compliance Data...</div>;
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* Header */}
      <section className="relative bg-slate-900 py-24 md:py-32 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0">
            <img src="/static/images/pen.jpg" alt="Compliance" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/60"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-4 block">Trust & Safety</span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-6">{t.compliance.page_title}</h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed px-4">
                {t.compliance.page_subtitle}
            </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12">
            
            {/* Left Column: Governance Info */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-12"
            >
                <motion.div variants={fadeIn} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center text-imperial-900">
                        <Scale size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">{t.compliance.governance_title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{t.compliance.governance_text}</p>
                    </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center text-imperial-900">
                        <Lock size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">{t.compliance.aml_title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{t.compliance.aml_text}</p>
                    </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center text-imperial-900">
                        <FileCheck size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 md:mb-3">{t.compliance.transparency_title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{t.compliance.transparency_text}</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Column: Cards */}
            <div className="space-y-6">
                <div className="bg-white p-8 border-l-4 border-imperial-900 shadow-sm">
                    <div className="flex items-center mb-6">
                        <Building className="text-imperial-900 mr-3" />
                        <h3 className="text-lg font-bold uppercase tracking-wider">{t.compliance.reg_details}</h3>
                    </div>
                    <dl className="space-y-4 text-sm">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <dt className="text-slate-500">{t.compliance.company_name}</dt>
                            <dd className="font-bold text-slate-900 text-right">BESES TRADE LIMITED<br/>百易貿易有限公司</dd>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <dt className="text-slate-500">{t.compliance.cert_no}</dt>
                            <dd className="font-bold text-slate-900 font-mono">74829234-000</dd>
                        </div>
                        <div className="pt-2">
                            <dt className="text-slate-500 mb-1">{t.compliance.reg_addr}</dt>
                            <dd className="text-slate-900">
                                Suite 3408, 34/F, Tower 1, The Gateway,<br/>
                                Harbour City, Tsim Sha Tsui, Kowloon
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="bg-imperial-900 text-white p-8 shadow-xl relative overflow-hidden">
                    <Building className="absolute -right-6 -bottom-6 w-40 h-40 text-white/5" />
                    <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">{t.compliance.bank_confidence}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                        {t.compliance.bank_confidence_text}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-gold-500 font-bold uppercase tracking-widest">
                        <ShieldCheck size={16} />
                        <span>Verified Merchant</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
