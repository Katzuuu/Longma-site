// components
import ServiceSwiper from "./ServiceSwiper";

const Services = () => {
  return (
    <div className="h-[90%] flex flex-col justify-center items-start px-20 select-none bg-white">
      <h2 className="text-[40px] tracking-wider mb-20 ml-[130px] fon">
        Služby, ktoré sú
        <br /> u nás samozrejmosťou{" "}
        <span className="text-[#4181BA] text-5xl">.</span>
      </h2>
      <ServiceSwiper />
    </div>
  );
};

export default Services;
