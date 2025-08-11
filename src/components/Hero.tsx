import Image from "../assets/bg-green.svg";
import Tape from "./Tape";

interface HeroProps {
  text: string;
  head: string;
  subHead: string;
}
const Hero = ({ text, head, subHead }: HeroProps) => {
  return (
    <section
      className="items-center flex flex-col lg:px-20 px-5 pb-[100px]  mx-auto relative"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="mt-[200px]  text-center max-w-[900px]">
        <Tape text={text} />
        <p className="lg:text-7xl text-[50px] pt-10 leading-[93%] font-semibold text-[#1F3C15]">
          {head}
        </p>
        <p className="mt-6 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto">
          {subHead}
        </p>
        <button className="mt-10 bg-[#30C67C] text-white font-semibold text-sm tracking-[0.2em] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase">
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default Hero;
