import { useContext, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { v4 as uuid } from 'uuid';
import Product from './Product.jsx';
import Categories from './Categories';
import { useParams } from 'react-router-dom';

function ProductsPane() {
  const {
    allProductsIsLoading: isLoading,
    allProductsIsError: isError,
    categoryProducts,
    displayProductsInCategory,
    displayAllProducts,
    productPaneData,
    searchProducts,
  } = useContext(ProductsContext);

  const { name, query } = useParams();

  const productsWithKeys =
    productPaneData?.map((product) => ({
      ...product,
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

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (name) {
      displayProductsInCategory(name);
    } else if (query) {
      searchProducts(query);
    } else {
      displayAllProducts();
    }
  }, [name, query, isLoading, categoryProducts]);

  return (
    <div id="main">
      <Categories />
      <div id="products-wrapper" className="content-wrapper">
        {isLoading
          ? loadingHTML
          : isError
          ? errorHTML
          : productsWithKeys.map(({ key, ...props }) => (
              <Product key={key} {...props} />
            ))}
      </div>
    </div>
  );
}

export default ProductsPane;
