import Searchbar from './components/Searchbar';
import cartSVG from './assets/cart.svg';
import { ProductsContext } from './context/ProductsContextProvider';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const { displayAllProducts } = useContext(ProductsContext);

  return (
    <>
      <nav id="nav-search">
        <Link to="/" onClick={displayAllProducts} onChange={displayAllProducts}>
          <span id="logo-home">azul</span>
        </Link>
        <Searchbar />
        <img src={cartSVG} id="cart-icon" alt="cart-icon" />
      </nav>
      <Outlet />
    </>
  );
}

export default App;
