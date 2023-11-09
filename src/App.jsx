import cartSVG from './assets/cart.svg';
import Searchbar from './components/Searchbar';
import { ProductsContext } from './context/ProductsContextProvider';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const { displayAllProducts } = useContext(ProductsContext);

  return (
    <>
      <nav id="nav-search">
        <Link
          to="/"
          className="nav-link"
          onClick={displayAllProducts}
          onChange={displayAllProducts}
        >
          <span id="logo-home">azul</span>
        </Link>
        <Searchbar />
        <Link className="align-right" to="/cart">
          <img src={cartSVG} id="cart-icon" alt="cart-icon" />
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
