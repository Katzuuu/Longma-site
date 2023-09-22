// icons
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeSlideleft } from "../../animations";

const MobileNav = ({ setIsOpen }: any) => {
  return (
    <motion.div
      variants={fadeSlideleft}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3 }}
      className="h-full absolute top-0 right-0 w-2/4 pr-2 bg-[rgba(255,255,255,0.7)] backdrop-blur-sm"
    >
      <div className="w-full h-[75px] flex items-center pl-4">
        <div onClick={() => setIsOpen(false)}>
          <AiOutlineClose size={30} />
        </div>
      </div>
      <ul className="w-full text-right flex flex-col gap-5 text-xl mt-10">
        <li>Služby</li>
        <li>O nás</li>
        <li>Kontakt</li>
        <li>Cenník</li>
      </ul>
    </motion.div>
  );
};

export default MobileNav;
