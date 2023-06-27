import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navbar">
      <div className="nav-left">
        <h1>Space Travelers&apos; Hub</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="missions">Missions</NavLink>
            </li>
            |
            <li>
              <NavLink to="my-profile">My Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
);
export default Navbar;
