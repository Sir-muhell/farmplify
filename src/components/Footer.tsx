import { motion } from "framer-motion";
import Logo from "../assets/logo-white.png";
import Img from "../assets/footer.webp";
import { Link } from "react-router-dom";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";
import Facebook from "../assets/icons/facebook.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Button from "./Button";

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
      className=" bg-[#EBFAF2] lg:p-5 max-w-[2600px]  mx-auto relative"
    >
      <motion.div
        variants={fadeIn}
        className="lg:grid grid-cols-2 lg:ml-[208px] lg:mr-[66px] relative bg-[#EBFAF2]"
      >
        <motion.div className="lg:w-[454px] w-full  flex flex-col lg:justify-end justify-center lg:mt-10 lg:text-left text-center pt-16 relative z-20">
          <p className="text-[#1F3C15] font-semibold lg:text-[82.58px] text-[48px]  leading-[93%] tracking-[-0.8px] lg:w-full w-[264px] m-auto">
            GROW FROM HERE
          </p>
          <p className="mt-4 text-[#5A5A5A] text-[20px] font-medium px-4">
            Unlock secure, high end opportunities in African agriculture. You
            growth starts from here
          </p>
          <div className="mb-52 ">
            <Button text="request a demo" link="./" />
          </div>
        </motion.div>
        <motion.img src={Img} className="flex h-full hidden lg:block" />
        <motion.div className="bottom-0 w-fit lg:hidden absolute left-0">
          <motion.img src={Img} className="w-[800px]" />
        </motion.div>
      </motion.div>

      <motion.div className="lg:pt-24 lg:px-[62px] px-[28px] pt-[30px]  text-white bg-[#1F3C15] lg:rounded-[56px] rounded-b-[16px] relative  mx-4 lg:h-[488px] h-[410px]">
        <motion.div
          variants={container}
          className="grid lg:grid-cols-3 grid-cols-2 gap-8 relative lg:pb-10 pb-[34px]"
        >
          <motion.div
            variants={itemFromBottom}
            className="text-base lg:col-span-1 col-span-2"
          >
            <a href="./">
              <img
                src={Logo}
                alt="Farmplify Logo"
                className="w-auto h-[51px]"
              />
            </a>

            <motion.div
              variants={container}
              className="text-white space-x-2 text-sm inline-flex mt-3"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  variants={socialItem}
                  whileHover="hover"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 p-2.5 rounded-full justify-center hover:bg-[#2E4D2C] transition-colors"
                >
                  <img src={social.icon} alt={social.name} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={itemFromBottom} className="text-base">
            <p className="text-[#98A2B3] font-normal">Links</p>
            <ul className="font-medium mt-6 space-y-4">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About" },
                { to: "/services", text: "Core Services" },
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
            <p className="text-[#98A2B3] font-normal">Other</p>
            <ul className="font-medium mt-6 space-y-4 ">
              {[
                // { to: "/services", text: "Services" },
                { to: "/faq", text: "FAQs" },
                { to: "/careers", text: "Career" },
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
          variants={itemFromBottom}
          className=" inset-x-0 flex items-center justify-center leading-none"
        >
          <motion.p className="text-[19vw] text-[#EBFAF2] font-bold tracking-[-3.6px] lg:tracking-[-14.1px]">
            FARMPLIFY
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={container}
        className="lg:py-4 pt-2 pb-4 relative z-10"
      >
        <motion.p
          variants={itemFromBottom}
          className="text-[#1F3C15] font-normal text-base text-center"
        >
          © 2025 Farmplify. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
