import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CartCard({
  id,
  image,
  price,
  quantity,
  title,
  handleRemove,
  handleAdd,
}) {
  return (
    <div className="cart-card">
      <div className="image-wrapper cart-card-image">
        <img className="product-image" src={image} alt={title} />
      </div>
      <div className="cart-card-details">
        <Link to={`/products/${id}`}>
          <span className="cart-card-title product-title">{title}</span>
        </Link>
        <span className="cart-card-price">${price.toFixed(2)}</span>
      </div>
      <div className="cart-card-quantity">
        <button
          className="cart-button"
          onClick={() => {
            handleRemove(id);
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="cart-button"
          onClick={() => {
            handleAdd(id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default CartCard;
