import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Book Now", path: "/book" },
  { label: "Gift Vouchers", path: "/gift-vouchers" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex flex-col">
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-wide text-foreground">
            Argana London
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Japanese Head Spa
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-wide transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-heading ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+447886131057" className="flex items-center gap-2">
                <Phone size={14} /> +44 7886 131057
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> 2-4 Uxbridge Road, West Ealing, London W7 3PP
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
