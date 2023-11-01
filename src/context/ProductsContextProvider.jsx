import { createContext } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  useAllProducts,
  useAllCategories,
  useInCategory,
} from '../fetchFunctions';

const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const { data: allProducts } = useAllProducts();
  const { data: allCategories } = useAllCategories();

  const dynamicData = useInCategory(allCategories || []);
  const dataArray = dynamicData?.map((result) => result.data);
  const categoryProducts = dataArray
    ? dataArray.reduce((obj, data, index) => {
        obj[`${allCategories[index]}`] = data;
        return obj;
      }, {})
    : null;

  const { productPaneData, setProductPaneData } = useState(allProducts);
  const { categories } = useState(allCategories);

  function updateProducts(input) {
    setProductPaneData(input);
  }

  function displayProductsInCategory(category) {
    setProductPaneData(categoryProducts[category]);
  }

  return (
    <ProductsContext.Provider
      value={{
        updateProducts,
        displayProductsInCategory,
        categories,
        productPaneData,
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
