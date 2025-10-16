import { motion } from "framer-motion";
import Bg from "../assets/grow.webp";

const Grow = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemFromBottom = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="lg:py-24 lg:px-20 max-w-[1600px] m-auto"
    >
      <motion.div
        className="lg:rounded-full grow h-[511px] text-center flex flex-col justify-center items-center lg:p-0 p-8"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(48, 198, 124, 0) -36.99%, rgba(48, 198, 124, 0.9) 93.84%), url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.p
          variants={itemFromBottom}
          className="font-semibold lg:text-7xl text-[40px] text-white leading-[93%]"
        >
          Ready to Grow Your <br /> Income with Farmplify?
        </motion.p>

        <motion.p
          variants={itemFromBottom}
          className="lg:text-xl text-sm font-medium text-white mt-6 max-w-[626px]"
        >
          Unlock secure, high-yield investment opportunities in African
          agriculture. Your growth starts here.
        </motion.p>

        <motion.button
          variants={itemFromBottom}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 bg-white text-[#1F3C15] font-semibold text-sm tracking-[0.2em] px-6 py-3 rounded-full shadow-md transition uppercase"
        >
          Request a Demo
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Grow;
