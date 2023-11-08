import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import CartCard from './CartCard';

function ShoppingCart() {
  const { cart } = useContext(ProductsContext);

  return (
    <div id="shopping-cart">
      <div id="cart-cards-wrapper">
        {cart.map(({ id, ...props }) => (
          <CartCard key={id} {...props}></CartCard>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
