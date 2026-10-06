import React from 'react';
import { AMENITIES } from '../data/hotelData';
import {
  Crown,
  Snowflake,
  Clock,
  Zap,
  Wifi,
  ShieldCheck,
  Sparkles,
  Car,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Crown,
  Snowflake,
  Clock,
  Zap,
  Wifi,
  ShieldCheck,
  Sparkles,
  Car,
};

export const AmenitiesGrid: React.FC = () => {
  return (
    <section id="amenities" className="scroll-mt-24 bg-ink text-ivory py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] tracking-[0.32em] uppercase text-brass-bright">Amenities</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mt-4">
            The practical things, done properly.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-[1.5rem] overflow-hidden border border-white/10">
          {AMENITIES.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div key={item.title} className="bg-ink p-7 sm:p-8 min-h-[220px] flex flex-col justify-between">
                <Icon className="w-6 h-6 text-brass-bright" strokeWidth={1.4} />
                <div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-ivory/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
