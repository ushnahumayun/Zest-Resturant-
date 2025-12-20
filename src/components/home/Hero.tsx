import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-restaurant.jpg';

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Welcome to
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Zesté
        </h1>
        <p className="font-display text-xl md:text-2xl text-primary-foreground/90 italic mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
          A Taste of Pure Elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <Link to="/menu" className="btn-primary">
            Explore Our Menu
          </Link>
          <Link 
            to="/reservation" 
            className="px-8 py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
