import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image1 from "../assets/hero.jpg";
import Image2 from "../assets/hero2.jpg";
import Border from "../assets/border.svg";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: Image1,
    title: "First Slide Title",
    subtitle: "This is the first hero slide",
    cta: "Learn More",
    ctaLink: "#",
  },
  {
    image: Image2,
    title: "Second Amazing Offer",
    subtitle: "Special promotion just for you",
    cta: "Shop Now",
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
    <div className="relative h-screen  w-full overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          //   variants={slideVariants}
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
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Text Content Container */}
          <div className="absolute inset-0 flex items-center justify-center">
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
                  <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                    {slides[currentIndex].title}
                  </h1>
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
                  <p className="text-xl md:text-2xl max-w-2xl drop-shadow-lg">
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
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href={slides[currentIndex].ctaLink}
                    className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {slides[currentIndex].cta}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 flex w-full justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute my-10 mx-10">
        <img src={Border} alt="Border" className="w-screen " />
      </div>
    </div>
  );
};

export default HeroCarousel;
