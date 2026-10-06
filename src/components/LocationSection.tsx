import React from 'react';
import { HOTEL_INFO, whatsappLink } from '../data/hotelData';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const contacts = [
  {
    label: 'Mobile',
    value: HOTEL_INFO.mobileDisplay,
    href: `tel:+91${HOTEL_INFO.primaryPhone}`,
    icon: Phone,
  },
  {
    label: 'Landline',
    value: HOTEL_INFO.landlineDisplay,
    href: `tel:${HOTEL_INFO.landline}`,
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: HOTEL_INFO.whatsappDisplay,
    href: whatsappLink('Hello, I would like to enquire about a room at Vansh Hotel.'),
    icon: MessageCircle,
  },
  {
    label: 'Email',
    value: HOTEL_INFO.email,
    href: `mailto:${HOTEL_INFO.email}`,
    icon: Mail,
  },
];

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="scroll-mt-24 bg-paper py-20 lg:py-28 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 flex flex-col">
          <p className="text-[11px] tracking-[0.32em] uppercase text-brass">Visit</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mt-4">
            Vansh Plaza, Bharthana Road.
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed flex gap-2">
            <MapPin className="w-4 h-4 mt-1 shrink-0 text-brass" />
            <address className="not-italic">
              {HOTEL_INFO.address}
              <span className="block text-sm mt-1 text-ink/50">Plus code {HOTEL_INFO.plusCode}</span>
              <span className="block text-sm mt-2 text-ink/60">
                About 1 km from Bidhuna Durga Mandir.
              </span>
            </address>
          </p>

          <div className="mt-8 divide-y divide-line border-y border-line">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'WhatsApp' ? '_blank' : undefined}
                rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 py-4"
              >
                <span className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-brass" strokeWidth={1.6} />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-ink/50 w-20">
                    {item.label}
                  </span>
                </span>
                <span className="font-display text-xl sm:text-2xl group-hover:text-brass transition-colors text-right">
                  {item.value}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-ink text-ivory text-sm tracking-[0.14em] uppercase hover:bg-brass transition-colors"
            >
              Open in Google Maps
            </a>
            <a
              href={HOTEL_INFO.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-line text-sm tracking-[0.14em] uppercase hover:border-ink transition-colors"
            >
              Justdial
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-[1.6rem] overflow-hidden min-h-[420px] border border-line">
          <iframe
            title="Map showing Vansh Hotel on Bharthana Road, Bidhuna"
            src={HOTEL_INFO.embedMapUrl}
            className="w-full h-full min-h-[420px] border-0 grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
