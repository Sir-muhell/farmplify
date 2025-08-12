import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

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
        title="Impact Investment Areas"
        tapeText="ESG & Impact Investing"
        why="ESG Investment Benefits"
        offerings={[
          {
            title: "Carbon Credit-Linked Investments",
            description:
              "Participate in the rapidly growing carbon credit market through investments that sequester carbon while generating agricultural returns. Our projects focus on soil carbon, reforestation, and regenerative agriculture practices.",
            image: Img,
            imagePosition: "right",
          },
          {
            title: "Inclusive Agricultural Models",
            description:
              "Support investments that create opportunities for underserved communities: Women in Agriculture: Programs that empower female farmers and entrepreneurs Youth Engagement: Initiatives that attract young people to agricultural careers Smallholder Integration: Models that connect small-scale farmers to value chains",
            image: Img,
            imagePosition: "left",
          },
          {
            title: "Environmental & Social Impact Reporting",
            description:
              "Comprehensive measurement and reporting of your investment's environmental and social impact. We provide detailed metrics and transparent reporting that demonstrates your commitment to sustainable development.",
            image: Img,
            imagePosition: "right",
          },
        ]}
        features={[
          {
            icon: Icon5,
            title: "Risk Mitigation",
            description:
              "ESG factors often correlate with better long-term performance",
          },
          {
            icon: Icon2,
            title: "Market Access",
            description:
              "Meet growing demand for sustainable investment products",
          },
          {
            icon: Icon4,
            title: "Regulatory Alignment",
            description: "Stay ahead of evolving ESG reporting requirements",
          },
          {
            icon: Icon3,
            title: "Brand Value",
            description:
              "Enhance reputation through demonstrated social responsibility",
          },
          {
            icon: Icon1,
            title: "Future-Proofing",
            description: "Build resilience against climate and social risks",
          },
        ]}
      />
      <Grow />
    </main>
  );
};

export default FinancialServices;
