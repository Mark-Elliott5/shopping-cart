import Product from './Product.jsx';
import { mirage } from 'ldrs';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext } from 'react';

function ProductsPane() {
  const {
    allProductsIsLoading: isLoading,
    allProductsIsError: isError,
    allProducts,
    addItemToCart,
  } = useContext(ProductsContext);

  mirage.register();

  const loadingHTML = (
    <div className="center">
      <l-mirage size="200" speed="2.5" color="#209cff"></l-mirage>
    </div>
  );

  const errorHTML = (
    <div className="centered-symbol">
      <p>Error!</p>
    </div>
  );

  return (
    <div id="products-wrapper" className="content-wrapper">
      {isLoading
        ? loadingHTML
        : isError
        ? errorHTML
        : allProducts.map(({ id, ...props }) => (
            <Product key={id} id={id} handleAdd={addItemToCart} {...props} />
          ))}
    </div>
  );
}

export default ProductsPane;
