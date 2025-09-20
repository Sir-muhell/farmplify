import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";
import Image from "../assets/services/advisory.webp";

const Investment = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero text="Investment Advisory" head="Advisory" subHead="" />
      <section className=" lg:px-20 px-5 lg:pt-[89px] lg:pb-20 py-10 ">
        <div className="lg:grid grid-cols-2 lg:mt-10 mt-5 gap-20 lg:px-20">
          <p className="text-[#616161] font-medium lg:text-2xl text-xl leading-[130%]">
            Our Agriculture Investment Advisory service delivers end-to-end
            guidance for investors seeking structured exposure to Africa’s
            agribusiness opportunities. We provide in-depth agri-market insights
            and investment opportunity analysis, supported by rigorous risk
            profiling and tailored portfolio structuring to align with investor
            objectives. Through comprehensive feasibility studies and meticulous
            due diligence, we ensure every investment is data-driven, secure,
            and positioned for sustainable long-term returns
          </p>
          <p className="text-[#616161] font-medium lg:text-2xl text-xl leading-[130%] mt-10 lg:mt-0">
            We are deeply passionate about transforming emerging agribusinesses
            into institutional-grade enterprises through best-in-class
            Investment Advisory. Our advisory practice combines sector
            expertise, rigorous analysis, and practical execution to unlock
            value for investors and operators across the value chain
          </p>
        </div>
      </section>
      <section className="bg-[#E5CFC2] lg:px-20 px-5 lg:pt-[89px] lg:pb-20 py-10">
        <div className="lg:grid grid-cols-2 gap-20 ">
          <div className="lg:pl-20">
            <img
              src={Image}
              alt="Asset-Image"
              className=" lg:rounded-tl-[16px] lg:rounded-bl-[16px]"
            />
          </div>

          <section>
            <div className="mt-5 lg:mt-0">
              <p className="font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%]">
                Pre-Investment Advisory
              </p>

              <ul className="space-y-0 lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Feasibility Studies –
                    </span>{" "}
                    Comprehensive technical, operational, and financial
                    assessments for proposed agricultural projects.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Due Diligence –
                    </span>{" "}
                    Rigorous legal, financial, and operational verification to
                    ensure secure and transparent investment decisions.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Capital Structuring & Advisory –
                    </span>{" "}
                    Guidance on optimal financing models, including debt,
                    equity, and blended structures.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-16">
              <p className="font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%]">
                Post-Investment & Strategic Advisory
              </p>

              <ul className="space-y-0 lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Policy & Regulatory Advisory –
                    </span>{" "}
                    Navigation of agricultural policies, land tenure systems,
                    and compliance frameworks.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      ESG & Impact Advisory –
                    </span>{" "}
                    Integration of sustainability, social impact, and climate
                    resilience strategies into investment models.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Market Entry & Expansion Strategy –
                    </span>{" "}
                    Advisory on scaling agribusiness operations into new regions
                    and value chains.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Strategic Partnership Development –
                    </span>{" "}
                    Connecting investors with reliable off-takers, processors,
                    and government stakeholders.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-16">
              <p className="font-semibold lg:text-[56px] text-[28px] text-[#1A1613] leading-[93%]">
                Pre-Investment Advisory
              </p>

              <ul className="space-y-0 lg:text-xl text-lg text-[#616161] font-medium leading-[130%] lg:mt-6 mt-4">
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Agri-Market Insights & Research –
                    </span>{" "}
                    In-depth analysis of agricultural trends, crop economics,
                    and emerging investment themes across Africa.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Investment Opportunity Analysis –
                    </span>{" "}
                    Identification and evaluation of high-potential agribusiness
                    ventures and farmland assets.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mx-3 font-semibold text-[#1A1613]">•</span>
                  <p>
                    <span className="font-semibold text-[#1A1613]">
                      Risk Profiling & Portfolio Structuring –
                    </span>{" "}
                    Tailored strategies aligned with investor objectives, risk
                    appetite, and return expectations.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
      <Grow />
    </main>
  );
};

export default Investment;
