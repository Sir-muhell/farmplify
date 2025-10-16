import Body from "../components/about/Body";
import Hero from "../components/about/Hero";
import Grow from "../components/Grow";
import Image from "../assets/bg-green.svg";
import Navbar from "../components/Navbar";
import Tape from "../components/Tape";

const About = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <div className="bg-[#1F3C15]">
        <div className="lg:hidden">
          <Hero
            text="Who<br/> We Are"
            tape="about-us"
            image={Image}
            color="#1F3C15"
          />
        </div>
        <div className="hidden lg:block">
          <Hero
            text="Who We Are"
            tape="about-us"
            image={Image}
            color="#1F3C15"
          />
        </div>
        <section className="bg-white lg:rounded-t-[186px]  rounded-t-[50px] lg:pt-[112px] pt-[50px]">
          <div className="py-10 lg:px-20 px-5 lg:grid grid-cols-8 gap-5 lg:text-left text-center">
            <div className="col-span-4 lg:grid grid-cols-4 gap-5">
              <div className="col-span-3">
                <Tape text="who we are" textColor="#1F3C15" />

                <p className="mt-8 font-medium lg:text-[40px] text-[32px] text-[#1A1613] leading-[110%] ">
                  Transforming agriculture into structured, secure, and
                  profitable investments across Nigeria and Africa at large
                </p>
              </div>

              {/* <Button text="read full story" /> */}
            </div>
            <p className="text-[#616161] font-medium text-xl leading-[130%] lg:pl-10 mt-[65px] lg:text-left text-center col-span-4 lg:w-[553px] ">
              In the dynamic landscape of African agriculture, Farmplify emerges
              as a pioneering force, redefining how capital flows into the
              continent’s most essential sector. Built on the vision to unlock
              Africa’s trillion-dollar agribusiness potential, Farmplify
              operates as a specialized agriculture investment management
              company, dedicated to structuring secure, scalable, and
              asset-backed opportunities for investor
            </p>
          </div>
        </section>
      </div>

      <Body />
      <div className="bg-white">
        <Grow />
      </div>
    </main>
  );
};

export default About;
