import Logo from './Logo';
import NavMenu from './NavMenu';

const Navbar = () => {
  const urls = [
    { id: 1, name: 'Rockets', path: '/' },
    { id: 2, name: 'Missions', path: 'missions' },
    { id: 3, name: 'My-profile', path: 'my-profile' },
  ];
  return (
    <>
      <div className="navbar border flex justify-between items-center px-[5rem] py-[1rem]">
        <Logo />
        <nav className="nav-left ">
          <ul className="flex justify-end items-center">
            {urls.map((url) => (
              <NavMenu key={url.id} path={url.path} name={url.name} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
