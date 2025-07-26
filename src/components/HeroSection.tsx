import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/hero.jpg";
import Image2 from "../assets/hero2.jpg";
import Image3 from "../assets/hero1.png";
import Logo from "../assets/logo-white.png";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
}

const BorderOverlay = () => (
  <div className="absolute inset-0 z-20 pointer-events-none p-[64px] pb-[141px]">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1286 819"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <path
        d="M1254 0C1271.67 0 1286 14.3269 1286 32V531.577H1282V32C1282 16.536 1269.46 4 1254 4H32C16.536 4 4 16.536 4 32V787C4 802.464 16.536 815 32 815H703.839V819H32L31.1738 818.989C14.1571 818.558 0.441992 804.843 0.0107422 787.826L0 787V32C0 14.3269 14.3269 2.89917e-07 32 0H1254Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  </div>
);

const slides: Slide[] = [
  {
    image: Image3,
    title: "Grow More,<br/> Stress Less.",
    subtitle: "Access the tools, tips, and tech you need to thrive.",
    cta: "Book a call",
    ctaLink: "#",
  },
  {
    image: Image1,
    title: "Graze More,<br/> Hassle Less",
    subtitle: "Access the tools, tips, and tech you need to thrive.",
    cta: "book a call",
    ctaLink: "#",
  },
  {
    image: Image2,
    title: "Plant More,<br/> Worry Less",
    subtitle: "Access the tools, tips, and tech you need to thrive.",
    cta: "book a call",
    ctaLink: "#",
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

  const goToSlide = (index: number): void => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6,
      },
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
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
      <nav className="absolute  w-full z-30  mx-auto px-[128px] pt-[128px]">
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

          {/* Right side - Empty to balance grid */}
          <div className="justify-self-end"></div>
        </div>
      </nav>
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000) {
              handleNext();
            } else if (swipe > 10000) {
              handlePrev();
            }
          }}
          className="absolute inset-0 w-full h-full z-10"
        >
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Text Content */}
          <div className="absolute bottom-[145px] right-40 ">
            <div className="container mx-auto px-4 text-white">
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
                    className="text-[82px] font-semibold mb-2 drop-shadow-lg tracking[-0.01em] leading-[93%]"
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
                  className="mb-6"
                >
                  <p className="text-xl font-medium md:text-2xl max-w-2xl ">
                    {slides[currentIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`cta-${currentIndex}`}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ delay: 0.3 }}
                  className="inline flex items-center justify-center space-x-3"
                >
                  <a
                    href={slides[currentIndex].ctaLink}
                    className="mt-10 bg-white text-[#1F3C15] font-semibold text-sm tracking-[0.2em] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase"
                  >
                    {slides[currentIndex].cta}
                  </a>
                  <a
                    href={slides[currentIndex].ctaLink}
                    className="mt-10 bg-white text-[#1F3C15] font-semibold text-sm tracking-[0.2em] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase"
                  >
                    {slides[currentIndex].cta}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <BorderOverlay />

      {/* Navigation dots - above border */}
      <div className="absolute bottom-[172px] flex w-full justify-center gap-2 z-30">
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
      </div>
    </div>
  );
};

export default HeroCarousel;
