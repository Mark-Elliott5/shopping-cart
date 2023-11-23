import cartSVG from '../assets/cart.svg';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function CartLink() {
  const { cart } = useContext(ProductsContext);

  const cartArray = Object.keys(cart).reduce((arr, key, index) => {
    arr[index] = cart[key];
    return arr;
  }, []);

  const total = (() => {
    let quantity = 0;
    for (let i = 0; i < cartArray.length; i += 1) {
      quantity += cartArray[i].quantity;
    }
    return quantity;
  })();

  return (
    <Link className="align-right" to="/cart">
      <div id="cart-wrapper">
        <img src={cartSVG} id="cart-icon" alt="cart-icon" />
        {total ? <span>({total})</span> : undefined}
      </div>
    </Link>
  );
}

export default CartLink;
