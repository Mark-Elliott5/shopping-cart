import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Searchbar from './components/Searchbar';
import Categories from './components/Categories';
import ProductsPane from './components/ProductsPane';
import { ProductsContextProvider } from './context/ProductsContextProvider';
import cartSVG from './assets/cart.svg';

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
          <nav id="nav-search">
            <span id="logo-home">azul</span>
            <Searchbar />
            <img src={cartSVG} id="cart-icon" alt="cart-icon" />
          </nav>
          <div id="main">
            <Categories />
            <ProductsPane />
          </div>
        </ProductsContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
