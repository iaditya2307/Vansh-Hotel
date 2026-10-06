import React, { useEffect, useState } from 'react';
import { ROOMS, HOTEL_INFO, whatsappLink } from '../data/hotelData';
import { BookingDetails } from '../types/hotel';
import confetti from 'canvas-confetti';

interface QuickBookingFormProps {
  initialRoomId?: string;
  onSuccess?: () => void;
}

export const QuickBookingForm: React.FC<QuickBookingFormProps> = ({ initialRoomId, onSuccess }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [booking, setBooking] = useState<BookingDetails>({
    name: '',
    phone: '',
    checkIn: today,
    checkOut: tomorrow,
    guests: '2',
    roomId: initialRoomId || 'presidential-gold',
    note: '',
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (initialRoomId) {
      setBooking((prev) => ({ ...prev, roomId: initialRoomId }));
    }
  }, [initialRoomId]);

  const selectedRoom = ROOMS.find((room) => room.id === booking.roomId) || ROOMS[0];

  const nights = (() => {
    if (!booking.checkIn || !booking.checkOut) return 1;
    const diff = Math.ceil(
      (new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) / 86400000
    );
    return Number.isFinite(diff) && diff > 0 ? diff : 1;
  })();

  const estimatedTotal = selectedRoom.price * nights;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#c6a36a', '#f4efe7', '#8a6232', '#0f6b4c'],
      });
    } catch {
      /* confetti is decorative */
    }

    const message = `Hello, I would like to reserve a room at Vansh Hotel.

Room: ${selectedRoom.name}
Check-in: ${booking.checkIn}
Check-out: ${booking.checkOut} (${nights} night${nights > 1 ? 's' : ''})
Guests: ${booking.guests}
Estimated tariff: ₹${estimatedTotal.toLocaleString('en-IN')}

Name: ${booking.name}
Phone: ${booking.phone}
Note: ${booking.note || 'None'}`;

    window.setTimeout(() => {
      window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
      setSending(false);
      onSuccess?.();
    }, 350);
  };

  const fieldClass =
    'w-full bg-transparent border-b border-line py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:border-brass transition-colors';

  return (
    <section id="book" className="scroll-mt-24 bg-paper py-20 lg:py-28 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-5 relative overflow-hidden rounded-[1.6rem] min-h-[420px] bg-ink text-ivory">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.name}
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
          <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              <p className="text-[11px] tracking-[0.32em] uppercase text-brass-bright">Reserve</p>
              <h2 className="font-display text-5xl leading-[0.95] mt-4">
                Send the dates. We reply on WhatsApp.
              </h2>
            </div>
            <div>
              <p className="text-sm text-ivory/70">{selectedRoom.name}</p>
              <p className="font-display text-5xl mt-1">
                ₹{estimatedTotal.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-ivory/60 mt-1">
                {nights} night{nights > 1 ? 's' : ''} · estimate only
              </p>
              <p className="mt-6 text-sm text-ivory/80">
                Chat opens with {HOTEL_INFO.whatsappDisplay}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col justify-center gap-6">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            <label className="block">
              <span className="text-[11px] tracking-[0.2em] uppercase text-brass">Name</span>
              <input
                required
                type="text"
                placeholder="Your name"
                value={booking.name}
                onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.2em] uppercase text-brass">Mobile</span>
              <input
                required
                type="tel"
                placeholder="10-digit number"
                value={booking.phone}
                onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[11px] tracking-[0.2em] uppercase text-brass">Room</span>
              <select
                value={booking.roomId}
                onChange={(e) => setBooking({ ...booking, roomId: e.target.value })}
                className={`${fieldClass} bg-paper`}
              >
                {ROOMS.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — ₹{room.price.toLocaleString('en-IN')}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.2em] uppercase text-brass">Check in</span>
              <input
                required
                type="date"
                min={today}
                value={booking.checkIn}
                onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.2em] uppercase text-brass">Check out</span>
              <input
                required
                type="date"
                min={booking.checkIn || today}
                value={booking.checkOut}
                onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.2em] uppercase text-brass">Guests</span>
              <select
                value={booking.guests}
                onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                className={`${fieldClass} bg-paper`}
              >
                {['1', '2', '3', '4', '5', '6+'].map((count) => (
                  <option key={count} value={count}>
                    {count} {count === '1' ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.2em] uppercase text-brass">Note</span>
              <input
                type="text"
                placeholder="Arrival time, extra bedding…"
                value={booking.note}
                onChange={(e) => setBooking({ ...booking, note: e.target.value })}
                className={fieldClass}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 self-start px-8 py-4 rounded-full bg-moss text-white tracking-[0.14em] uppercase text-sm hover:bg-ink transition-colors"
          >
            {sending ? 'Opening WhatsApp…' : 'Send on WhatsApp'}
          </button>
        </form>
      </div>
    </section>
  );
};
