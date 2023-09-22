import React from "react";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

const sliderData = [
  {
    text: "Poskytujeme poradenstvo pre začínajúcich podnikateľov. Pomôžeme vám so založením základných obchodných spločností, ale aj zorientovať sa vo veľkom množstve právnych predpisov.",
    icon: RiFileList3Line,
    header: "Ekonomické <br /> poradenstvo",
  },
  {
    text: "Vedieme pravidelnú mzdovú agendu, spracúvame mesačné výkazy pre štátne inštitúcie. Zabezpečujeme personalistiku, najmä pracovné zmluvy, evidenciu v poisťovniach, výplatné pásky či odborné poradenstvo v mzdovej a personálnej oblasti.",
    icon: TbMoneybag,
    header: "Mzdová <br /> evidencia",
  },
  {
    text: "Zabezpečujeme vedenie jednoduchého a podvojného účtovníctva a daňovej evidencie. Kontrolujeme správnosť odovzdaných  dokladov, pripravujeme ročné účtovné závierky a pravidelne informujeme klientov o ich účtovnom stave.",
    icon: HiOutlineOfficeBuilding,
    header: "Účtovníctvo pre <br /> živnostníkov a firmy",
  },
  {
    text: "Zabezpečujeme vedenie jednoduchého a podvojného účtovníctva a daňovej evidencie. Kontrolujeme správnosť odovzdaných dokladov, pripravujeme ročné účtovné závierky a pravidelne informujeme klientov o ich účtovnom stave.",
    icon: FaRegMoneyBill1,
    header: "Daňové <br /> poradenstvo",
  },
  {
    text: "Zabezpečujeme vedenie jednoduchého a podvojného účtovníctva a daňovej evidencie. Kontrolujeme správnosť odovzdaných dokladov, pripravujeme ročné účtovné závierky a pravidelne informujeme klientov o ich účtovnom stave.",
    icon: FaRegMoneyBill1,
    header: "Daňové <br /> poradenstvo",
  },
];

const ServiceSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
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
          <React.Fragment key={index}>
            <SwiperSlide className="max-w-[450px]">
              <Slide
                text={slide.text}
                icon={slide.icon}
                header={slide.header}
              />
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </>
  );
};

export default ServiceSwiper;
