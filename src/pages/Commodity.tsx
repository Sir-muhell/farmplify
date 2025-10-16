import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

import Image from "../assets/services/value.webp";

const Commodity = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Commodity & Value Chain Investment"
        head="Commodity <br/> & Value Chain"
        headNum={558}
      />
      <section>
        <div className=" flex flex-col lg:px-20 px-5 relative bg-[#1A1613]">
          <div className="lg:mt-[143px] mt-14 lg:mb-[111px] mb-20 text-white text-left lg:grid grid-cols-8 gap-5">
            <div className="col-span-4">
              <p className="text-[#D3D3D3] font-medium text-[16px] leading-[130%] tracking-[0.6px]">
                The Commodity & Value Chain Investment management unit designs
                and manages structured trading programs for grains and
                high-demand cash crops while building resilient, end-to-end
                post-harvest infrastructure to protect value and reduce losses.
                We integrate agro-processing and branding initiatives to capture
                margin uplift from value addition, enforce rigorous quality
                assurance and traceability across every link in the supply
                chain, and secure long-term market access through strategic
                off-take and B2B partnerships. The result: predictable, scalable
                returns for investors, sustainably optimized supply chains for
                partners, and measurable reductions in post-harvest risk.
              </p>
              <img
                src={Image}
                alt=""
                className="mt-10 lg:mt-20 h-[290px] w-full object-cover object-center rounded-tl-[16px] rounded-[8px] hidden lg:block"
              />
            </div>
            <div className="col-span-1"></div>
            <div className="max-w-[401px] col-span-3 lg:mt-0 mt-14">
              <ul className="space-y-8 text-[16px] text-[#D3D3D3] font-medium leading-[130%] lg:mt-0 mt-4">
                <li className="flex items-start">
                  <span className="mr-3 font-semibold">•</span>
                  <p>
                    <span className="font-semibold text-white">
                      Structured Commodity Trading –
                    </span>{" "}
                    Management of grain and high-demand cash crop trading
                    portfolios.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold text-white">•</span>
                  <p>
                    <span className="font-semibold text-white">
                      Post-Harvest Infrastructure Development –
                    </span>{" "}
                    Establishment and management of storage, drying, and
                    logistics systems to minimize losses.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold text-white">•</span>
                  <p>
                    <span className="font-semibold text-white">
                      Aggregation & Bulk Supply –
                    </span>{" "}
                    Coordinated procurement and structured aggregation for
                    consistent market-ready volumes.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold text-white">•</span>
                  <p>
                    <span className="font-semibold text-white">
                      Agro-Processing & Value Addition –
                    </span>{" "}
                    Processing of grains and cash crops into higher-value
                    products.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold text-white">•</span>
                  <p>
                    <span className="font-semibold text-white">
                      Branding & Market Positioning –
                    </span>{" "}
                    Development of premium agricultural brands for domestic and
                    export markets.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-semibold text-white">•</span>
                  <p>
                    <span className="font-semibold text-white">
                      Export & Off-Take Management –
                    </span>{" "}
                    Securing long-term supply contracts with exporters, food
                    processors, and retailers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <img src={Image} alt="asset" className="lg:hidden flex" />
      <Grow />
    </main>
  );
};

export default Commodity;
