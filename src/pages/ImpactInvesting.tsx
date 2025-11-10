import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Image from "../assets/services/esg.webp";
import ImageSm from "../assets/services/asset-2.webp";
import ServiceCard, { type Tab } from "../components/ServiceCard";
import leftIcon from "../assets/icons/yellow-left.png";
import rightIcon from "../assets/icons/yellow-right.png";

const servicesData: Tab[] = [
  {
    id: 1,
    label: "ONE",
    title: "Carbon Credit-Linked Investments",
    items: [
      "Structuring and managing carbon offset projects through tree plantations, agroforestry, and regenerative agriculture.",
      "Facilitating carbon credit registration, certification, and trading on international markets.",
      "Partnering with global climate finance initiatives to scale Africa’s carbon market opportunities.",
    ],
  },
  {
    id: 2,
    label: "TWO",
    title: "Sustainable Agriculture & Climate-Smart Practices",
    items: [
      "Deployment of climate-resilient farming methods (conservation tillage, precision irrigation, organic inputs).",
      "Soil fertility restoration, biodiversity conservation, and ecosystem management.",
      "Training and empowering smallholder farmers in sustainable practices that improve productivity and resilience.",
    ],
  },
  {
    id: 3,
    label: "THREE",
    title: "Inclusive Investment Models",
    items: [
      "Designing agri-investment structures that empower women, youth, and underserved communities.",
      "Providing access to land, financing, and market linkages for inclusive participation in agriculture.",
      "Developing outgrower and cooperative models that share profits equitably across the value chain.",
    ],
  },
  {
    id: 4,
    label: "FOUR",
    title: "Impact Measurement & Reporting",
    items: [
      "Comprehensive ESG reporting frameworks aligned with international standards (IFC Performance Standards, SASB, GRI).",
      "Monitoring, evaluating, and publishing social, economic, and environmental impact outcomes for investors.",
      "Blockchain-enabled transparency tools for real-time tracking of impact metrics.",
    ],
  },
  {
    id: 5,
    label: "FIVE",
    title: "Green Finance & Blended Capital Structuring",
    items: [
      "Leveraging grants, concessional loans, and impact funds to de-risk private investment.",
      "Structuring blended finance vehicles that mobilize institutional capital into climate-smart agriculture.",
      "Linking investors with green bonds and sustainable finance products tailored to agribusiness.",
    ],
  },
  {
    id: 6,
    label: "SIX",
    title: "Renewable Energy Integration",
    items: [
      "Deploying solar, biogas, and other renewable energy systems in farm operations.",
      "Enhancing efficiency and reducing carbon footprint across agricultural value chains.",
      "Creating off-grid energy solutions for rural agribusiness clusters.",
    ],
  },
  {
    id: 7,
    label: "SEVEN",
    title: "Community Development & Shared Prosperity",
    items: [
      "Designing agricultural projects that create jobs, improve rural incomes, and reduce poverty.",
      "Investing in rural infrastructure—roads, water, and processing hubs—to support inclusive growth.",
      "Building capacity in local communities through technical training, entrepreneurship, and financial literacy programs.",
    ],
  },
  {
    id: 8,
    label: "EIGHT",
    title: "Sustainability Certifications & Standards",
    items: [
      "Supporting farms and agribusinesses to obtain international sustainability certifications (Fairtrade, Rainforest Alliance, Organic).",
      "Providing audit and compliance support for ESG-aligned investment projects.",
      "Branding and positioning certified produce for premium local and export markets.",
    ],
  },
  {
    id: 9,
    label: "NINE",
    title: "Policy, Advocacy & Partnerships",
    items: [
      "Working with governments, NGOs, and DFIs to align agriculture investments with SDGs and national climate goals.",
      "Designing policy advocacy programs that advance food security, climate resilience, and gender equity.",
      "Facilitating multi-stakeholder partnerships to scale ESG-focused agricultural investments.",
    ],
  },
];
const isMobile = window.innerWidth < 1024;

const ImpactInvesting = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="ESG & Impact Investing"
        head="ESG & Impact Investing"
        headNum={602}
      />
      <section className="h-fit">
        <div className=" flex flex-col lg:px-20 px-5 lg:py-28 py-5  relative bg-[#F2BF4A]">
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
          <div className=" mt-[34px] lg:grid grid-cols-8">
            <div className="col-span-1"></div>
            <ServiceCard
              tabs={servicesData}
              textColor="#000000"
              titleColor="#1F3C15"
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

export default ImpactInvesting;
