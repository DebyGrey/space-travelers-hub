import logo from '../assets/logo.png';

const Logo = () => (
  <div className="flex justify-start items-center">
    <img src={logo} className="h-[60px] gap-x-4" alt="logo" />
    <h1>Space Travelers Hub</h1>
  </div>
);
export default Logo;
