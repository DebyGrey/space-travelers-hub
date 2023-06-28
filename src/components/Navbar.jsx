import Logo from './Logo';
import NavMenu from './NavMenu';

const Navbar = () => {
  const urls = [
    { id: 1, name: 'Rockets', path: '/' },
    { id: 2, name: 'Missions', path: 'missions' },
    { id: 3, name: 'My-profile', path: 'my-profile' },
  ];
  return (
    <div className="px-[3.2rem] font-manrope">
      <div className="border-b flex justify-between items-center px-[1.8rem] py-[1.5rem]">
        <Logo />
        <nav className="nav-left ">
          <ul className="flex justify-end items-center">
            {urls.map((url) => (
              <NavMenu key={url.id} path={url.path} name={url.name} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
