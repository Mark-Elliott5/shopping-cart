import Product from './Product.jsx';
import Categories from './Categories';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext } from 'react';

function ProductsPane() {
  const {
    allProductsIsLoading: isLoading,
    allProductsIsError: isError,
    allProducts,
  } = useContext(ProductsContext);

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

  return (
    <div id="main">
      <Categories />
      <div id="products-wrapper" className="content-wrapper">
        {isLoading
          ? loadingHTML
          : isError
          ? errorHTML
          : allProducts.map(({ id, ...props }) => (
              <Product key={id} id={id} {...props} />
            ))}
      </div>
    </div>
  );
}

export default ProductsPane;
