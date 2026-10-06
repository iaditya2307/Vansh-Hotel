import React from 'react';
import { Snowflake, Zap, Clock, IndianRupee } from 'lucide-react';

const points = [
  { icon: Clock, title: '24-hour desk', text: 'Check in whenever you arrive.' },
  { icon: Snowflake, title: 'Every room is AC', text: 'Climate control, day and night.' },
  { icon: Zap, title: 'Power backup', text: 'Generator cover for the whole stay.' },
  { icon: IndianRupee, title: 'From ₹1,000', text: '₹1,000, ₹1,500, or ₹2,500 a night.' },
];

export const Welcome: React.FC = () => {
  return (
    <section id="welcome" className="bg-ivory">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <div className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.32em] uppercase text-brass">The house</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mt-4 text-ink">
            A quieter stay, in the centre of Bidhuna.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-lg text-ink/75 font-light leading-relaxed">
          <p>
            Vansh Hotel sits inside Vansh Plaza on Bharthana Road. Rooms are air-conditioned, freshly made, and looked after by a front desk that stays open through the night.
          </p>
          <p>
            Couples, families, and people passing through Auraiya book directly on WhatsApp. Tell us the dates. We confirm the room.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pb-8">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          <figure className="lg:col-span-7 relative overflow-hidden rounded-[1.6rem] min-h-[320px] lg:min-h-[520px]">
            <img
              src="/images/exterior.jpg"
              alt="Vansh Hotel facade on Bharthana Road"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>
          <figure className="lg:col-span-5 relative overflow-hidden rounded-[1.6rem] min-h-[280px] lg:min-h-[520px]">
            <img
              src="/images/lounge.jpg"
              alt="Guest lounge at Vansh Hotel"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/80 to-transparent text-white">
              <p className="text-[11px] tracking-[0.28em] uppercase text-brass-bright">Inside</p>
              <p className="font-display text-3xl mt-1">Reception & lounge</p>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pb-20 lg:pb-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line border-y border-line">
          {points.map((point) => (
            <div key={point.title} className="px-4 sm:px-6 py-8">
              <point.icon className="w-5 h-5 text-brass" strokeWidth={1.5} />
              <p className="font-display text-2xl mt-4 text-ink">{point.title}</p>
              <p className="text-sm text-ink/60 mt-1">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
