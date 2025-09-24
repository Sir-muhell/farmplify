import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Image1 from "../assets/services/asset-1.webp";
import Image2 from "../assets/services/asset-2.webp";
import Image3 from "../assets/services/asset-3.webp";
import Tape from "../components/Tape";
import Button from "../components/Button";

const AssetManagement = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Asset Management"
        head="Asset Management"
        subHead="The asset management business has been established to provide end-to-end oversight and management of farmland and agricultural enterprises for institutional investors, high-net-worth individuals, and forward-looking corporations. Our services encompass livestock, aquaculture, horticulture, and plantation operations, supported by dedicated technical and operational teams on the ground to ensure efficiency, scalability, and consistent returns"
      />
      <section className="bg-[#D6F4E5] lg:px-20 px-5 lg:pt-[89px] lg:pb-20 py-10 lg:text-left text-center">
        <Tape text="Asset Management" />
        <div className="lg:grid grid-cols-2 lg:mt-10 mt-5">
          <p className="lg:text-xl text-lg text-[#616161] font-medium leading-[130%]">
            Our mission is to transform agriculture into a structured and
            profitable investment journey. Through our Asset Management
            services, we provide end-to-end oversight of farmland and
            agribusiness operations, ensuring your investments are both secure
            and productive. Our dedicated teams that bring technical expertise
            and on-the-ground operational excellence.
          </p>
          <p className="text-[#616161] font-medium lg:text-2xl text-xl leading-[130%] lg:ml-40 mt-0 mt-6">
            We manage every detail so your capital works efficiently while you
            enjoy transparency, growth, and consistent returns. With us, your
            agricultural investments are more than managed; they are nurtured,
            optimized, and positioned for lasting success.
          </p>
        </div>
      </section>
      <section className="bg-[#E5CFC2] lg:px-20 px-5 lg:pt-[89px] lg:pb-20 py-10">
        <div className="lg:grid grid-cols-2 gap-20 justify-center items-center">
          <div className="lg:pl-20 lg:block hidden">
            <img
              src={Image2}
              alt="Asset-Image"
              className=" lg:rounded-tl-[16px] lg:rounded-bl-[16px]"
            />
          </div>

          <div className="mt-5 lg:mt-0 lg:text-left text-center">
            <p className="font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%]">
              Manage Agricultural Investments with Expert Asset Management
            </p>
            <p className="lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
               In today’s evolving agribusiness landscape, the importance of
              structured and professional asset management cannot be overstated.
              Agricultural investments, whether in farmland, livestock,
              aquaculture, or plantations, require specialized expertise,
              operational oversight, and risk management to deliver sustainable
              and profitable outcomes
            </p>
          </div>
        </div>
      </section>
      <img
        src={Image2}
        alt="Asset-Image"
        className=" lg:rounded-tl-[16px] lg:rounded-bl-[16px] lg:hidden"
      />
      <section className="lg:px-20 px-5 lg:pt-[89px] lg:pb-20 py-10 lg:text-left text-center">
        <div className="flex flex-col lg:grid grid-cols-2 lg:gap-20 gap-10 justify-center items-center">
          <div>
            <p className="font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%]">
              Access structured agribusiness asset management
            </p>
            <p className="lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
              The assurance of expertly managed agricultural investments,
              delivered through comprehensive oversight of agribusiness&nbsp;
              enterprises. With dedicated technical teams and operational
              specialists on the ground, We&nbsp; ensure that every asset under
              management performs at its optimum, balancing productivity,
              sustainability, and long-term value creation
            </p>
            <p className="font-semibold lg:text-[40px] text-[28px] text-[#1A1613] leading-[110%] lg:mt-6 mt-8">
              Investment Management
            </p>
            <p className="lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
              Our goal is to identify and harness investment management
              opportunities across the African agricultural horizon — to create,
              structure, secure and efficiently transfer tangible agrarian
              assets for both institutional and individual investors. We build
              disciplined, asset-backed investment vehicles that deliver
              measurable returns while protecting capital through rigorous due
              diligence, clear legal structures and transparent reporting.
            </p>
          </div>

          <div>
            <img
              src={Image1}
              alt="Asset-Image"
              className=" rounded-tl-[16px] rounded-bl-[16px] hidden lg:block"
            />
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
              className=" rounded-tr-[16px] rounded-br-[16px] hidden lg:block"
            />
          </div>
          <div className="lg:mt-0 mt-5">
            <p className="font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%]">
              Asset-backed Security
            </p>
            <p className="lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
              A major challenge in agricultural investing is the fragmentation
              of operations and the overreliance on informal, single-point
              solutions that expose investors to production, market and title
              risk. We address that gap by delivering institution-grade,
              asset-backed investment management that embeds safety,
              traceability and commercial rigor across every stage of the value
              chain.
            </p>
            <p className="lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
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
      <Grow />
    </main>
  );
};

export default AssetManagement;
