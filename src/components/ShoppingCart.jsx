import { useContext, useState } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import CartCard from './CartCard';

function ShoppingCart() {
  const emptyCart = <p className="center">Your cart is empty.</p>;
  const purchasedCart = <p className="center">Your products are on the way!</p>;

  const [emptyMessage, setEmptyMessage] = useState(emptyCart);
  const { cart, addItemToCart, removeItemFromCart, purchaseItems } =
    useContext(ProductsContext);

  const cartArray = Object.keys(cart).reduce((arr, key, index) => {
    arr[index] = cart[key];
    return arr;
  }, []);

  const cartCards = (() => {
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

  const priceBox = (() => {
    let subTotal = 0;
    for (let i = 0; i < cartArray.length; i += 1) {
      subTotal += cartArray[i].price * cartArray[i].quantity;
    }
    const tax = subTotal * 0.06;
    const total = subTotal + tax;
    return (
      <div id="price-box">
        <p id="subtotal">Subtotal: ${subTotal.toFixed(2)}</p>
        <p id="tax">Tax: ${tax.toFixed(2)}</p>
        <p id="total">Total: ${total.toFixed(2)}</p>
        <button onClick={purchase}>Purchase</button>
      </div>
    );
  })();

  function purchase() {
    setEmptyMessage(purchasedCart);
    setTimeout(() => setEmptyMessage(emptyCart), 5000);
    purchaseItems();
  }

  return (
    <div id="shopping-cart">
      {cartCards.length ? (
        <>
          <div id="cart-cards-wrapper">{cartCards}</div>
          {priceBox}
        </>
      ) : (
        emptyMessage
      )}
    </div>
  );
}

export default ShoppingCart;
