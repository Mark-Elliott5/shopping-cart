import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import CartCard from './CartCard';

function ShoppingCart() {
  const { cart, addItemToCart, removeItemFromCart } =
    useContext(ProductsContext);

  const cartCards = (() => {
    const cartArray = Object.keys(cart).reduce((arr, key, index) => {
      arr[index] = cart[key];
      return arr;
    }, []);
    const cards = cartArray.map(({ id, ...props }) => (
      <CartCard
        key={id}
        id={id}
        handleRemove={removeItemFromCart}
        handleAdd={addItemToCart}
        {...props}
      ></CartCard>
    ));
    return cards;
  })();

  const emptyCart = <p>Your cart is empty</p>;

  return (
    <div id="shopping-cart">
      <div id="cart-cards-wrapper">
        {cartCards.length ? cartCards : emptyCart}
      </div>
    </div>
  );
}

export default ShoppingCart;
