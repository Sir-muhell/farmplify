import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Tape from "../components/Tape";

interface AnswerListItem {
  title: string;
  subItems?: (string | AnswerListItem)[];
}

interface FaqItem {
  id: string;
  question: string;
  answer: string | (string | AnswerListItem)[];
}

export const faqData: FaqItem[] = [
  {
    id: "1",
    question: "What is Agriculture Asset Management?",
    answer:
      "Agriculture Asset Management is a comprehensive service that treats agri-investment and agribusiness operations as structured investments. We provide end-to-end oversight of farm assets – from land and equipment to livestock and crops – with the goal of optimizing productivity and efficiency. In practice, this means we handle everything from farm planning and development to day-to-day operations and marketing. By professionalizing farm management, we help ensure your agricultural investment performs smoothly, efficiently and is positioned for steady, long-term success.",
  },
  {
    id: "2",
    question: "Who can benefit from this service?",
    answer:
      "Our service is designed for institutional investors, high-net-worth individuals, family offices, and forward-looking corporations who want exposure to agriculture without the hassle of hands-on agribusiness. If you’re looking to diversify into agribusiness but lack the time or expertise to manage it yourself, our team does the work for you. Whether you’re a pension fund, an investment firm, or a business owner in a related industry, we provide the expertise and structure needed to turn your agricultural capital into a well-managed, productive asset.",
  },
  {
    id: "3",
    question: "What agricultural sectors and operations do you manage?",
    answer: [
      "We cover all major segments of agriculture. Our on-the-ground teams have expertise across:",
      {
        title: "1. Farmland & Land-Based Assets:",
        subItems: [
          "<b>Farmland ownership/leases</b> – appreciating land value + rental/operational returns.",
          "<b>Farmland real estate development</b> – estates or cooperatives designed for crop/livestock production.",
          "<b>Greenhouse farms</b> – high-value horticulture (vegetables, herbs, flowers).",
          "<b>Irrigation infrastructure assets</b> – dams, boreholes, drip systems.",
          "<b>Agro-industrial parks</b> – clusters of processing and farming assets.",
        ],
      },
      {
        title: "2. Livestock Assets:",
        subItems: [
          "<b>Cattle ranching</b> – beef and dairy.",
          "<b>Poultry farming</b> – broilers, layers, hatcheries.",
          "<b>Goat & sheep production</b> – meat, milk, hides.",
          "<b>Pig farming</b> – pork and breeding stock.",
          "<b>Apiaries (beekeeping)</b> – honey and by-products.",
        ],
      },
      {
        title: "3. Aquaculture Assets:",
        subItems: [
          "<b>Fish farming</b> – catfish, tilapia, carp, etc.",
          "<b>Shrimp and prawn farms</b> – export-oriented.",
          "<b>Ornamental fish breeding</b> – niche but profitable.",
          "<b>Integrated aquaponics systems</b> – combining fish with hydroponic crops.",
        ],
      },
      {
        title: "4. Tree Crop & Plantation Assets:",
        subItems: [
          "<b>Cocoa plantations</b> – export commodities.",
          "<b>Oil palm plantations</b> – palm oil, kernel oil.",
          "<b>Cashew plantations</b> – high-value nuts.",
          "<b>Citrus orchards</b> – oranges, lemon, tangerine.",
          "<b>Mango, avocado, guava orchards</b> – tropical fruits.",
          "<b>Rubber plantations</b> – latex and industrial products.",
          "<b>Timber forestry</b> – teak, mahogany, gmelina, bamboo.",
        ],
      },
      {
        title: "5. Food & Cash Crop Assets:",
        subItems: [
          "<b>Grain farms</b> – maize, rice, sorghum, wheat, millet.",
          "<b>Legume farms</b> – soybean, groundnut, cowpea.",
          "<b>Vegetable farms</b> – tomatoes, peppers, onions.",
          "<b>Spice crops</b> – ginger, turmeric, chili.",
          "<b>Root & tuber farms</b> – cassava, yam, potatoes.",
          "<b>Industrial crops</b> – cotton, sugarcane.",
        ],
      },
      {
        title: "6. Agro-Processing & Value-Add Investments:",
        subItems: [
          "<b>Grain milling plants</b> – rice, maize, wheat flour.",
          "<b>Fruit processing plants</b> – juice, puree, dried fruit.",
          "<b>Dairy processing</b> – milk, cheese, yogurt.",
          "<b>Meat processing & cold storage</b> –",
          "<b>Palm oil mills & refineries</b> –",
          "<b>Animal feed mills</b> –",
          "<b>Biofuel & biogas plants</b> – using crop/livestock waste.",
        ],
      },
      {
        title: "7. Agricultural Infrastructure & Support Assets:",
        subItems: [
          "<b>Storage & warehousing facilities</b> – silos, cold rooms.",
          "<b>Logistics & transport networks</b> – trucks, boats, tractors.",
          "<b>Input supply chains</b> – seeds, fertilizers, agro-chemicals.",
          "<b>Farm equipment leasing hubs</b> – tractors, harvesters, irrigation kits.",
          "<b>Agro-market hubs</b> – structured marketplaces.",
        ],
      },
      {
        title: "8. Financial & Commodity Investment Opportunities:",
        subItems: [
          "<b>Commodity trading</b> – grains, cocoa, cashew, palm oil.",
          "<b>Agricultural futures & contracts</b> –",
          "<b>Farmland REITs</b> – (Real Estate Investment Trusts).",
          "<b>Outgrower schemes</b> – partnerships with smallholder farmers.",
          "<b>Carbon credits & green investment</b> – from tree planting or sustainable practices.",
          "<b>Insurance products for farmers</b> – crop/livestock risk management.",
        ],
      },
      "For each sector, we apply best practices and specialized knowledge. In short, any agribusiness activity falls under our management. This broad coverage allows us to build diversified portfolios of agricultural assets, spreading risk and capturing multiple sources of productivity.",
    ],
  },
  {
    id: "4",
    question: "How does your Agriculture Asset Management service work?",
    answer: [
      "We follow a hands-on, step-by-step process to manage every detail of the farming operation. Typically, we: ",
      {
        title: "",
        subItems: [
          "<b>Select and prepare land:</b> We evaluate soil, water and climate conditions to acquire or lease suitable farmland, then prepare the land and infrastructure (fields, irrigation, housing, etc.) for farming.",
          "<b>Implement farming operations:</b> Our technical experts (agronomists, vets, farm managers, etc.) set up and oversee daily farm activities – from sowing, feeding and care of crops and animals to harvesting and processing.",
          "<b>Optimize with technology:</b> We use data-driven tools and monitoring (for example, soil sensors, weather data, or drones) to track farm health.",
          "<b>Manage logistics and sales:</b> We handle the marketing and sale of produce, livestock or fish, securing buyers or distribution channels to turn outputs into revenue.",
          "<b>Report and refine:</b> Throughout the process, we gather data and report performance.",
        ],
      },
      "By managing each stage, we ensure the farm runs efficiently and can scale up over time. Investors benefit from a turnkey solution – all the farm work is done by us, and you simply receive performance updates and outcomes.",
    ],
  },
  {
    id: "5",
    question: "What makes our service unique?",
    answer:
      "Our Agriculture Asset Management stands out because we bring institutional rigor and full accountability to agribusiness. In other words, <b>we treat agriculture as a professional business.</b> Key differentiators include: <b>Dedicated expert teams, End-to-end oversight, Structured investment approach, Emphasis on efficiency and growth and Transparency</b><br/><br/>Your investment is managed with the same diligence as a business, aiming for durable performance and steady progress rather than speculative gains.",
  },
  {
    id: "6",
    question:
      "What are the benefits of Agriculture Asset Management for investors?",
    answer: [
      "This service offers several key advantages:",
      {
        title: "",
        subItems: [
          "<b>Hands-off management:</b> You provide the capital and strategic vision, and our team handles the day-to-day farm work. This lets you benefit from agriculture without needing to run it yourself.",
          "<b>Expertise-driven productivity:</b> Our professional management improves farm efficiency. With agronomists and technicians on site, farms tend to achieve higher yields and better cost control than unmanaged plots.",
          "<b>Diversification:</b> By pooling different farm types (livestock, crops, aquaculture), your investment spreads risk. Poor performance in one area (say, a drought affecting crops) can be offset by stability in another (such as livestock or fish).",
          "<b>Stable asset class:</b> Farmland and production of food/fiber have intrinsic value. Agriculture is essential for feeding a growing population, which supports steady demand for farm outputs over the long term.",
          "<b>Scalability:</b> We build operations to scale. Systems are put in place so that farms can expand acreage or production volume without sacrificing efficiency. This means your investment has room to grow over time.",
          "<b>Transparency and peace of mind:</b> You receive regular updates and detailed reports. There are no hidden steps – every decision and expense is documented. This clarity helps you track progress and makes the investment secure.",
          "<b>Positive impact:</b> Beyond financials, agriculture has real-world impact. Your investment contributes to food security, job creation in rural and urban areas, and can incorporate sustainable agribusiness practices if that aligns with your values.",
        ],
      },
    ],
  },

  {
    id: "7",
    question: "How do you ensure transparency and security for investors?",
    answer:
      "We maintain a high level of accountability and openness. For transparency, we provide regular reports on farm performance, including data on yields, operational costs, and inventory. Investors can review field reports, harvest results, and financial statements on a scheduled basis. On the security side, we ensure all land and assets are held with clear legal arrangements (e.g. owned or long-term leased titles). We carry appropriate insurances (against natural disasters, animal or crop losses, etc.) wherever feasible. Our financial transactions are audited and tied to actual farm activities, so you can be confident your capital is used exactly for the agreed-upon agricultural projects. In sum, every stage of the process – from funds allocation to farm output – is documented and tracked, giving you full visibility and control over your investment.",
  },
  {
    id: "8",
    question: "How do you manage risks and ensure consistent performance?",
    answer:
      "Agricultural investing has inherent risks (weather, pests, market shifts), but we mitigate these through expertise and planning. Key risk-management strategies include: <b>Diversification, Scientific farming, Technology and monitoring, Adaptive planningInsurance and safeguards:</b></br></br> By combining these approaches, our agribusiness is built to handle volatility. The result is more consistent output and performance,  the investments aren’t just passive assets, but actively managed businesses that adapt to challenges.",
  },
  {
    id: "9",
    question: "As an investor, what is my role in the process?",
    answer:
      "Your role is mainly to define objectives and provide capital; we handle the execution. In practice, you start by sharing your investment goals and any preferences (for example, focus on sustainability, particular crops or regions, etc.). Once a plan is set, our team implements it. You generally won’t need to be involved in daily farm decisions. We do, however, keep you informed: you’ll receive regular updates and can review reports or even visit your agribusiness location if you wish. Many investors appreciate that their role is largely passive, allowing them to benefit from agriculture’s potential without needing agriculture expertise. Of course, we welcome any input or questions you have at any time, but the heavy lifting is done by our specialists.",
  },
  {
    id: "10",
    question: "How do I get started with Agriculture Asset Management?",
    answer:
      "To begin, simply reach out to us for a consultation. We’ll discuss your investment goals, timeframe, and any specific interests (such as certain regions or crops). From there, we design a customized management plan and present you with the details. After any required agreements are signed, we take care of everything. You’ll start receiving performance reports as soon as execution are underway. In short, we guide you through each step so you can confidently enter the agricultural sector with our support.",
  },
];

// Component to render nested list answers
const AnswerRenderer: React.FC<{ items: (string | AnswerListItem)[] }> = ({
  items,
}) => (
  <ul className="space-y-10 pt-4 lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
    {items.map((item, index) =>
      typeof item === "string" ? (
        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
      ) : (
        <li key={index}>
          <span className="font-medium text-black">{item.title}</span>
          {item.subItems && (
            <ul className="list-disc list-inside pl-6 mt-2 space-y-1 text-black">
              {item.subItems.map((sub, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: sub }}></li>
              ))}
            </ul>
          )}
        </li>
      )
    )}
  </ul>
);

interface AccordionItemProps extends FaqItem {
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => (
  <div
    className={`lg:p-[42px] p-5 transition-colors duration-300 ${
      isOpen ? "bg-[#EBFAF2] rounded-[16px] lg:rounded-[21px]" : "bg-white"
    }`}
  >
    <div
      onClick={onToggle}
      className="flex cursor-pointer items-start justify-between"
    >
      {/* Question + Answer */}
      <div className="flex-grow order-1 lg:order-2">
        <h3 className="lg:text-[24px] text-[18px] font-medium text-[#101828] lg:leading-[37px] leading-[28px]">
          {question}
        </h3>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {typeof answer === "string" ? (
              <p
                className="pt-4 lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            ) : (
              <AnswerRenderer items={answer} />
            )}
          </div>
        </div>
      </div>

      {/* Icon */}
      <span className="flex flex-shrink-0 items-center justify-center rounded-full order-2 lg:order-1 lg:mr-8 mt-1 ml-2 lg:ml-0">
        {isOpen ? (
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#98A2B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#98A2B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  </div>
);

const Faq = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [openId, setOpenId] = useState<string | null>(faqData[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredData = useMemo(
    () =>
      faqData.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (typeof item.answer === "string"
            ? item.answer.toLowerCase().includes(searchTerm.toLowerCase())
            : item.answer.some((a) =>
                typeof a === "string"
                  ? a.toLowerCase().includes(searchTerm.toLowerCase())
                  : a.title.toLowerCase().includes(searchTerm.toLowerCase())
              ))
      ),
    [searchTerm]
  );

  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="items-center flex flex-col lg:px-20 px-5 mx-auto relative"
      >
        <motion.div
          className="lg:mt-[200px] mt-[105px] text-center max-w-[900px]"
          variants={container}
        >
          <motion.div variants={item}>
            <Tape text="FAQS" />
          </motion.div>
          <motion.p
            className="lg:text-[64px] text-[36px] pt-10 lg:leading-[80%] leading-[44px] font-semibold text-[#101828]"
            variants={item}
          >
            Frequently asked questions
          </motion.p>
          <motion.p
            className="lg:mt-6 mt-4 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto"
            variants={item}
          >
            We have offices and teams all around the world.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="bg-white min-h-screen font-sans">
        <div className="container mx-auto max-w-[1024px] px-5 lg:p-20 lg:pt-[53px] pt-8">
          {/* Search bar */}
          <div className="flex justify-center w-full">
            <div className="relative w-full lg:w-[427px]">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-black focus:border-none focus:ring-none"
              />
            </div>
          </div>

          {/* FAQ list */}
          <div className="space-y-4 lg:space-y-[21px] mt-7 lg:mt-[85px]">
            {filteredData.map((item) => (
              <AccordionItem
                key={item.id}
                {...item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
