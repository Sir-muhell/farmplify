import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Image from "../assets/services/finance.webp";
import ServiceCard from "../components/ServiceCard";
import Image2 from "../assets/object.svg";

const data = [
  {
    number: "1",
    title: "Capital Raising & Structuring",
    items: [
      "Debt financing (commercial loans, credit facilities, green bonds).",
      "Equity financing (private equity, venture capital, institutional investors).",
      "Blended finance models (grant + debt + equity).",
      "Structured notes and asset-backed securities.",
    ],
  },
  {
    number: "2",
    title: "Project Finance & Syndication",
    items: [
      "End-to-end project finance structuring for large-scale agribusiness ventures.",
      "Syndication of funds from multiple financial institutions.",
      "Off-balance-sheet financing models.",
      "Public-private partnership (PPP) structuring.",
    ],
  },
  {
    number: "3",
    title: "Risk Management & Insurance Solutions",
    items: [
      "Crop insurance (climate, pest, disease coverage).",
      "Livestock and aquaculture insurance.",
      "Farm asset and infrastructure insurance.",
      "Credit default protection for investors.",
    ],
  },
  {
    number: "4",
    title: "Tax & Legal Advisory",
    items: [
      "Agribusiness tax planning and optimization.",
      "Regulatory compliance across local and international standards.",
      "Legal structuring of investment vehicles (SPVs, trusts, cooperatives).",
      "Cross-border investment advisory.",
    ],
  },
  {
    number: "5",
    title: "Investment Advisory & Portfolio Management",
    items: [
      "Customized investment strategies for farmland, plantations, and agribusinesses.",
      "ESG and impact-focused investment structuring.",
      "Portfolio diversification and risk-adjusted return analysis.",
      "Monitoring and performance evaluation of agri-investments.",
    ],
  },
  {
    number: "6",
    title: "Blended & Development Finance Solutions",
    items: [
      "Accessing concessional finance from DFIs, multilaterals, and donor agencies.",
      "Structuring climate-smart and sustainable agriculture finance.",
      "Designing credit guarantees and risk-sharing facilities.",
      "Inclusive financing for smallholder farmer integration.",
    ],
  },
  {
    number: "7",
    title: "Trade & Export Finance",
    items: [
      "Pre- and post-shipment financing.",
      "Letters of credit, guarantees, and trade credit insurance.",
      "Export credit agency-backed financing.",
      "Structured commodity trade finance.",
    ],
  },
  {
    number: "8",
    title: "Leasing & Asset Financing",
    items: [
      "Farm equipment leasing and financing solutions.",
      "Warehouse receipt financing.",
      "Livestock and input financing structures.",
      "Farmland leasing with embedded finance options.",
    ],
  },
  {
    number: "9",
    title: "Carbon & Green Finance Solutions",
    items: [
      "Carbon credit-linked financing models.",
      "Green bonds and sustainability-linked loans.",
      "Financing for renewable energy in agribusiness.",
      "Climate resilience and adaptation project funding.",
    ],
  },
  {
    number: "10",
    title: "Advisory & Transaction Services",
    items: [
      "Mergers & acquisitions (M&A) in agribusiness.",
      "Business valuation and due diligence.",
      "Financial modeling and feasibility studies.",
      "Exit strategy planning for investors.",
    ],
  },
];
const isMobile = window.innerWidth < 1024;

const FinancialServices = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="AGRIFINANCE SERVICE"
        head="AgriFinance Services"
        number={645}
        headNum={602}
        subHead="The Financial Services division provides comprehensive capital solutions and advisory for agricultural investments, encompassing debt, equity, and blended finance. This unit is responsible for structuring and syndicating project finance, while delivering expert tax, insurance, and legal advisory to institutional and private investors, ensuring optimal returns and compliance across the agribusiness sector."
      />
      <section className="h-fit">
        <div
          className="lg:px-20 px-5 lg:pt-[117px] lg:pb-[128px] pt-5 pb-[84px] bg-[#1A1613] flex flex-col"
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: isMobile ? "200%" : "100%",
            backgroundPosition: "top",
          }}
        >
          <img
            src={Image}
            alt=""
            className="h-[139px] object-cover object-[5%_25%]  rounded-[16px] lg:hidden flex "
          />{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-28 lg:gap-y-20  lg:mt-0 mt-[34px]">
            {data.map((service, index) => (
              <React.Fragment key={service.number}>
                <ServiceCard
                  number={service.number}
                  title={service.title}
                  items={service.items}
                />

                {/* Insert image after the first card */}
                {index === 0 && (
                  <img
                    src={Image}
                    alt="Agribusiness imagery"
                    className="h-80 w-full object-cover object-[5%_5%] rounded-[16px] lg:col-span-2 md:col-span-1 lg:flex hidden"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <Grow />
    </main>
  );
};

export default FinancialServices;
