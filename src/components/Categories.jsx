import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { v4 as uuid } from 'uuid';

function Categories() {
  const {
    allCategories,
    allCategoriesIsLoading: isLoading,
    allCategoriesIsError: isError,
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
              <li key={key} className="category">
                {name}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Categories;
