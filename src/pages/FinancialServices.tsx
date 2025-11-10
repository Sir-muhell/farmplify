import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Image from "../assets/services/esg.webp";
import ImageSm from "../assets/services/asset-2.webp";
import ServiceCard, { type Tab } from "../components/ServiceCard";
import leftIcon from "../assets/icons/brown-left.png";
import rightIcon from "../assets/icons/brown-right.png";

const data: Tab[] = [
  {
    id: 1,
    label: "ONE",
    title: "Capital Raising & Structuring",
    items: [
      "Debt financing (commercial loans, credit facilities, green bonds).",
      "Equity financing (private equity, venture capital, institutional investors).",
      "Blended finance models (grant + debt + equity).",
      "Structured notes and asset-backed securities.",
    ],
  },
  {
    id: 2,
    label: "TWO",
    title: "Project Finance & Syndication",
    items: [
      "End-to-end project finance structuring for large-scale agribusiness ventures.",
      "Syndication of funds from multiple financial institutions.",
      "Off-balance-sheet financing models.",
      "Public-private partnership (PPP) structuring.",
    ],
  },
  {
    id: 3,
    label: "THREE",
    title: "Risk Management & Insurance Solutions",
    items: [
      "Crop insurance (climate, pest, disease coverage).",
      "Livestock and aquaculture insurance.",
      "Farm asset and infrastructure insurance.",
      "Credit default protection for investors.",
    ],
  },
  {
    id: 4,
    label: "FOUR",
    title: "Tax & Legal Advisory",
    items: [
      "Agribusiness tax planning and optimization.",
      "Regulatory compliance across local and international standards.",
      "Legal structuring of investment vehicles (SPVs, trusts, cooperatives).",
      "Cross-border investment advisory.",
    ],
  },
  {
    id: 5,
    label: "FIVE",
    title: "Investment Advisory & Portfolio Management",
    items: [
      "Customized investment strategies for farmland, plantations, and agribusinesses.",
      "ESG and impact-focused investment structuring.",
      "Portfolio diversification and risk-adjusted return analysis.",
      "Monitoring and performance evaluation of agri-investments.",
    ],
  },
  {
    id: 6,
    label: "SIX",
    title: "Blended & Development Finance Solutions",
    items: [
      "Accessing concessional finance from DFIs, multilaterals, and donor agencies.",
      "Structuring climate-smart and sustainable agriculture finance.",
      "Designing credit guarantees and risk-sharing facilities.",
      "Inclusive financing for smallholder farmer integration.",
    ],
  },
  {
    id: 7,
    label: "SEVEN",
    title: "Trade & Export Finance",
    items: [
      "Pre- and post-shipment financing.",
      "Letters of credit, guarantees, and trade credit insurance.",
      "Export credit agency-backed financing.",
      "Structured commodity trade finance.",
    ],
  },
  {
    id: 8,
    label: "EIGHT",
    title: "Leasing & Asset Financing",
    items: [
      "Farm equipment leasing and financing solutions.",
      "Warehouse receipt financing.",
      "Livestock and input financing structures.",
      "Farmland leasing with embedded finance options.",
    ],
  },
  {
    id: 9,
    label: "NINE",
    title: "Carbon & Green Finance Solutions",
    items: [
      "Carbon credit-linked financing models.",
      "Green bonds and sustainability-linked loans.",
      "Financing for renewable energy in agribusiness.",
      "Climate resilience and adaptation project funding.",
    ],
  },
  {
    id: 10,
    label: "TEN",
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
        <div className=" flex flex-col lg:px-20 px-5 lg:py-28 py-5 relative bg-[#59260B]">
          <img
            src={Image}
            alt="page-image"
            className="h-[520px] object-cover object-[5%_25%]  rounded-[16px] md:block hidden"
          />
          <img
            src={Image}
            alt="page-image"
            className="h-[139px] object-cover object-[5%_25%]  rounded-[16px] md:hidden"
          />
          <div className=" lg:mt-[64px] mt-[34px] lg:grid grid-cols-8">
            <div className="col-span-1"></div>
            <ServiceCard
              tabs={data}
              textColor="#DFDFDF"
              titleColor="#FFFFFF"
              className="col-span-6"
              leftIcon={leftIcon}
              rightIcon={rightIcon}
            />
            <div className="col-span-1"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinancialServices;
