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

const Commodity = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Commodity & Value Chain Investment"
        head="Maximize Returns Through Strategic Value Chain Integration"
        subHead="Capture value at every stage of the agricultural supply chain. Our commodity and value chain investment services help you build integrated operations that generate multiple revenue streams while reducing market risks."
      />
      <Services
        title="Strategic Investment Areas"
        tapeText="Commodity & Value Chain Investment"
        why="Value Chain Benefits"
        offerings={[
          {
            title: "Structured Grain & Cash Crop Trading",
            description:
              "Access global commodity markets through our structured trading programs. We provide market access, risk management tools, and trading expertise that help you capitalize on price movements and seasonal opportunities.",
            image: Img,
            imagePosition: "right",
          },
          {
            title: "Post-Harvest Infrastructure Development",
            description:
              "Invest in critical infrastructure that reduces post-harvest losses and adds value to agricultural production:",
            bulletPoints: [
              "Storage Facilities: Modern grain storage and warehouse systems ",
              "Drying Infrastructure: Advanced drying and processing equipment",
              "Logistics Networks: Transportation and distribution system",
            ],
            image: Img,
            imagePosition: "left",
          },
          {
            title: "Agro-Processing & Branding Ventures",
            description:
              "Transform raw agricultural products into higher-value processed goods. We identify and develop processing opportunities that create premium products and build brand value in target markets.",
            image: Img,
            imagePosition: "right",
          },
        ]}
        features={[
          {
            icon: Icon5,
            title: "Diversified Revenue Streams",
            description:
              "Multiple income sources reduce dependency on single markets",
          },
          {
            icon: Icon2,
            title: "Risk Mitigation",
            description:
              "Integrated operations provide natural hedging against price volatility",
          },
          {
            icon: Icon4,
            title: "Market Premium",
            description:
              "Value-added products command higher prices and margins",
          },
          {
            icon: Icon3,
            title: "Supply Chain Control",
            description:
              "Vertical integration ensures quality and reduces costs",
          },
          {
            icon: Icon1,
            title: "Scalability",
            description:
              "Expandable operations that grow with your investment capacity",
          },
        ]}
      />
      <Grow />
    </main>
  );
};

export default Commodity;
