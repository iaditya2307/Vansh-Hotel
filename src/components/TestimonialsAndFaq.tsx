import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/hotelData';
import { Star, Quote, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-slate-950">
      
      {/* Testimonials */}
      <section id="reviews" className="py-16 lg:py-24 border-t border-amber-500/10 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
              <Quote className="w-3.5 h-3.5" />
              Guest Impressions
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Loved by <span className="text-gold-gradient">Travelers & Families</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Read authentic reviews from guests who experienced our royal suites, warm hospitality, and 24/7 service in Bidhuna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-amber-500/20 shadow-xl flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition-colors"
              >
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed italic font-light">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-white">
                      {t.name}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {t.location} • {t.roomType}
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-400/80 font-medium">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Everything You <span className="text-gold-gradient">Need to Know</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900 border-amber-500/40 shadow-lg shadow-amber-950/30'
                      : 'bg-slate-900/50 border-slate-800 hover:border-amber-500/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-cinzel text-base sm:text-lg font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
