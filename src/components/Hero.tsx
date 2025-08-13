import { motion } from "framer-motion";
import Image from "../assets/bg-green.svg";
import Tape from "./Tape";

interface HeroProps {
  text: string;
  head: string;
  subHead: string;
}

const Hero = ({ text, head, subHead }: HeroProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="items-center flex flex-col lg:px-20 px-5 pb-[100px] mx-auto relative"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <motion.div
        className="lg:mt-[200px] mt-105 text-center max-w-[900px]"
        variants={container}
      >
        <motion.div variants={item}>
          <Tape text={text} />
        </motion.div>

        <motion.p
          className="lg:text-7xl text-[50px] pt-10 leading-[93%] font-semibold text-[#1F3C15]"
          variants={item}
        >
          {head}
        </motion.p>

        <motion.p
          className="mt-6 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto"
          variants={item}
        >
          {subHead}
        </motion.p>

        <motion.div variants={item}>
          <motion.button
            className="mt-10 bg-[#30C67C] text-white font-semibold text-sm tracking-[0.2em] px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Call
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
