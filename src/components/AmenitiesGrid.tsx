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
  CheckCircle
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
    <section id="amenities" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-800 text-xs uppercase tracking-widest font-semibold">
            <CheckCircle className="w-3.5 h-3.5 text-stone-700" />
            Guest Comforts
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Hotel Facilities & <span className="text-amber-800">Amenities</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Everything you need for a comfortable stay in Bidhuna, whether traveling for business, family events, or leisure.
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="card-clean p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-display text-lg font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
