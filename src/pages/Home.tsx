import React from "react";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/Navbar";
import Image from "../assets/image.jpg";
import Icon from "../assets/icon.svg";
import Mission from "../assets/mission.png";
import WhatWeDoSection from "../components/home/WhatWeDo";
import Advantage from "../components/home/Advantage";
import Grow from "../components/Grow";

const Home = () => {
  return (
    <main className="relative w-full space-y-20">
      <HeroSection />
      <div className="items-center flex flex-col h-full py-10 px-20">
        <div className="w-px min-h-[72px] bg-[#546E24]"></div>

        <div className="bg-[#30C67C1A] py-2 px-4 flex inline-flex gap-2.5 items-center mt-8 rounded-full">
          <img src={Icon} alt="Icon" />
          <p className="section-text uppercase">what we do?</p>
        </div>
        <div className="mt-8 ">
          <p className="text-7xl font-semibold text-center text-[#1F3C15]">
            Invest in Africa’s Most <br /> Valuable Asset: Agriculture
          </p>
          <p className="mt-4 text-[#616161] font-medium text-xl max-w-[740px] text-center m-auto">
            Farmplify manages high-yield agriculture investments for individuals
            and institutions. <br /> We unlock the full potential of agriculture
            by making it easy for you to invest in farmland, tree plantations,
            grain systems, and livestock, all professionally managed,
            assetbacked, and tech-enabled
          </p>
          <div className="mt-14 bg-[#30C67C1A] rounded-3xl relative max-w-[1037px] grid grid-cols-2 overflow-hidden">
            <div className="relative">
              <p className="text-lg text-[#616161] pl-10 pt-18 max-w-[345px] relative">
                To transform agriculture in Africa into a secure, structured,
                and profitable investment opportunity by managing high-impact,
                asset-backed agribusiness portfolios for investors while driving
                food security, rural prosperity, and sustainable development.
              </p>
              <img src={Mission} alt="" className="absolute pl-6 -bottom-20" />
            </div>
            <div className="p-6">
              <img
                src={Image}
                alt="Mission"
                className=" h-[454px] object-cover rounded-[20px] "
              />
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-6">
            <button className="text-[#1F3C15] px-8 py-2 rounded-full text-3xl font-semibold border border-[#30C67C] transition-colors">
              Mission
            </button>
            <button className="text-[#1F3C154D] px-5 py-3 rounded-full text-3xl font-semibold border border-[#ABABAB] transition-colors">
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
