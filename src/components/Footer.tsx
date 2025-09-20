import { motion } from "framer-motion";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";
import Facebook from "../assets/icons/facebook.svg";
import LinkedIn from "../assets/icons/linkedin.svg";

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
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemFromBottom = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  const socialItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      className="py-10 lg:px-20 p-5 max-w-[1600px] mx-auto"
    >
      <motion.div
        variants={fadeIn}
        className="h-px w-full bg-[#E4E7EC] hidden lg:block"
      ></motion.div>

      <motion.a href="./" className="lg:hidden" variants={itemFromBottom}>
        <img src={Logo} alt="Farmplify Logo" className="w-auto h-[64px]" />
      </motion.a>

      <motion.div
        variants={container}
        className="grid lg:grid-cols-3 grid-cols-2 gap--8 py-10"
      >
        <motion.div variants={itemFromBottom} className="text-base">
          <p className="text-[#98A2B3] font-normal">Links</p>
          <ul className="font-medium text-[#667185] mt-6 space-y-4">
            {[
              { to: "/", text: "Home" },
              { to: "/about", text: "About" },
              { to: "/careers", text: "Career" },
              { to: "/contact", text: "Contact us" },
            ].map((link, index) => (
              <motion.li
                key={index}
                variants={itemFromBottom}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemFromBottom} className="text-base">
          <p className="text-[#98A2B3] font-normal">Services</p>
          <ul className="font-medium text-[#667185] mt-6 space-y-4">
            {[
              { to: "/investment-advisory", text: "Investment Advisory" },
              { to: "/asset-management", text: "Asset Management" },
              { to: "/real-asset-investment", text: "Real Asset Investment" },
              {
                to: "/commodity-and-value-chain-investment",
                text: "Commodity & Value Chain",
              },
            ].map((link, index) => (
              <motion.li
                key={index}
                variants={itemFromBottom}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={itemFromBottom}
          className="text-base lg:mt-6 mt-0"
        >
          <ul className="font-medium text-[#667185] mt-6 space-y-4">
            {[
              { to: "/financial-services", text: "Financial Services" },
              {
                to: "/esg-and-impact-investing",
                text: "ESG & Impact Investing",
              },
            ].map((link, index) => (
              <motion.li
                key={index}
                variants={itemFromBottom}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  className="hover:text-[#1F3C15] transition-colors"
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="h-px w-full bg-[#E4E7EC] hidden lg:block"
      ></motion.div>

      <motion.div
        variants={container}
        className="py-10 lg:flex justify-between -px-10"
      >
        <motion.div variants={itemFromBottom} className="hidden lg:block">
          <a href="./">
            <img src={Logo} alt="Farmplify Logo" className="w-auto h-[64px]" />
          </a>
          <p className="mt-4 text-[#1D2739] font-normal text-base">
            © 2025 Farmplify. All rights reserved.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="text-[#667185] space-x-2 text-sm inline-flex"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              variants={socialItem}
              whileHover="hover"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 p-2.5 bg-[#1F3C15] rounded-full justify-center hover:bg-[#2E4D2C] transition-colors"
            >
              <img src={social.icon} alt={social.name} />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          variants={itemFromBottom}
          className="mt-4 text-[#1D2739] font-normal text-base lg:hidden"
        >
          © 2025 Farmplify. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
