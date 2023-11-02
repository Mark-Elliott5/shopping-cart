import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { v4 as uuid } from 'uuid';
import Product from './Product.jsx';
import ProductPopup from './ProductPopup';

function ProductsPane() {
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

  function handleClick(props) {
    return <ProductPopup {...props} />;
  }

  return (
    <div id="products-wrapper" className="content-wrapper">
      {isLoading
        ? loadingHTML
        : isError
        ? errorHTML
        : productsWithKeys.map(({ key, ...props }) => (
            <Product key={key} {...props} />
          ))}
    </div>
  );
}

export default ProductsPane;
