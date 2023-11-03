import PropTypes from 'prop-types';
import starSVG from '../assets/star.svg';

function ProductPopup({
  description,
  id,
  image,
  price,
  rating,
  title,
  handleClose,
}) {
  function addToCart() {}
  return (
    <div
      className="product-popup-blocker"
      onClick={(e) => {
        e.stopPropagation();
        handleClose();
      }}
    >
      <div className="product-popup" onClick={(e) => e.stopPropagation()}>
        <div className="product-image-wrapper">
          <img src={image} className="product-image" alt={title} />
        </div>
        <span className="rating-wrapper">
          {rating.rate}
          {` `}
          <span
            className="star-meter"
            style={{ width: `calc((${rating.rate}/5)*55.975px)` }}
          >
            <img src={starSVG} className="star" alt="star" />
            <img src={starSVG} className="star" alt="star" />
            <img src={starSVG} className="star" alt="star" />
            <img src={starSVG} className="star" alt="star" />
            <img src={starSVG} className="star" alt="star" />
          </span>
          {` `}({rating.count})
        </span>
        <span>{title}</span>
        <span>${price}</span>
        <p className="description">{description}</p>
        <button onClick={addToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
}

ProductPopup.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ProductPopup;
