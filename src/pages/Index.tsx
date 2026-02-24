import { Link } from "react-router-dom";
import { Clock, Leaf, Sparkles, ArrowRight, Phone, MapPin, Star, Heart, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import productsImage from "@/assets/organic-products.jpg";

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
    icon: Droplets,
  },
];

const testimonials = [
  {
    name: "Sophie L.",
    text: "The most relaxing experience I've ever had. My scalp felt incredible and my hair has never been healthier. Truly a hidden gem in West Ealing.",
    rating: 5,
  },
  {
    name: "Yuki M.",
    text: "Reminds me of the head spas back home in Tokyo. The attention to detail and quality of products is outstanding. I come here every month now.",
    rating: 5,
  },
  {
    name: "Charlotte W.",
    text: "I bought a gift voucher for my mum's birthday and she absolutely loved it. The whole experience was premium from start to finish.",
    rating: 5,
  },
];

const values = [
  { icon: Leaf, title: "Eco-Conscious", description: "We use only sustainably sourced, organic products that are kind to your hair and the planet." },
  { icon: Heart, title: "Holistic Wellness", description: "Every treatment is designed to calm the mind while nourishing the scalp and hair." },
  { icon: Star, title: "Japanese Craft", description: "Rooted in centuries of Japanese grooming tradition, refined for the modern Londoner." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Argana London Japanese Head Spa — serene zen interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/45" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl animate-fade-in">
            <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-4 font-body">
              West Ealing, London
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
              A Moment of
              <br />
              <em className="italic">Stillness</em>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-md font-body leading-relaxed">
              Japanese head spa treatments &amp; organic hair care — a sanctuary for your mind, scalp, and hair.
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

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-primary-foreground/30 mx-auto mb-2" />
          <p className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase">Scroll</p>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Philosophy</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-snug">
            Where Japanese Tradition <br className="hidden md:block" />
            Meets Modern Wellness
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            At Argana London, we believe beautiful hair starts with a healthy scalp. Drawing from 
            centuries of Japanese grooming rituals, our treatments combine expert technique with 
            premium organic products to restore balance — calming your mind while nourishing 
            your hair from root to tip.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <v.icon className="mx-auto text-primary mb-4" size={28} strokeWidth={1.5} />
                <h3 className="font-heading text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Treatments</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Curated for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-sm p-8 hover:shadow-lg transition-shadow group"
              >
                <service.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
            >
              Book a Treatment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products / Image section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Products</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6 leading-snug">
                Organic &amp; Eco&#8209;Conscious
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We carefully select every product in our salon. From Japanese botanical extracts 
                to sustainably sourced organic oils, our range is free from harmful chemicals — 
                gentle on your hair, kind to the earth.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["Sulphate & paraben free", "Cruelty-free & vegan options", "Japanese botanical ingredients", "Recyclable packaging"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Leaf size={14} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm overflow-hidden">
              <img
                src={productsImage}
                alt="Organic hair care products used at Argana London"
                className="w-full h-80 md:h-[450px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Kind Words</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-sm p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Vouchers CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase opacity-70 mb-3">The Perfect Gift</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-6">Give the Gift of Wellness</h2>
          <p className="opacity-80 leading-relaxed mb-8 max-w-lg mx-auto">
            Treat someone special to an Argana London experience. Our gift vouchers are delivered 
            instantly via email — perfect for birthdays, Mother's Day, or simply saying thank you.
          </p>
          <Link
            to="/gift-vouchers"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            Purchase a Voucher <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Contact / Find Us */}
      <section id="contact" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Visit Us</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Find Argana London</h2>
              <div className="space-y-5 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Address</p>
                    <p>2-4 Uxbridge Road<br />West Ealing, London W7 3PP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a href="tel:+447886131057" className="hover:text-primary transition-colors">
                      +44 7886 131057
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Opening Hours</p>
                    <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden bg-muted h-72 md:h-auto">
              <iframe
                title="Argana London location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.318!3d51.509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzMyLjQiTiAwwrAxOScwNC44Ilc!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 288 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            Ready to Experience Argana?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
            Book your treatment online and secure your appointment with a small £10 deposit. 
            We look forward to welcoming you.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            Book Your Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
