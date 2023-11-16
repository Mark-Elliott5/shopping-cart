import cartSVG from './assets/cart.svg';
import ProgressBar from './components/ProgressBar';
import Searchbar from './components/Searchbar';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav id="nav">
        <div id="nav-search">
          <Link to="/" className="nav-link">
            <span id="logo-home">azul</span>
          </Link>
          <Searchbar />
          <Link className="align-right" to="/cart">
            <img src={cartSVG} id="cart-icon" alt="cart-icon" />
          </Link>
        </div>
        <ProgressBar />
      </nav>
      <Outlet />
    </>
  );
}

export default App;
