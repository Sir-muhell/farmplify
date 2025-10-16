import HeroSection from "../components/home/HeroSection";
import Grow from "../components/Grow";
import Image from "../assets/home.webp";
import Image2 from "../assets/home2.webp";
import Button from "../components/Button";

const Home = () => {
  return (
    <main className="relative w-full lg:space-y-20">
      <HeroSection />
      <div className="lg:py-18 py-10 lg:px-20 px-5">
        <p className="uppercase tape-small text-center">who we are</p>
        <div className="lg:grid grid-cols-8 gap-5 mt-[36px] h-fit">
          <div className="col-span-3 lg:max-w-[417px]">
            <p className="font-medium text-[32px]  leading-[110%] tracking-[0.6px] text-[#1A1613] lg:mt-3 lg:text-left text-center">
              We are deeply passionate about transforming agriculture into a
              structured, secure, and highly profitable investment class for
              Africa and the world.
            </p>
            <div className="mt-3 text-center lg:text-left">
              <Button text="Learn More" link="/about" />
            </div>
          </div>

          <div className="col-span-5 rounded-[8px] ">
            <img
              src={Image2}
              alt="Image"
              className="object-cover mt-10 lg:mt-0 lg:h-[338px] h-40 w-full rounded-[8px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-8 gap-5 lg:mt-20 mt-16 lg:px-20 px-5">
        <div className=" order-1 lg:order-2 lg:px-0 px-5 text-center lg:text-left col-span-4 justify-center flex flex-col">
          <p className="uppercase tape-small text-center lg:ml-4 lg:text-left">
            our approach to sustainability
          </p>
          <p className="mt-5 font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%] tracking-[0.6px]">
            Delivering Structured, Impact-Driven, and Climate-Smart Agriculture
            Investments
          </p>
          <Button text="Learn More" link="/services" />
        </div>

        <img
          src={Image}
          alt="impact-image"
          className="rounded-[8px] order-2 lg:order-1 mt-[55px] lg:mt-0 col-span-4 w-[542px] lg:h-[497px] object-cover"
        />
      </div>

      <div className="lg:px-20 px-5 text-center lg:text-left mt-0 mt-[102px] mb-10 lg:mb-0">
        <p className="uppercase tape-small text-center lg:ml-4 lg:text-left">
          what we do
        </p>
        <p className="mt-5 lg:mt-8 font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%] tracking-[-0.4px] max-w-[1237px]">
          We create wealth and impact by transforming agriculture into
          sustainable, high-return investment opportunities
        </p>
        <Button text="Learn More" link="/services" />
      </div>
      {/* <Solution /> */}
      <Grow />
    </main>
  );
};

export default Home;
