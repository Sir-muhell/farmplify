import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Img from "../assets/slide2.jpg";
import Icon1 from "../assets/icons/building-1.svg";
import Icon2 from "../assets/icons/chart-up.svg";
import Icon3 from "../assets/icons/coin-stack.svg";
import Icon4 from "../assets/icons/heart.svg";
import Icon5 from "../assets/icons/plant.svg";
import Services from "../components/services";

const AssetInvestment = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Real Asset Investment"
        head="Build Wealth Through Strategic Real Asset Acquisition"
        subHead="Secure your financial future with tangible agricultural real assets. Our real asset investment services focus on acquiring, developing, and optimizing farmland and related assets that provide both income generation and long-term appreciation."
      />
      <Services
        title="Core Investment Strategies"
        tapeText="Real Asset Investment"
        why="Real Asset Advantages"
        offerings={[
          {
            title: "Farmland Acquisition & Development",
            description:
              "Identify and acquire prime agricultural land with strong production potential and appreciation prospects. Our acquisition process includes comprehensive soil analysis, water rights evaluation, and development planning to maximize asset value.",
            image: Img,
            imagePosition: "right",
          },
          {
            title: "Flexible Leasing Models & Appreciation Strategies",
            bulletPoints: [
              "Cash Rent Leasing: Stable income through fixed rental agreements",
              "Crop Share Arrangements: Participate in production upside while sharing risks",
              "Development Partnerships: Joint ventures that unlock land value through development",
            ],
            image: Img,
            imagePosition: "left",
          },
          {
            title: "Carbon Farming & Sustainable Land Use",
            description:
              "Capitalize on the growing carbon credit market through sustainable farming practices. We help you implement carbon farming strategies that generate additional revenue streams while improving soil health and environmental impact.",
            image: Img,
            imagePosition: "right",
          },
        ]}
        features={[
          {
            icon: Icon5,
            title: "Inflation Hedge",
            description: "Agricultural land historically outpaces inflation",
          },
          {
            icon: Icon2,
            title: "Portfolio Diversification",
            description: "Low correlation with traditional financial assets",
          },
          {
            icon: Icon4,
            title: "Income Generation",
            description: "Immediate returns through leasing and production",
          },
          {
            icon: Icon3,
            title: "Appreciation Potential",
            description:
              " Long-term capital gains through strategic development",
          },
          {
            icon: Icon1,
            title: "ESG Alignment",
            description:
              "Sustainable practices that meet modern investment criteria",
          },
        ]}
      />
      <Grow />
    </main>
  );
};

export default AssetInvestment;
