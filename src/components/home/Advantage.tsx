import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "../../assets/bg.svg";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";
import Slide4 from "../../assets/slide4.jpg";
import Slide5 from "../../assets/slide5.jpg";
import Icon from "../../assets/icon-white.svg";

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
      className="bg-[#1F3C15] text-white lg:px-20 px-10 lg:px-40 lg:py-32 py-18 gap-16 "
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" max-w-[1037px] lg:grid grid-cols-2 m-auto gap-10 items-center">
        {/* Left Static Section */}
        <div className="">
          <div className="bg-[#FFFFFF1A] py-2 px-4 flex inline-flex gap-2.5 items-center rounded-full uppercase w-full">
            <img src={Icon} alt="Icon" className="w-[18px] h-[18px] mr-2" />
            <div className="section-text-2 lg:flex hidden">
              Our competitive advantage
            </div>
            <div className="section-text-2 flex lg:hidden">
              competitive advantage
            </div>
          </div>
          <h2 className="lg:text-7xl text-5xl text-center lg:text-left font-bold mt-6">
            Why Choose Farmplify?
          </h2>
          <p className="mt-4 lg:text-xl text-sm text-white lg:max-w-[80%] text-center lg:text-left font-medium">
            Here's why we think Farmplify is your Smartest Agricultural
            Investment.
          </p>
          <button className="mt-10 bg-white text-[#1F3C15] font-semibold text-sm tracking-[0.2em] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase lg:flex hidden">
            Book a Call
          </button>
        </div>

        {/* Right Scrollable Section */}
        <div className="relative  lg:h-[460px] h-[300px] flex lg:mt-0 mt-16">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="overflow-y-scroll space-y-14 pr-8 pb-6 no-scrollbar"
            style={{
              scrollBehavior: "smooth",
              height: "100%",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cards.map((card, i) => (
              <div className="relative">
                <div
                  key={i}
                  className="bg-[#265627] rounded-[30px] p-6 flex flex-col items-center text-center pb-10"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full lg:h-[177px] h-[108px] object-cover rounded-xl"
                  />
                  <div className="max-w-[70%]">
                    <h3 className="text-white lg:text-[32px] text-base leading-[93%] font-semibold mt-7">
                      {card.title}
                    </h3>
                    <p className="text-[#FFFFFF99] mt-4 lg:text-xl text-xs leading-[130%] font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 -right-8 h-full flex flex-col items-center justify-center py-1">
                  <span className="text-white text-sm">01</span>
                  <div className="relative w-[3px] bg-[#2E4D2C] rounded-full h-[80%] mt-1 mb-1">
                    <motion.div
                      className="absolute left-0 top-0 w-full bg-[#30C67C] rounded-full"
                      style={{ height: `${20 * (i + 1)}%` }}
                    />
                  </div>
                  <span className="text-white text-sm">05</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
