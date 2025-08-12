import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";

const socials = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://facebook.com/farmplifyng/",
  },
  { name: "Twitter", icon: Twitter, link: "https://x.com/Farmplifyng" },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/farmplifyng/",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://linkedin.com/company/farmplify",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="py-10 lg:px-20 p-5 max-w-[1600px] mx-auto">
        <div className="h-px w-full bg-[#E4E7EC] hidden lg:block"></div>

        <a href="./" className="lg:hidden">
          <img src={Logo} alt="Farmplify Logo" className="w-auto h-[64px]" />
        </a>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap--8 py-10">
          <div className="text-base">
            <p className="text-[#98A2B3] font-normal">Links</p>
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>
                <Link to="/" className="hover:text-[#1F3C15] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-base">
            <p className="text-[#98A2B3] font-normal">Services</p>
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>
                <Link
                  to="/investment-advisory"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/asset-management"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Asset Management
                </Link>
              </li>
              <li>
                <Link
                  to="/real-asset-investment"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Real Asset Investment
                </Link>
              </li>
              <li>
                <Link
                  to="/commodity-and-value-chain-investment"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Commodity & Value Chain
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-base lg:mt-6 mt-0">
            {/* <p className="text-[#98A2B3] font-normal">Learn</p> */}
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>
                <Link
                  to="/tech-enabled-agriculture"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Tech-Enabled Agriculture
                </Link>
              </li>
              <li>
                <Link
                  to="/financial-services"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link
                  to="/esg-and-impact-investing"
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  ESG & Impact Investing
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="text-base">
            <p className="text-[#98A2B3] font-normal">Use Cases</p>
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>Product Design</li>
            </ul>
          </div> */}
        </div>
        <div className="h-px w-full bg-[#E4E7EC] hidden lg:block"></div>
        <div className="py-10 lg:flex justify-between  -px-10">
          <div className="hidden lg:block">
            <a href="./">
              <img
                src={Logo}
                alt="Farmplify Logo"
                className="w-auto h-[64px]"
              />
            </a>
            <p className="mt-4 text-[#1D2739] font-normal text-base">
              © 2025 Farmplify. All rights reserved.
            </p>
          </div>
          <div className="text-[#667185] space-x-2 text-sm inline-flex ">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" h-10 w-10 p-2.5 bg-[#1F3C15] rounded-full justify-center hover:bg-[#2E4D2C] transition-colors"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-[#1D2739] font-normal text-base lg:hidden">
            © 2025 Farmplify. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
