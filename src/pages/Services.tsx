import Tape from "../components/Tape";
import Image from "../assets/bg-green.svg";
import Navbar from "../components/Navbar";
import Image1 from "../assets/services/Image1.webp";
import Image2 from "../assets/services/Image2.webp";
import Image3 from "../assets/services/Image3.webp";
import Image4 from "../assets/services/Image4.webp";
import Image5 from "../assets/services/Image5.webp";
import Image6 from "../assets/services/Image6.webp";
import Grow from "../components/Grow";
import ServiceCard from "../components/ServicesCard";

const services = [
  {
    title: "Asset Management",
    description:
      "The asset management business has been established to provide end-to-end oversight and management of farmland and agricultural enterprises for institutional investors, high-net-worth individuals, and forward-looking corporations.",
    image: Image1,
    link: "/asset-management",
  },
  {
    title: "Advisory",
    description:
      "Our Agriculture Investment Advisory service delivers end-to-end guidance for investors seeking structured exposure to Africa’s agribusiness opportunities. We provide in-depth market insights and investment opportunity analysis, supported by rigorous risk profiling and tailored portfolio structuring.",
    image: Image2,
    link: "/investment-advisory",
  },
  {
    title: "Commodity & Value Chain",
    description:
      "The Commodity & Value Chain Investment unit designs and manages structured trading programs for grains and high-demand cash crops while building resilient, end-to-end post-harvest infrastructure to protect value and reduce losses.",
    image: Image3,
    link: "/commodity-and-value-chain-investment",
  },
  {
    title: "Real Asset Investment",
    description:
      "The real asset investment unit specializes in the acquisition, development, and strategic management of high-value farmland. Leveraging structured purchasing, leasing models, and land appreciation strategies, we optimize asset performance while ensuring long-term value creation.",
    image: Image4,
    link: "/real-asset-investment",
  },
  {
    title: "ESG & Impact Investing",
    description:
      "The ESG & Impact Investing unit structures and manages carbon credit-linked investments, develops inclusive agricultural models empowering women and youth, and delivers comprehensive environmental and social impact programs.",
    image: Image5,
    link: "/esg-and-impact-investing",
  },
  {
    title: "AgriFinance Services",
    description:
      "The Financial Services division provides comprehensive capital solutions and advisory for agricultural investments, encompassing debt, equity, and blended finance. This unit also delivers expert tax, insurance, and legal advisory to institutional and private investors.",
    image: Image6,
    link: "/agrifinance-services",
  },
];

const Services = () => {
  return (
    <main className="relative mx-auto overflow-hidden relative">
      <Navbar />
      <section
        className="relative items-center flex flex-col lg:px-20 px-5 mx-auto relative"
        style={{
          backgroundImage: `linear-gradient(180deg, #EBFAF2 0%, #FFFFFF 100%), url("${Image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="lg:mt-[200px] mt-[105px] text-center max-w-[900px] relative">
          <Tape text="what we do" />
          <p className="lg:text-7xl text-[50px] pt-10 leading-[93%] font-semibold text-[#1F3C15]">
            Our Services
          </p>
        </div>
        <img src={Image} alt="" className="absolute lg:-top-[500px]" />
      </section>
      <section className="lg:px-20 px-5 py-10 relative z-10">
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 w-[355px] md:w-[750px] lg:w-[1145px] mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
