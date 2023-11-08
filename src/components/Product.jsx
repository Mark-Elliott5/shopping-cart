import starSVG from '../assets/star.svg';
import AddToCartButton from './AddToCartButton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product({ handleAdd, id, image, price, rating, title }) {
  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <div className="product-image-wrapper image-wrapper border-bottom">
          <img src={image} className="product-image" alt={title} />
        </div>
      </Link>
      <div className="product-info-wrapper">
        <Link to={`/products/${id}`}>
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
          <AddToCartButton handleAdd={handleAdd} productNumber={id} />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
