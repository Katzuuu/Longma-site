// components
import Slide from "./Slide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
// icons
import { RiFileList3Line } from "react-icons/ri";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdMiscellaneousServices } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

const sliderData = [
  {
    text: [
      "Vedenie účtovníctva pre právnické a fyzické osoby",
      "Preverenie účtovníctva za minulé obdobia",
      "Zabezpečenie vykázania účtovnej",
      "Uzávierky v zmysle IFR",
      "Spracovanie účtovnej závierky",
    ],
    icon: HiOutlineOfficeBuilding,
    header: "Účtovníctvo",
  },
  {
    text: [
      "Daňové priznanie k DPH podľa §7a",
      "Daňové priznanie k DPH podľa §4",
      "Kontrolný výkaz k DPH",
      "Súhrnný výkaz k DPH",
      "Daňové priznanie k dani z príjmov",
    ],
    icon: FaRegMoneyBill1,
    header: "Dane",
  },
  {
    text: [
      "Mzdové účtovníctvo a personalistika",
      "Registráciu Vašich zamestnancov na príslušných úradoch",
      "Výpočet miezd zamestnancov a vyhotovenie výplatných pások",
      "Vykázanie spracovaných miezd na príslušných úradoch",
      "Komunikácia s úradmi",
    ],
    icon: TbMoneybag,
    header: "Mzdy",
  },
  {
    text: [
      "Štatistické výkazy",
      "Podklady na žiadosť o úver",
      "Vypracovanie účtovných smerníc",
      "Rekonštrukcia účtovníctva",
      "Vyhotovenie cestovných príkazov vrátane dokumentácie",
    ],
    icon: RiFileList3Line,
    header: "Administratívne <br />služby",
  },
  {
    text: [
      "Podnikateľské a účtovné poradenstvo",
      "Daňové priznanie k dani z príjmov fyzických osôb TYP A",
      "Daňové priznanie k dani z nehnuteľností",
    ],
    icon: MdMiscellaneousServices,
    header: "Ostatné <br /> služby",
  },
];

const ServiceSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          1150: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        navigation={true}
        direction={"horizontal"}
        modules={[Pagination, Mousewheel]}
        className="2xl:w-[80%] w-full active:cursor-grab overflow-y-visible p-2 mySwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="2xl:max-w-[450px]">
            <Slide text={slide.text} icon={slide.icon} header={slide.header} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ServiceSwiper;
