import { IconType } from "react-icons";
import Parser from "html-react-parser";
import { BsArrowRightShort } from "react-icons/bs";

const Slide = ({
  icon: Icon,
  text,
  header,
}: {
  icon: IconType;
  text: string[];
  header: string;
}) => {
  return (
    <div className="bg-white rounded-lg h-[355px] shadow-md p-8 flex flex-col gap-4">
      <Icon className="text-[#4181BA]" size={40} />
      <div>
        <h3 className="text-2xl mb-3">{Parser(header)}</h3>
        <ul className="text-sm">
          {text.map((txt, index) => (
            <div key={index} className="mb-[2px] relative">
              <BsArrowRightShort
                size={20}
                className="absolute left-0 top-0 text-[#4181BA]"
              />
              <li>{txt}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;
