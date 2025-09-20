import Img1 from "../../assets/solution/solution-1.webp";
import Img2 from "../../assets/solution/solution-2.webp";
import Img3 from "../../assets/solution/solution-3.webp";
import Img4 from "../../assets/solution/solution-4.webp";
import Headings from "../../components/Headings";

const Solution = () => {
  return (
    <div className="lg:p-20 p-5 max-w-[1600px] mx-auto">
      <Headings
        tape="Investment Opportunities"
        // tape="Investment Opp"
        headOne="The Farmplify Solution"
        headTwo=""
        text="Farmplify unlocks agriculture's potential through easy, professionally managed tech-enabled investments."
      />
      <div className="space-y-8 mt-14">
        <div className="bg-[#30C67C1A] h-[420px] rounded-3xl lg:grid grid-cols-11 h-full">
          <div className="col-span-4 w-[186px] lg:w-full text-center lg:text-left mx-auto lg:mx-0 lg:pl-[95px] lg:flex flex-col justify-center">
            <p className="section-text pt-12 lg:pt-0">AgriProperty</p>
            <p className="lg:text-[50px] text-[32px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
              Farmland Real Estate
            </p>
            <p className="mt-4 lg:text-xl text-sm text-[#5F5F5F] font-medium leading-[130%]">
              Invest in prime agricultural land, benefiting from land value
              appreciation and lease/rental returns.
            </p>
          </div>
          <div className="col-span-7 lg:p-6 p-2 h-full">
            <img
              src={Img4}
              alt=""
              className="lg:h-[372px] h-[183px] w-full object-cover rounded-[18px]"
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-10 lg:mt-10 mt-8 lg:space-y-0 space-y-8">
          <div className="bg-[#E5CFC2] rounded-3xl lg:grid grid-cols-7 lg:h-[420px]">
            <div className="col-span-4 w-[186px] lg:w-full text-center lg:text-left mx-auto lg:mx-0 lg:pl-10 flex flex-col justify-center">
              <p className="section-text pt-12 lg:pt-0">Silviculture</p>
              <p className="lg:text-[50px] text-[32px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
                Tree Plantations:
              </p>
              <p className="mt-4 lg:text-xl text-sm text-[#5F5F5F] font-medium leading-[130%]">
                Grow long-term wealth with sustainable investments in
                high-demand tree species like cashew, teak, and oil palm.
              </p>
            </div>
            <div className="col-span-3 lg:p-6 p-2 h-full">
              <img
                src={Img3}
                alt=""
                className="lg:h-full h-[183px] w-full object-cover rounded-[18px]"
              />
            </div>
          </div>
          <div className="bg-[#E5CFC2] rounded-3xl lg:grid grid-cols-7 lg:h-[420px]">
            <div className="col-span-4 w-[186px] lg:w-full text-center lg:text-left mx-auto lg:mx-0 lg:pl-10 flex flex-col justify-center">
              <p className="section-text pt-12 lg:pt-0">Granary</p>
              <p className="lg:text-[50px] text-[32px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
                Grains Aggregation:
              </p>
              <p className="mt-4 lg:text-xl text-sm text-[#5F5F5F] font-medium leading-[130%]">
                Capitalize on lucrative trading margins by investing in the
                aggregation and supply of essential grains.
              </p>
            </div>
            <div className="col-span-3 lg:p-6 p-2 h-full">
              <img
                src={Img2}
                alt=""
                className="lg:h-full h-[183px] w-full object-cover rounded-[18px]"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#30C67C33] h-[420px] rounded-3xl lg:grid grid-cols-11 h-full">
          <div className="col-span-4 w-[186px] lg:w-full text-center lg:text-left mx-auto lg:mx-0 lg:pl-[95px] flex flex-col justify-center">
            <p className="section-text pt-12 lg:pt-0">ranching</p>
            <p className="lg:text-[50px] text-[32px] font-semibold text-[#1F3C15] leading-[93%] mt-6">
              Cattle Production:
            </p>
            <p className="mt-4 lg:text-xl text-sm text-[#5F5F5F] font-medium leading-[130%]">
              Participate in managed livestock operations, earning commissions
              and profits from robust cattle production cycles.
            </p>
          </div>
          <div className="col-span-7 lg:p-6 p-2 h-full">
            <img
              src={Img1}
              alt=""
              className="lg:h-[372px] h-[183px] w-full object-cover object-[25%_30%] rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
