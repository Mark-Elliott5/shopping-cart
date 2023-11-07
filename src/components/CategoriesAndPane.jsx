import Categories from './Categories';
import { Outlet } from 'react-router-dom';

function CategoriesAndPane() {
  return (
    <div id="categories-and-pane">
      <Categories />
      <Outlet />
    </div>
  );
}

export default CategoriesAndPane;
