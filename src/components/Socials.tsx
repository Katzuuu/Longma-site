// icons
import { AiOutlineInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center gap-3 text-white/95">
      <a
        href="https://www.instagram.com/longma__/?fbclid=IwAR36TEgj9l0Kf1vyjsBJUq1kOW7UeRAMM9mvAZUGrT9h_ZRGNphM29U35_4"
        className="hover:text-[#4181BA] transition-colors duration-300 cursor-pointer"
      >
        <AiOutlineInstagram size={40} />
      </a>
    </div>
  );
};

export default Socials;
