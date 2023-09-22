// components
import Logo from "./Logo";
// animations
import { motion } from "framer-motion";
import { slideDown } from "../../animations";
// icons
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = ({ properties, services, pricing, footer, setIsOpen }: any) => {
  const scroll = (section: any) => {
    if (section) {
      section.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <motion.nav
      variants={slideDown}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between h-[75px] padding pr-0 shadow-xl overflow-hidden bg-white"
    >
      <Logo />
      <motion.ul
        variants={slideDown}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
        className="items-center h-full select-none md:flex hidden"
      >
        <li onClick={() => scroll(services)} className="li-hover">
          Služby
        </li>
        <li onClick={() => scroll(properties)} className="li-hover">
          O nás
        </li>
        <li
          onClick={() => {
            scroll(footer);
          }}
          className="li-hover"
        >
          Kontakt
        </li>
        <li className="relative h-full flex items-center group overflow-hidden">
          <div
            onClick={() => scroll(pricing)}
            className="absolute bg-[#4181BA] top-0 -left-full w-full h-full group-hover:left-0 transition-all duration-300"
          />
          <span className="z-10 group-hover:text-white group-hover:text-lg transition-all duration-300 delay-75 pointer-events-none">
            Cenník
          </span>
        </li>
      </motion.ul>
      <motion.div
        variants={slideDown}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="md:hidden block pr-6 hover:cursor-pointer"
      >
        <RxHamburgerMenu size={30} />
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
