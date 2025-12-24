import { Link } from 'react-router-dom';
import burgerImg from '@/assets/menu-zinger-burger.jpg';
import pastaImg from '@/assets/menu-alfredo-pasta.jpg';
import steakImg from '@/assets/menu-steak.jpg';
import dynamiteImg from '@/assets/menu-dynamite.jpg';

const popularItems = [
  {
    name: 'Dynamite Chicken',
    category: 'Appetizers',
    image: dynamiteImg,
    price: 'Rs. 1,500',
  },
  {
    name: 'Zesté Special Burger',
    category: 'Fast Food',
    image: burgerImg,
    price: 'Rs. 850',
  },
  {
    name: 'Alfredo Pasta',
    category: 'Italian',
    image: pastaImg,
    price: 'Rs. 1,300',
  },
  {
    name: 'Zesté Special Grilled Steak',
    category: 'Continental',
    image: steakImg,
    price: 'Rs. 3,000',
  },
];

const PopularItems = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
            Chef's Selection
          </span>
          <h2 className="section-title">Popular Menu Items</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularItems.map((item, index) => (
            <Link
              key={item.name}
              to="/menu"
              className="menu-card group animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-gold font-medium">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-2 text-foreground group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground font-semibold">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
