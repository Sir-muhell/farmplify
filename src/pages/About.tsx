import Body from "../components/about/Body";
import Hero from "../components/about/Hero";
import Image from "../assets/object.svg";
import Navbar from "../components/Navbar";
import Tape from "../components/Tape";
import Field from "../assets/about-3.webp";
import Button from "../components/Button";

const About = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <div className="bg-[#59260B]">
        <div className="lg:hidden">
          <Hero
            text="Who<br/> We Are"
            tape="about-us"
            image={Image}
            color="#59260B"
          />
        </div>
        <div className="hidden lg:block">
          <Hero
            text="Who We Are"
            tape="about-us"
            image={Image}
            color="#59260B"
          />
        </div>
        <section className="bg-white lg:rounded-t-[186px]  rounded-t-[50px] lg:pt-[112px] pt-[50px]">
          <div className="py-10 lg:px-20 px-5 lg:grid grid-cols-2 gap-5 lg:text-left text-center">
            <div className="col-span-2 mb-6">
              <Tape text="who we are" textColor="#1F3C15" />
            </div>
            <div className="lg:grid grid-cols-4 gap-5">
              <div className="col-span-3">
                <p className="font-medium lg:text-[40px] text-[32px] text-[#1A1613] leading-[110%] ">
                  Transforming agriculture into structured, secure, and
                  profitable investments across Nigeria and Africa at large
                </p>
                <div className="mt-4">
                  <Button text="Contact Us" link="/contact" />
                </div>
              </div>
            </div>
            <div className="lg:max-w-[553px]">
              <p className="text-[#616161] font-medium text-xl leading-[130%] lg:text-left text-center  ">
                In the dynamic landscape of African agriculture, Farmplify
                emerges as a pioneering force, redefining how capital flows into
                the continent’s most essential sector. Built on the vision to
                unlock Africa’s trillion-dollar agribusiness potential,
                Farmplify operates as a specialized agriculture investment
                management company, dedicated to structuring secure, scalable,
                and asset-backed opportunities for investor
              </p>
              <img
                src={Field}
                alt=""
                className="w-full rounded-[8px] h-[190px] lg:block hidden mt-[45px] object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <Body />
    </main>
  );
};

export default About;
