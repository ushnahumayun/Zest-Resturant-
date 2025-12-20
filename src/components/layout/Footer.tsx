import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">Zesté</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Experience culinary excellence with our fusion of international flavors, 
              crafted with passion and served with elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About', 'Contact', 'Reservation'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Gourmet Street, Gulberg III, Lahore
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-gold" />
                <span className="text-primary-foreground/80 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-gold" />
                <span className="text-primary-foreground/80 text-sm">info@zeste.pk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0 text-gold" />
                <div className="text-sm">
                  <p className="text-primary-foreground">Mon - Thu</p>
                  <p className="text-primary-foreground/80">12:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0 text-gold" />
                <div className="text-sm">
                  <p className="text-primary-foreground">Fri - Sun</p>
                  <p className="text-primary-foreground/80">12:00 PM - 12:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © 2025 Zesté. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
