import { motion } from "framer-motion";
import { useState } from "react";
import Image from "../assets/image.jpg";

const coreServices = [
  {
    title: "A Full-Service Agriculture Investment Experience",
    text: `At Farmplify, we empower individuals, institutions, and diaspora investors to build lasting wealth through professionally managed agricultural assets all without having to farm themselves. Our end-to-end platform offers direct access to high-growth opportunities across farmland, tree crops, grains, and livestock.`,
  },
  {
    title: "Farmland Ownership and Leasing",
    text: `Invest in title-secured agricultural land with the option to either own or lease. We handle all infrastructure development including access roads, irrigation, and solar systems. Our models include tenant farming and revenue sharing, optimized to deliver 10 to 20% returns per cycle.`,
  },
  {
    title: "Tree Crop Investments",
    text: `Explore long-term, passive income streams through investments in cashew, cocoa, and oil palm plantations. We manage the entire process from setup to harvesting and export. Each investment is structured for consistent cash flow over three to ten years, offering 15 to 25% annual returns.`,
  },
  {
    title: "Grains Aggregation and Trade Infrastructure",
    text: `Tap into Africa’s growing grain value chain through managed investments in warehousing, logistics, and supply aggregation. We provide full operational support and secure access to institutional buyers and processors, delivering 15 to 30% returns per trade cycle.`,
  },
  {
    title: "Cattle and Livestock Production",
    text: `Gain exposure to livestock markets by owning or co-owning cattle under our expert care. We take charge of ranching, feeding, and fattening while connecting your investment to established distribution channels. Enjoy high-yield potential with returns of 30 to 40% per cycle.`,
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-20 py-26 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 gap-12 items-start">
        <div>
          <div className="bg-[#30C67C1A] py-2 px-4 flex inline-flex rounded-full">
            <div className="section-text">CORE SERVICES</div>
          </div>
          <h2 className="text-[56px] text-[#1F3C15] font-semibold mb-4 mt-10">
            What We Do
          </h2>
          <p className="text-[#616161] max-w-[353px] text-base font-medium">
            With over 10,000 farmers integrated into active supply chains,
            Farmplify ensures reliable, sustainable sourcing. We've trained more
            than 2,000 farmers in climate-smart and sustainable agriculture
            practices, and developed over 2,000 hectares of farmland to support
            resilient food systems and long-term agricultural growth.
          </p>
        </div>

        <img
          src={Image}
          alt="Farming"
          className="rounded-xl w-full h-auto object-cover max-h-[350px]"
        />
      </div>

      <div className="mt-16 flex flex-col gap-10">
        <div className="flex items-left gap-6 justify-between">
          {coreServices.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-left cursor-pointer w-full"
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? "40%" : "15%",
              }}
            >
              <motion.div
                layout
                transition={{ duration: 0.1 }}
                className="w-full rounded-full bg-[#DDDDDD]"
                style={{
                  height: i === activeIndex ? "8px" : "6px",
                }}
              >
                <motion.div
                  transition={{ duration: 0.1 }}
                  className="rounded-full bg-[#30C67C] h-full"
                  style={{
                    display: i === activeIndex ? "block" : "none",
                    width: `${20 * (i + 1)}%`,
                  }}
                ></motion.div>
              </motion.div>
              <motion.div
                transition={{ duration: 0.1 }}
                className="mt-2 text-left text-[#616161] font-medium text-xl"
              >
                0{i + 1}
              </motion.div>
              <motion.div
                transition={{ duration: 0.1 }}
                animate={{
                  fontSize: i === activeIndex ? "28px" : "16px",
                  color: i === activeIndex ? "#1F3C15" : "#1F3C1566",
                  lineHeight: i === activeIndex ? "100%" : "100%",
                }}
                className="text-left mt-1 font-semibold"
              >
                {item.title}
              </motion.div>
              <motion.div
                transition={{ duration: 0.1 }}
                animate={{
                  fontSize: i === activeIndex ? "16px" : "14px",
                  display: i === activeIndex ? "block" : "none",
                }}
                className="text-left mt-1 font-medium text-base mt-4"
              >
                {item.text}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
