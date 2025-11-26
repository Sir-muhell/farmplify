import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";
import Bars from "../assets/icons/union.svg";
import BarsWhite from "../assets/icons/union-white.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDarkHero =
    location.pathname === "/about" ||
    location.pathname === "/careers" ||
    location.pathname === "/submit";

  const [scrolled, setScrolled] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  // const isAboutUsOpen =
  //   location.pathname === "/about" || location.pathname === "/team";

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

  const isMobile = window.innerWidth < 600;

  const services = [
    { title: "INVESTMENT ADVISORY", link: "/investment-advisory" },
    { title: "Real Asset Investment", link: "/real-asset-investment" },
    { title: "ASSET MANAGEMENT", link: "/asset-management" },
    // { title: "TECH-ENABLED AGRICULTURE", link: "/tech-enabled-agriculture" },
    {
      title: "COMMODITY & VALUE CHAIN INVESTMENT",
      link: "/commodity-and-value-chain-investment",
    },
    { title: "ESG & IMPACT INVESTING", link: "/esg-and-impact-investing" },
    { title: "AGRIFINANCE SERVICE", link: "/agrifinance-services" },
  ];

  // Check if a link is active
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  // Check if services dropdown should be considered active
  const isServicesActive = services.some(
    (service) => location.pathname === service.link
  );
  const isAboutActive =
    location.pathname === "/about" || location.pathname === "/team";

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      // Set a small delay to allow the component to render before applying the transition
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    } else {
      setIsAnimating(false);
    }
  }, [mobileMenuOpen]);

  const baseTextColor = isDarkHero ? "text-[#FFFFFFB2]" : "text-[#1F3C15B2]";
  const activeTextColor = isDarkHero ? "text-white" : "text-[#1F3C15]";

  const currentLogo = isDarkHero
    ? LogoWhite
    : isHomePage && isMobile
    ? LogoWhite
    : Logo;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 transition-all duration-900">
      <div
        className={`mx-0 lg:max-w-[70%] mx-auto px-5 sm:px-6 lg:px-8 py-[13px] md:py-0 rounded-full transition-all duration-900
    ${
      isHomePage
        ? "lg:bg-[#EBFAF2] bg-transparent text-[#1F3C15B2] md:text-white lg:mt-[35px]"
        : isDarkHero
        ? "lg:bg-[#FFFFFF33] text-white lg:mt-[48px]"
        : "bg-transparent md:bg-[#EBFAF2] text-[#1F3C15B2] lg:mt-[48px]"
    }`}
      >
        <div className="flex justify-between md:flex-row flex-row-reverse lg:px-10 lg:px-5 px-0 items-center">
          <div className="md:hidden flex w-[18px]"></div>

          {/* Logo - Left side (Now simplified using the currentLogo variable) */}
          <div className="flex-shrink-0 flex items-center">
            <img src={currentLogo} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Navigation - Right side */}
          <div
            className={`hidden md:flex items-center justify-center space-x-10 py-5 font-semibold text-[14px] ${baseTextColor}`}
          >
            {/* HOME Link */}
            <Link
              to="/"
              className={`hover:text-current uppercase tracking-wider transition-colors ${
                isActiveLink("/") ? activeTextColor + " scale-105" : ""
              } ${isDarkHero ? "hover:text-white" : "hover:text-[#1F3C15]"}`}
            >
              HOME
            </Link>

            {/* ABOUT US Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsAboutUsOpen(!isAboutUsOpen);
                  setServicesOpen(false);
                }}
                className={`flex items-center hover:text-current uppercase tracking-wider transition-colors cursor-pointer ${
                  isAboutActive ? activeTextColor + " scale-105" : ""
                } ${isDarkHero ? "hover:text-white" : "hover:text-[#1F3C15]"}`}
              >
                ABOUT US
                {/* SVG color relies on currentColor, which inherits from the button text */}
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isAboutUsOpen ? "rotate-180" : ""
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

              {/* Dropdown Menu (No color change needed inside, as it uses a fixed background) */}
              <div
                className={` mt-10 absolute rounded-[10px] shadow-lg z-50 overflow-hidden p-4 bg-[#EBFAF2] w-32 transition-all duration-300 ease-in-out hidden lg:flex lg:flex-col gap-3 ${
                  isAboutUsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-[-10px] pointer-events-none"
                }`}
              >
                <Link
                  to="/about"
                  className={`hover:text-[#1F3C15] uppercase tracking-wider transition-colors ${
                    isActiveLink("/about") ? "text-[#1F3C15] scale-105" : ""
                  }`}
                >
                  ABOUT US
                </Link>
                <Link
                  to="/team"
                  className={`hover:text-[#1F3C15] uppercase tracking-wider transition-colors ${
                    isActiveLink("/team") ? "text-[#1F3C15] scale-105" : ""
                  }`}
                >
                  TEAM
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen), setIsAboutUsOpen(false);
                }}
                className={`flex items-center hover:text-current text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                  isServicesActive ? activeTextColor + " scale-105" : ""
                } ${isDarkHero ? "hover:text-white" : "hover:text-[#1F3C15]"}`}
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

            {/* FAQs Link */}
            <Link
              to="/faq"
              className={`hover:text-current uppercase tracking-wider transition-colors ${
                isActiveLink("/faq") ? activeTextColor + " scale-105" : ""
              } ${isDarkHero ? "hover:text-white" : "hover:text-[#1F3C15]"}`}
            >
              FAQs
            </Link>
            {/* CONTACT US Link */}
            <Link
              to="/contact"
              className={`hover:text-current uppercase tracking-wider transition-colors ${
                isActiveLink("/careers") ? activeTextColor + " scale-105" : ""
              } ${isDarkHero ? "hover:text-white" : "hover:text-[#1F3C15]"}`}
            >
              CAREERS
            </Link>

            {/* CONTACT US Link */}
            <Link
              to="/contact"
              className={`hover:text-current uppercase tracking-wider transition-colors ${
                isActiveLink("/contact") ? activeTextColor + " scale-105" : ""
              } ${isDarkHero ? "hover:text-white" : "hover:text-[#1F3C15]"}`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button (Only logo source changed here) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center h-[18px] w-[18px] rounded-md hover:text-green-600 focus:outline-none"
            >
              {(isHomePage || isDarkHero) && !scrolled ? (
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
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/60"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* The slide-out menu container */}
          <div
            className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[#30C67C] text-white text-[14px] font-black transform transition-transform duration-500 ease-in-out ${
              isAnimating ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-8 font-bold">
              {/* Logo */}
              <div className="mb-[45px]">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src={LogoWhite} alt="Farmplify" className="w-[114px]" />
                </Link>
              </div>
              <div className="space-y-6">
                <Link
                  to="/"
                  className="block uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>

                <div>
                  <button
                    onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                    className="flex w-full items-center justify-between uppercase tracking-wider"
                  >
                    ABOUT US
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform ${
                        isAboutUsOpen ? "rotate-180" : ""
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

                  {isAboutUsOpen && (
                    <div className="p-6 pb-0 space-y-6 font-black text-[#1F3C15]">
                      <Link
                        to="/about"
                        className="block uppercase tracking-wider opacity-90 transition-opacity hover:opacity-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Who we are
                      </Link>
                      <Link
                        to="/team"
                        className="block uppercase tracking-wider opacity-90 transition-opacity hover:opacity-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Team
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between uppercase tracking-wider"
                  >
                    CORE SERVICES
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform ${
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

                  {/* Sub-menu items */}
                  {servicesOpen && (
                    <div className="p-6 pb-0 space-y-6 font-black text-[#1F3C15]">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="block uppercase tracking-wider opacity-90 transition-opacity hover:opacity-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to="/faq"
                  className="block uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  to="/careers"
                  className="block uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CAREERS
                </Link>
                <Link
                  to="/contact"
                  className="block uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT US
                </Link>
              </div>
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
                <p
                  className={`text-[14px] uppercase tracking-[0.15em] ${
                    isActiveLink(service.link)
                      ? "font-extrabold text-[#1F3C15]"
                      : "font-bold text-[#1F3C15]"
                  }`}
                >
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
