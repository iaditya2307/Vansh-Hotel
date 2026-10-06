import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';

const facts = [
  {
    label: 'In Bidhuna',
    title: 'Bharthana Road',
    text: 'Vansh Plaza, plus code RG32+5C7, Auraiya, Uttar Pradesh 206243.',
  },
  {
    label: 'The temple',
    title: 'About 1 km',
    text: 'A short drive from Bidhuna Durga Mandir, plus code QGX5+XF5.',
  },
  {
    label: 'The rates',
    title: '₹1,000–₹2,500',
    text: 'Every room is air-conditioned. ₹1,500 and ₹2,500 include an attached bathroom.',
  },
];

export const LocalStay: React.FC = () => {
  return (
    <section id="bidhuna" className="bg-paper border-t border-line py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <p className="text-[11px] tracking-[0.32em] uppercase text-brass">Bidhuna</p>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mt-4 items-end">
          <h2 className="lg:col-span-7 font-display text-5xl sm:text-6xl leading-[0.95] text-ink">
            Best hotel in Bidhuna, near Durga Mandir.
          </h2>
          <div className="lg:col-span-5 space-y-4 text-lg text-ink/75 font-light leading-relaxed">
            <p>
              Vansh Hotel is the stay on Bharthana Road for guests coming into Bidhuna and Auraiya. Families, couples, and people travelling for the temple book an air-conditioned room here, with a front desk that stays open all night.
            </p>
            <p lang="hi">
              बिधूना में होटल, या दुर्गा मंदिर के पास ठहरने की जगह ढूँढ रहे हैं? वंश होटल भरथना रोड पर वंश प्लाजा में है। हर कमरा एसी है। किराया ₹1,000, ₹1,500 और ₹2,500 प्रति रात। रिसेप्शन दिन-रात खुला रहता है।
            </p>
          </div>
        </div>

        <dl className="mt-14 grid md:grid-cols-3 border border-line bg-line gap-px">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-paper px-6 py-8">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-brass">{fact.label}</dt>
              <dd className="mt-3">
                <p className="font-display text-4xl text-ink">{fact.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{fact.text}</p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={HOTEL_INFO.googleTravelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-brass/60 underline-offset-4 hover:text-brass"
          >
            Google hotel listing
          </a>
          <a
            href={HOTEL_INFO.justdialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-brass/60 underline-offset-4 hover:text-brass"
          >
            Justdial listing
          </a>
          <a href="#rooms" className="text-ink underline decoration-brass/60 underline-offset-4 hover:text-brass">
            AC rooms in Bidhuna
          </a>
        </div>
      </div>
    </section>
  );
};
