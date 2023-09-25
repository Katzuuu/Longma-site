import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// icons
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsHourglass } from "react-icons/bs";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa";
import PropertyItem from "./PropertyItem";
import { useAnimation, useInView } from "framer-motion";
import { fadeSlideUp, line, slideUp } from "../../animations";

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

const Properties = ({ properties }: any) => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const items = useRef(null);
  const isInView = useInView(items, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("show");
      controls2.start("show");
      controls3.start("show");
    }
  }, [isInView]);
  return (
    <div
      ref={properties}
      className="h-fit p-8 md:h-[65%] w-full flex items-center justify-center flex-col select-none bg-[rgba(229,231,235,0.7)] shadow-xl shadow-gray-200 backdrop-blur-lg relative"
    >
      <div className="overflow-hidden py-2">
        <motion.h2
          variants={slideUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3 }}
          className="md:text-5xl text-2xl tracking-wider"
        >
          Prečo práve Longma?
        </motion.h2>
      </div>
      <motion.div
        variants={line}
        initial="hidden"
        animate={controls2}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="w-[45%] h-[2px] rounded-full bg-black mt-6 mb-20"
      />
      <motion.div
        variants={fadeSlideUp}
        initial="hidden"
        animate={controls3}
        transition={{ duration: 0.3, delay: 0.3 }}
        ref={items}
        className="flex text-center justify-between w-full max-w-6xl flex-wrap"
      >
        {data.map((item, index) => (
          <PropertyItem key={index} icon={item.icon} text={item.text} />
        ))}
      </motion.div>
    </div>
  );
};

export default Properties;
