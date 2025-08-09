import Image1 from "../../assets/about-card-1.svg";
import Image2 from "../../assets/about-card-2.svg";
import Image3 from "../../assets/about-card-3.svg";

const Opportunity = () => {
  return (
    <div className="lg:py-20 py-10  gap-16 max-w-[1600px] mx-auto lg:px-20 p-5">
      {/* <div className="mt-10 col-span-4">
        <p className="text-[#1F3C15] lg:text-[56px] text-[44px] font-semibold leading-[96%]">
          The Trillion-Dollar Opportunity
        </p>
        <p className="mt-4 font-medium lg:text-xl text-base leading-[130%] text-[#616161]">
          Africa holds unprecedented agricultural investment potential worth
          over a trillion dollars, yet investors face significant barriers to
          accessing structured, secure, and profitable opportunities in this
          vital sector.
        </p>
      </div> */}
      <div className="lg:grid grid-flow-col grid-rows-2 gap-10 col-span-6 grid-cols-7 mt-20 lg:mt-0 space-y-6 lg:space-y-0">
        <div className="p-10 bg-[#EBFAF2] row-span-2 col-span-3 text-5xl rounded-3xl relative lg:h-full h-[330px]">
          <p className=" text-[#5F5F5F] font-medium text-2xl leading-[130%] w-[40%] tracking-[0.02em]">
            $45B Spent annually on food imports in Nigeria alone
          </p>
          <img
            src={Image1}
            alt="About Card 1"
            className="absolute bottom-0 right-0  object-cover rounded-3xl"
          />
        </div>
        <div className="p-10 bg-[#EBFAF2] row-span-1 col-span-4 text-5xl rounded-3xl lg:h-[233px] h-[330px] relative overflow-hidden">
          <p className=" text-[#5F5F5F] font-medium text-2xl  w-[40%] leading-[130%] tracking-[0.02em]">
            30% Of grains lost post-harvest due to poor infrastructure
          </p>
          <img
            src={Image2}
            alt="About Card 3"
            className="absolute -bottom-3 -right-4  object-cover rounded-3xl"
          />
        </div>
        <div className="p-10 bg-[#EBFAF2] row-span-1 col-span-4 text-5xl rounded-3xl lg:h-[233px] h-[330px] relative overflow-hidden">
          <p className=" text-[#5F5F5F] font-medium text-2xl w-[40%] leading-[130%] tracking-[0.02em]">
            $1T Total agricultural investment potential across Africa
          </p>
          <img
            src={Image3}
            alt="About Card 3"
            className="absolute -bottom-8 right-0  object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
