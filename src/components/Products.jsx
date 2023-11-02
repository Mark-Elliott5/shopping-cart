import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { v4 as uuid } from 'uuid';
import starSVG from '../assets/star.svg';

function Products() {
  const {
    productPaneData,
    allProductsIsLoading: isLoading,
    allProductsIsError: isError,
  } = useContext(ProductsContext);
  const productsWithKeys =
    productPaneData?.map((category) => ({
      ...category,
      key: uuid(),
    })) || [];

  const loadingHTML = (
    <div className="centered-symbol">
      <p>Loading...</p>
    </div>
  );

  const errorHTML = (
    <div className="centered-symbol">
      <p>Error!</p>
    </div>
  );

  function handleClick({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
  }) {
    // show ProductPopup component
  }

  return (
    <div id="products-wrapper" className="content-wrapper">
      {isLoading
        ? loadingHTML
        : isError
        ? errorHTML
        : productsWithKeys.map(
            ({
              key,
              category,
              description,
              id,
              image,
              price,
              rating,
              title,
            }) => (
              <div
                key={key}
                className="product"
                onClick={() =>
                  handleClick({
                    key,
                    category,
                    description,
                    id,
                    image,
                    price,
                    rating,
                    title,
                  })
                }
              >
                <div className="product-image-wrapper">
                  <img src={image} className="product-image" alt={title} />
                </div>
                <span className="rating-wrapper">
                  {rating.rate}
                  {` `}
                  <img src={starSVG} className="star" alt="star" />(
                  {rating.count})
                </span>
                <span>{title}</span>
                <span>${price}</span>
              </div>
            )
          )}
    </div>
  );
}

export default Products;
