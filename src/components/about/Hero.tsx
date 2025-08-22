import Image from "../../assets/bg-green.svg";
import Image2 from "../../assets/about.webp";

const Hero = () => {
  return (
    <section
      className="items-center flex flex-col lg:px-20 px-5 min-h-screen  mx-auto relative"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="lg:mt-[200px] mt-[175px]  text-center max-w-[694px]">
        <p className="lg:text-7xl text-[50px] leading-[93%] font-semibold text-[#1F3C15]">
          Unlock Africa's Agricultural Gold
        </p>
        <p className="mt-4 text-[#616161] font-medium lg:text-xl text-base max-w-[548px] m-auto">
          Partner with Farmplify to access trillion-dollar agricultural
          investment opportunities across Africa
        </p>
        <button className="mt-10 bg-[#30C67C] text-white font-semibold text-sm tracking-[0.2em] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition uppercase">
          Book a Call
        </button>
      </div>

      <div className="lg:pt-20 pt-10 lg:max-w-[1000px] lg:px-20 mx-auto pb-20 w-full">
        <img src={Image2} alt="Hero_img" className="rounded-[24px]" />
      </div>

      <div className="absolute top-80 -left-[40%] pointer-events-none hidden lg:block">
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
      <div className="absolute lg:top-40 -top-40 lg:-right-[40%] -right-[170%] pointer-events-none ">
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
    </section>
  );
};

export default Hero;
