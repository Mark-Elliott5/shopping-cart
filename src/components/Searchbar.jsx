import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const navigate = useNavigate();

  return (
    <form
      id="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const query = formData.get('query');
        if (query === '') {
          navigate('/');
          return;
        }
        navigate(`/query/${query}`);
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
