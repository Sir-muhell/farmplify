import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";

const socials = [
  { name: "Facebook", icon: Facebook, link: "#" },
  { name: "Twitter", icon: Twitter, link: "#" },
  { name: "Instagram", icon: Instagram, link: "#" },
  { name: "LinkedIn", icon: LinkedIn, link: "#" },
];

const Footer = () => {
  return (
    <>
      <footer className="py-10 px-20 max-w-[1600px] mx-auto">
        <div className="h-px w-full bg-[#E4E7EC]"></div>

        <div className="flex justify-between gap-8 py-10">
          <div className="text-base">
            <p className="text-[#98A2B3] font-normal">Links</p>
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>Home</li>
              <li>About</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="text-base">
            <p className="text-[#98A2B3] font-normal">Community</p>
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>Discord</li>
              <li>Get Support</li>
            </ul>
          </div>
          <div className="text-base">
            <p className="text-[#98A2B3] font-normal">Learn</p>
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>Documentation</li>
              <li>Blog</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="text-base">
            <p className="text-[#98A2B3] font-normal">Use Cases</p>
            <ul className="font-medium text-[#667185] mt-6 space-y-4">
              <li>Product Design</li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-[#E4E7EC]"></div>
        <div className="py-10 flex justify-between">
          <div className="">
            <img src={Logo} alt="Farmplify Logo" className="w-auto h-[64px]" />
            <p className="mt-4 text-[#1D2739] font-normal text-base">
              © 2025 Farmplify. All rights reserved.
            </p>
            <div className="flex inline-flex space-x-8 pt-8 font-medium text-sm text-[#667185]">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Security</a>
            </div>
          </div>
          <div className="text-[#667185] space-x-2 text-sm inline-flex ">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className=" h-10 w-10 p-2.5 bg-[#1F3C15] rounded-full justify-center hover:bg-[#2E4D2C] transition-colors"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
