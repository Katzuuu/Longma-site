import { motion } from "framer-motion";
import { image, slideFromLeft, slideUp } from "../../animations";
import mainImage from "/public/uctovnici.jpg";

const ImageSection = () => {
  return (
    <div className="relative h-[calc(100%-75px)] w-full bg-transparent">
      <motion.div
        variants={slideFromLeft}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
        className="absolute bottom-2 left-0 w-full lg:w-fit bg-[rgba(229,231,235,0.7)] backdrop-blur-lg px-8 py-4 tracking-wider shadow-xl"
      >
        <div className="overflow-hidden">
          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:text-7xl sm:text-5xl text-3xl font-thin text-center lg:text-left"
          >
            Potrebujete pomôcť
            <br /> s účtovníctvom?
          </motion.p>
        </div>
      </motion.div>
      <motion.img
        variants={image}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover object-center fixed top-0 -z-10"
        src={mainImage}
        alt="team"
      />
    </div>
  );
};

export default ImageSection;
