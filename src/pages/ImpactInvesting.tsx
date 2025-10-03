import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Image from "../assets/services/esg.webp";
import ServiceCard from "../components/ServiceCard";
import Image2 from "../assets/object.svg";

const servicesData = [
  {
    number: "1",
    title: "Carbon Credit-Linked Investments",
    items: [
      "Structuring and managing carbon offset projects.",
      "Facilitating carbon credit registration and certification.",
      "Partnering with global climate finance initiatives.",
    ],
  },
  {
    number: "2",
    title: "Sustainable Agriculture & Climate-Smart Practices",
    items: [
      "Deployment of climate-resilient farming methods.",
      "Supporting restoration and biodiversity conservation.",
      "Training and empowering smallholder farmers.",
    ],
  },
  {
    number: "3",
    title: "Inclusive Investment Models",
    items: [
      "Designing agri-investment structures that empower women & youth.",
      "Providing access to land, financing, and market linkages.",
      "Developing outgrower and cooperative models.",
    ],
  },
  {
    number: "4",
    title: "Impact Measurement & Reporting",
    items: [
      "Comprehensive ESG reporting frameworks.",
      "Verifying, evaluating, and publishing social & economic outcomes.",
      "Blockchain-enabled transparency tools for real-time tracking.",
    ],
  },
  {
    number: "5",
    title: "Green Finance & Blended Capital Structuring",
    items: [
      "Leveraging grants, concessional loans, and impact funds.",
      "Structuring blended finance vehicles to mobilize capital.",
      "Linking investors with green bonds and sustainable finance.",
    ],
  },
  {
    number: "6",
    title: "Renewable Energy Integration",
    items: [
      "Deploying solar, biogas, and other renewable energy systems.",
      "Enhancing efficiency and reducing carbon footprint.",
      "Creating off-grid energy solutions for rural clusters.",
    ],
  },
  {
    number: "7",
    title: "Community Development & Shared Prosperity",
    items: [
      "Designing agricultural projects that create jobs.",
      "Investing in rural infrastructure—roads, water, and processing hubs.",
      "Building capacity in local communities through training.",
    ],
  },
  {
    number: "8",
    title: "Sustainability Certifications & Standards",
    items: [
      "Supporting farms to obtain international sustainability certifications.",
      "Providing audit and compliance support for ESG-aligned projects.",
      "Branding and positioning certified produce for export.",
    ],
  },
  {
    number: "9",
    title: "Policy, Advocacy & Partnerships",
    items: [
      "Working with governments, NGOs, and DFIs to align investments.",
      "Designing policy advocacy programs that advance food security.",
      "Facilitating multi-stakeholder partnerships.",
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
        subHead="The ESG & Impact Investing unit structures and manages carbon credit-linked investments, develops inclusive agricultural models empowering women and youth, and delivers comprehensive environmental and social impact reporting, ensuring that every investment generates measurable financial returns alongside positive societal and environmental outcomes."
      />
      <section className="h-fit">
        <div
          className=" flex flex-col lg:px-20 px-5 lg:py-28 py-5  relative bg-[#1A1613]"
          style={{
            backgroundImage: `url(${Image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: isMobile ? "200%" : "100%",
            backgroundPosition: "top",
          }}
        >
          <img
            src={Image}
            alt=""
            className="lg:h-[312px] h-[139px] object-cover object-[5%_25%]  rounded-[16px]"
          />{" "}
          {/* Responsive Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 lg:mt-[97px] mt-[34px]">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </section>
      <Grow />
    </main>
  );
};

export default ImpactInvesting;
