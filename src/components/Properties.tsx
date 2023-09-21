// icons
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsHourglass } from "react-icons/bs";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import PropertyItem from "./PropertyItem";

const data = [
  {
    icon: FaRegEye,
    text: "Transpoarentné<br /> poplatky",
  },
  {
    icon: LiaHandsHelpingSolid,
    text: "Dôvera<br /> a profesionálny<br /> prístup",
  },
  {
    icon: BsHourglass,
    text: "Prehľad<br /> účtovných<br/> termínov",
  },
  {
    icon: VscWorkspaceTrusted,
    text: "Konkrétnosť<br /> a diskrétnosť",
  },
];

const Properties = () => {
  return (
    <div className="h-[65%] w-full flex items-center justify-center flex-col select-none bg-[rgba(229,231,235,0.7)] shadow-xl shadow-gray-200 backdrop-blur-lg relative">
      <h2 className="text-5xl tracking-wider">Prečo práve Longma?</h2>
      <div className="w-[45%] h-[2px] rounded-full bg-black mt-6 mb-20" />
      <div className="flex text-center justify-between w-full max-w-6xl">
        {data.map((item, index) => (
          <PropertyItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
