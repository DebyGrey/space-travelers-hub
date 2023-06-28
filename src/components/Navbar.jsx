import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const urls = [
    { id: 1, name: 'Rockets', path: '/' },
    { id: 2, name: 'Missions', path: 'missions' },
    { id: 3, name: 'My-profile', path: 'my-profile' },
  ];
  return (
    <>
      <div className="navbar border flex justify-between items-center px-[5rem] py-[2rem]">
        <h1>Space Travelers&apos; Hub</h1>
        <nav className="nav-left ">
          <ul className="flex justify-end items-center gap-x-4">
            {urls.map((url) => (
              <li key={url.id}>
                <NavLink
                  to={url.path}
                  className={({ isActive }) => (isActive
                    ? 'text-blue-600 underline'
                    : 'text-blue-600')}
                >
                  {url.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
