import { Link } from "react-router-dom";
import { Clock, Leaf, Sparkles, ArrowRight, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const services = [
  {
    title: "Head Spa Treatment",
    description: "A deeply relaxing Japanese scalp treatment that cleanses, exfoliates, and nourishes your scalp for healthier hair growth.",
    duration: "60 min",
    price: "£65",
    icon: Sparkles,
  },
  {
    title: "Luxury Haircut",
    description: "Precision cutting tailored to your hair type and lifestyle, finished with a relaxing head massage.",
    duration: "45 min",
    price: "£45",
    icon: Leaf,
  },
  {
    title: "Organic Hair Care",
    description: "A restorative treatment using premium organic products to repair, hydrate, and revitalise your hair.",
    duration: "75 min",
    price: "£80",
    icon: Clock,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Argana London Japanese Head Spa interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl animate-fade-in">
            <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-4 font-body">
              Japanese Head Spa &amp; Hair Salon
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
              A Moment of
              <br />
              <em className="italic">Stillness</em>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-md font-body leading-relaxed">
              Premium Japanese head spa treatments and organic hair care in the heart of West Ealing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity text-center"
              >
                Book Your Treatment
              </Link>
              <Link
                to="/gift-vouchers"
                className="border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm tracking-wide rounded-sm hover:bg-primary-foreground/10 transition-colors text-center"
              >
                Gift Vouchers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Treatments</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Curated for Wellness</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-sm p-8 hover:shadow-lg transition-shadow group"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <service.icon className="text-primary mb-4" size={28} />
                <h3 className="font-heading text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{service.duration}</span>
                  <span className="font-heading text-lg text-foreground">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 text-primary text-sm tracking-wide hover:gap-3 transition-all"
            >
              Book a treatment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About/CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">The Argana Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Rooted in Japanese Tradition
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            At Argana London, we blend the art of Japanese head spa therapy with modern organic hair care. 
            Every treatment is designed to restore balance — calming your mind while nourishing your hair 
            and scalp. Using only premium, eco-conscious products, we create a sanctuary where wellness 
            meets beauty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+447886131057" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +44 7886 131057
            </a>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> 2-4 Uxbridge Road, West Ealing, W7 3PP
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
