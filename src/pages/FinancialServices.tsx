import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Img1 from "../assets/services/services-14.webp";
import Img2 from "../assets/services/services-7.webp";
import Img3 from "../assets/services/services-18.webp";
import Icon1 from "../assets/icons/building-1.svg";
import Icon2 from "../assets/icons/chart-up.svg";
import Icon3 from "../assets/icons/coin-stack.svg";
import Icon4 from "../assets/icons/heart.svg";
import Icon5 from "../assets/icons/plant.svg";
import Services from "../components/Service";

const FinancialServices = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Financial Services"
        head="Comprehensive Financial Solutions for Agricultural Investments"
        subHead="Access the capital and financial expertise needed to execute your agricultural investment strategy. Our financial services provide end-to-end support from initial capital raising through ongoing financial management and optimization."
      />
      <Services
        title="Capital Solutions"
        tapeText="Financial Services"
        why="Financial Service Benefits"
        offerings={[
          {
            title: "Capital Raising Services",
            bulletPoints: [
              "Debt Financing: Traditional loans, development finance, and alternative debt products",
              "Equity Investment: Private equity, venture capital, and strategic partnerships",
              "Blended Finance: Innovative structures combining different capital sources for optimal terms",
            ],

            image: Img1,
            imagePosition: "right",
          },
          {
            title: "Project Finance & Syndication",
            description:
              "Structure and syndicate large-scale agricultural projects with multiple investors and lenders. Our project finance expertise ensures optimal capital structure and risk allocation for complex agricultural ventures.",
            image: Img2,
            imagePosition: "left",
          },
          {
            title: "Specialized Advisory Services",
            bulletPoints: [
              "Tax Advisory: Optimize tax efficiency across agricultural investments and operations",
              "Insurance Solutions: Comprehensive risk management through agricultural insurance products",
              "Legal Advisory: Navigate regulatory requirements and structure transactions for maximum protection",
            ],
            image: Img3,
            imagePosition: "right",
          },
        ]}
        features={[
          {
            icon: Icon5,
            title: "Capital Access",
            description:
              "Connect with diverse funding sources and investor networks",
          },
          {
            icon: Icon2,
            title: "Optimal Structure",
            description:
              "Design financial structures that maximize returns and minimize risk",
          },
          {
            icon: Icon4,
            title: "Regulatory Compliance",
            description:
              "Ensure all investments meet applicable legal and regulatory requirements",
          },
          {
            icon: Icon3,
            title: "Risk Management:",
            description: "Comprehensive insurance and hedging strategies",
          },
          {
            icon: Icon1,
            title: "Tax Efficiency",
            description:
              " Minimize tax burden through strategic structuring and planning",
          },
        ]}
      />
      <Grow />
    </main>
  );
};

export default FinancialServices;
