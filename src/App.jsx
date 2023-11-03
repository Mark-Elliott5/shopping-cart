import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Searchbar from './components/Searchbar';
import Categories from './components/Categories';
import ProductsPane from './components/ProductsPane';
import { ProductsContextProvider } from './context/ProductsContextProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsContextProvider>
          {/* <Searchbar /> */}
          <Categories />
          <ProductsPane />
        </ProductsContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
