import { useState } from "react";
import { motion } from "framer-motion";
import Image from "../../assets/about.webp";
import ImageTwo from "../../assets/about-2.webp";
import Tape from "../Tape";
import BrownTree from "../../assets/home/tree3.svg";
import Bg2 from "../../assets/bg-brown.svg";
import BigTree from "../../assets/icons/white-tree-2.svg";
import SmTree from "../../assets/icons/white-tree-sm.svg";

const Body = () => {
  const [activeView, setActiveView] = useState("vision");

  // Define the height of the banner part (how much vertical space it takes up)
  const BANNER_HEIGHT =
    typeof window !== "undefined" && window.innerWidth < 600 ? 15 : 29;

  // Define the vertical distance to pull the inactive card up
  const CARD_SHIFT_Y = 0;

  // Shared transition settings for smoothness
  const cardTransition: any = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  // Logic for Vision Card (Image Background)
  const isVisionActive = activeView === "vision";
  const visionAnimationProps = isVisionActive
    ? {
        // Active: Full size, pushed down, highest zIndex
        y: BANNER_HEIGHT,
        scale: 1,
        zIndex: 15, // Active: TOP
      }
    : {
        // Inactive (Banner): Shifted up, slightly smaller scale, lower zIndex
        y: -CARD_SHIFT_Y,
        scale: 0.95, // INACTIVE: Slightly narrower
        zIndex: 10, // Inactive: Below active card
      };

  const isMissionActive = activeView === "mission";
  const missionAnimationProps = isMissionActive
    ? {
        // Active: Full size, pushed down, highest zIndex
        y: BANNER_HEIGHT,
        scale: 1,
        zIndex: 15, // Active: TOP
      }
    : {
        // Inactive (Banner): Shifted up, slightly smaller scale, lower zIndex
        y: -CARD_SHIFT_Y,
        scale: 0.95, // INACTIVE: Slightly narrower
        zIndex: 10, // Inactive: Below active card
      };
  return (
    <>
      <section className="px-5 lg:px-20 ">
        <div className="m-auto flex justify-center gap-6 mb-7">
          <button
            onClick={() => setActiveView("vision")}
            className={`${
              activeView == "vision"
                ? "bg-white text-[#1F3C15] font-semibold tracking-[-0.3px] leading-[93%] text-center border border-[0.5px] border-[#30C67C]  text-[32px] py-[10px] px-[29px] rounded-full  hover:scale-105 transition mt-12 cursor-pointer"
                : "text-[#1F3C154D] font-medium tracking-[-0.3px] text-[32px]  px-[29px] rounded-full hover:scale-105 transition mt-12 cursor-pointer"
            }`}
          >
            Vision
          </button>
          <button
            onClick={() => setActiveView("mission")}
            className={`${
              activeView == "mission"
                ? "bg-white text-[#1F3C15] font-semibold tracking-[-0.3px] leading-[93%] text-center border border-[0.5px] border-[#30C67C]  text-[32px] py-[10px] px-[29px] rounded-full  hover:scale-105 transition mt-12 cursor-pointer"
                : "text-[#1F3C154D] font-medium tracking-[-0.3px] text-[32px]  px-[29px] rounded-full hover:scale-105 transition mt-12 cursor-pointer"
            }`}
          >
            Mission
          </button>
        </div>

        <div className="relative w-full  lg:h-[584px] h-[800px] overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-start">
            {/* Mission Card */}
            <motion.div
              initial={false}
              animate={missionAnimationProps}
              transition={cardTransition}
              className="absolute h-full w-full origin-top rounded-[16px]"
              style={{ top: 0 }}
            >
              <div className="flex flex-col lg:pt-[194px]  lg:pb-[58px] text-white lg:grid grid-cols-8 lg:px-20 px-5 rounded-[16px] lg:rounded-[40px] bg-[#F2BF4A] relative">
                <div className="col-span-1"></div>
                <img
                  src={BigTree}
                  alt="Big Tree"
                  className="w-full block lg:hidden mt-10 max-h-[285px]"
                />
                <div className=" text-center lg:text-left mt-10 mb-10 lg:mb-0 lg:mt-0 col-span-5">
                  <div className="">
                    <Tape
                      text="our mission"
                      bgColor="#FFFFFF33"
                      textColor="#000000"
                    />
                  </div>
                  <p className="mt-5 font-semibold lg:text-[40px] text-[#1F3C15] text-[28px] leading-[110%] max-w-[734px]">
                    Connecting investors to Africa’s agriculture opportunities.
                    Creating wealth from the vast agriculture value chain.
                    Driving food security and sustainability.
                  </p>
                </div>
                <img
                  src={SmTree}
                  alt="Small Tree"
                  className="absolute bottom-0 left-0 lg:block hidden"
                />
                <img
                  src={BigTree}
                  alt="Big Tree"
                  className="absolute -bottom-3 -right-10 lg:block hidden"
                />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={false}
              animate={visionAnimationProps}
              transition={cardTransition}
              className="absolute  h-full w-full origin-top "
              style={{ top: 0 }}
            >
              <div
                className="flex flex-col lg:pt-[292px] pt-[326px] lg:pb-[58px] text-white lg:grid grid-cols-8 lg:px-20 px-5 rounded-[16px] lg:rounded-[40px]"
                style={{
                  // Ensure Image variable is wrapped in url()
                  background: `linear-gradient(180deg, rgba(26, 22, 19, 0) 23.84%, #1A1613 100%),url(${Image}`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="col-span-1"></div>
                <div className=" text-center lg:text-left mt-10 mb-10 lg:mb-0 lg:mt-0 col-span-5">
                  <div className="">
                    <Tape
                      text="our vision"
                      bgColor="#FFFFFF33"
                      textColor="#FFFFFF"
                    />
                  </div>
                  <p className="mt-5 font-semibold lg:text-[28px] text-[28px] leading-[110%] max-w-[734px]">
                    To be Africa’s leading catalyst for agricultural
                    transformation, unlocking food security, rural prosperity,
                    and sustainable growth through structured, impact-driven
                    agribusiness investments
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:mt-0 
             lg:px-20 px-5 py-10 lg:py-20 bg-white/72 
             bg-cover bg-center bg-no-repeat" // Keep static background properties here
          style={{
            // Bring the dynamic image source back to the style prop
            backgroundImage: `url(${Bg2})`,
          }}
        >
          <img
            src={ImageTwo}
            alt="impact-image"
            className="rounded-[8px] mt-[55px] lg:mt-0 h-[124px] w-full lg:h-full object-cover"
          />
          <div className="lg:ml-[150px] text-center lg:text-left lg:mt-0 mt-8">
            <Tape text="our client commitment" textColor="#1F3C15" />
            <p className="mt-5 font-medium lg:text-[32px] text-[28px] text-[#1A1613] leading-[110%] tracking-[0.6px]">
              We are committed to safeguarding our clients’ capital and building
              lasting prosperity through structured management, and
              impact-driven agricultural investments.
            </p>
            <p className="text-[#5A5A5A] font-medium text-[16px] leading-[130%] mt-[32px] lg:text-left text-center ">
              At Farmplify, we are committed to building enduring partnerships
              with investors seeking secure, structured, and profitable access
              to Africa’s vast agricultural potential. Guided by trust,
              transparency, and accountability, we manage vast agriculture value
              chains with precision and care. Our role is not just to manage
              assets, but to safeguard and grow your capital through data-driven
              strategies, risk-mitigated models, and technology-enabled
              transparency. Beyond returns, we are invested in your success and
              impact; empowering you to be part of Africa’s agricultural
              transformation while achieving consistent, long-term financial
              growth.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF8EA] lg:p-10 p-4 relative">
        <div className="bg-white text-white lg:px-[42px] lg:py-[82px] pt-5 px-4 pb-[105px] lg:col-span-1 col-span-2 lg:rounded-[32px] rounded-[16px] relative lg:text-left text-center ">
          <p className="uppercase text-[16px] font-semibold tracking-[6.4px] text-[#1F3C15]">
            our values
          </p>
          <p className="text-[32px] text-[#1A1613] lg:text-[56px] font-medium lg:leading-[110%] tracking-[0.6px] leading-[120%] mt-6 max-w-[992px] relative z-10">
            We are a company of enablers, transforming Africa’s agricultural
            potential into structured opportunities for long-term value creation
          </p>
        </div>
        <img
          src={BrownTree}
          alt="tree-imgage"
          className="absolute lg:bottom-0 -bottom-0 lg:-right-[80px] -right-20 lg:h-[536px] h-[292px] "
        />
      </section>
    </>
  );
};

export default Body;
