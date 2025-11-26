import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Image from "../assets/services/invest.webp";

const services = [
  {
    title: "Farmland Acquisition & Development ",
    description:
      "Identification, purchase, and development of high-value agricultural land.",
    color: "#EBFAF2",
  },
  {
    title: "Farmland Leasing Models",
    description:
      "Structuring short-term and long-term leasing arrangements for investors and operators.",
    color: "#F2BF4A33",
  },
  {
    title: "Land Value Appreciation Strategies",
    description:
      "Strategic asset management to maximize land appreciation and long-term investor returns.",
    color: "#59260B26",
  },
  {
    title: "Sustainable Land Use Planning",
    description:
      "Integration of environmentally responsible land utilization practices.",
    color: "#EBFAF2",
  },
  {
    title: "Carbon Farming & Climate-Smart Projects",
    description:
      "Development of carbon credit-linked initiatives that generate financial and environmental value.",
    color: "#E6DFDB",
  },
  {
    title: "Asset Optimization & Performance Management",
    description:
      "Ongoing monitoring, reporting, and enhancement of farmland productivity and profitability.",
    color: "#F2BF4A33",
  },
  {
    title: "Legal & Regulatory Structuring",
    description:
      "Title verification, due diligence, and compliance advisory for farmland investments.",
    color: "#F2BF4A33",
  },
];

const AssetInvestment = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Real Asset Investment"
        head="Real Asset Investment"
        subHead="The real asset investment unit specializes in the acquisition, development, and strategic management of high-value farmland. Leveraging structured purchasing, leasing models and land appreciation strategies, we optimize asset performance while ensuring long-term value creation. Our approach integrates carbon farming initiatives and sustainable land use practices, delivering both financial returns and measurable environmental impact."
        headNum={918}
        number={783}
      />
      <section className="lg:px-20 px-5 lg:py-[50px] pb-[107px] relative flex flex-col">
        <img
          src={Image}
          alt=""
          className="lg:h-[448px] h-[124px] w-full object-cover object-center lg:object-[0%_35%] lg:rounded-[24px] rounded-[8px] order-1 lg:order-2 lg:mt-5"
        />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:gap-5 pt-5 order-2 lg:order-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-[24px] pt-[28px] pb-5 px-[31px]  min-h-[237px]"
              style={{ backgroundColor: service.color }}
            >
              <p className="font-semibold text-[24px] leading-[130%] tracking-[0.6px] text-center lg:text-left">
                {service.title}
              </p>
              <ul className="list-disc ml-5">
                <li className="text-[16px] font-medium mt-3 text-[#5C5C5C] leading-[130%] tracking-[0.6px]">
                  {service.description}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AssetInvestment;
