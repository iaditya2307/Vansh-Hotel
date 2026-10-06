import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-900/80 relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            Prime Location
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Find Us on <span className="text-gold-gradient">Bharthana Road</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Conveniently situated at Vansh Plaza in Bidhuna, Auraiya with ample parking and easy connectivity to local transport routes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Contact Info Column */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-950 p-6 sm:p-8 border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Official Address
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Vansh Hotel & Royal Suites
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Vansh Plaza, Bharthana Road,<br />
                  Bidhuna, Auraiya District,<br />
                  Uttar Pradesh - 206243, India
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                    Google Plus Code
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-300">
                    {HOTEL_INFO.plusCode}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  Bidhuna Central
                </span>
              </div>

              {/* Direct Phone Numbers */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">
                  24/7 Front Desk Phone
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${HOTEL_INFO.primaryPhone}`}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-slate-200 hover:text-amber-300 font-medium text-xs flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>+91 {HOTEL_INFO.primaryPhone}</span>
                  </a>
                  <a
                    href={`tel:${HOTEL_INFO.secondaryPhone}`}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-slate-200 hover:text-amber-300 font-medium text-xs flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>+91 {HOTEL_INFO.secondaryPhone}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* External Links */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                Open Directions in Google Maps
              </a>

              <a
                href={HOTEL_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 text-slate-300 hover:text-amber-300 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verified Justdial Listing
              </a>
            </div>

          </div>

          {/* Map Embed Column */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl min-h-[380px] lg:min-h-[450px]">
            <iframe
              title="Vansh Hotel Map Location"
              src={HOTEL_INFO.embedMapUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[450px] border-0 filter grayscale-[20%] contrast-[110%] invert-[90%] hue-rotate-[180deg]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
