// icons
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="tracking-wider">
      <div className="flex items-center justify-center sm:justify-start gap-3 group cursor-pointer mb-1">
        <MdAlternateEmail size={20} />
        <span className="group-hover:underline">dlongauer@gmail.com</span>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-3 group cursor-pointer mb-1">
        <BsTelephoneForward size={20} />
        <span className="group-hover:underline">+421 907 593 975</span>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-3 group cursor-pointer mb-1">
        <BsTelephoneForward size={20} />
        <span className="group-hover:underline">+421 919 195 984</span>
      </div>
    </div>
  );
};

export default Contact;
