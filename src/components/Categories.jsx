import { v4 as uuid } from 'uuid';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { Link } from 'react-router-dom';

function Categories() {
  const {
    allCategories,
    allCategoriesIsLoading: isLoading,
    allCategoriesIsError: isError,
    displayProductsInCategory,
  } = useContext(ProductsContext);
  const categoriesWithKeys =
    allCategories?.map((category) => ({
      name: category,
      key: uuid(),
    })) || [];

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
          : categoriesWithKeys.map(({ name, key }) => (
              <Link
                key={key}
                to={`/category/${name}`}
                onClick={() => {
                  displayProductsInCategory(name);
                }}
              >
                <li className="category">{name}</li>
              </Link>
            ))}
      </ul>
    </div>
  );
}

export default Categories;
