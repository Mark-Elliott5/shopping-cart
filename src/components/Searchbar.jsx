// import { useContext } from 'react';
import PropTypes from 'prop-types';

function Searchbar({ handleSearch }) {
  return (
    <form
      id="search-form"
      onClick={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input id="search-bar" aria-label="Search Query" />
      <input type="submit" id="submit-search" />
    </form>
  );
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
