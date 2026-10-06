import React from 'react';
import { HOTEL_INFO, whatsappLink } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-16 pb-28 sm:pb-16">
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-white/10 p-2.5">
                <img src="/logo-white.png" alt="Vansh Hotel" className="w-full h-full object-contain" />
              </span>
              <span>
                <span className="font-display text-3xl block leading-none">Vansh Hotel</span>
                <span className="text-[11px] tracking-[0.28em] uppercase text-brass-bright">
                  Bidhuna · Auraiya
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-ivory/65 leading-relaxed">
              Air-conditioned hotel in Bidhuna, about 1 km from Durga Mandir. 24-hour front desk on Bharthana Road.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-[0.24em] uppercase text-brass-bright">Explore</p>
            <ul className="mt-4 space-y-2 text-ivory/80">
              <li><a className="hover:text-white" href="#rooms">Rooms</a></li>
              <li><a className="hover:text-white" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-white" href="#amenities">Amenities</a></li>
              <li><a className="hover:text-white" href="#book">Reserve</a></li>
              <li><a className="hover:text-white" href="#faq">Questions</a></li>
              <li><a className="hover:text-white" href="#bidhuna">Near Durga Mandir</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.24em] uppercase text-brass-bright">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a className="hover:text-brass-bright" href={`tel:+91${HOTEL_INFO.primaryPhone}`}>
                  Mobile {HOTEL_INFO.mobileDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-brass-bright" href={`tel:${HOTEL_INFO.landline}`}>
                  Landline {HOTEL_INFO.landlineDisplay}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-brass-bright"
                  href={whatsappLink('Hello, I would like to enquire about a room at Vansh Hotel.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {HOTEL_INFO.whatsappDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-brass-bright" href={`mailto:${HOTEL_INFO.email}`}>
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="text-ivory/55 pt-2 text-sm">{HOTEL_INFO.address}</li>
              <li className="pt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm normal-case tracking-normal">
                <a className="hover:text-brass-bright" href={HOTEL_INFO.googleTravelUrl} target="_blank" rel="noopener noreferrer">
                  Google listing
                </a>
                <a className="hover:text-brass-bright" href={HOTEL_INFO.justdialUrl} target="_blank" rel="noopener noreferrer">
                  Justdial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs tracking-[0.14em] uppercase text-ivory/45">
          <p>© {new Date().getFullYear()} Vansh Hotel, Bidhuna</p>
          <a href="#top" className="hover:text-ivory">Back to top</a>
        </div>
      </div>
    </footer>
  );
};
