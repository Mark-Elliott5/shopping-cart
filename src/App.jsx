import { QueryClient, QueryClientProvider } from 'react-query';
import Searchbar from './components/Searchbar';
import Categories from './components/Categories';
import Products from './components/Products';
import { ProductsContextProvider } from './context/ProductsContextProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsContextProvider>
          <Searchbar />
          <Categories />
          <Products />
        </ProductsContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
