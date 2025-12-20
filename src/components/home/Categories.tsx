const categories = [
  'Appetizers',
  'Continental',
  'Italian',
  'Chinese',
  'Fast Food',
  'Desserts',
  'Drinks',
];

const Categories = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
          Discover Our
        </span>
        <h2 className="section-title mb-8">Where Flavors Meet Royalty</h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <span
              key={category}
              className="category-badge animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              • {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
