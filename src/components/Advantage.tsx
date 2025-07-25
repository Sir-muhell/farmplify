import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "../assets/bg.svg";
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide4.jpg";
import Slide5 from "../assets/slide5.jpg";

const cards = [
  {
    title: "Asset-Backed Security",
    description:
      "Your investments are tied directly to tangible assets like land, trees, and crops, providing inherent security and stability.",
    image: Slide1,
  },
  {
    title: "End-to-End Management",
    description:
      "We manage every aspect of the agricultural value chain — from land prep to sales — so you don’t have to.",
    image: Slide2,
  },
  {
    title: "Proven Track Record",
    description:
      "With over 2,000 hectares under management, we’ve delivered sustainable returns and impact.",
    image: Slide3,
  },
  {
    title: "Tech-Driven Insights",
    description:
      "Get real-time updates and analytics from your farm assets via our digital dashboard.",
    image: Slide4,
  },
  {
    title: "Sustainable Impact",
    description:
      "Your investments also drive rural prosperity, climate resilience, and food security across Africa.",
    image: Slide5,
  },
];

const Advantage = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  // Animate fill bar height from 0% to 100%
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="bg-[#1F3C15] text-white px-20 lg:px-40 py-24 gap-16 "
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" max-w-[1037px] mx-auto flex">
        {/* Left Static Section */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="bg-[#FFFFFF1A] py-2 px-4 flex inline-flex rounded-full uppercase">
            <div className="section-text-2">Out competitive advantage</div>
          </div>
          <h2 className="text-7xl font-bold mt-6">Why Choose Farmplify?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Here's why we think Farmplify is your smartest agricultural
            investment.
          </p>
          <button className="mt-8 bg-white text-[#1F3C15] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
            Book a Call
          </button>
        </div>

        {/* Right Scrollable Section */}
        <div className="relative w-1/2 h-[400px] flex">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="overflow-y-scroll space-y-10 pr-8 pb-6"
            style={{ scrollBehavior: "smooth", height: "100%" }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#265627] rounded-[30px] p-6 flex flex-col items-center text-center"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[177px] object-cover rounded-xl"
                />
                <h3 className="text-white text-2xl font-bold mt-6">
                  {card.title}
                </h3>
                <p className="text-[#D0D0D0] mt-2 text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Vertical Progress Indicator */}
          <div className="absolute top-0 right-0 h-full flex flex-col items-center justify-between py-1">
            <span className="text-white text-sm">01</span>
            <div className="relative w-[3px] bg-[#2E4D2C] rounded-full h-full mt-1 mb-1">
              <motion.div
                className="absolute left-0 top-0 w-full bg-[#30C67C] rounded-full"
                style={{ height: progressHeight }}
              />
            </div>
            <span className="text-white text-sm">05</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
