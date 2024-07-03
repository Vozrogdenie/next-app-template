import { Welcome } from '@/components/pages/Welcome/Welcome';
import getProducts from '@/store/api/products/getProduct';

const HomePage = async () => {
  const products = (await getProducts('https://fakestoreapi.com/products')) ?? [];
  return <Welcome products={products} />;
};

export default HomePage;
