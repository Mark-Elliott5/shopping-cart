import PropTypes from 'prop-types';

function CartCard({ image, price, title }) {
  return (
    <div className="cart-card">
      <div className="cart-card-image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="cart-card-details">
        <span className="cart-card-title product-title">{title}</span>
        <span className="cart-card-price">{price}</span>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CartCard;
