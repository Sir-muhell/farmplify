import { motion } from "framer-motion";
import Tape from "./Tape";
import Bg from "../assets/bg.webp";

interface ServicesProps {
  title: string;
  tapeText?: string;
  why?: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  offerings: Array<{
    title: string;
    description?: string;
    image: string;
    imagePosition: "left" | "right";
    bulletPoints?: string[];
  }>;
  className?: string;
}

const Services = ({
  title,
  tapeText,
  why,
  features,
  offerings,
  className = "",
}: ServicesProps) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const itemFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  const featureItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-[1600px] mx-auto lg:px-20 p-2 lg:pb-[66px] pb-[56px]"
      >
        <motion.div
          variants={fadeIn}
          className="bg-[#EBFAF2] rounded-[32px] pt-12 lg:px-[170px] lg:pb-[134px] pb-[70px] px-6"
        >
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center"
          >
            {tapeText && <Tape text={tapeText} />}
            <motion.p
              variants={itemFromLeft}
              className="mt-6 font-semibold lg:text-[56px] text-[35px] leading-[92%] text-[#1F3C15] text-center"
            >
              {title}
            </motion.p>
          </motion.div>

          <motion.div variants={container} className="lg:mt-[64px]">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? itemFromLeft : itemFromRight}
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[70px] lg:last:mt-10 gap-6"
              >
                {/* Mobile: Always show image first */}
                {offering.image && (
                  <motion.div className="lg:hidden mt-14">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-[20px] max-h-[200px] w-full h-auto object-cover"
                    />
                  </motion.div>
                )}

                {/* Desktop: Conditional image position */}
                {offering.image && offering.imagePosition === "left" && (
                  <motion.div className="hidden lg:block">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-[20px] max-h-[200px] w-full h-auto object-cover"
                    />
                  </motion.div>
                )}

                {/* Text content */}
                <motion.div
                  className={`flex flex-col lg:pt-[51px] lg:text-left text-center ${
                    offering.imagePosition === "right" ? "lg:pt-[51px]" : ""
                  }`}
                >
                  <motion.p className="text-[28px] font-semibold text-[#1F3C15] leading-[100%] tracking-[-0.01em]">
                    {offering.title}
                  </motion.p>

                  {/* Description if exists */}
                  {offering.description && (
                    <motion.p className="text-[#616161] text-base font-medium mt-4">
                      {offering.description}
                    </motion.p>
                  )}

                  {/* Bullet points if exists */}
                  {offering.bulletPoints && (
                    <motion.ul className="mt-4">
                      {offering.bulletPoints.map((point, i) => {
                        const parts = point.split(": ");
                        return (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-start text-[#616161] text-base font-medium ${
                              offering.description && "ml-4"
                            }`}
                          >
                            <span className="mx-3">•</span>
                            {parts.length > 1 ? (
                              <p className="">
                                <span className="font-semibold">
                                  {parts[0]}:
                                </span>{" "}
                                {parts.slice(1).join(": ")}
                              </p>
                            ) : (
                              point
                            )}
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  )}
                </motion.div>

                {/* Desktop: Conditional right image */}
                {offering.image && offering.imagePosition === "right" && (
                  <motion.div className="hidden lg:block lg:pt-[51px]">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="rounded-[20px] max-h-[200px] w-full h-auto object-cover"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className={`max-w-[1600px] mx-auto lg:px-20 p-8 lg:py-[76px] relative overflow-hidden ${className}`}
      >
        <motion.p
          variants={itemFromLeft}
          className="font-semibold lg:text-[56px] text-[40px] text-[#1F3C15] lg:w-[627px] leading-[93%] lg:ml-5"
        >
          {why}
        </motion.p>

        <motion.div
          variants={container}
          className="lg:mt-[108px] mt-14 grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-5 lg:gap-16 gap-6 z-40"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureItem}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col transition duration-300"
            >
              <div className="w-[56px] h-[56px] bg-[#EBFAF2] rounded-full items-center justify-center flex">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[32px] h-[32px]"
                />
              </div>
              <p className="text-[#1F3C15] text-[28px] font-semibold mt-8 leading-[100%] tracking-[0.02em]">
                {feature.title}
              </p>
              <p className="text-[#616161] text-[16px] font-medium mt-4 leading-[130%] tracking-[-0.01em]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute -top-[500px] -right-[400px] w-full h-full z-10 pointer-events-none"
        >
          <img
            src={Bg}
            alt="Background"
            className="mix-blend-hard-light rotate-[53.23deg] object-cover"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
