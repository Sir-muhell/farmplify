import Bg from "../../assets/object.svg";
import Image from "../../assets/about.webp";
import ImageTwo from "../../assets/about-2.webp";
import Tape from "../Tape";
// import Button from "../Button";

const Body = () => {
  return (
    <>
      <section>
        <div
          className="flex flex-col lg:pt-[297px] lg:pb-[76px] text-white lg:grid grid-cols-8 lg:px-20 px-5"
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
              <Tape text="our vision" bgColor="#FFFFFF33" textColor="#FFFFFF" />
            </div>
            <p className="mt-5 font-semibold lg:text-[28px] text-[28px] leading-[110%] max-w-[734px]">
              To be Africa’s leading catalyst for agricultural transformation,
              unlocking food security, rural prosperity, and sustainable growth
              through structured, impact-driven agribusiness investments
            </p>
          </div>
        </div>
        <div
          className=" flex flex-col lg:px-20 px-5 relative bg-[#1A1613] lg:grid grid-cols-8"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="col-span-1"></div>
          <div className="lg:mt-[72px] mt-20 lg:mb-[158px] mb-20 text-center lg:text-left col-span-5">
            <Tape text="our mission" bgColor="#FFFFFF33" textColor="#FFFFFF" />
            <p className="lg:text-[40px] text-[32px] lg:mt-8 mt-10 leading-[110%] font-semibold text-white max-w-[734px]">
              Connecting investors to Africa’s agriculture opportunities.
              Creating wealth from the vast agriculture value chain. Driving
              food security and sustainability.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:mt-0 bg-white lg:px-20 px-5 py-10 lg:py-20">
          <div className="lg:ml-[150px] order-1 lg:order-2 text-center lg:text-left">
            <Tape text="our client commitment" textColor="#1F3C15" />
            <p className="mt-5 font-medium lg:text-[32px] text-[28px] text-[#1A1613] leading-[110%] tracking-[0.6px]">
              We are committed to safeguarding our clients’ capital and building
              long-term prosperity through structured, transparent, and
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

          <img
            src={ImageTwo}
            alt="impact-image"
            className="lg:rounded-[8px] order-2 lg:order-1 mt-[55px] lg:mt-0"
          />
        </div>
      </section>
      <section className="px-5 lg:px-20 bg-white lg:grid grid-cols-8">
        <div className="col-span-6 text-center lg:text-left lg:pt-20 pb-10 lg:pb-20">
          <Tape text="our values" />
          <p className="text-[32px] sm:text-[40px] lg:text-[56px] mt-5 lg:mt-8 leading-[93%] font-semibold text-[#1A1613] lg:text-left text-center max-w-[990px]">
            We are a company of enablers, transforming Africa’s agricultural
            potential into structured opportunities for long-term value creation
          </p>
        </div>
      </section>
    </>
  );
};

export default Body;
