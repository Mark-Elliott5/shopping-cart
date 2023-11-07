import Product from './Product.jsx';
import { ProductsContext } from '../context/ProductsContextProvider';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function CategoryPane() {
  const { categoryProducts } = useContext(ProductsContext);

  const { name } = useParams();

  const {
    data: products,
    isLoading,
    isError,
  } = categoryProducts[name] !== undefined
    ? categoryProducts[name]
    : { data: undefined, isLoading: true, isError: undefined };

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

  return (
    <div id="products-wrapper" className="content-wrapper">
      {isLoading
        ? loadingHTML
        : isError
        ? errorHTML
        : products.map(({ id, ...props }) => (
            <Product key={id} id={id} {...props} />
          ))}
    </div>
  );
}

export default CategoryPane;
