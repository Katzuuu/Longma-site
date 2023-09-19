// components
import ServiceSwiper from "./ServiceSwiper";

const Services = () => {
  return (
    <div className="h-[90%] bg-red-200 flex flex-col justify-center items-start px-20">
      <h2 className="text-4xl tracking-wider">
        Služby, ktoré sú
        <br /> u nás samozrejmosťou{" "}
        <span className="text-orange-400 text-5xl">.</span>
      </h2>
      <ServiceSwiper />
    </div>
  );
};

export default Services;
