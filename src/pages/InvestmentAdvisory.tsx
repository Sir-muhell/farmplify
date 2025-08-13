import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Img from "../assets/slide2.jpg";
import Icon1 from "../assets/icons/building-1.svg";
import Icon2 from "../assets/icons/chart-up.svg";
import Icon3 from "../assets/icons/coin-stack.svg";
import Icon4 from "../assets/icons/heart.svg";
import Icon5 from "../assets/icons/plant.svg";
import Services from "../components/Service";

const Investment = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Investment Advisory"
        head="Unlock Agricultural Investment Opportunities with Expert Guidance"
        subHead="Navigate the complex world of agricultural investments with confidence. Our investment advisory services combine deep market knowledge with strategic analysis to help you identify and capitalize on the most promising opportunities in the agricultural sector."
      />
      <Services
        title="What We Offer"
        tapeText="Investment Advisory"
        why="Why Choose Our Investment Advisory?"
        offerings={[
          {
            title: "Agri-Market Insights & Investment Opportunity Analysis",
            description:
              "Stay ahead of market trends with our comprehensive analysis of agricultural sectors, emerging markets, and investment opportunities. We provide detailed market research, price forecasting, and sector-specific insights that inform your investment decisions.",
            image: Img,
            imagePosition: "right",
          },
          {
            title: "Risk Profiling & Tailored Portfolio Structuring",
            description:
              "Every investor has unique goals and risk tolerance. We develop customized investment portfolios that align with your financial objectives while managing exposure across different agricultural assets, geographies, and market cycles.",
            image: Img,
            imagePosition: "left",
          },
          {
            title: "Feasibility Studies & Due Diligence",
            description:
              "Make informed investment decisions with our thorough feasibility studies and due diligence processes. We evaluate technical, financial, and operational aspects of potential investments, providing you with comprehensive risk assessments and return projections.",
            image: Img,
            imagePosition: "right",
          },
        ]}
        features={[
          {
            icon: Icon5,
            title: "Deep Agricultural Expertise",
            description:
              "Our team combines financial acumen with extensive agricultural knowledge",
          },
          {
            icon: Icon2,
            title: "Portfolio Diversification",
            description:
              "Leverage cutting-edge analytics and market intelligence",
          },
          {
            icon: Icon4,
            title: "Personalized Approach",
            description:
              "Every strategy is tailored to your specific investment goals",
          },
          {
            icon: Icon3,
            title: "Risk Management",
            description:
              "Comprehensive risk assessment and mitigation strategies",
          },
          {
            icon: Icon1,
            title: "Market Access",
            description:
              " Connect with exclusive investment opportunities across global agricultural markets",
          },
        ]}
      />
      <Grow />
    </main>
  );
};

export default Investment;
