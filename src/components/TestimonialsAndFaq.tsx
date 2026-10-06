import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/hotelData';
import { Plus } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-ivory">
      <section id="reviews" className="scroll-mt-24 py-20 lg:py-28 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <p className="text-[11px] tracking-[0.32em] uppercase text-brass">Guests</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mt-4 max-w-xl">
            What people remember.
          </h2>

          <div className="mt-14 grid lg:grid-cols-3 gap-10 lg:gap-12">
            {TESTIMONIALS.map((review, index) => (
              <figure key={review.id} className={index === 0 ? 'lg:pt-0' : 'lg:pt-16'}>
                <div className="flex gap-1 text-brass text-sm tracking-widest" aria-label={`${review.rating} stars`}>
                  {'★★★★★'.slice(0, review.rating)}
                </div>
                <blockquote className="font-display italic text-2xl sm:text-[1.7rem] leading-snug mt-5 text-ink">
                  “{review.comment}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink/60">
                  <span className="text-ink">{review.name}</span>
                  <span> · {review.location}</span>
                  <span className="block mt-1 text-xs tracking-[0.14em] uppercase">
                    {review.roomType} · {review.date}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-8 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.32em] uppercase text-brass">Questions</p>
            <h2 className="font-display text-5xl leading-[0.95] mt-4">Before you travel.</h2>
          </div>
          <div className="lg:col-span-8 border-t border-ink/15">
            {FAQS.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.q} className="border-b border-ink/15">
                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="w-full py-6 flex items-start justify-between gap-6 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display text-2xl sm:text-3xl">{faq.q}</span>
                    <Plus
                      className={`w-5 h-5 mt-2 shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <p className="overflow-hidden max-w-2xl text-ink/70 leading-relaxed">
                      <span className={`block ${open ? 'pb-6' : ''}`}>{faq.a}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
