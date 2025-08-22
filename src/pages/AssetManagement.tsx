import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Img1 from "../assets/services/services-13.webp";
import Img2 from "../assets/services/services-17.webp";
import Img3 from "../assets/services/services-11.webp";
import Icon1 from "../assets/icons/building-1.svg";
import Icon2 from "../assets/icons/chart-up.svg";
import Icon3 from "../assets/icons/coin-stack.svg";
import Icon4 from "../assets/icons/heart.svg";
import Icon5 from "../assets/icons/plant.svg";
import Services from "../components/Service";

const AssetManagement = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Asset Management"
        head="Complete Agricultural Asset Management Solutions"
        subHead="Transform your agricultural investments into profitable, well-managed assets. Our comprehensive asset management services ensure optimal performance across all types of agricultural operations, from farmland to livestock enterprises."
      />
      <Services
        title="Comprehensive Management Services"
        tapeText="Asset Management"
        why="Our Management Advantage"
        offerings={[
          {
            title: "End-to-End Farmland & Agricultural Business Management",
            description:
              "From soil health monitoring to harvest optimization, we handle every aspect of your agricultural assets. Our management approach focuses on maximizing both productivity and sustainability while preserving long-term asset value.",
            image: Img1,
            imagePosition: "right",
          },
          {
            title: "Specialized Oversight Across Multiple Sectors",
            bulletPoints: [
              "Livestock Operations: Professional management of cattle, poultry, and other livestock enterprises",
              "Aquaculture Projects: Expert oversight of fish farming and marine agriculture ventures ",
              "Horticulture Ventures: Specialized management of fruit, vegetable, and ornamental crop operations",
              "Plantation Management: Long-term management of tree crops, palm oil, rubber, and other plantation asset",
            ],
            image: Img2,
            imagePosition: "left",
          },
          {
            title: "Technical & Operational Support",
            description:
              "Our on-ground teams provide continuous technical support, ensuring your assets operate at peak efficiency. From agronomic advice to equipment maintenance, we handle the day-to-day operations that drive success.",
            image: Img3,
            imagePosition: "right",
          },
        ]}
        features={[
          {
            icon: Icon5,
            title: "Professional Operations",
            description: "Experienced managers with proven track records",
          },
          {
            icon: Icon2,
            title: "Technology Integration",
            description:
              "Modern tools and systems for optimal asset performance",
          },
          {
            icon: Icon4,
            title: "Sustainability Focus",
            description:
              "Environmental stewardship that protects long-term value",
          },
          {
            icon: Icon3,
            title: "Performance Monitoring",
            description: "Regular reporting and performance optimization",
          },
          {
            icon: Icon1,
            title: "Local Expertise",
            description:
              "Deep understanding of regional agricultural practices and markets",
          },
        ]}
      />
      <Grow />
    </main>
  );
};

export default AssetManagement;
