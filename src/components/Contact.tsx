// icons
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="tracking-wider">
      <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
        <MdAlternateEmail size={20} />
        <a
          href="mailto: dlongauer@gmail.com"
          className="hover:underline cursor-pointer"
        >
          dlongauer@gmail.com
        </a>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
        <BsTelephoneForward size={20} />
        <a href="tel:0907593975" className="hover:underline cursor-pointer">
          +421 907 593 975
        </a>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
        <BsTelephoneForward size={20} />
        <a href="tel:0919195984" className="hover:underline cursor-pointer">
          +421 919 195 984
        </a>
      </div>
    </div>
  );
};

export default Contact;
