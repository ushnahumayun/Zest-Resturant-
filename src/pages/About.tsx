import Layout from '@/components/layout/Layout';
import { Award, Users, Clock, Heart } from 'lucide-react';
import interiorImg from '@/assets/about-interior.jpg';
import chefImg from '@/assets/chef.jpg';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Clock, value: '50+', label: 'Signature Dishes' },
  { icon: Heart, value: '100%', label: 'Fresh Ingredients' },
];

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Zesté
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            A journey of passion, flavor, and unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up opacity-0">
              <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
                Since 2010
              </span>
              <h2 className="section-title">A Legacy of Culinary Excellence</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Zesté was born from a passion for creating exceptional dining experiences. 
                What started as a small family kitchen has blossomed into one of the city's 
                most beloved restaurants, where traditional recipes meet modern innovation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our name, derived from the French word for "zest," embodies our philosophy: 
                to add that special something to every dish, every interaction, and every 
                moment our guests spend with us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the freshest ingredients sourced locally to our carefully curated menu 
                spanning multiple cuisines, every element at Zesté is designed to create 
                memories that last a lifetime.
              </p>
            </div>
            <div className="relative animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <img
                src={interiorImg}
                alt="Zesté Interior"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="font-display text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <p className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-fade-up opacity-0">
              <img
                src={chefImg}
                alt="Our Chef"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
                Meet Our Team
              </span>
              <h2 className="section-title">Crafted by Experts</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our culinary team is led by award-winning chefs who bring decades of 
                experience from kitchens around the world. Each dish is a testament to 
                their dedication and creativity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From Continental classics to authentic Desi flavors, our chefs ensure 
                that every plate that leaves our kitchen is a masterpiece of taste, 
                presentation, and quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
