import AddToCartButton from './AddToCartButton';
import StarMeter from './StarMeter';
import { mirage } from 'ldrs';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const {
    allProducts,
    allProductsIsLoading: isLoading,
    allProductsIsError: isError,
    addItemToCart,
  } = useContext(ProductsContext);

  mirage.register();

  const loadingHTML = (
    <div className="center">
      <l-mirage size="200" speed="2.5" color="#209cff"></l-mirage>
    </div>
  );

  if (isLoading) {
    return loadingHTML;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const { description, image, price, rating, title } =
    allProducts[parseInt(id) - 1];

  return (
    <div className="product-details all-products">
      <div className="image-wrapper details-image-wrapper">
        <img src={image} className="product-image" alt={title} />
      </div>
      <div className="details-text-wrapper">
        <StarMeter {...rating} />
        <span className="product-title">{title}</span>
        <span className="product-price">${price.toFixed(2)}</span>
        <p className="description">{description}</p>
        <AddToCartButton
          handleAdd={addItemToCart}
          productNumber={parseInt(id)}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
