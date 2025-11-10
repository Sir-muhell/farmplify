import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

import Image from "../assets/services/value.webp";

const services = [
  {
    title: "Structured Commodity Trading",
    description:
      "Management of grain and high-demand cash crop trading portfolios.",
    color: "#EBFAF2",
  },
  {
    title: "Post-Harvest Infrastructure Development",
    description:
      "Establishment and management of storage, drying, and logistics systems to minimize losses.",
    color: "#F2BF4A33",
  },
  {
    title: "Aggregation & Bulk Supply",
    description:
      "Coordinated procurement and structured aggregation for consistent market-ready volumes.",
    color: "#59260B26",
  },
  {
    title: "Agro-Processing & Value Addition",
    description:
      "Processing of grains and cash crops into higher-value products.",
    color: "#EBFAF2",
  },
  {
    title: "Branding & Market Positioning",
    description:
      "Development of premium agricultural brands for domestic and export markets.",
    color: "#E6DFDB",
  },
  {
    title: "Export & Off-Take Management",
    description:
      "Securing long-term supply contracts with exporters, food processors, and retailers.",
    color: "#F2BF4A33",
  },
];

const Commodity = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Commodity & Value Chain Investment"
        head="Commodity <br/> & Value Chain"
        headNum={558}
        subHead="The Commodity & Value Chain Investment management unit designs and manages structured trading programs for grains and high-demand cash crops while building resilient, end-to-end post-harvest infrastructure to protect value and reduce losses. We integrate agro-processing and branding initiatives to capture margin uplift from value addition, enforce rigorous quality assurance and traceability across every link in the supply chain, and secure long-term market access through strategic off-take and B2B partnerships. The result: predictable, scalable returns for investors, sustainably optimized supply chains for partners, and measurable reductions in post-harvest risk."
        number={876}
      />
      <section className="lg:px-20 px-5 lg:py-[50px] pb-[107px]  relative">
        <img
          src={Image}
          alt=""
          className="lg:h-[448px] h-[124px] w-full object-cover object-center lg:rounded-[24px] rounded-[8px]"
        />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:gap-5 pt-5">
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

export default Commodity;
