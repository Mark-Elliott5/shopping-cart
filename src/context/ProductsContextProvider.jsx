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
  const perCategoryDataArray = perCategoryData.map((result) => {
    return {
      data: result.data,
      isLoading: result.isLoading,
      isError: result.isError,
    };
  });
  const categoryProducts = perCategoryDataArray.reduce(
    (obj, properties, index) => {
      obj[`${allCategories[index]}`] = properties;
      return obj;
    },
    {}
  );

  const [cart, setCart] = useState({});

  // example cart:
  // const cartExample = {
  //   1: {
  //     id: 1,
  //     image: 'imageURL',
  //     price: 29.99,
  //     title: 'Shirt',
  //     quantity: 2,
  //   },
  //   2: {
  //     id: 2,
  //     image: 'imageURL2',
  //     price: 9.99,
  //     title: 'Pants',
  //     quantity: 1,
  //   },
  // };

  function addItemToCart(id) {
    let newItem;
    if (!cart[id]) {
      newItem = { ...allProducts[id - 1], quantity: 1 };
    } else {
      newItem = {
        ...cart[id],
        quantity: cart[id]['quantity'] + 1,
      };
    }
    setCart({ ...cart, [id]: newItem });
  }

  function purchaseItems() {
    setCart({});
  }

  function removeItemFromCart(id) {
    const newItem = { ...cart[id], quantity: cart[id]['quantity'] - 1 };
    if (newItem['quantity'] !== 0) {
      setCart({ ...cart, [id]: newItem });
      return;
    }
    delete cart[id];
    setCart({ ...cart });
  }

  return (
    <ProductsContext.Provider
      value={{
        addItemToCart,
        purchaseItems,
        removeItemFromCart,
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
