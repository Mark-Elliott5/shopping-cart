import Categories from './Categories';
import Product from './Product.jsx';
import Fuse from 'fuse.js';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function SearchPane() {
  const {
    allProductsIsLoading: isLoading,
    allProductsIsError: isError,
    allProducts,
  } = useContext(ProductsContext);

  const { query } = useParams();

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

  const fuseOptions = {
    minMatchCharLength: 1,
    threshold: 0.4,
    keys: ['title', 'description'],
  };
  const fuse = allProducts
    ? new Fuse(allProducts, fuseOptions)
    : new Fuse([], fuseOptions);
  const searchResults = fuse.search(query);
  const matchingProducts = searchResults.map((result) => {
    return result.item;
  });

  return (
    <div id="main">
      <Categories />
      <div id="products-wrapper" className="content-wrapper">
        {isLoading
          ? loadingHTML
          : isError
          ? errorHTML
          : matchingProducts.map(({ id, ...props }) => (
              <Product key={id} id={id} {...props} />
            ))}
      </div>
    </div>
  );
}

export default SearchPane;
