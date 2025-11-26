import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Image from "../assets/services/advisory.webp";
import Image2 from "../assets/services/advisory-1.webp";
import Image3 from "../assets/services/advisory-2.webp";

const CardReveal = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.4, // how much must be visible to trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 40 }}>
      {children}
    </motion.div>
  );
};

const Investment = () => {
  const controls = useAnimation();
  const { inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [inView, controls]);

  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Investment Advisory"
        head="Advisory"
        subHead=""
        subOne="Our Agriculture Investment Advisory service delivers end-to-end guidance for investors seeking structured exposure to Africa’s agribusiness opportunities. We provide in-depth agri-market insights and investment opportunity analysis, supported by rigorous risk profiling and tailored portfolio structuring to align with investor objectives. Through comprehensive feasibility studies and meticulous due diligence, we ensure every investment is data-driven, secure, and positioned for sustainable long-term returns"
        subTwo="We are deeply passionate about transforming emerging agribusinesses into institutional-grade enterprises through best-in-class Investment Advisory. Our advisory practice combines sector expertise, rigorous analysis, and practical execution to unlock value for investors and operators across the value chain"
      />

      <section className="lg:px-20 px-5 lg:pt-[89px] lg:pb-20 pb-10 mx-auto flex justify-center">
        <div className="lg:mt-6 lg:mb-6 lg:h-[600px] h-[800px] max-w-[955px] overflow-y-scroll no-scrollbar space-y-10">
          <CardReveal>
            <div
              className="lg:px-[162px] px-4 py-4 lg:py-10  rounded-[24px] "
              style={{
                background:
                  " linear-gradient(185.68deg, rgba(48, 198, 124, 0) 39.51%, rgba(48, 198, 124, 0.9) 260.58%)",
              }}
            >
              <p className="medium lg:text-[32px] text-[28px] text-[#30C67C] leading-[110%] tracking-[0.6px]">
                Pre-Investment Advisory
              </p>
              <ul className="space-y-5 lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Agri-Market Insights & Research –
                    </span>{" "}
                    In-depth analysis of agricultural trends, crop economics,
                    and emerging investment themes across Africa.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Investment Opportunity Analysis –
                    </span>{" "}
                    Identification and evaluation of high-potential agribusiness
                    ventures and farmland assets.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Risk Profiling & Portfolio Structuring –
                    </span>{" "}
                    Tailored strategies aligned with investor objectives, risk
                    appetite, and return expectations.
                  </p>
                </li>
              </ul>
              <img
                src={Image}
                alt="image"
                className="rounded-[8px] object-cover lg:h-[186px] h-[124px] w-full mt-10"
              />
            </div>
          </CardReveal>
          <CardReveal>
            <div
              className="lg:px-[162px] px-4 py-4 lg:py-10  rounded-[24px] "
              style={{
                background:
                  " linear-gradient(185.68deg, rgba(48, 198, 124, 0) 39.51%, rgba(48, 198, 124, 0.9) 260.58%)",
              }}
            >
              <p className="medium lg:text-[32px] text-[28px] text-[#30C67C] leading-[110%] tracking-[0.6px]">
                Transaction Support Advisory
              </p>

              <ul className="space-y-5 lg:text-xl text-lg text-[#4E4E4E] font-medium leading-[130%] lg:mt-6 mt-4">
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Feasibility Studies –
                    </span>{" "}
                    Comprehensive technical, operational, and financial
                    assessments for proposed agricultural projects.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Due Diligence –
                    </span>{" "}
                    Rigorous legal, financial, and operational verification to
                    ensure secure and transparent investment decisions.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Capital Structuring & Advisory –
                    </span>{" "}
                    Guidance on optimal financing models, including debt,
                    equity, and blended structures.
                  </p>
                </li>
              </ul>
              <img
                src={Image2}
                alt="image"
                className="rounded-[8px] object-cover lg:h-[186px] h-[124px] w-full mt-10"
              />
            </div>
          </CardReveal>
          <CardReveal>
            <div
              className="lg:px-[162px] px-4 py-4 lg:py-10  rounded-[24px] "
              style={{
                background:
                  " linear-gradient(185.68deg, rgba(48, 198, 124, 0) 39.51%, rgba(48, 198, 124, 0.9) 260.58%)",
              }}
            >
              <p className="medium lg:text-[32px] text-[28px] text-[#30C67C] leading-[110%] tracking-[0.6px]">
                Post-Investment & Strategic Advisory
              </p>

              <ul className="space-y-5 lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Policy & Regulatory Advisory –
                    </span>{" "}
                    Navigation of agricultural policies, land tenure systems,
                    and compliance frameworks.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      ESG & Impact Advisory –
                    </span>{" "}
                    Integration of sustainability, social impact, and climate
                    resilience strategies into investment models.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Market Entry & Expansion Strategy –
                    </span>{" "}
                    Advisory on scaling agribusiness operations into new regions
                    and value chains.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#262626]">•</span>
                  <p>
                    <span className="font-semibold text-[#262626]">
                      Strategic Partnership Development –
                    </span>{" "}
                    Connecting investors with reliable off-takers, processors,
                    and government stakeholders.
                  </p>
                </li>
              </ul>
              <img
                src={Image3}
                alt="image"
                className="rounded-[8px] object-cover lg:h-[186px] h-[124px] w-full mt-10"
              />
            </div>
          </CardReveal>
        </div>
      </section>
    </main>
  );
};

export default Investment;
