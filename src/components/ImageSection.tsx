import { motion } from "framer-motion";
import { image } from "../../animations";

const ImageSection = () => {
  return (
    <div className="h-full w-full bg-transparent">
      <motion.img
        variants={image}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover fixed top-0 -z-10"
        src="public/uctovnici.jpg"
        alt="team"
      />
    </div>
  );
};

export default ImageSection;
