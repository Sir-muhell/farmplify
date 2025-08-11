import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Tape from "../components/Tape";
import Img from "../assets/slide2.jpg";
import Bg from "../assets/bg.png";
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
        title="Investment Advisory"
        tapeText="Investment Advisory"
        backgroundImage="/path/to/bg-image.png"
        offerings={[
          {
            title: "Agri-Market Insights & Investment Opportunity Analysis",
            description:
              "Stay ahead of market trends with our comprehensive analysis...",
            image: Img,
            imagePosition: "right",
          },
          {
            title: "Risk Profiling & Tailored Portfolio Structuring",
            description:
              "Every investor has unique goals and risk tolerance...",
            image: Img,
            imagePosition: "left",
          },
        ]}
        features={[
          {
            icon: Icon1,
            title: "Market Expertise",
            description:
              "Leverage our deep understanding of agricultural markets...",
          },
          // Add other features...
        ]}
      />
      <Grow />
    </main>
  );
};

export default AssetInvestment;
