import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/hotelData';
import { Star, Quote, ChevronDown, HelpCircle } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#faf8f5]">
      
      {/* Testimonials */}
      <section id="reviews" className="py-16 lg:py-24 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs uppercase tracking-widest font-semibold">
              <Quote className="w-3.5 h-3.5" />
              Guest Reviews
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              What Guest Say <span className="text-amber-800">About Us</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal">
              Real feedback from travelers, medical representatives, and families who stayed at Vansh Hotel in Bidhuna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="card-clean p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed italic font-normal">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-display text-sm font-bold text-stone-900">
                      {t.name}
                    </h4>
                    <span className="text-xs text-stone-500">
                      {t.location} • {t.roomType}
                    </span>
                  </div>
                  <span className="text-xs text-stone-400">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-800 text-xs uppercase tracking-widest font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-stone-700" />
              Frequently Asked Questions
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Got <span className="text-amber-800">Questions?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-colors overflow-hidden ${
                    isOpen
                      ? 'bg-white border-stone-300 shadow-sm'
                      : 'bg-white/70 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-serif-display text-base sm:text-lg font-bold text-stone-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4 font-normal">
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
