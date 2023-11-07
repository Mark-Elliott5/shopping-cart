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

  const perCategoryData = useInCategory(allCategories || []);
  const perCategoryDataArray = perCategoryData.map((result) => result.data);
  const categoryProducts = perCategoryDataArray.reduce((obj, data, index) => {
    obj[`${allCategories[index]}`] = data;
    return obj;
  }, {});

  // const [productPaneData, setProductPaneData] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <ProductsContext.Provider
      value={{
        setCart,
        allCategories,
        allCategoriesIsLoading,
        allCategoriesIsError,
        allProducts,
        allProductsIsLoading,
        allProductsIsError,
        cart,
        categoryProducts,
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
