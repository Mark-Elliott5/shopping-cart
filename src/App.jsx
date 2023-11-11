import cartSVG from './assets/cart.svg';
import Searchbar from './components/Searchbar';
import { ProductsContext } from './context/ProductsContextProvider';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const { displayAllProducts, allProductsIsLoading, allCategoriesIsLoading } =
    useContext(ProductsContext);

  const progressBar = (() => {
    let progress = 0;
    if (!allProductsIsLoading) {
      progress += 50;
    }
    if (!allCategoriesIsLoading) {
      progress += 50;
    }

    return (
      <div
        id="progress-bar"
        style={{
          height: '4px',
          width: '100%',
        }}
      >
        <div
          id="progress-bar-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    );
  })();

  return (
    <>
      <nav id="nav">
        <div id="nav-search">
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
        </div>
        {progressBar}
      </nav>
      <Outlet />
    </>
  );
}

export default App;
