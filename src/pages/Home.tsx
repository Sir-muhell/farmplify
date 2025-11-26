import HeroSection from "../components/home/HeroSection";
import Bg from "../assets/home/bg.svg";
import Image from "../assets/home/home.webp";
import GreenTree from "../assets/home/tree1.svg";
import WhiteTree from "../assets/home/tree2.svg";
import BrownTree from "../assets/home/tree3.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="relative w-full">
      <HeroSection />
      <section
        className="lg:p-20 px-4 py-20 grid grid-cols-2 grid-cols-1 gap-4 lg:gap-5"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={Image}
          alt="farm-image"
          className="lg:rounded-[32px] rounded-[16px] h-[229px] lg:h-[415px] w-full object-cover col-span-2"
        />

        <div className="bg-[#F2BF4A] text-[#1F3C15] lg:p-[43px] lg:pb-12 pt-5 px-4 pb-[114px] lg:col-span-1 col-span-2 lg:rounded-[32px] rounded-[16px] relative lg:text-left text-center overflow-hidden">
          <p className="uppercase text-[16px] font-semibold tracking-[6.4px]">
            who we are
          </p>
          <p className="text-[24px] lg:text-[32px] font-semibold lg:leading-[110%] tracking-[0.6px] leading-[120%] mt-6 max-w-[417px]">
            We are the management force committed to transforming African
            agriculture into a structured, secured and high return asset class.
          </p>
          <Link to="/about">
            <button className="bg-white text-[#1F3C15] font-semibold uppercase text-xl lg:py-[18px] py-[14px] px-[63px] rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer relative z-10">
              learn more
            </button>
          </Link>
          <img
            src={GreenTree}
            alt="tree-imgage"
            className="absolute lg:bottom-0 -bottom-18 lg:right-[29px] lg:w-[222px] w-[334px] left-1/2 transform -translate-x-1/2 lg:left-auto"
          />
        </div>
        <div className="bg-[#30C67C] text-white lg:p-[43px] lg:pb-12 pt-5 px-4 pb-[105px] lg:col-span-1 col-span-2 lg:rounded-[32px] rounded-[16px] relative lg:text-left text-center overflow-hidden">
          <p className="uppercase text-[16px] font-semibold tracking-[6.4px]">
            our approach to sustainability
          </p>
          <p className="text-[24px] lg:text-[32px] font-semibold lg:leading-[110%] tracking-[0.6px] leading-[120%] mt-6 max-w-[417px]">
            Delivering Structured, Impact-Driven, and Climate-Smart Agriculture
            Investments
          </p>
          <Link to="/esg-and-impact-investing">
            <button className="bg-white text-[#1F3C15] font-semibold uppercase text-xl lg:py-[18px] py-[14px] px-[63px] rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer relative z-10">
              learn more
            </button>
          </Link>

          <img
            src={WhiteTree}
            alt="tree-imgage"
            className="absolute lg:bottom-0 -bottom-18 lg:right-[29px] lg:w-[222px] w-[334px] left-1/2 transform -translate-x-1/2 lg:left-auto"
          />
        </div>
      </section>
      <section className="bg-[#FFF8EA] lg:p-10 p-4">
        <div className="bg-white text-white lg:p-[43px] lg:pb-12 pt-5 px-4 pb-[105px] lg:col-span-1 col-span-2 lg:rounded-[32px] rounded-[16px] relative lg:text-left text-center ">
          <p className="uppercase text-[16px] font-semibold tracking-[6.4px] text-[#1F3C15]">
            what we do
          </p>
          <p className="text-[32px] text-[#1A1613] lg:text-[56px] font-medium lg:leading-[110%] tracking-[0.6px] leading-[120%] mt-6 max-w-[992px] relative z-10">
            Turning African agribusinesses into professionally managed,
            profitable, and impactful opportunities for investors and
            communities alike.
          </p>
          <Link to="/services">
            <button className="text-white bg-[#1F3C15] font-semibold uppercase text-xl lg:py-[18px] py-[14px] px-[63px] rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer relative z-10">
              learn more
            </button>
          </Link>

          <img
            src={BrownTree}
            alt="tree-imgage"
            className="absolute lg:bottom-0 -bottom-0 lg:-right-[80px] -right-20 lg:h-[536px] h-[292px] "
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
