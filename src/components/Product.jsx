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
      <div className="product-info-wrapper">
        <div className="span-wrapper">
          <div className="rating-and-title-wrapper">
            <span className="rating-wrapper">
              {rating.rate}
              {` `}
              <span
                className="star-meter"
                style={{ width: `calc((${rating.rate}/5)*60px)` }}
              >
                <img src={starSVG} className="star" alt="star" />
                <img src={starSVG} className="star" alt="star" />
                <img src={starSVG} className="star" alt="star" />
                <img src={starSVG} className="star" alt="star" />
                <img src={starSVG} className="star" alt="star" />
              </span>
              {` `}({rating.count})
            </span>
            <span className="product-title">{title}</span>
          </div>
        </div>
        <div className="price-and-button-wrapper">
          <span className="product-price">${price.toFixed(2)}</span>
          <button onClick={(e) => e.stopPropagation()}>Add to cart</button>
        </div>
      </div>
      {showPopup && (
        <ProductPopup
          description={description}
          id={id}
          image={image}
          price={price.toFixed(2)}
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
