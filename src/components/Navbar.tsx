import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LogoWhite from "../assets/logo-white.png";
import Bars from "../assets/union.svg";
import BarsWhite from "../assets/union-white.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setServicesOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const services = [
    { title: "INVESTMENT ADVISORY", link: "/investment-advisory" },
    { title: "Real Asset Investment", link: "/real-asset-investment" },
    { title: "ASSET MANAGEMENT", link: "/asset-management" },
    { title: "TECH-ENABLED AGRICULTURE", link: "/tech-enabled-agriculture" },
    {
      title: "COMMODITY & VALUE CHAIN INVESTMENT",
      link: "/commodity-and-value-chain-investment",
    },
    { title: "ESG & IMPACT INVESTING", link: "/esg-and-impact-investing" },
    { title: "FINANCIAL SERVICES", link: "/financial-services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-900">
      <div
        className={`mx-0 lg:mx-40 px-5 sm:px-6 lg:px-8 py-[13px] md:py-0 rounded-full transition-all duration-900
    ${
      isHomePage
        ? scrolled
          ? "bg-white text-[#1F3C15B2] shadow-md mt-5 md:mt-0 lg:mt-[48px] mx-4 lg:mx-0 shadow-lg"
          : "bg-transparent text-[#1F3C15B2] md:text-white lg:mt-[101px]"
        : scrolled
        ? "bg-[#EBFAF2] mt-5 md:mt-0 lg:mt-[48px] mx-4 md:mx-0 shadow-lg"
        : "bg-transparent md:bg-[#EBFAF2] text-[#1F3C15B2] lg:mt-[48px]"
    }
  `}
      >
        <div className="flex justify-between md:flex-row flex-row-reverse lg:px-10 lg:px-5 px-0 items-center">
          <div className="md:hidden flex w-[18px]"></div>

          {/* Logo - Left side */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={isHomePage ? (scrolled ? Logo : LogoWhite) : Logo}
              alt=""
              className="h-10"
            />
          </div>

          {/* Desktop Navigation - Right side */}
          <div
            className={`hidden md:flex items-center justify-center space-x-10 py-5 font-semibold text-[14px] text-[#1F3C15B2] ${
              isHomePage && !scrolled ? "text-white" : "text-[#1F3C15B2]"
            }`}
          >
            <Link
              to="/"
              className="hover:text-[#1F3C15] uppercase tracking-wider"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="hover:text-[#1F3C15] uppercase tracking-wider"
            >
              ABOUT US
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center hover:text-[#1F3C15] text-sm uppercase tracking-wider"
              >
                CORE SERVICES
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center h-[18px] w-[18px] rounded-md hover:text-green-600 focus:outline-none"
            >
              {isHomePage && !scrolled ? (
                <img src={BarsWhite} alt="Nav" className="w-full" />
              ) : (
                <img src={Bars} alt="Nav" className="w-full" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden bg-[#EBFAF2] rounded-2xl shadow-2xl text-[#1f3c15] text-sm font-semibold ${
            scrolled ? "mx-5 mt-1" : "mx-4"
          }`}
        >
          <div className="p-5 space-y-4">
            <Link
              to="/"
              className="block  "
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block "
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="relative ">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full justify-between items-center "
              >
                CORE SERVICES
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="block px-2 text[#1F3C15B2] py-1 text-sm font-medium uppercase tracking-wider"
                      onClick={() => {
                        setServicesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Services Dropdown - Always in DOM but hidden */}
      <div
        className={`absolute right-40 mt-5 justify-self-end justify-end bg-[#EBFAF2] rounded-[24px] shadow-lg z-50 overflow-hidden flex p-4 transition-all duration-300 ease-in-out hidden lg:flex ${
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-[-10px] pointer-events-none"
        }`}
      >
        <div className="col-span-4 bg-white w-[300px] rounded-[20px] p-6 flex flex-col justify-between">
          <p className="font-semibold text-[14px] text-[#1F3C15B2]">CORE</p>
          <p className="font-medium text-xl text-[#272727] leading-[130%]">
            Expert agricultural investment solutions across the value chain.
          </p>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-[14px] text-[#1F3C15B2]">
            SERVICES
          </h3>
          <div className="grid grid-cols-2 gap-x-[50px] mt-14">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="pb-6 hover:bg-green-50 rounded-md transition-colors max-w-[204px]"
                onClick={() => setServicesOpen(false)}
              >
                <p className="text-[14px] font-black text-[#1F3C15] uppercase tracking-[0.15em]">
                  {service.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
