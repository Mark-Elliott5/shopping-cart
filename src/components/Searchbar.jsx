// import { useContext } from 'react';
import PropTypes from 'prop-types';
// import searchSVG from '../assets/search.svg';

function Searchbar({ handleSearch }) {
  return (
    <form
      id="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        id="search-bar"
        placeholder="Search..."
        aria-label="Search Query"
      />
      <input type="submit" id="submit-search" />
    </form>
  );
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
