import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { Link } from 'react-router-dom';

function Categories() {
  const { allCategories, allCategoriesIsLoading: isLoading } =
    useContext(ProductsContext);

  if (isLoading) {
    return undefined;
  }

  return (
    <div id="categories-wrapper" className="content-wrapper">
      <details open>
        <summary id="categories-title">Categories</summary>
        <ul id="categories">
          {allCategories.map((category) => (
            <Link key={category} to={`/category/${category}`}>
              <li className="category">{category}</li>
            </Link>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Categories;
