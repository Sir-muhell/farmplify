import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Image from "../assets/about.webp";
import Image1 from "../assets/services/asset-1.webp";
import Image2 from "../assets/services/asset-2.webp";
import Image3 from "../assets/services/asset-3.webp";
import Image4 from "../assets/services/asset-4.webp";
import Bg from "../assets/services/bg-brown.svg";
import Tree from "../assets/tree-brown.svg";
import Tape from "../components/Tape";
import Button from "../components/Button";

const AssetManagement = () => {
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
        className="flex flex-col lg:pt-[297px] lg:pb-[76px] text-white lg:grid grid-cols-8 lg:px-20 px-5"
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
      <section
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(48, 198, 124, 0) 1.61%, #1F3C15 90.71%)`,
        }}
      >
        <div className="bg-white lg:px-20 px-5 lg:pt-[148px] lg:pb-[29px] pt-10 lg:rounded-t-[186px] rounded-t-[50px]">
          <div className="mt-5 lg:mt-0 lg:text-left text-center lg:grid lg:grid-cols-8 gap-5">
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
          <div className=" mt-10 w-full">
            <img
              src={Image2}
              alt="Asset-Image"
              className="rounded-[8px] h-[190px] w-full object-cover object-[30%_40%]"
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-10 lg:px-20 px-5 bg-white pt-14 lg:pb-[29px]">
          <div className="col-span-1 flex gap-10">
            <img src={Tree} alt="tree-image" className="h-[118px] w-auto" />
            <p className="text-[#1A1613] text-[56px] font-semibold tracking-[-0.5px] leading-[110%]">
              Farmplify’s Asset Management
            </p>
          </div>
          <div className="col-span-1  max-w-[520px]">
            <img
              src={Image1}
              alt="Asset-Image"
              className="rounded-[8px] hidden lg:block h-[272px] w-full object-cover object-top"
            />
            <p className="font-semibold lg:text-[28px] text-[28px] text-[#0C8E36] leading-[110%] tracking-[0.6px] mt-8 max-w-[461px] ">
              Access structured agribusiness asset management
            </p>
            <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] lg:mt-4 mt-4 tracking-[0.6px] w-full">
              The assurance of expertly managed agricultural investments,
              delivered through comprehensive oversight of agribusiness
              enterprises. With dedicated technical teams and operational
              specialists on the ground, We ensure that every asset under
              management performs at its optimum, balancing productivity,
              sustainability, and long-term value creation
            </p>
            <img
              src={Image4}
              alt="Asset-Image"
              className="rounded-[8px] hidden lg:block h-[100px] w-full object-cover object-[30%_30%] mt-[100px]"
            />
          </div>
          <img
            src={Bg}
            alt="background-tree"
            className="absolute bottom-[29px] left-0"
          />
        </div>
      </section>

      {/* <section className="lg:px-20 px-5 lg:pt-[89px] lg:pb-20 py-10 lg:text-left text-center bg-[#E5CFC2] relative">
        <div className="flex flex-col lg:grid grid-cols-2 lg:gap-20 gap-10 justify-center items-center h-fit">
          <div className="w-full h-full">
            <img
              src={Image1}
              alt="Asset-Image"
              className="rounded-[8px] hidden lg:block max-w-[542px] h-full object-cover"
            />
          </div>

          <div className="lg:mt-[33px] mt-0">
            <p className="font-medium lg:text-[32px] text-[28px] text-[#1A1613] leading-[110%] tracking-[0.6px] w-[461px] ">
              Access structured agribusiness asset management
            </p>
            <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] lg:mt-8 mt-4 tracking-[0.6px] w-[571px]">
              The assurance of expertly managed agricultural investments,
              delivered through comprehensive oversight of agribusiness
              enterprises. With dedicated technical teams and operational
              specialists on the ground, We ensure that every asset under
              management performs at its optimum, balancing productivity,
              sustainability, and long-term value creation
            </p>
            <p className="font-medium lg:text-[32px] text-[28px] text-[#1A1613] leading-[110%] tracking-[0.6px] mt-8">
              Investment Management
            </p>
            <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] lg:mt-8 mt-4 tracking-[0.6px] w-[571px]">
              Our goal is to identify and harness investment management
              opportunities across the African agricultural horizon — to create,
              structure, secure and efficiently transfer tangible agrarian
              assets for both institutional and individual investors. We build
              disciplined, asset-backed investment vehicles that deliver
              measurable returns while protecting capital through rigorous due
              diligence, clear legal structures and transparent reporting.
            </p>
          </div>
        </div>
      </section>
      <img src={Image1} alt="Asset-Image" className=" lg:hidden" />
      <section className="lg:px-20 px-5 lg:pt-[89px] lg:pb-20 py-10 lg:text-left text-center">
        <div className="lg:grid grid-cols-2 gap-20 justify-center items-center">
          <div>
            <img
              src={Image3}
              alt="Asset-Image"
              className="rounded-[8px] hidden lg:block max-w-[542px] h-full object-cover"
            />
          </div>
          <div className="lg:mt-0 mt-5">
            <p className="font-medium lg:text-[32px] text-[28px] text-[#1A1613] leading-[110%] tracking-[0.6px] w-[461px]">
              Asset-backed Security
            </p>
            <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] lg:mt-8 mt-4 tracking-[0.6px] w-[571px]">
              A major challenge in agricultural investing is the fragmentation
              of operations and the overreliance on informal, single-point
              solutions that expose investors to production, market and title
              risk. We address that gap by delivering institution-grade,
              asset-backed investment management that embeds safety,
              traceability and commercial rigor across every stage of the value
              chain.
            </p>
            <p className="text-[16px] text-[#4E4E4E] font-medium leading-[130%] lg:mt-8 mt-4 tracking-[0.6px] w-[571px]">
              We go beyond basic service provision. Farmplify delivers
              research-led, technology-enabled agricultural asset management
              designed to preserve capital, optimize yield and realise reliable
              returns.
            </p>
            <Button text="get started" link="" />
          </div>
        </div>
      </section>
      <img src={Image3} alt="Asset-Image" className=" lg:hidden mb-10" />
      <Grow /> */}
    </main>
  );
};

export default AssetManagement;
