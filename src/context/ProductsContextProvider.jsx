import Fuse from 'fuse.js';
import PropTypes from 'prop-types';
import {
  useAllProducts,
  useAllCategories,
  useInCategory,
} from '../fetchFunctions';
import { createContext, useState } from 'react';

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
  const [cart, setCart] = useState([]);

  function displayProductsInCategory(category) {
    setProductPaneData(categoryProducts[category]);
  }

  function displayAllProducts() {
    setProductPaneData(allProducts);
  }

  function searchProducts(query) {
    if (query.trim() === '') {
      setProductPaneData(allProducts);
      return;
    }
    const fuseOptions = {
      minMatchCharLength: 1,
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

  return (
    <ProductsContext.Provider
      value={{
        displayProductsInCategory,
        displayAllProducts,
        searchProducts,
        setCart,
        allCategories,
        allCategoriesIsLoading,
        allCategoriesIsError,
        allProducts,
        allProductsIsLoading,
        allProductsIsError,
        cart,
        categoryProducts,
        productPaneData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ProductsContextProvider, ProductsContext };
