import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroImage1 from "../assets/hero.jpg";
import HeroImage2 from "../assets/hero.jpg";

// declare module "*.jpg" {
//   const value: string;
//   export default value;
// }

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      title: "GrazeyMore",
      subtitle: "Access the tools, tips, and tech you need to thrive.",
      bgImage: HeroImage1, // Replace with your image paths
    },
    {
      title: "HassleLess",
      subtitle: "Streamlined solutions for your business needs.",
      bgImage: HeroImage2, // Replace with your image paths
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: HeroImage1,
          }}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30" /> */}

      {/* Broken border effect */}
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L200,0 L200,200 C200,100 100,100 0,200 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative h-full flex flex-col">
        <Navbar />

        <div className="flex-1 flex items-end justify-end p-8">
          <div className="max-w-2xl text-right">
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-white mb-8">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex justify-end gap-4">
                  <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all">
                    BOOK A CALL
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all">
                    SIGN UP
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider controls */}
            <div className="flex justify-end gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white w-6"
                      : "bg-white bg-opacity-50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
