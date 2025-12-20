import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import burgerImg from '@/assets/menu-burger.jpg';
import pastaImg from '@/assets/menu-pasta.jpg';
import steakImg from '@/assets/menu-steak.jpg';
import karahiImg from '@/assets/menu-karahi.jpg';

type Category = 'All' | 'Appetizers' | 'Continental' | 'Italian' | 'Chinese' | 'Fast Food' | 'Desi' | 'Desserts' | 'Drinks';

const categories: Category[] = ['All', 'Appetizers', 'Continental', 'Italian', 'Chinese', 'Fast Food', 'Desi', 'Desserts', 'Drinks'];

const menuItems = [
  // Appetizers
  { name: 'Garlic Bread', category: 'Appetizers', price: 'Rs. 350', description: 'Freshly baked bread with garlic butter', image: pastaImg },
  { name: 'Chicken Wings', category: 'Appetizers', price: 'Rs. 650', description: 'Crispy wings with spicy sauce', image: burgerImg },
  { name: 'Spring Rolls', category: 'Appetizers', price: 'Rs. 450', description: 'Crispy vegetable spring rolls', image: pastaImg },
  
  // Continental
  { name: 'Grilled Steak', category: 'Continental', price: 'Rs. 2,500', description: 'Premium ribeye with herbs', image: steakImg },
  { name: 'Grilled Salmon', category: 'Continental', price: 'Rs. 2,800', description: 'Fresh salmon with lemon butter', image: steakImg },
  { name: 'Chicken Cordon Bleu', category: 'Continental', price: 'Rs. 1,800', description: 'Stuffed chicken with ham and cheese', image: steakImg },
  
  // Italian
  { name: 'Alfredo Pasta', category: 'Italian', price: 'Rs. 1,200', description: 'Creamy fettuccine alfredo', image: pastaImg },
  { name: 'Margherita Pizza', category: 'Italian', price: 'Rs. 1,100', description: 'Classic tomato and mozzarella', image: pastaImg },
  { name: 'Lasagna', category: 'Italian', price: 'Rs. 1,400', description: 'Layered pasta with meat sauce', image: pastaImg },
  
  // Chinese
  { name: 'Kung Pao Chicken', category: 'Chinese', price: 'Rs. 1,100', description: 'Spicy chicken with peanuts', image: karahiImg },
  { name: 'Fried Rice', category: 'Chinese', price: 'Rs. 750', description: 'Wok-tossed rice with vegetables', image: karahiImg },
  { name: 'Manchurian', category: 'Chinese', price: 'Rs. 900', description: 'Crispy chicken in tangy sauce', image: karahiImg },
  
  // Fast Food
  { name: 'Royal Burger', category: 'Fast Food', price: 'Rs. 850', description: 'Juicy beef patty with cheese', image: burgerImg },
  { name: 'Loaded Fries', category: 'Fast Food', price: 'Rs. 550', description: 'Crispy fries with toppings', image: burgerImg },
  { name: 'Club Sandwich', category: 'Fast Food', price: 'Rs. 750', description: 'Triple-decker classic', image: burgerImg },
  
  // Desi
  { name: 'Chicken Karahi', category: 'Desi', price: 'Rs. 1,800', description: 'Traditional spiced karahi', image: karahiImg },
  { name: 'Mutton Biryani', category: 'Desi', price: 'Rs. 900', description: 'Aromatic rice with tender mutton', image: karahiImg },
  { name: 'Seekh Kabab', category: 'Desi', price: 'Rs. 650', description: 'Grilled minced meat skewers', image: karahiImg },
  
  // Desserts
  { name: 'Chocolate Lava Cake', category: 'Desserts', price: 'Rs. 650', description: 'Warm cake with molten center', image: pastaImg },
  { name: 'Tiramisu', category: 'Desserts', price: 'Rs. 550', description: 'Classic Italian coffee dessert', image: pastaImg },
  { name: 'Gulab Jamun', category: 'Desserts', price: 'Rs. 350', description: 'Traditional sweet dumplings', image: karahiImg },
  
  // Drinks
  { name: 'Fresh Lemonade', category: 'Drinks', price: 'Rs. 250', description: 'Refreshing citrus drink', image: pastaImg },
  { name: 'Mango Lassi', category: 'Drinks', price: 'Rs. 350', description: 'Creamy mango yogurt drink', image: karahiImg },
  { name: 'Mocktail', category: 'Drinks', price: 'Rs. 400', description: 'Signature fruit blend', image: pastaImg },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
            Explore
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with the finest ingredients and served with love.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-cream sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gold text-primary-foreground shadow-lg'
                    : 'bg-secondary text-foreground hover:bg-taupe'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="menu-card group animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-gold font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-2 text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
