import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LogoWhite from "../assets/logo-white.png";
import Bars from "../assets/union.svg";
import BarsWhite from "../assets/union-white.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    {
      title: "INVESTMENT ADVISORY",
      description: "Expert agricultural investment solutions",
    },
    { title: "RESEARCH", description: "Market and sector analysis" },
    {
      title: "ASSET MANAGEMENT",
      description: "Professional farm and land management",
    },
    {
      title: "TECH-ENABLED AGRICULTURE",
      description: "Innovative farming technologies",
    },
    {
      title: "COMMODITY & VALUE CHAIN INVESTMENT",
      description: "Full value chain opportunities",
    },
    {
      title: "ESG & IMPACT INVESTING",
      description: "Sustainable investment strategies",
    },
    {
      title: "FINANCIAL SERVICES",
      description: "Tailored agricultural financing",
    },
  ];

  return (
    <nav
      className={`
    fixed top-0 left-0 right-0 z-50 lg:mt-20 lg:mx-40 mx-5
    transition-all duration-900
    ${
      isHomePage
        ? scrolled
          ? "bg-white text-[#1F3C15B2] shadow-md mt-5 md:mt-0 rounded-[100px] md:rounded-full"
          : "bg-transparent text-[#1F3C15B2] md:text-white rounded-full"
        : scrolled
        ? "bg-[#EBFAF2] mt-5 md:mt-0 rounded-2xl md:rounded-full"
        : "bg-white md:bg-[#EBFAF2] text-[#1F3C15B2] rounded-full"
    }
  `}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row flex-row-reverse py-5 lg:px-10 px-5 items-center">
          <div className="md:hidden flex w-[18px]"></div>

          {/* Logo - Left side */}
          <div className="flex-shrink-0 flex  items-center">
            <img
              src={isHomePage ? (scrolled ? Logo : LogoWhite) : Logo}
              alt=""
              className="h-10"
            />
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center justify-center space-x-10 font-semibold">
            <Link
              to="/"
              className=" hover:text-[#1F3C15] text-sm uppercase tracking-wider"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className=" hover:text-[#1F3C15] text-sm uppercase tracking-wider"
            >
              ABOUT US
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center  hover:text-[#1F3C15] text-sm uppercase tracking-wider"
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
                <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-md shadow-lg z-50 overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-lg font-bold  mb-4">CORE SERVICES</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to="#"
                          className="p-4 hover:bg-green-50 rounded-md transition-colors"
                        >
                          <h4 className="font-semibold  mb-1">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center h-[18px] w-[18px] rounded-md  hover:text-green-600 focus:outline-none"
            >
              <img src={Bars} alt="Nav" className="w-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EBFAF2] rounded-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-semibold hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-semibold hover:text-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full justify-between items-center px-3 py-2 text-base font-semibold hover:text-green-600"
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
                      to="#"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
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
    </nav>
  );
};

export default Navbar;
