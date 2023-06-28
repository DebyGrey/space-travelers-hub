import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navbar border flex justify-between items-center px-[5rem] py-[2rem]">
      <h1>Space Travelers&apos; Hub</h1>
      <nav className="nav-left ">
        <ul className="flex justify-end items-center gap-x-4">
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
  </>
);
export default Navbar;
