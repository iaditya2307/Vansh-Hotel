import React, { useState, useEffect } from 'react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { BookingDetails } from '../types/hotel';
import confetti from 'canvas-confetti';
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  Crown, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles,
  Calculator
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

  // Calculate nights and estimated total
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

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#10b981', '#ffffff']
      });
    } catch (err) {
      // fallback
    }

    setSubmitted(true);

    // Format WhatsApp message
    const message = `*VANSH HOTEL STAY ENQUIRY* 🏨
---------------------------------
👑 *Room:* ${selectedRoom.name}
📅 *Check-In:* ${booking.checkIn}
📅 *Check-Out:* ${booking.checkOut} (${nights} Night${nights > 1 ? 's' : ''})
👥 *Guests:* ${booking.guests} Guest(s)
💰 *Est. Total:* ₹${estimatedTotal.toLocaleString('en-IN')}

👤 *Name:* ${booking.name || 'Not specified'}
📞 *Phone:* ${booking.phone || 'Not specified'}
📝 *Special Note:* ${booking.note || 'None'}
---------------------------------
_Sent via Vansh Hotel Royal Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsappPhone}?text=${encodedMessage}`;

    // Open WhatsApp in new tab after slight delay for visual feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <section id="book" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-500/10 via-yellow-600/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-amber-950/40 backdrop-blur-xl">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-amber-500/40 text-amber-400 text-xs uppercase tracking-widest font-semibold">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              Instant Reservation
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Send a Direct <span className="text-gold-gradient">WhatsApp Enquiry</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-light">
              Fill in your details below to generate an instant reservation quote. WhatsApp will automatically open with your pre-filled inquiry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Top Row: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm transition-colors"
                />
              </div>
            </div>

            {/* Middle Row: Room & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                  Select Room Type *
                </label>
                <select
                  value={booking.roomId}
                  onChange={(e) => setBooking({ ...booking, roomId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-amber-300 focus:outline-none focus:border-amber-400 text-sm font-medium transition-colors"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — ₹{room.price.toLocaleString('en-IN')}/night
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                  Number of Guests *
                </label>
                <select
                  value={booking.guests}
                  onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-sm font-medium transition-colors"
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

            {/* Bottom Row: Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                  Check-In Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={today}
                    value={booking.checkIn}
                    onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                  Check-Out Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={booking.checkIn || today}
                    value={booking.checkOut}
                    onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-sm transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                Special Requests or Arrival Time
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Expected arrival at 7:00 PM, extra pillows requested"
                value={booking.note}
                onChange={(e) => setBooking({ ...booking, note: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm transition-colors"
              />
            </div>

            {/* Estimated Total Calculation Widget */}
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                    Estimate Breakdown
                  </span>
                  <span className="text-sm text-slate-200">
                    {selectedRoom.name} × {nights} Night{nights > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Est. Total Tariff</span>
                <span className="font-cinzel text-2xl font-bold text-gold-gradient">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              Send Booking Request via WhatsApp
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};
