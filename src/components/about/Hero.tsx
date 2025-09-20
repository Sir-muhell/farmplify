import Tape from "../Tape";

interface HeroProps {
  text: string;
  image: string;
  color: string;
}
const Hero = ({ text, image, color }: HeroProps) => {
  return (
    <section
      className="items-center flex flex-col lg:px-20 px-5   mx-auto relative "
      style={{
        backgroundColor: color,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="lg:mt-[260px] mt-[190px] mt-[175px] lg:mb-[158px] mb-[163px]  text-center ">
        <Tape text="about us" />
        <p className="lg:text-[120px] lg:mt-8 mt-10  text-[64px] leading-[93%] font-semibold text-white">
          {text}
        </p>
      </div>
    </section>
  );
};

export default Hero;
