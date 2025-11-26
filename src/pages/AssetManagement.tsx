import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Image from "../assets/about.webp";
import Image1 from "../assets/services/asset-1.webp";
import Image2 from "../assets/services/asset-2.webp";
import Image3 from "../assets/services/asset-3.webp";
import Image4 from "../assets/services/asset-4.webp";
import Bg from "../assets/services/bg-brown.svg";
import Tree from "../assets/tree-brown.svg";
import Tape from "../components/Tape";

const CardReveal = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.4, // how much must be visible to trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 40 }}>
      {children}
    </motion.div>
  );
};

const AssetManagement = () => {
  const controls = useAnimation();
  const { inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [inView, controls]);
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Asset Management"
        head="Asset Management"
        number={859}
        subHead="The asset management business has been established to provide end-to-end oversight and management of farmland and agricultural enterprises for institutional investors, high-net-worth individuals, and forward-looking corporations. Our services encompass livestock, aquaculture, horticulture, and plantation operations, supported by dedicated technical and operational teams on the ground to ensure efficiency, scalability, and consistent returns"
      />

      <section
        className="flex flex-col lg:pt-[297px] pt-[259px] lg:pb-[76px] text-white lg:grid grid-cols-8 lg:px-20 px-5 mx-4 lg:mx-0 rounded-[16px] lg:rounded-none"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(180.68deg, rgba(48, 198, 124, 0) 1.61%, #1F3C15 90.71%),url(${Image}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-span-1"></div>
        <div className=" text-center lg:text-left mt-10 mb-10 lg:mb-0 lg:mt-0 col-span-5">
          <div className="">
            <Tape
              text="asset management"
              bgColor="#FFFFFF33"
              textColor="#FFFFFF"
            />
          </div>
          <p className="mt-4 font-medium text-[20px] leading-[130%] max-w-[734px]">
            Our mission is to transform agriculture into a structured and
            profitable investment journey. Through our Asset Management
            services, we provide end-to-end oversight of farmland and
            agribusiness operations, ensuring your investments are both secure
            and productive. Our dedicated teams that bring technical expertise
            and on-the-ground operational excellence.
            <br />
            <br />
            We manage every detail so your capital works efficiently while you
            enjoy transparency, growth, and consistent returns. With us, your
            agricultural investments are more than managed; they are nurtured,
            optimized, and positioned for lasting success.
          </p>
        </div>
      </section>
      <section className="lg:bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0deg,rgba(48,198,124,0)_1.61%,#1F3C15_90.71%)] bg-none relative">
        <div className="bg-white lg:px-20 px-5 lg:pt-[148px] lg:pb-[29px] pt-10 lg:rounded-t-[186px] rounded-t-[50px] flex flex-col">
          <div className="mt-5 lg:mt-0 lg:text-left text-center lg:grid lg:grid-cols-8 gap-5 lg:order-1 order-2">
            <p className="font-medium lg:text-[40px] text-[28px] text-[#1A1613] leading-[110%] tracking-[0.6px] col-span-3 lg:w-[475px]">
              Manage Agricultural Investments with Expert Asset Management
            </p>
            <div className="col-span-1"></div>
            <p className="lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-0 mt-4 col-span-4 lg:w-[535px]">
               In today’s evolving agribusiness landscape, the importance of
              structured and professional asset management cannot be overstated.
              Agricultural investments, whether in farmland, livestock,
              aquaculture, or plantations, require specialized expertise,
              operational oversight, and risk management to deliver sustainable
              and profitable outcomes
            </p>
          </div>
          <div className=" mt-10 w-full lg:order-2 order-1 z-10">
            <img
              src={Image2}
              alt="Asset-Image"
              className="rounded-[8px] lg:h-[190px] h-[124px] w-full object-cover object-[30%_40%]"
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-10 lg:px-20 px-5 bg-white pt-14 lg:pb-[29px] pb-[57px]">
          <div className="col-span-1 flex lg:gap-10 gap-3 lg:flex-row flex-col">
            <img
              src={Tree}
              alt="tree-image"
              className="lg:h-[118px] h-[55px] w-auto"
            />
            <p className="text-[#1A1613] lg:text-[56px] text-[28px] lg:text-left text-center font-semibold tracking-[-0.5px] leading-[110%]">
              Farmplify’s Asset Management
            </p>
          </div>
          <div className="h-[600px] max-w-[520px] overflow-y-scroll no-scrollbar space-y-10">
            {/* ------------- CARD 1 ------------- */}
            <CardReveal>
              <img
                src={Image1}
                alt="Asset-Image"
                className="rounded-[8px] lg:h-[272px] h-[124px] lg:mt-0 mt-10 w-full object-cover object-top"
              />
              <p className="font-semibold lg:text-[28px] text-[24px] text-[#0C8E36] leading-[110%] tracking-[0.6px] mt-8 lg:max-w-[461px] lg:text-left text-center w-full">
                Access structured agribusiness asset management
              </p>
              <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] mt-4 tracking-[0.6px] w-full lg:text-left text-center">
                The assurance of expertly managed agricultural investments,
                delivered through comprehensive oversight of agribusiness
                enterprises. With dedicated technical teams and operational
                specialists on the ground, We ensure that every asset under
                management performs at its optimum, balancing productivity,
                sustainability, and long-term value creation.
              </p>
            </CardReveal>

            {/* ------------- CARD 2 ------------- */}
            <CardReveal>
              <img
                src={Image3}
                alt="Asset-Image"
                className="rounded-[8px] lg:h-[272px] h-[124px] lg:mt-0 mt-10 w-full object-cover object-top"
              />
              <p className="font-semibold lg:text-[28px] text-[24px] text-[#0C8E36] leading-[110%] tracking-[0.6px] mt-8 lg:max-w-[461px] lg:text-left text-center w-full">
                Investment Management
              </p>
              <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] mt-4 tracking-[0.6px] w-full lg:text-left text-center">
                Our goal is to identify and harness investment management
                opportunities across the African agricultural horizon — to
                create, structure, secure and efficiently transfer tangible
                agrarian assets for both institutional and individual investors.
                We build disciplined, asset-backed investment vehicles that
                deliver measurable returns while protecting capital through
                rigorous due diligence and transparent reporting.
              </p>
            </CardReveal>

            {/* ------------- CARD 3 ------------- */}
            <CardReveal>
              <img
                src={Image4}
                alt="Asset-Image"
                className="rounded-[8px] lg:h-[272px] h-[124px] lg:mt-0 mt-10 w-full object-cover object-top"
              />
              <p className="font-semibold lg:text-[28px] text-[24px] text-[#0C8E36] leading-[110%] tracking-[0.6px] mt-8 lg:max-w-[461px] lg:text-left text-center w-full">
                Asset-Backed Security
              </p>
              <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] mt-4 tracking-[0.6px] w-full lg:text-left text-center">
                A major challenge in agricultural investing is the fragmentation
                of operations and the overreliance on informal, single-point
                solutions that expose investors to production, market and title
                risk. We address that gap by delivering institution-grade,
                asset-backed investment management that embeds safety,
                traceability and commercial rigor across every stage of the
                value chain.
                <br />
                <br /> We go beyond basic service provision. Farmplify delivers
                research-led, technology-enabled agricultural asset management
                designed to preserve capital, optimize yield and realise
                reliable returns.
              </p>
            </CardReveal>
          </div>

          <img
            src={Bg}
            alt="background-tree"
            className="absolute bottom-[29px] left-0"
          />
        </div>
      </section>
    </main>
  );
};

export default AssetManagement;
