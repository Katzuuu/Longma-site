// components
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between h-[75px] padding pr-0 shadow-xl overflow-hidden">
      <Logo />
      <ul className="flex items-center h-full">
        <li className="li-hover">Služby</li>
        <li className="li-hover">O nás</li>
        <li className="li-hover">Kontakt</li>
        <li className="relative h-full flex items-center group overflow-hidden">
          <div className="absolute bg-orange-400 top-0 -left-full w-full h-full group-hover:left-0 transition-all duration-300" />
          <span className="z-10 group-hover:text-white group-hover:text-lg transition-all duration-300 delay-75">
            Cenník
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
