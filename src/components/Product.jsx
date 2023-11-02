import PropTypes from 'prop-types';
import starSVG from '../assets/star.svg';
import ProductPopup from './ProductPopup';
import { useState } from 'react';

function Product({ description, id, image, price, rating, title }) {
  const [showPopup, setPopupState] = useState(false);

  function handleClick() {
    setPopupState(true);
  }

  function handlePopupClose() {
    setPopupState(false);
  }

  return (
    <div className="product" onClick={handleClick}>
      <div className="product-image-wrapper">
        <img src={image} className="product-image" alt={title} />
      </div>
      <span className="rating-wrapper">
        {rating.rate}
        {` `}
        <img src={starSVG} className="star" alt="star" />({rating.count})
      </span>
      <span className="product-title">{title}</span>
      <span>${price}</span>
      {showPopup && (
        <ProductPopup
          description={description}
          id={id}
          image={image}
          price={price}
          rating={rating}
          title={title}
          handleClose={handlePopupClose}
        />
      )}
    </div>
  );
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
