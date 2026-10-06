import React, { useState, useEffect } from 'react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { BookingDetails } from '../types/hotel';
import confetti from 'canvas-confetti';
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  Calculator,
  CheckCircle2
} from 'lucide-react';

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
    note: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialRoomId) {
      setBooking((prev) => ({ ...prev, roomId: initialRoomId }));
    }
  }, [initialRoomId]);

  const selectedRoom = ROOMS.find(r => r.id === booking.roomId) || ROOMS[0];

  const calculateNights = () => {
    if (!booking.checkIn || !booking.checkOut) return 1;
    const start = new Date(booking.checkIn).getTime();
    const end = new Date(booking.checkOut).getTime();
    const diff = Math.max(1, Math.ceil((end - start) / (1000 * 3600 * 24)));
    return isNaN(diff) ? 1 : diff;
  };

  const nights = calculateNights();
  const estimatedTotal = selectedRoom.price * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);

    const message = `*VANSH HOTEL RESERVATION ENQUIRY* 🏨
---------------------------------
🏨 *Room:* ${selectedRoom.name}
📅 *Check-In:* ${booking.checkIn}
📅 *Check-Out:* ${booking.checkOut} (${nights} Night${nights > 1 ? 's' : ''})
👥 *Guests:* ${booking.guests} Guest(s)
💰 *Estimated Tariff:* ₹${estimatedTotal.toLocaleString('en-IN')}

👤 *Guest Name:* ${booking.name || 'Not specified'}
📞 *Phone:* ${booking.phone || 'Not specified'}
📝 *Special Note:* ${booking.note || 'None'}
---------------------------------
_Sent via Vansh Hotel Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      if (onSuccess) onSuccess();
    }, 400);
  };

  return (
    <section id="book" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-clean p-6 sm:p-10 lg:p-12 shadow-md">
          
          <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs uppercase tracking-widest font-semibold">
              <MessageSquare className="w-3.5 h-3.5" />
              Direct Reservation
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Instant <span className="text-emerald-700">WhatsApp Inquiry</span>
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-normal">
              Select your dates and room preference to view the estimated tariff and send an instant booking inquiry directly to our front desk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 text-sm transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                  Contact Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 text-sm transition-colors"
                />
              </div>
            </div>

            {/* Room & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                  Select Room Type *
                </label>
                <select
                  value={booking.roomId}
                  onChange={(e) => setBooking({ ...booking, roomId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 focus:outline-none focus:border-stone-800 text-sm font-medium transition-colors"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — ₹{room.price.toLocaleString('en-IN')}/night
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                  Number of Guests *
                </label>
                <select
                  value={booking.guests}
                  onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 focus:outline-none focus:border-stone-800 text-sm font-medium transition-colors"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6+">6+ Guests (Family Suite)</option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                  Check-In Date *
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={booking.checkIn}
                  onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 focus:outline-none focus:border-stone-800 text-sm transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                  Check-Out Date *
                </label>
                <input
                  type="date"
                  required
                  min={booking.checkIn || today}
                  value={booking.checkOut}
                  onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 focus:outline-none focus:border-stone-800 text-sm transition-colors"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                Special Note or Arrival Details
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Arriving around 6 PM, need extra blanket"
                value={booking.note}
                onChange={(e) => setBooking({ ...booking, note: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 text-sm transition-colors"
              />
            </div>

            {/* Price Estimate Card */}
            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-stone-800">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 font-medium block">
                    Estimated Tariff ({nights} Night{nights > 1 ? 's' : ''})
                  </span>
                  <span className="text-sm font-bold text-stone-900">
                    {selectedRoom.name}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-stone-500 block">Total Est. Amount</span>
                <span className="font-serif-display text-2xl font-bold text-emerald-700">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base tracking-wide shadow-md transition-all flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-5 h-5" />
              Send Booking Request via WhatsApp
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};
