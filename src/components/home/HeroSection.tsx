import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image2 from "../../assets/hero2.webp";
import Image3 from "../../assets/hero1.webp";
import Navbar from "../Navbar";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  cta1Link: string;
  cta2Link: string;
}

const BorderOverlay = () => (
  <div className="absolute inset-0 z-40 pointer-events-none p-[64px] lg:block hidden">
    <svg
      viewBox="0 0 1790 819"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%" }}
    >
      <path
        d="M1758 0C1775.67 0 1790 14.3269 1790 32V505H1786V32C1786 16.536 1773.46 4 1758 4H32C16.536 4 4 16.536 4 32V787C4 802.464 16.536 815 32 815H648.542V819H32C14.3269 819 0 804.673 0 787V32C0 14.3269 14.3269 0 32 0H1758Z"
        fill="white"
        fill-opacity="0.16"
      />
    </svg>
  </div>
);

const slides: Slide[] = [
  {
    image: Image3,
    title: "Prepare for the future Today",
    subtitle:
      "Explore the Magnificent of Farmplify. Our suite of services,  from investment management to global impact, is tailored to deliver security, growth, and sustainability for your agribusiness and investment success",
    cta1: "Request a Demo",
    cta2: "Sign Up",
    cta1Link: "#",
    cta2Link: "#",
  },
  // {
  //   image: Image1,
  //   title: "Graze More,<br/> Hassle Less",
  //   subtitle: "Access the tools, tips, and tech you need to thrive.",
  //   cta1: "Request a Demo",
  //   cta2: "Sign Up",
  //   cta1Link: "#",
  //   cta2Link: "#",
  // },
  {
    image: Image2,
    title: "Investing with Purpose and Impact",
    subtitle:
      "At Farmplify, we go beyond managing agricultural investments and assets, we embed Environmental, Social, and Governance (ESG) principles into every portfolio we design and every agribusiness we manage. Our ESG framework ensures that investor capital not only delivers strong financial returns but also creates measurable impact for people, communities, and the planet.  Our commitment is built on three pillars of purpose-driven investment:",
    cta1: "Request a Demo",
    cta2: "Sign Up",
    cta1Link: "#",
    cta2Link: "#",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = (): void => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (): void => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // const goToSlide = (index: number): void => {
  //   setDirection(index > currentIndex ? "right" : "left");
  //   setCurrentIndex(index);
  // };

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : ("-100%" as const),
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        ease: "easeInOut" as const,
        duration: 0.6,
      },
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : ("100%" as const),
      opacity: 0,
      transition: {
        type: "tween" as const,
        ease: "easeInOut" as const,
        duration: 0.6,
      },
    }),
  };

  // Variants for text animation
  const textVariants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* <nav className="absolute  w-full z-30  mx-auto px-[128px] pt-[128px]">
        <div className=" mx-auto px-4 grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <img src={Logo} alt="Logo" className="h-[50px]" />
          </div>

          <div className="flex justify-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-green-300 text-sm font-medium uppercase tracking-widest"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-green-300 text-sm font-medium uppercase tracking-widest"
            >
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-green-300 text-sm font-medium uppercase tracking-widest"
            >
              CORE SERVICES
            </Link>
          </div>
          <div className="justify-self-end"></div>
        </div>
      </nav> */}
      <Navbar />

      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="false"
          animate="center"
          exit="exit"
          transition={{
            type: "keyframes",
            stiffness: 20,
            damping: 5,
            mass: 0.1,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          dragMomentum={false}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipePower = Math.abs(offset.x) * velocity.x;
            if (swipePower < -5000) {
              handleNext();
            } else if (swipePower > 5000) {
              handlePrev();
            }
          }}
          className="absolute inset-0 w-full h-full z-10 cursor-grab active:cursor-grabbing "
        >
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover object-[75%_30%] pointer-events-none"
          />

          {/* Text Content */}
          <div className="absolute lg:bottom-[41px] bottom-14 lg:right-[70px] lg:max-w-[55%] flex justify-self-center z-40">
            <div className="container flex justify-end px-5 text-white">
              <div className="">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`title-${currentIndex}`}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ delay: 0.2 }}
                    className="mb-4"
                  >
                    <h1
                      className="lg:text-[82px] text-[52px] font-semibold mb-2 drop-shadow-lg tracking-[-0.01em] leading-[93%] text-left"
                      dangerouslySetInnerHTML={{
                        __html: slides[currentIndex].title,
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`subtitle-${currentIndex}`}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-sm font-medium md:text-[20px] text-left">
                      {slides[currentIndex].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <BorderOverlay />

      {/* Navigation dots - above border */}
      {/* <div className="absolute bottom-[172px] lg:flex hidden w-full justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all bg-white ${
              index === currentIndex ? " w-20" : " opacity-50 w-6"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HeroCarousel;
