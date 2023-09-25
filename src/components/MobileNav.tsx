// icons
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeSlideleft } from "../../animations";

const MobileNav = ({
  setIsOpen,
  properties,
  services,
  pricing,
  footer,
}: any) => {
  const scroll = (section: any) => {
    if (section) {
      section.current.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };
  return (
    <motion.div
      variants={fadeSlideleft}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3 }}
      className="h-full z-10 absolute top-0 right-0 w-2/4 pr-2 bg-[rgba(255,255,255,0.7)] backdrop-blur-sm"
    >
      <div className="w-full h-[75px] flex items-center pl-4">
        <div onClick={() => setIsOpen(false)}>
          <AiOutlineClose size={30} />
        </div>
      </div>
      <ul className="w-full text-right flex flex-col gap-5 text-xl mt-10">
        <li onClick={() => scroll(services)}>Služby</li>
        <li onClick={() => scroll(properties)}>O nás</li>
        <li onClick={() => scroll(footer)}>Kontakt</li>
        <li onClick={() => scroll(pricing)}>Cenník</li>
      </ul>
    </motion.div>
  );
};

export default MobileNav;
