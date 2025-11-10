import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "../assets/bg-green.svg";
import Image2 from "../assets/team.webp";
import TeamBody from "../components/about/TeamBody";
import Tape from "../components/Tape";

const Team = () => {
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
    <main className="relative mx-auto overflow-hidden">
      <Navbar />

      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="items-center flex flex-col lg:px-20 px-5 lg:pb-[129px] pb-[50px] mx-auto relative"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: isMobile ? "100%" : "150%",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="lg:mt-[200px] mt-[105px] text-center max-w-[900px]"
          variants={container}
        >
          <motion.div variants={item}>
            <Tape text="ABOUT US" textColor="#1F3C15" />
          </motion.div>

          <motion.p
            className="lg:text-7xl text-[50px] pt-10 leading-[93%] font-semibold text-[#1F3C15]"
            variants={item}
          >
            Our Team
          </motion.p>

          <motion.div
            className="mt-[46px] lg:w-[717px] w-[80%]  m-auto relative m-auto"
            variants={item}
          >
            <img
              src={Image2}
              alt="team-image"
              className=" max-h-[235px] lg:w-[717px] object-cover rounded-[8px] z-10 relative "
            />
            <div className="absolute lg:-top-10 -top-5 lg:-left-10 -left-5 w-full h-full bg-[#D2FCE6] rounded-[8px] lg:max-h-[224px] lg:max-w-[267px] max-h-[150px] max-w-[180px]"></div>
            <div className="absolute lg:-bottom-10 -bottom-5 lg:-right-10 -right-5 w-full h-full bg-[#D2FCE6] rounded-[8px] lg:max-h-[224px] lg:max-w-[267px] max-h-[150px] max-w-[180px]"></div>
          </motion.div>

          {/* <motion.div variants={item}>
          <motion.button
            className="mt-10 bg-[#30C67C] text-white font-semibold text-sm tracking-[0.2em] px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Call
          </motion.button>
        </motion.div> */}
        </motion.div>
      </motion.section>

      <TeamBody />
    </main>
  );
};

export default Team;
