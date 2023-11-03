import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import PropTypes from 'prop-types';
// import searchSVG from '../assets/search.svg';

function Searchbar() {
  const { searchProducts } = useContext(ProductsContext);

  return (
    <form
      id="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        // handleSearch(e.);
        const formData = new FormData(e.target);
        // console.log(formData.get('query'));
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

Searchbar.propTypes = {};

export default Searchbar;
