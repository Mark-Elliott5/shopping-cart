import PropTypes from 'prop-types';
import { useState } from 'react';

function AddToCartButton({ handleAdd, productNumber }) {
  const addToCart = 'Add to cart';
  const added = 'Added!';

  const [buttonText, setBaggedText] = useState(addToCart);

  function changeButtonText() {
    setBaggedText(added);
    setTimeout(() => setBaggedText(addToCart), 5000);
  }

  return (
    <button
      onClick={() => {
        changeButtonText();
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
