import { motion } from "framer-motion";
import Tape from "../Tape";

interface HeroProps {
  text: string;
  image: string;
  color: string;
  tape: string;
}

const Hero = ({ text, image, color, tape }: HeroProps) => {
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

  const isMobile = window.innerWidth < 1024;
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="items-center flex flex-col lg:px-20 px-5 mx-auto relative"
      style={{
        backgroundColor: color,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: isMobile ? "300%" : "150%",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="lg:mt-[260px] mt-[190px] lg:mb-[158px] mb-[163px] text-center max-w-[641px]"
        variants={container}
      >
        <motion.div variants={item}>
          <Tape text={tape} textColor="#ffffff" bgColor="#FFFFFF33" />
        </motion.div>

        <motion.p
          className="lg:text-[96px] lg:mt-8 mt-10 text-[64px] leading-[93%] font-semibold text-white"
          variants={item}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
