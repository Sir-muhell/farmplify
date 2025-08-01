import React from "react";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/Navbar";
import Image from "../assets/image.jpg";
import Icon from "../assets/icon.svg";
import Mission from "../assets/mission.png";
import WhatWeDoSection from "../components/home/WhatWeDo";
import Advantage from "../components/home/Advantage";
import Grow from "../components/Grow";
import Headings from "../components/Headings";

const Home = () => {
  return (
    <main className="relative w-full lg:space-y-20">
      <HeroSection />
      <div className="items-center flex flex-col h-full py-10 lg:px-20 px-5">
        <div className="w-px min-h-[72px] bg-[#546E24] md:block hidden"></div>

        <Headings
          tape="what we do?"
          headOne="Invest in Africa’s Most"
          headTwo="Valuable Asset: Agriculture"
        />
        <div>
          <div className="mt-14 bg-[#30C67C1A] rounded-3xl relative max-w-[1037px] lg:grid grid-cols-2 overflow-hidden">
            <div className="relative">
              <p className="lg:text-lg text-base text-[#616161] lg:pl-10 p-12 pb-0 lg:pt-18 pt-8 max-w-[345px] relative">
                To transform agriculture in Africa into a secure, structured,
                and profitable investment opportunity by managing high-impact,
                asset-backed agribusiness portfolios for investors while driving
                food security, rural prosperity, and sustainable development.
              </p>
              <img
                src={Mission}
                alt=""
                className="absolute pl-6 -bottom-20 lg:block hidden"
              />
            </div>
            <div className="p-6">
              <img
                src={Image}
                alt="Mission"
                className=" lg:h-[454px] h-[255px] object-cover rounded-[20px] "
              />
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-6">
            <button className="text-[#1F3C15] px-8 py-2 rounded-full text-3xl text-[32px] font-semibold border border-[#30C67C] transition-colors">
              Mission
            </button>
            <button className="text-[#1F3C154D] px-5 py-3 rounded-full text-3xl text-[32px] font-semibold border border-[#ABABAB] transition-colors">
              Vision{" "}
            </button>
          </div>
        </div>
      </div>
      <WhatWeDoSection />
      <Advantage />
      <Grow />
    </main>
  );
};

export default Home;
