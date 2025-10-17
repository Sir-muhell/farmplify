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
import { Link } from "react-router-dom";

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
            <Link
              to={service.link}
              key={index}
              className="relative h-[355px] rounded-[8px] overflow-hidden flex flex-col justify-end group cursor-pointer"
            >
              <div
                className="absolute inset-0 w-full h-full transform transition-all duration-1000 ease-in-out  group-hover:-translate-y-12"
                style={{
                  backgroundImage: `url(${service.image})`,
                  height: "100%",
                  objectFit: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/0 transition-opacity duration-1000 ease-in-out group-hover:opacity-0"></div>
              </div>

              <p className="font-semibold lg:text-[32px] text-[24px] text-white leading-[93%] px-5 h-[64px] mb-5 relative z-20 transition-opacity duration-1500 ease-in-out group-hover:opacity-0">
                {service.title}
              </p>

              <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-full opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="bg-white h-fit py-6 px-5 rounded-b-[7px]">
                  <p className="text-[#1F3C15] leading-[100%] text-[18px] font-semibold mb-2">
                    {service.title}
                  </p>
                  <p className="text-[14px] text-[#616161] leading-[130%] font-medium tracking-[0.6px] text-left">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Grow />
    </main>
  );
};

export default Services;
