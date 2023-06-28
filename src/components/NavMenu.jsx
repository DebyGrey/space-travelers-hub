import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavMenu = ({ path, name }) => (
  <li className="last:border-l h-auto py-0 border-gray-400 px-2">
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? 'text-blue-600 underline' : 'text-blue-600')}
    >
      {name}
    </NavLink>
  </li>
);
export default NavMenu;

NavMenu.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
