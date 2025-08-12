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

const TechEnabled = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Tech-Enabled Agriculture"
        head="Revolutionize Agricultural Operations with Advanced Technology"
        subHead="Harness the power of modern technology to optimize agricultural productivity and profitability. Our tech-enabled agriculture services integrate cutting-edge solutions that transform traditional farming into precision, data-driven operations."
      />
      <Services
        title="Technology Solutions"
        tapeText="Tech-Enabled Agriculture"
        why="Technology Benefits"
        offerings={[
          {
            title: "Precision Agriculture Deployment",
            bulletPoints: [
              "IoT Systems: Smart sensors for soil moisture, temperature, and nutrient monitoring ",
              "Drone Technology: Aerial imaging, crop monitoring, and precision application systems",
              "Analytics Platforms: Advanced data analysis for optimal decision-making",
              "GPS Integration: Precision planting, fertilizing, and harvesting systems",
            ],
            image: Img,
            imagePosition: "right",
          },
          {
            title: "Agri-Tech Investment & Acceleration",
            description:
              "Partner with innovative startups and technology companies that are reshaping agriculture. We identify promising agri-tech ventures and provide investment capital and acceleration support to bring breakthrough technologies to market.",
            image: Img,
            imagePosition: "left",
          },
          {
            title: "Smart Farm Monitoring & Digital Dashboards",
            description:
              "Real-time monitoring and control systems that provide complete visibility into your agricultural operations. Our digital platforms integrate multiple data sources to provide actionable insights and automated management capabilities.",
            image: Img,
            imagePosition: "right",
          },
        ]}
        features={[
          {
            icon: Icon5,
            title: "Increased Productivity",
            description:
              "Optimize inputs and maximize yields through precision management",
          },
          {
            icon: Icon2,
            title: "Cost Reduction",
            description: "Reduce waste and improve resource efficiency",
          },
          {
            icon: Icon4,
            title: "Risk Management",
            description:
              "Early detection and prevention of crop diseases and pests",
          },
          {
            icon: Icon3,
            title: "Data-Driven Decisions",
            description:
              "Make informed choices based on comprehensive analytics",
          },
          {
            icon: Icon1,
            title: "Competitive Advantage",
            description: "Stay ahead with the latest agricultural innovations",
          },
        ]}
      />
      <Grow />
    </main>
  );
};

export default TechEnabled;
