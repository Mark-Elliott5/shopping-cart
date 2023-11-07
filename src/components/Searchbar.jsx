import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const navigate = useNavigate();

  return (
    <form
      id="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const search = formData.get('search');
        if (search === '') {
          navigate('/');
          return;
        }
        navigate(`/search/${search}`);
      }}
    >
      <input
        id="search-bar"
        placeholder="Search..."
        name="search"
        aria-label="Search Query"
      />
      <input type="submit" id="submit-search" />
    </form>
  );
}

export default Searchbar;
