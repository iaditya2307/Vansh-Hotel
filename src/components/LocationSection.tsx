import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, ExternalLink, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs uppercase tracking-widest font-semibold border border-stone-200">
            <MapPin className="w-3.5 h-3.5 text-stone-700" />
            Hotel Location
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            How to Reach <span className="text-amber-800">Vansh Hotel</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Located conveniently on Bharthana Road in Bidhuna, Auraiya district. Easy access for car parking and local conveyance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Phone Details */}
          <div className="lg:col-span-5 card-clean p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">
                  Hotel Address
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-stone-900">
                  Vansh Hotel
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  Vansh Plaza, Bharthana Road,<br />
                  Bidhuna, Auraiya District,<br />
                  Uttar Pradesh - 206243
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-medium">
                    Google Plus Code
                  </span>
                  <span className="font-mono text-sm font-bold text-stone-900">
                    {HOTEL_INFO.plusCode}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 text-xs font-semibold">
                  Bidhuna Center
                </span>
              </div>

              {/* Direct Phone Numbers */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                  Front Desk Contact
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${HOTEL_INFO.primaryPhone}`}
                    className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-900 font-semibold text-xs flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>+91 {HOTEL_INFO.primaryPhone}</span>
                  </a>
                  <a
                    href={`tel:${HOTEL_INFO.secondaryPhone}`}
                    className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-900 font-semibold text-xs flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>+91 {HOTEL_INFO.secondaryPhone}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* External Action Links */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-white" />
                Open Directions in Google Maps
              </a>

              <a
                href={HOTEL_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                View Justdial Page
              </a>
            </div>

          </div>

          {/* Map Embed Column */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-200 shadow-sm min-h-[380px]">
            <iframe
              title="Vansh Hotel Map Location"
              src={HOTEL_INFO.embedMapUrl}
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
