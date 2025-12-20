import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import PopularItems from '@/components/home/PopularItems';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <PopularItems />
    </Layout>
  );
};

export default Index;
