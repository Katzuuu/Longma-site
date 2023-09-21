import React from "react";
// components
import Slide from "./Slide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { FaRegMoneyBill1 } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

const sliderData = [
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
        className="w-[80%] active:cursor-grab overflow-y-visible p-2 mySwiper"
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
