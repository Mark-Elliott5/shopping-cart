import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
// import searchSVG from '../assets/search.svg';

function Searchbar() {
  const { searchProducts } = useContext(ProductsContext);

  return (
    <form
      id="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        searchProducts(formData.get('query'));
      }}
    >
      <input
        id="search-bar"
        placeholder="Search..."
        name="query"
        aria-label="Search Query"
      />
      <input type="submit" id="submit-search" />
    </form>
  );
}

export default Searchbar;
