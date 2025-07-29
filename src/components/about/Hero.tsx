import React from "react";
import Image from "../../assets/bg-green.svg";
import Image2 from "../../assets/about.png";

const Hero = () => {
  return (
    <section
      className="items-center flex flex-col px-20 min-h-screen mb-80  mx-auto relative"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="mt-[200px]  text-center max-w-[694px]">
        <p className="text-7xl font-semibold text-[#1F3C15]">
          Unlock Africa's Agricultural Gold
        </p>
        <p className="mt-4 text-[#616161] font-medium text-xl max-w-[548px] m-auto">
          Partner with Farmplify to access trillion-dollar agricultural
          investment opportunities across Africa
        </p>
        <button className="mt-10 bg-[#30C67C] text-white font-semibold text-sm tracking-[0.2em] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase">
          Book a Call
        </button>
      </div>
      <div className="absolute top-80 -left-[40%] pointer-events-none">
        <div
          className="
        w-[852px] h-[690px] 
        bg-[#30C67C] bg-opacity-30 
        rounded-full 
        blur-[194px]
        transform translate-y-[-100px]
      "
        />
      </div>
      <div className="absolute top-40 -right-[40%] pointer-events-none">
        <div
          className="
        w-[852px] h-[490px] 
        bg-[#30C67C] bg-opacity-30 
        rounded-full 
        blur-[254px]
        transform translate-y-[-100px]
      "
        />
      </div>
      <img
        src={Image2}
        alt="Hero_img"
        className="absolute -bottom-48 max-w-[1000px] px-20 mx-auto"
      />
    </section>
  );
};

export default Hero;
