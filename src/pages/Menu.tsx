import { useState } from 'react';
import { Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Appetizers
import dynamiteImg from '@/assets/menu-dynamite.jpg';
import garlicBreadImg from '@/assets/menu-garlic-bread.jpg';
import cheeseSticksImg from '@/assets/menu-cheese-sticks.jpg';
import friesImg from '@/assets/menu-fries.jpg';
import potatoWedgesImg from '@/assets/menu-potato-wedges.jpg';
import onionRingsImg from '@/assets/menu-onion-rings.jpg';
import loadedFriesImg from '@/assets/menu-loaded-fries.jpg';
import mushroomSoupImg from '@/assets/menu-soup.jpg';
import chickenCornSoupImg from '@/assets/menu-chicken-corn-soup.jpg';
import hotSourSoupImg from '@/assets/menu-hot-sour-soup.jpg';
import crispyChickenImg from '@/assets/menu-crispy-chicken.jpg';
import springRollsImg from '@/assets/menu-spring-rolls.jpg';
import dumplingsImg from '@/assets/menu-dumplings.jpg';
import prawnsImg from '@/assets/menu-prawns.jpg';
import fishFingersImg from '@/assets/menu-fish-fingers.jpg';

// Continental
import mexicanSteakImg from '@/assets/menu-mexican-steak.jpg';
import mushroomSteakImg from '@/assets/menu-mushroom-steak.jpg';
import steakImg from '@/assets/menu-steak.jpg';

// Italian
import alfredoPastaImg from '@/assets/menu-alfredo-pasta.jpg';
import pennePastaImg from '@/assets/menu-penne-pasta.jpg';
import apolloChickenImg from '@/assets/menu-apollo-chicken.jpg';
import cordonBleuImg from '@/assets/menu-cordon-bleu.jpg';
import lasagnaImg from '@/assets/menu-lasagna.jpg';

// Chinese
import thaiCurryImg from '@/assets/menu-thai-curry.jpg';
import cashewChickenImg from '@/assets/menu-cashew-chicken.jpg';
import kungpaoImg from '@/assets/menu-kungpao.jpg';
import wingsImg from '@/assets/menu-wings.jpg';
import noodlesImg from '@/assets/menu-noodles.jpg';
import manchurianImg from '@/assets/menu-manchurian.jpg';

// Fast Food
import zesteSpecialBurgerImg from '@/assets/menu-zeste-special-burger.jpg';
import beefBurgerImg from '@/assets/menu-beef-burger.jpg';
import zingerBurgerImg from '@/assets/menu-zinger-burger.jpg';
import shawarmaImg from '@/assets/menu-shawarma.jpg';
import pizzaImg from '@/assets/menu-pizza.jpg';

// Desserts
import threeMillkCakeImg from '@/assets/menu-cake.jpg';
import chocolateCakeImg from '@/assets/menu-chocolate-cake.jpg';
import lotusCakeImg from '@/assets/menu-lotus-cake.jpg';
import pistachioCakeImg from '@/assets/menu-pistachio-cake.jpg';
import redVelvetImg from '@/assets/menu-red-velvet.jpg';
import coffeeCakeImg from '@/assets/menu-coffee-cake.jpg';
import lotusCookieImg from '@/assets/menu-lotus-cookie.jpg';
import nutellaCookieImg from '@/assets/menu-nutella-cookie.jpg';
import chocolateMousseImg from '@/assets/menu-chocolate-mousse.jpg';

// Drinks
import mintMargaritaImg from '@/assets/menu-mint-margarita.jpg';
import peachTeaImg from '@/assets/menu-peach-tea.jpg';
import cokeImg from '@/assets/menu-coke.jpg';
import spriteImg from '@/assets/menu-sprite.jpg';
import waterImg from '@/assets/menu-water.jpg';

type Category = 'All' | 'Appetizers' | 'Continental' | 'Italian' | 'Chinese' | 'Fast Food' | 'Desserts' | 'Drinks';

const categories: Category[] = ['All', 'Appetizers', 'Continental', 'Italian', 'Chinese', 'Fast Food', 'Desserts', 'Drinks'];

const menuItems = [
  // Appetizers
  { name: 'Dynamite Chicken', category: 'Appetizers', price: 'Rs. 1,500', description: 'Crispy spicy chicken bites', image: dynamiteImg },
  { name: 'Garlic Bread', category: 'Appetizers', price: 'Rs. 350', description: 'Freshly baked bread with garlic butter', image: garlicBreadImg },
  { name: 'Cheese Sticks', category: 'Appetizers', price: 'Rs. 450', description: 'Crispy golden cheese sticks', image: cheeseSticksImg },
  { name: 'French Fries', category: 'Appetizers', price: 'Rs. 300', description: 'Classic crispy golden fries', image: friesImg },
  { name: 'Potato Wedges', category: 'Appetizers', price: 'Rs. 350', description: 'Seasoned potato wedges', image: potatoWedgesImg },
  { name: 'Onion Rings', category: 'Appetizers', price: 'Rs. 400', description: 'Crispy battered onion rings', image: onionRingsImg },
  { name: 'Loaded Fries', category: 'Appetizers', price: 'Rs. 550', description: 'Fries with cheese and toppings', image: loadedFriesImg },
  { name: 'Cream of Mushroom Soup', category: 'Appetizers', price: 'Rs. 450', description: 'Creamy mushroom soup', image: mushroomSoupImg },
  { name: 'Chicken Corn Soup', category: 'Appetizers', price: 'Rs. 400', description: 'Classic chicken corn soup', image: chickenCornSoupImg },
  { name: 'Hot & Sour Soup', category: 'Appetizers', price: 'Rs. 400', description: 'Tangy spicy soup', image: hotSourSoupImg },
  { name: 'Crispy Chicken Bites', category: 'Appetizers', price: 'Rs. 650', description: 'Crispy fried chicken pieces', image: crispyChickenImg },
  { name: 'Chicken Spring Rolls', category: 'Appetizers', price: 'Rs. 450', description: 'Crispy chicken filled rolls', image: springRollsImg },
  { name: 'Chicken Dumplings', category: 'Appetizers', price: 'Rs. 550', description: 'Steamed chicken dumplings', image: dumplingsImg },
  { name: 'Fried Prawns', category: 'Appetizers', price: 'Rs. 850', description: 'Golden fried prawns', image: prawnsImg },
  { name: 'Finger Fish', category: 'Appetizers', price: 'Rs. 750', description: 'Crispy fish fingers', image: fishFingersImg },
  
  // Continental
  { name: 'Mexican Steak', category: 'Continental', price: 'Rs. 2,800', description: 'Spicy Mexican style steak', image: mexicanSteakImg },
  { name: 'Wild Mushroom Steak', category: 'Continental', price: 'Rs. 2,600', description: 'Steak with wild mushroom sauce', image: mushroomSteakImg },
  { name: 'Zesté Special Grilled Steak', category: 'Continental', price: 'Rs. 3,000', description: 'Our signature grilled steak', image: steakImg },
  
  // Italian
  { name: 'Alfredo Pasta', category: 'Italian', price: 'Rs. 1,300', description: 'Creamy fettuccine alfredo', image: alfredoPastaImg },
  { name: 'Penne Mozzarella Pasta', category: 'Italian', price: 'Rs. 1,200', description: 'Penne with melted mozzarella', image: pennePastaImg },
  { name: 'Apollo Chicken', category: 'Italian', price: 'Rs. 1,400', description: 'Italian style grilled chicken', image: apolloChickenImg },
  { name: 'Chicken Cordon Bleu', category: 'Italian', price: 'Rs. 1,800', description: 'Stuffed chicken with ham and cheese', image: cordonBleuImg },
  { name: 'Lasagna', category: 'Italian', price: 'Rs. 1,400', description: 'Layered pasta with meat sauce', image: lasagnaImg },
  
  // Chinese
  { name: 'Thai Chicken Curry', category: 'Chinese', price: 'Rs. 1,200', description: 'Aromatic Thai curry', image: thaiCurryImg },
  { name: 'Chicken Cashewnuts', category: 'Chinese', price: 'Rs. 1,100', description: 'Chicken with roasted cashews', image: cashewChickenImg },
  { name: 'Kung Pao Chicken', category: 'Chinese', price: 'Rs. 1,100', description: 'Spicy chicken with peanuts', image: kungpaoImg },
  { name: 'Buffalo Wings', category: 'Chinese', price: 'Rs. 850', description: 'Spicy buffalo style wings', image: wingsImg },
  { name: 'Chicken Chowmein', category: 'Chinese', price: 'Rs. 900', description: 'Stir fried noodles with chicken', image: noodlesImg },
  { name: 'Chicken Manchurian', category: 'Chinese', price: 'Rs. 950', description: 'Crispy chicken in tangy sauce', image: manchurianImg },
  
  // Fast Food
  { name: 'Zesté Special Burger', category: 'Fast Food', price: 'Rs. 950', description: 'Our signature special burger', image: zesteSpecialBurgerImg },
  { name: 'Beef Burger', category: 'Fast Food', price: 'Rs. 850', description: 'Juicy beef patty burger', image: beefBurgerImg },
  { name: 'Zinger Burger', category: 'Fast Food', price: 'Rs. 750', description: 'Crispy zinger chicken burger', image: zingerBurgerImg },
  { name: 'Zesté Special Zinger Shawarma', category: 'Fast Food', price: 'Rs. 650', description: 'Signature zinger shawarma', image: shawarmaImg },
  { name: 'Zesté Special Pizza', category: 'Fast Food', price: 'Rs. 1,500', description: 'Our signature loaded pizza', image: pizzaImg },
  
  // Desserts
  { name: 'Three Milk Cake', category: 'Desserts', price: 'Rs. 550', description: 'Classic tres leches cake', image: threeMillkCakeImg },
  { name: 'Chocolate Dream Cake', category: 'Desserts', price: 'Rs. 650', description: 'Rich chocolate layer cake', image: chocolateCakeImg },
  { name: 'Lotus Cake', category: 'Desserts', price: 'Rs. 600', description: 'Biscoff lotus cake', image: lotusCakeImg },
  { name: 'Pistachio Cake', category: 'Desserts', price: 'Rs. 650', description: 'Creamy pistachio cake', image: pistachioCakeImg },
  { name: 'Red Velvet Cake', category: 'Desserts', price: 'Rs. 600', description: 'Classic red velvet', image: redVelvetImg },
  { name: 'Coffee Cake', category: 'Desserts', price: 'Rs. 550', description: 'Rich coffee flavored cake', image: coffeeCakeImg },
  { name: 'Lotus Cookie', category: 'Desserts', price: 'Rs. 350', description: 'Biscoff lotus cookie', image: lotusCookieImg },
  { name: 'Nutella Cookie', category: 'Desserts', price: 'Rs. 350', description: 'Chocolate hazelnut cookie', image: nutellaCookieImg },
  { name: 'Chocolate Mousse', category: 'Desserts', price: 'Rs. 450', description: 'Silky chocolate mousse', image: chocolateMousseImg },
  
  // Drinks
  { name: 'Mint Margarita', category: 'Drinks', price: 'Rs. 350', description: 'Refreshing mint lime drink', image: mintMargaritaImg },
  { name: 'Peach Ice Tea', category: 'Drinks', price: 'Rs. 300', description: 'Chilled peach iced tea', image: peachTeaImg },
  { name: 'Coke / Pepsi', category: 'Drinks', price: 'Rs. 150', description: 'Chilled soft drink', image: cokeImg },
  { name: 'Sprite / 7Up', category: 'Drinks', price: 'Rs. 150', description: 'Chilled lemon lime soda', image: spriteImg },
  { name: 'Water', category: 'Drinks', price: 'Rs. 100', description: 'Mineral water bottle', image: waterImg },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems
    .filter(item => activeCategory === 'All' || item.category === activeCategory)
    .filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

      {/* Search Bar */}
      <section className="py-6 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-cream sticky top-20 z-40 border-b border-border">
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
