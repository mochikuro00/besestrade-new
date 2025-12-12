import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Ship, ShoppingBag, Landmark, CircuitBoard, Shirt, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  const { t } = useLanguage();

  const industries = [
    { name: t.services_page.ind1, icon: CircuitBoard },
    { name: t.services_page.ind2, icon: Shirt },
    { name: t.services_page.ind3, icon: ShoppingBag },
    { name: t.services_page.ind4, icon: Factory },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
       {/* Hero Section */}
       <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="/static/images/ship.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.services_page.hero_title}</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">{t.services_page.hero_subtitle}</p>
        </div>
      </section>

      {/* Process Workflow - Horizontal Scroll/Steps */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-imperial-900 font-bold tracking-widest uppercase text-xs">Workflow</span>
                <h2 className="text-3xl font-serif font-bold mt-2">{t.services_page.process_title}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {[t.services_page.step1, t.services_page.step2, t.services_page.step3, t.services_page.step4, t.services_page.step5, t.services_page.step6].map((step, i) => (
                    <div key={i} className="relative group">
                        <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 text-center hover:border-imperial-900 transition-colors h-full flex flex-col items-center justify-center">
                            <div className="w-8 h-8 bg-imperial-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">
                                {i + 1}
                            </div>
                            <span className="text-sm font-bold text-slate-800">{step}</span>
                        </div>
                        {i < 5 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-200 z-10"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {/* Sourcing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-gold-100 text-gold-700 flex items-center justify-center mb-6 rounded-sm">
                    <ShoppingBag size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-slate-900">{t.services_page.sourcing_title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {t.services_page.sourcing_text}
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Factory Audits</li>
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Price Negotiation</li>
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Contract Management</li>
                </ul>
            </div>
            <div className="order-1 lg:order-2 h-[300px] md:h-[400px] overflow-hidden rounded-sm shadow-xl">
                <img src="/static/images/factory.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Factory" />
            </div>
        </div>

        {/* Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[300px] md:h-[400px] overflow-hidden rounded-sm shadow-xl">
                <img src="/static/images/containers.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Logistics" />
            </div>
            <div>
                <div className="w-16 h-16 bg-blue-100 text-blue-700 flex items-center justify-center mb-6 rounded-sm">
                    <Ship size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-slate-900">{t.services_page.logistics_title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {t.services_page.logistics_text}
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Ocean Freight (FCL/LCL)</li>
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Air Cargo Solutions</li>
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Customs Clearance</li>
                </ul>
            </div>
        </div>

        {/* Finance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-imperial-100 text-imperial-900 flex items-center justify-center mb-6 rounded-sm">
                    <Landmark size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-slate-900">{t.services_page.finance_title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {t.services_page.finance_text}
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> L/C Documentation</li>
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Risk Assessment</li>
                    <li className="flex items-center text-slate-700"><CheckCircle2 size={18} className="text-green-600 mr-3" /> Currency Hedging Advice</li>
                </ul>
            </div>
            <div className="order-1 lg:order-2 h-[300px] md:h-[400px] overflow-hidden rounded-sm shadow-xl">
                <img src="/static/images/map.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Finance" />
            </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-3xl font-serif font-bold mb-12 text-center">{t.services_page.industries_title}</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {industries.map((ind, i) => (
                    <div key={i} className="bg-slate-800 p-8 text-center border border-slate-700 hover:border-gold-500 transition-colors group">
                        <ind.icon className="w-12 h-12 mx-auto mb-4 text-slate-400 group-hover:text-gold-500 transition-colors" strokeWidth={1} />
                        <h4 className="font-bold tracking-wider">{ind.name}</h4>
                    </div>
                ))}
             </div>
        </div>
      </section>
    </div>
  );
};
