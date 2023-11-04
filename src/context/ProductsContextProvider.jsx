import { createContext, useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  useAllProducts,
  useAllCategories,
  useInCategory,
} from '../fetchFunctions';
import Fuse from 'fuse.js';

const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const {
    data: allProducts,
    isLoading: allProductsIsLoading,
    isError: allProductsIsError,
  } = useAllProducts();
  const {
    data: allCategories,
    isLoading: allCategoriesIsLoading,
    isError: allCategoriesIsError,
  } = useAllCategories();

  const dynamicData = useInCategory(allCategories || []);
  const dataArray = dynamicData.map((result) => result.data);
  const categoryProducts = dataArray.reduce((obj, data, index) => {
    obj[`${allCategories[index]}`] = data;
    return obj;
  }, {});

  const [productPaneData, setProductPaneData] = useState([]);

  function displayProductsInCategory(category) {
    setProductPaneData(categoryProducts[category]);
  }

  function searchProducts(query) {
    if (query.trim() === '') {
      setProductPaneData(allProducts);
      return;
    }
    const fuseOptions = {
      minMatchCharLength: 2,
      threshold: 0.4,
      keys: ['title', 'description'],
    };
    const fuse = new Fuse(allProducts, fuseOptions);
    const searchResults = fuse.search(query);
    const products = searchResults.map((result) => {
      return result.item;
    });
    setProductPaneData(products);
  }

  useEffect(() => {
    if (allProducts) {
      setProductPaneData(allProducts);
    }
  }, [allProducts]);

  return (
    <ProductsContext.Provider
      value={{
        displayProductsInCategory,
        searchProducts,
        productPaneData,
        allProducts,
        allProductsIsLoading,
        allProductsIsError,
        allCategories,
        allCategoriesIsLoading,
        allCategoriesIsError,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductsContextProvider, ProductsContext };
