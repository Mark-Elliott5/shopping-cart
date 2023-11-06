import starSVG from '../assets/star.svg';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';

function ProductDetails() {
  const { id } = useParams();
  const { allProducts, allProductsIsLoading, allProductsIsError } =
    useContext(ProductsContext);

  if (allProductsIsLoading) {
    return <p>Loading...</p>;
  }

  if (allProductsIsError) {
    return <p>Error</p>;
  }

  const { description, image, price, rating, title } =
    allProducts[parseInt(id) - 1];

  function addToCart() {}
  return (
    <div className="product-details">
      <div className="image-wrapper details-image-wrapper">
        <img src={image} className="product-image" alt={title} />
      </div>
      <div className="details-text-wrapper">
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
        <span className="product-title">{title}</span>
        <span className="product-price">${price.toFixed(2)}</span>
        <p className="description">{description}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
