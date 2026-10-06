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
  Car 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Crown,
  Snowflake,
  Clock,
  Zap,
  Wifi,
  ShieldCheck,
  Sparkles,
  Car
};

export const AmenitiesGrid: React.FC = () => {
  return (
    <section id="amenities" className="py-16 lg:py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <Crown className="w-3.5 h-3.5" />
            World Class Facilities
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Designed for <span className="text-gold-gradient">Royal Comfort</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            We deliver uncompromised luxury and round-the-clock service to ensure your stay in Bidhuna is memorable and relaxing.
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-amber-500/20 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-950/30 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-medium text-amber-400">
                  <Sparkles className="w-3 h-3" />
                  <span>24/7 Included</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
