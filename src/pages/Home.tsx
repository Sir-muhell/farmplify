import HeroSection from "../components/home/HeroSection";
import Grow from "../components/Grow";
import Image from "../assets/home.webp";
import Solution from "../components/home/Solution";
import Tape from "../components/Tape";
import Button from "../components/Button";

const Home = () => {
  return (
    <main className="relative w-full lg:space-y-20">
      <HeroSection />
      <div className="py-10 lg:px-20 px-5 lg:grid grid-cols-2 lg:text-left text-center">
        <div>
          <Tape text="who we are" />
          <p className="mt-8 font-semibold lg:text-[40px] text-[32px] text-[#1A1613] leading-[110%] lg:pr-10 tracking-[-0.4px]">
            We are deeply passionate about transforming agriculture into a
            structured, secure, and highly profitable investment class for
            Africa and the world.
          </p>
          <Button text="Learn More" link="/about" />
        </div>
        <p className="text-[#616161] font-medium text-xl leading-[130%] tracking-[0.6px] lg:pl-10 mt-[65px] lg:text-left text-center ">
          In the dynamic landscape of African agriculture, Farmplify emerges as
          a pioneering force, redefining how capital flows into the continent’s
          most essential sector. Built on the vision to unlock Africa’s
          trillion-dollar agribusiness potential, Farmplify operates as a
          specialized agriculture investment management company, dedicated to
          structuring secure, scalable, and asset-backed opportunities for
          investor.
        </p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:mt-20 mt-16">
        <div className="lg:ml-[150px] lg:pr-20 order-1 lg:order-2 lg:px-0 px-5 text-center lg:text-left">
          <Tape text="our approach to sustainability" />
          <p className="mt-5 font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%]">
            Delivering Structured, Impact-Driven, and Climate-Smart Agriculture
            Investments
          </p>
          <Button text="Learn More" link="/services" />
        </div>

        <img
          src={Image}
          alt="impact-image"
          className="lg:rounded-tr-[20px] lg:rounded-br-[20px] order-2 lg:order-1 mt-[55px] lg:mt-0"
        />
      </div>

      <div className="lg:ml-[150px] lg:pr-20 px-5 text-center lg:text-left mt-0 mt-16">
        <Tape text="what we do" />
        <p className="mt-5 font-semibold lg:text-[68px] text-[28px] text-[#1A1613] leading-[93%] max-w-[1237px]">
          We create wealth and impact by transforming agriculture into
          sustainable, high-return investment opportunities
        </p>
        <Button text="Learn More" link="/services" />
      </div>
      <Solution />
      <Grow />
    </main>
  );
};

export default Home;
