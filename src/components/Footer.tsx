import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-xl mb-3">Argana London</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              A sanctuary of Japanese-inspired wellness in the heart of West Ealing. 
              Premium head spa treatments and organic hair care.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-80">
              <Link to="/book" className="hover:opacity-100 transition-opacity">Book Appointment</Link>
              <Link to="/gift-vouchers" className="hover:opacity-100 transition-opacity">Gift Vouchers</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href="tel:+447886131057" className="flex items-center gap-2 hover:opacity-100">
                <Phone size={14} /> +44 7886 131057
              </a>
              <a href="mailto:hello@argana.london" className="flex items-center gap-2 hover:opacity-100">
                <Mail size={14} /> hello@argana.london
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> 2-4 Uxbridge Road, West Ealing, London W7 3PP
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Argana London. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
