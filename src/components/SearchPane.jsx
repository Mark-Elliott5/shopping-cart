import Product from './Product.jsx';
import Fuse from 'fuse.js';
import { mirage } from 'ldrs';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function SearchPane() {
  const {
    allProductsIsLoading: isLoading,
    allProductsIsError: isError,
    allProducts,
    addItemToCart,
  } = useContext(ProductsContext);

  const { search } = useParams();

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

  const fuseOptions = {
    minMatchCharLength: 1,
    threshold: 0.4,
    keys: ['title', 'description'],
  };
  const fuse = allProducts
    ? new Fuse(allProducts, fuseOptions)
    : new Fuse([], fuseOptions);
  const searchResults = fuse.search(search);
  const matchingProducts = searchResults.map((result) => {
    return result.item;
  });

  return (
    <div id="products-wrapper" className="content-wrapper">
      {matchingProducts.map(({ id, ...props }) => (
        <Product key={id} id={id} handleAdd={addItemToCart} {...props} />
      ))}
    </div>
  );
}

export default SearchPane;
