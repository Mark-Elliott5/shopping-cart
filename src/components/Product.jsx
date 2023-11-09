import AddToCartButton from './AddToCartButton';
import StarMeter from './StarMeter';
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
              <StarMeter {...rating} />
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
