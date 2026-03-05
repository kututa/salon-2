import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, MapPin, Sparkles, ChevronRight, Star, Clock, Scissors } from 'lucide-react';
import { SERVICES, Service } from './constants';
import { cn } from './lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
      isScrolled ? "bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold tracking-tight text-brand-olive">LUXE AURA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-ink/70">
          <a href="#services" className="hover:text-brand-olive transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-olive transition-colors">About</a>
          <a href="#gallery" className="hover:text-brand-olive transition-colors">Gallery</a>
          <button className="bg-brand-olive text-white px-6 py-2 rounded-full hover:bg-brand-ink transition-all">
            Book Now
          </button>
        </div>

        <button className="md:hidden text-brand-ink" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-olive/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <button className="bg-brand-olive text-white px-6 py-3 rounded-full">Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000" 
          alt="Salon Interior" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/20 via-transparent to-brand-cream" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-brand-olive font-semibold mb-4 block">
            The Art of Self-Care
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Refined Beauty, <br />
            <span className="italic">Naturally Crafted.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience premium manicure, braiding, and pedicure services in a sanctuary designed for your tranquility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-olive text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-brand-ink transition-all shadow-lg shadow-brand-olive/20">
              Explore Services
            </button>
            <button className="border border-brand-olive text-brand-olive px-10 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-brand-olive hover:text-white transition-all">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll to explore</span>
        <div className="w-px h-12 bg-brand-olive/30" />
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-brand-ink/40 transition-colors" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="glass-card p-4 rounded-2xl flex justify-between items-center">
            <span className="text-xs uppercase tracking-widest font-bold">{service.category}</span>
            <span className="text-brand-olive font-serif text-lg">{service.price}</span>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-serif mb-2">{service.name}</h3>
      <p className="text-brand-ink/60 text-sm leading-relaxed mb-4">{service.description}</p>
      <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-semibold text-brand-olive">
        <span className="flex items-center gap-1"><Clock size={14} /> {service.duration}</span>
        <button className="flex items-center gap-1 hover:underline">Book Now <ChevronRight size={14} /></button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-olive uppercase tracking-widest text-sm font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl leading-tight">Curated services for your <span className="italic">unique style.</span></h2>
          </div>
          <p className="text-brand-ink/60 max-w-sm">
            From intricate braiding to rejuvenating pedicures, we use only the finest organic products to ensure your beauty shines through.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
              alt="Salon Experience" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-olive rounded-full flex items-center justify-center p-8 text-white text-center">
            <div>
              <Star className="mx-auto mb-4" fill="currentColor" />
              <p className="font-serif text-xl">"The most relaxing experience I've had in years."</p>
              <span className="text-[10px] uppercase tracking-widest mt-2 block">— Sarah J.</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-brand-olive uppercase tracking-widest text-sm font-bold mb-4 block">The Luxe Standard</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Where tradition meets <br /><span className="italic">modern luxury.</span></h2>
          <div className="space-y-6 text-brand-ink/70 leading-relaxed">
            <p>
              Founded on the belief that beauty rituals should be restorative, Luxe Aura Salon offers a sanctuary away from the city's bustle. Our master artisans specialize in techniques that respect your natural beauty.
            </p>
            <p>
              We prioritize organic, cruelty-free products and sustainable practices, ensuring that your self-care routine is as kind to the planet as it is to you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h4 className="text-3xl font-serif text-brand-olive mb-1">12+</h4>
              <p className="text-xs uppercase tracking-widest font-bold opacity-50">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif text-brand-olive mb-1">5k+</h4>
              <p className="text-xs uppercase tracking-widest font-bold opacity-50">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white section-padding pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif mb-6">LUXE AURA</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Elevating the standard of beauty through organic care and expert craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brand-gold">Visit Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-brand-gold" /> 123 Beauty Lane, <br />Manhattan, NY 10001</li>
              <li className="flex gap-3"><Phone size={18} className="shrink-0 text-brand-gold" /> (555) 123-4567</li>
              <li className="flex gap-3"><Clock size={18} className="shrink-0 text-brand-gold" /> Mon - Sat: 9am - 8pm <br />Sun: 10am - 6pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brand-gold">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Join our list for exclusive offers and beauty tips.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold text-brand-ink px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© 2024 Luxe Aura Salon. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        
        {/* CTA Section */}
        <section className="bg-brand-olive text-white section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="mx-auto mb-6 text-brand-gold" size={40} />
            <h2 className="text-4xl md:text-5xl mb-8">Ready for your transformation?</h2>
            <p className="text-lg opacity-80 mb-10 font-light">
              Book your appointment today and experience the Luxe Aura difference.
            </p>
            <button className="bg-white text-brand-olive px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-white transition-all shadow-xl">
              Book Appointment Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
