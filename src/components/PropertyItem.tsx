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
    <div>
      <div className="w-fit mx-auto mb-6 text-orange-400">
        <Icon size={45} />
      </div>
      <span className=" max-w-[100px]">{Parser(text)}</span>
    </div>
  );
};

export default PropertyItem;
