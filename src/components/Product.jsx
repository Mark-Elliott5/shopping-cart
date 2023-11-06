import PropTypes from 'prop-types';
import starSVG from '../assets/star.svg';
import { Link } from 'react-router-dom';

function Product({ description, id, image, price, rating, title }) {
  return (
    <div className="product">
      <Link
        to={`/products/${id}`}
        state={{ description, image, price, rating, title }}
      >
        <div className="product-image-wrapper image-wrapper border-bottom">
          <img src={image} className="product-image" alt={title} />
        </div>
      </Link>
      <div className="product-info-wrapper">
        <Link to={`/products/${id}`} state={{ test: 'test' }}>
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
        </Link>
        <div className="price-and-button-wrapper">
          <span className="product-price">${price.toFixed(2)}</span>
          <button onClick={(e) => e.stopPropagation()}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
