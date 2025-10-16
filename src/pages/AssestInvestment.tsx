import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Image from "../assets/services/invest.webp";

const AssetInvestment = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Real Asset Investment"
        head="Real Asset Investment"
        subHead=""
        headNum={558}
      />
      <section>
        <div className=" flex flex-col lg:px-20 px-5 relative bg-[#E5CFC2]">
          <div className="lg:mt-[143px] mt-14 lg:mb-[111px] mb-20 text-[#434343] text-left lg:grid grid-cols-8 gap-5">
            <div className="col-span-4">
              <p className="text-[#434343] font-medium text-[16px] leading-[130%] tracking-[0.6px]">
                The real asset investment unit specializes in the acquisition,
                development, and strategic management of high-value farmland.
                Leveraging structured purchasing, leasing models and land
                appreciation strategies, we optimize asset performance while
                ensuring long-term value creation. Our approach integrates
                carbon farming initiatives and sustainable land use practices,
                delivering both financial returns and measurable environmental
                impact.
              </p>
              <img
                src={Image}
                alt=""
                className="mt-10 lg:mt-20 h-[378px] w-full object-cover object-center rounded-[16px] hidden lg:block"
              />
            </div>
            <div className="col-span-1"></div>
            <div className="max-w-[419px] col-span-3 lg:mt-0 mt-14">
              <ul className="space-y-8 text-[16px] text-[#434343] font-medium leading-[130%] lg:mt-0 mt-4">
                <li className="flex items-start">
                  <span className="mr-3 font-semibold">•</span>
                  <p>
                    <span className="font-semibold text-black">
                      Farmland Acquisition & Development –
                    </span>{" "}
                    Identification, purchase, and development of high-value
                    agricultural land.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold">•</span>
                  <p>
                    <span className="font-semibold text-black">
                      Farmland Leasing Models –
                    </span>{" "}
                    Structuring short-term and long-term leasing arrangements
                    for investors and operators.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold">•</span>
                  <p>
                    <span className="font-semibold text-black">
                      Land Value Appreciation Strategies –
                    </span>{" "}
                    Strategic asset management to maximize land appreciation and
                    long-term investor returns.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold">•</span>
                  <p>
                    <span className="font-semibold text-black">
                      Sustainable Land Use Planning –
                    </span>{" "}
                    Integration of environmentally responsible land utilization
                    practices.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold ">•</span>
                  <p>
                    <span className="font-semibold text-black">
                      Carbon Farming & Climate-Smart Projects –
                    </span>{" "}
                    Development of carbon credit-linked initiatives that
                    generate financial and environmental value.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold">•</span>
                  <p>
                    <span className="font-semibold text-black">
                      Asset Optimization & Performance Management –
                    </span>{" "}
                    Ongoing monitoring, reporting, and enhancement of farmland
                    productivity and profitability.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold">•</span>
                  <p>
                    <span className="font-semibold text-black">
                      Legal & Regulatory Structuring –
                    </span>{" "}
                    Title verification, due diligence, and compliance advisory
                    for farmland investments.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <img
        src={Image}
        alt=""
        className="lg:hidden h-[262px] object-cover w-full"
      />
      <Grow />
    </main>
  );
};

export default AssetInvestment;
