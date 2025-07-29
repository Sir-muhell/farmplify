import React from "react";
import Hero from "../components/about/Hero";
import Image1 from "../assets/about-card-1.svg";
import Image2 from "../assets/about-card-2.svg";
import Image3 from "../assets/about-card-3.svg";
// import RealEstate from "../assets/real-estate.webp";
import RealEstate from "../assets/real-estate.jpg";

import Headings from "../components/Headings";
import Grow from "../components/Grow";

const About = () => {
  return (
    <main>
      <Hero />
      <div className="py-20 grid grid-cols-10 max-w-[1600px] mx-auto px-20">
        <div className="mt-10 col-span-4">
          <p className="text-[#1F3C15] text-[56px] font-semibold leading-[96%]">
            The Trillion-Dollar Opportunity
          </p>
          <p className="mt-4 font-medium text-xl leading-[130%] text-[#616161]">
            Africa holds unprecedented agricultural investment potential worth
            over a trillion dollars, yet investors face significant barriers to
            accessing structured, secure, and profitable opportunities in this
            vital sector.
          </p>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-10 col-span-6 grid-cols-7">
          <div className="p-10 bg-[#EBFAF2] row-span-2 col-span-3 text-5xl rounded-3xl relative">
            <p className=" text-[#5F5F5F] font-medium text-2xl leading-[130%]">
              $45B Spent annually on food imports in Nigeria alone
            </p>
            <img
              src={Image1}
              alt="About Card 1"
              className="absolute bottom-0 right-0  object-cover rounded-3xl"
            />
          </div>
          <div className="p-10 bg-[#EBFAF2] row-span-1 col-span-4 text-5xl rounded-3xl h-[233px] relative overflow-hidden">
            <p className=" text-[#5F5F5F] font-medium text-2xl w-[65%] leading-[130%]">
              30% Of grains lost post-harvest due to poor infrastructure
            </p>
            <img
              src={Image2}
              alt="About Card 3"
              className="absolute -bottom-3 -right-4  object-cover rounded-3xl"
            />
          </div>
          <div className="p-10 bg-[#EBFAF2] row-span-1 col-span-4 text-5xl rounded-3xl h-[233px] relative overflow-hidden">
            <p className=" text-[#5F5F5F] font-medium text-2xl w-[65%] leading-[130%]">
              $1T Total agricultural investment potential across Africa
            </p>
            <img
              src={Image3}
              alt="About Card 3"
              className="absolute -bottom-8 right-0  object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="p-20 max-w-[1600px] mx-auto">
        <Headings
          tape="Investment Opportunities"
          headOne="The Farmplify Solution"
          headTwo=""
        />
        <div className="space-y-8 mt-14">
          <div className="bg-[#30C67C1A] h-[420px] rounded-3xl grid grid-cols-11 h-full">
            <div className="col-span-4 lg:pl-[95px] flex flex-col justify-center">
              <p className="section-text">AgriProperty</p>
              <p className="text-[50px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
                Farmland Real Estate
              </p>
              <p className="mt-4 text-xl text-[#5F5F5F] font-medium leading-[130%]">
                Invest in prime agricultural land, benefiting from land value
                appreciation and lease/rental returns.
              </p>
            </div>
            <div className="col-span-7 p-6 h-full">
              <img
                src={RealEstate}
                alt=""
                className="h-full w-full object-cover rounded-[18px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10 ">
            <div className="bg-[#FFF48C] rounded-3xl grid grid-cols-7 h-[420px]">
              <div className="col-span-4 lg:pl-10 flex flex-col justify-center">
                <p className="section-text">Silviculture</p>
                <p className="text-[50px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
                  Tree Plantations:
                </p>
                <p className="mt-4 text-xl text-[#5F5F5F] font-medium leading-[130%]">
                  Grow long-term wealth with sustainable investments in
                  high-demand tree species like cashew, teak, and oil palm.
                </p>
              </div>
              <div className="col-span-3 p-6 h-full">
                <img
                  src={RealEstate}
                  alt=""
                  className="h-full w-full object-cover rounded-[18px]"
                />
              </div>
            </div>
            <div className="bg-[#FFE500] rounded-3xl grid grid-cols-7 h-[420px]">
              <div className="col-span-4 lg:pl-10 flex flex-col justify-center">
                <p className="section-text">Granary</p>
                <p className="text-[50px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
                  Grains Aggregation:
                </p>
                <p className="mt-4 text-xl text-[#5F5F5F] font-medium leading-[130%]">
                  Capitalize on lucrative trading margins by investing in the
                  aggregation and supply of essential grains.
                </p>
              </div>
              <div className="col-span-3 p-6 h-full">
                <img
                  src={RealEstate}
                  alt=""
                  className="h-full w-full object-cover rounded-[18px]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#30C67C33] h-[420px] rounded-3xl grid grid-cols-11 h-full">
            <div className="col-span-4 lg:pl-[95px] flex flex-col justify-center">
              <p className="section-text">ranching</p>
              <p className="text-[50px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
                Cattle Production:
              </p>
              <p className="mt-4 text-xl text-[#5F5F5F] font-medium leading-[130%]">
                Participate in managed livestock operations, earning commissions
                and profits from robust cattle production cycles.
              </p>
            </div>
            <div className="col-span-7 p-6 h-full">
              <img
                src={RealEstate}
                alt=""
                className="h-full w-full object-cover rounded-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Grow />
    </main>
  );
};

export default About;
