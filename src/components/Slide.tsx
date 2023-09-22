import { IconType } from "react-icons";
import Parser from "html-react-parser";

const Slide = ({
  icon: Icon,
  text,
  header,
}: {
  icon: IconType;
  text: string;
  header: string;
}) => {
  return (
    <div className="bg-white rounded-lg h-[355px] shadow-md p-8 flex flex-col gap-4">
      <Icon className="text-[#4181BA]" size={40} />
      <div>
        <h3 className="text-2xl mb-3">{Parser(header)}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Slide;
