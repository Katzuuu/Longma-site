import { IconType } from "react-icons/lib/esm/iconBase";
import Parser from "html-react-parser";

const PropertyItem = ({
  icon: Icon,
  text,
}: {
  icon: IconType;
  text: string;
}) => {
  return (
    <div className="md:w-fit w-1/2 mb-8">
      <div className="w-fit mx-auto mb-6 text-[#4181BA] md:block hidden">
        <Icon size={45} />
      </div>
      <div className="mx-auto w-fit mb-6 text-[#4181BA] md:hidden flex-1">
        <Icon size={30} />
      </div>
      <span className="md:text-base text-sm max-w-[100px]">{Parser(text)}</span>
    </div>
  );
};

export default PropertyItem;
