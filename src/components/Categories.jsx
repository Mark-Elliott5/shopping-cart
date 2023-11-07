import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { Link } from 'react-router-dom';

function Categories() {
  const {
    allCategories,
    allCategoriesIsLoading: isLoading,
    allCategoriesIsError: isError,
  } = useContext(ProductsContext);

  const loadingHTML = <p>Loading...</p>;
  const errorHTML = <p>Error!</p>;

  return (
    <div id="categories-wrapper" className="content-wrapper">
      <p id="categories-title">Categories</p>
      <ul id="categories">
        {isLoading
          ? loadingHTML
          : isError
          ? errorHTML
          : allCategories.map((category) => (
              <Link key={category} to={`/category/${category}`}>
                <li className="category">{category}</li>
              </Link>
            ))}
      </ul>
    </div>
  );
}

export default Categories;
