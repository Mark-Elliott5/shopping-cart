import Product from './Product.jsx';
import { mirage } from 'ldrs';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function CategoryPane() {
  const { categoryProducts, addItemToCart } = useContext(ProductsContext);

  const { name } = useParams();

  const {
    data: products,
    isLoading,
    isError,
  } = categoryProducts[name] !== undefined
    ? categoryProducts[name]
    : { data: undefined, isLoading: true, isError: undefined };

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
    return <p>Error!</p>;
  }

  return (
    <div id="products-wrapper" className="content-wrapper">
      {products.map(({ id, ...props }) => (
        <Product key={id} id={id} handleAdd={addItemToCart} {...props} />
      ))}
    </div>
  );
}

export default CategoryPane;
