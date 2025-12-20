import Layout from '@/components/layout/Layout';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Confirmed!",
      description: `Table for ${formData.guests} on ${formData.date} at ${formData.time}. We look forward to seeing you!`,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM',
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
            Book Your Table
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Make a Reservation
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience at Zesté.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl animate-fade-up opacity-0">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Details */}
                <div>
                  <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-gold" />
                    Personal Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Reservation Details */}
                <div>
                  <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    Reservation Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="10+">10+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                    placeholder="Any dietary requirements, celebrations, or special requests..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn-primary text-lg px-12 py-4">
                    Confirm Reservation
                  </button>
                  <p className="text-muted-foreground text-sm mt-4">
                    You will receive a confirmation email shortly after booking.
                  </p>
                </div>
              </form>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-cream rounded-2xl p-6 text-center animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
                <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-display font-semibold mb-1">Call Us</h4>
                <p className="text-muted-foreground text-sm">+92 300 1234567</p>
              </div>
              <div className="bg-cream rounded-2xl p-6 text-center animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
                <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-display font-semibold mb-1">Opening Hours</h4>
                <p className="text-muted-foreground text-sm">12 PM - 12 AM</p>
              </div>
              <div className="bg-cream rounded-2xl p-6 text-center animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
                <Users className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-display font-semibold mb-1">Large Groups</h4>
                <p className="text-muted-foreground text-sm">Contact for 10+ guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
