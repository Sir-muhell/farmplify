import Bg from "../../assets/object.svg";
import Image from "../../assets/about.webp";
import ImageTwo from "../../assets/about-2.webp";
import Tape from "../Tape";
import Button from "../Button";

const Body = () => {
  return (
    <>
      <section>
        <div className="py-10 lg:px-20 px-5 lg:grid grid-cols-2 lg:text-left text-center">
          <div>
            <Tape text="who we are" />
            <p className="mt-8 font-semibold lg:text-[40px] text-[32px] text-[#1A1613] leading-[110%] lg:pr-10">
              Transforming agriculture into structured, secure, and profitable
              investments across Nigeria and Africa at large
            </p>
            <Button text="read full story" />
          </div>
          <p className="text-[#616161] font-medium text-xl leading-[130%] lg:pl-10 mt-[65px] lg:text-left text-center ">
            In the dynamic landscape of African agriculture, Farmplify emerges
            as a pioneering force, redefining how capital flows into the
            continent’s most essential sector. Built on the vision to unlock
            Africa’s trillion-dollar agribusiness potential, Farmplify operates
            as a specialized agriculture investment management company,
            dedicated to structuring secure, scalable, and asset-backed
            opportunities for investor
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:mt-20 lg:mb-0 mb-20">
          <div className="lg:ml-[150px] lg:pr-20 order-2 lg:order-1 lg:px-0 px-5 text-center lg:text-left mt-10 lg:mt-0">
            <Tape text="our vision" />
            <p className="mt-5 font-semibold lg:text-[40px] text-[28px] text-[#1A1613] leading-[110%] ">
              To be Africa’s leading catalyst for agricultural transformation,
              unlocking food security, rural prosperity, and sustainable growth
              through structured, impact-driven agribusiness investments
            </p>
          </div>

          <img
            src={Image}
            alt="impact-image"
            className="lg:rounded-tl-[16px] lg:rounded-bl-[16px] order-1 lg:order-2 mt-[55px] lg:mt-0"
          />
        </div>
      </section>
      <section>
        <div
          className=" flex flex-col lg:px-20 px-5 relative bg-[#1A1613]"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="lg:mt-[260px] mt-20 lg:mb-[158px] mb-20 text-center lg:text-left">
            <Tape text="our mission" />
            <p className="lg:text-[56px] text-[32px] lg:mt-8 mt-10 leading-[130%] font-semibold text-white">
              Connecting investors to Africa’s agriculture opportunities.
              Creating wealth from the vast agriculture value chain. Driving
              food security and sustainability.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:mt-0 mt-20">
          <div className="lg:ml-[150px] lg:pr-20 order-1 lg:order-2 lg:px-0 px-5 text-center lg:text-left">
            <Tape text="our client commitment" />
            <p className="mt-5 font-semibold lg:text-[40px] text-[28px] text-[#1A1613] leading-[110%]">
              We are committed to safeguarding our clients’ capital and building
              long-term prosperity through structured, transparent, and
              impact-driven agricultural investments.
            </p>
            <p className="text-[#616161] font-medium text-[20px] leading-[130%] mt-[65px] lg:text-left text-center ">
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
            className="lg:rounded-tr-[16px] lg:rounded-br-[16px] order-2 lg:order-1 mt-[55px] lg:mt-0"
          />
        </div>
      </section>
      <section className="flex justify-center lg:justify-end px-5 lg:px-24">
        <div className="w-full lg:max-w-[80%] text-center lg:text-right mt-10 lg:mt-20 mb-10 lg:mb-20">
          <Tape text="our values" />
          <p className="text-[32px] sm:text-[40px] lg:text-[56px] mt-5 lg:mt-8 leading-[100%] font-semibold text-[#1A1613] lg:text-right text-center">
            We are a company of enablers, transforming Africa’s agricultural
            potential into structured opportunities for long-term value creation
          </p>
        </div>
      </section>
    </>
  );
};

export default Body;
