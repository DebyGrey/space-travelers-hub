import logo from '../assets/logo.png';

const Logo = () => (
  <div className="flex justify-start items-center gap-x-4">
    <img src={logo} className="h-[60px] " alt="logo" />
    <h1 className="text-3xl font-bold">
      Space Travelers&apos; Hub
    </h1>
  </div>
);
export default Logo;
