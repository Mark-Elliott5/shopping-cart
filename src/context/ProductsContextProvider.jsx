import { createContext, useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  useAllProducts,
  useAllCategories,
  useInCategory,
} from '../fetchFunctions';

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
  const dataArray = dynamicData?.map((result) => result.data);
  const categoryProducts = dataArray
    ? dataArray.reduce((obj, data, index) => {
        obj[`${allCategories[index]}`] = data;
        return obj;
      }, {})
    : null;

  const [productPaneData, setProductPaneData] = useState([]);
  console.log(productPaneData);

  // function updateProducts(input) {
  //   setProductPaneData(input);
  // }

  function displayProductsInCategory(category) {
    setProductPaneData(categoryProducts[category]);
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
        productPaneData,
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
