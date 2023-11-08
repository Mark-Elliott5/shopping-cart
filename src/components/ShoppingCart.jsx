import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import CartCard from './CartCard';

function ShoppingCart() {
  const { cart, addItemToCart, removeItemFromCart } =
    useContext(ProductsContext);

  const cartArray = Object.keys(cart).reduce((arr, key, index) => {
    arr[index] = cart[key];
    return arr;
  }, []);

  return (
    <div id="shopping-cart">
      <div id="cart-cards-wrapper">
        {cartArray.map(({ id, ...props }) => (
          <CartCard
            key={id}
            id={id}
            handleRemove={removeItemFromCart}
            handleAdd={addItemToCart}
            {...props}
          ></CartCard>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
