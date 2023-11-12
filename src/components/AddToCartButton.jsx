import PropTypes from 'prop-types';
import { useState } from 'react';

function AddToCartButton({ handleAdd, productNumber }) {
  const addToCart = 'Add to cart';
  const added = 'Added!';

  const [buttonText, setBaggedText] = useState(addToCart);

  function changeButtonText(e) {
    e.target.classList.add('added-to-cart');
    setBaggedText(added);
    setTimeout(() => {
      e.target.classList.remove('added-to-cart');
      setBaggedText(addToCart);
    }, 5000);
  }

  return (
    <button
      className="add-button"
      onClick={(e) => {
        changeButtonText(e);
        handleAdd(productNumber);
      }}
    >
      {buttonText}
    </button>
  );
}

AddToCartButton.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  productNumber: PropTypes.number.isRequired,
};

export default AddToCartButton;
