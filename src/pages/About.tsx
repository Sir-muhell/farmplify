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
        <section className="bg-white lg:rounded-t-[186px]  lg:pt-[112px] ">
          <div className="lg:py-10 py-6 lg:px-20 px-5 lg:grid grid-cols-2 gap-5 lg:text-left text-center">
            <img
              src={Field}
              alt=""
              className="w-full rounded-[8px] h-[142px]  mb-8 object-cover lg:hidden"
            />
            <div className="col-span-2 mb-6">
              <Tape text="who we are" textColor="#1F3C15" />
            </div>
            <div className="lg:grid grid-cols-4 gap-5">
              <div className="col-span-3">
                <p className="font-medium lg:text-[40px] text-[32px] text-[#1A1613] leading-[110%] ">
                  Transforming agriculture into structured, secure, and
                  profitable investments in Africa.
                </p>
                <p className="text-[#616161] font-medium text-xl leading-[130%] lg:text-left text-center lg:block hidden mt-5">
                  We are stewards of agricultural value. We bring together
                  investors, agripreneurs, agribusinesses, innovators, academia
                  and rural communities to turn Africa’s agricultural challenges
                  into thriving, stable, and investable systems. We are
                  dedicated to professionalizing and strengthening agribusiness
                  management in Africa; ensuring every investment is carefully
                  planned, transparently executed, and built to endure.
                </p>
                <div className="mt-4 mb-10 lg:mb-0">
                  <Button text="Contact Us" link="/contact" />
                </div>
              </div>
            </div>
            <div className="lg:max-w-[553px]">
              <p className="text-[#616161] font-medium text-xl leading-[130%] lg:text-left text-center lg:hidden ">
                We are stewards of agricultural value. We bring together
                investors, agripreneurs, agribusinesses, innovators, academia
                and rural communities to turn Africa’s agricultural challenges
                into thriving, stable, and investable systems. We are dedicated
                to professionalizing and strengthening agribusiness management
                in Africa; ensuring every investment is carefully planned,
                transparently executed, and built to endure.
              </p>
              <p className="text-[#616161] font-medium text-xl leading-[130%] lg:text-left text-center  ">
                Our work is anchored in operational excellence, disciplined
                oversight, and a commitment to making agriculture productive,
                secure, and sustainable for all it touches. <br /> <br /> Our
                purpose goes beyond returns. Success, for us, is stronger food
                systems, empowered communities, and agribusinesses that feeds
                generations. Every project we manage reduces risk, builds
                resilience, and unlocks shared prosperity. We tackle today’s
                agricultural gaps while shaping a secure and abundant food
                future for Africa.
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
