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

// Define the structure for the complete, sectioned FAQ data
const sectionedFaqData: Record<string, FaqItem[]> = {
  // ----------------------------------------------------
  // AGRICULTURE ASSET MANAGEMENT   // ----------------------------------------------------
  "Agriculture Asset Management": [
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
            "<span style='font-weight: 600'>Farmland ownership/leases</span> – appreciating land value + rental/operational returns.",
            "<span style='font-weight: 600'>Farmland real estate development</span> – estates or cooperatives designed for crop/livestock production.",
            "<span style='font-weight: 600'>Greenhouse farms</span> – high-value horticulture (vegetables, herbs, flowers).",
            "<span style='font-weight: 600'>Irrigation infrastructure assets</span> – dams, boreholes, drip systems.",
            "<span style='font-weight: 600'>Agro-industrial parks</span> – clusters of processing and farming assets.",
          ],
        },
        {
          title: "2. Livestock Assets:",
          subItems: [
            "<span style='font-weight: 600'>Cattle ranching</span> – beef and dairy.",
            "<span style='font-weight: 600'>Poultry farming</span> – broilers, layers, hatcheries.",
            "<span style='font-weight: 600'>Goat & sheep production</span> – meat, milk, hides.",
            "<span style='font-weight: 600'>Pig farming</span> – pork and breeding stock.",
            "<span style='font-weight: 600'>Apiaries (beekeeping)</span> – honey and by-products.",
          ],
        },
        {
          title: "3. Aquaculture Assets:",
          subItems: [
            "<span style='font-weight: 600'>Fish farming</span> – catfish, tilapia, carp, etc.",
            "<span style='font-weight: 600'>Shrimp and prawn farms</span> – export-oriented.",
            "<span style='font-weight: 600'>Ornamental fish breeding</span> – niche but profitable.",
            "<span style='font-weight: 600'>Integrated aquaponics systems</span> – combining fish with hydroponic crops.",
          ],
        },
        {
          title: "4. Tree Crop & Plantation Assets:",
          subItems: [
            "<span style='font-weight: 600'>Cocoa plantations</span> – export commodities.",
            "<span style='font-weight: 600'>Oil palm plantations</span> – palm oil, kernel oil.",
            "<span style='font-weight: 600'>Cashew plantations</span> – high-value nuts.",
            "<span style='font-weight: 600'>Citrus orchards</span> – oranges, lemon, tangerine.",
            "<span style='font-weight: 600'>Mango, avocado, guava orchards</span> – tropical fruits.",
            "<span style='font-weight: 600'>Rubber plantations</span> – latex and industrial products.",
            "<span style='font-weight: 600'>Timber forestry</span> – teak, mahogany, gmelina, bamboo.",
          ],
        },
        {
          title: "5. Food & Cash Crop Assets:",
          subItems: [
            "<span style='font-weight: 600'>Grain farms</span> – maize, rice, sorghum, wheat, millet.",
            "<span style='font-weight: 600'>Legume farms</span> – soybean, groundnut, cowpea.",
            "<span style='font-weight: 600'>Vegetable farms</span> – tomatoes, peppers, onions.",
            "<span style='font-weight: 600'>Spice crops</span> – ginger, turmeric, chili.",
            "<span style='font-weight: 600'>Root & tuber farms</span> – cassava, yam, potatoes.",
            "<span style='font-weight: 600'>Industrial crops</span> – cotton, sugarcane.",
          ],
        },
        {
          title: "6. Agro-Processing & Value-Add Investments:",
          subItems: [
            "<span style='font-weight: 600'>Grain milling plants</span> – rice, maize, wheat flour.",
            "<span style='font-weight: 600'>Fruit processing plants</span> – juice, puree, dried fruit.",
            "<span style='font-weight: 600'>Dairy processing</span> – milk, cheese, yogurt.",
            "<span style='font-weight: 600'>Meat processing & cold storage</span> –",
            "<span style='font-weight: 600'>Palm oil mills & refineries</span> –",
            "<span style='font-weight: 600'>Animal feed mills</span> –",
            "<span style='font-weight: 600'>Biofuel & biogas plants</span> – using crop/livestock waste.",
          ],
        },
        {
          title: "7. Agricultural Infrastructure & Support Assets:",
          subItems: [
            "<span style='font-weight: 600'>Storage & warehousing facilities</span> – silos, cold rooms.",
            "<span style='font-weight: 600'>Logistics & transport networks</span> – trucks, boats, tractors.",
            "<span style='font-weight: 600'>Input supply chains</span> – seeds, fertilizers, agro-chemicals.",
            "<span style='font-weight: 600'>Farm equipment leasing hubs</span> – tractors, harvesters, irrigation kits.",
            "<span style='font-weight: 600'>Agro-market hubs</span> – structured marketplaces.",
          ],
        },
        {
          title: "8. Financial & Commodity Investment Opportunities:",
          subItems: [
            "<span style='font-weight: 600'>Commodity trading</span> – grains, cocoa, cashew, palm oil.",
            "<span style='font-weight: 600'>Agricultural futures & contracts</span> –",
            "<span style='font-weight: 600'>Farmland REITs</span> – (Real Estate Investment Trusts).",
            "<span style='font-weight: 600'>Outgrower schemes</span> – partnerships with smallholder farmers.",
            "<span style='font-weight: 600'>Carbon credits & green investment</span> – from tree planting or sustainable practices.",
            "<span style='font-weight: 600'>Insurance products for farmers</span> – crop/livestock risk management.",
          ],
        },
        "For each sector, we apply best practices and specialized knowledge. In short, any agribusiness activity falls under our management. This broad coverage allows us to build diversified portfolios of agricultural assets, spreading risk and capturing multiple sources of productivity.",
      ],
    },
    {
      id: "4",
      question: "How does your Agriculture Asset Management service work?",
      answer: [
        "We follow a hands-on, step-by-step process to manage every detail of the farming operation. Typically, we:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Select and prepare land:</span> We evaluate soil, water and climate conditions to acquire or lease suitable farmland, then prepare the land and infrastructure (fields, irrigation, housing, etc.) for farming.",
            "<span style='font-weight: 600'>Implement farming operations:</span> Our technical experts (agronomists, vets, farm managers, etc.) set up and oversee daily farm activities – from sowing, feeding and care of crops and animals to harvesting and processing.",
            "<span style='font-weight: 600'>Optimize with technology:</span> We use data-driven tools and monitoring (for example, soil sensors, weather data, or drones) to track farm health. This lets us spot issues early and adjust practices (like irrigation or fertilization) to maximize yields and efficiency.",
            "<span style='font-weight: 600'>Manage logistics and sales:</span> We handle the marketing and sale of produce, livestock or fish, securing buyers or distribution channels to turn outputs into revenue.",
            "<span style='font-weight: 600'>Report and refine:</span> Throughout the process, we gather data and report performance. We use those insights to continuously improve operations for the next season.",
          ],
        },
        "By managing each stage, we ensure the farm runs efficiently and can scale up over time. Investors benefit from a turnkey solution – all the farm work is done by us, and you simply receive performance updates and outcomes.",
      ],
    },
    {
      id: "5",
      question: "What makes our service unique?",
      answer:
        "Our Agriculture Asset Management stands out because we bring institutional rigor and full accountability to agribusiness. In other words, <span style='font-weight: 600'>we treat agriculture as a professional business</span> . Key differentiators include: <span style='font-weight: 600'>Dedicated expert teams, End-to-end oversight, Structured investment approach, Emphasis on efficiency and growth and Transparency</span> <br/><br/>Your investment is managed with the same diligence as a business, aiming for durable performance and steady progress rather than speculative gains.",
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
            "<span style='font-weight: 600'>Hands-off management:</span> You provide the capital and strategic vision, and our team handles the day-to-day farm work. This lets you benefit from agriculture without needing to run it yourself.",
            "<span style='font-weight: 600'>Expertise-driven productivity:</span> Our professional management improves farm efficiency. With agronomists and technicians on site, farms tend to achieve higher yields and better cost control than unmanaged plots.",
            "<span style='font-weight: 600'>Diversification:</span> By pooling different farm types (livestock, crops, aquaculture), your investment spreads risk. Poor performance in one area (say, a drought affecting crops) can be offset by stability in another (such as livestock or fish).",
            "<span style='font-weight: 600'>Stable asset class:</span> Farmland and production of food/fiber have intrinsic value. Agriculture is essential for feeding a growing population, which supports steady demand for farm outputs over the long term.",
            "<span style='font-weight: 600'>Scalability:</span> We build operations to scale. Systems are put in place so that farms can expand acreage or production volume without sacrificing efficiency. This means your investment has room to grow over time.",
            "<span style='font-weight: 600'>Transparency and peace of mind:</span> You receive regular updates and detailed reports. There are no hidden steps – every decision and expense is documented. This clarity helps you track progress and makes the investment secure.",
            "<span style='font-weight: 600'>Positive impact:</span> Beyond financials, agriculture has real-world impact. Your investment contributes to food security, job creation in rural and urban areas, and can incorporate sustainable agribusiness practices if that aligns with your values.",
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
        "Agricultural investing has inherent risks (weather, pests, market shifts), but we mitigate these through expertise and planning. Key risk-management strategies include: Diversification, Scientific farming, Technology and monitoring, Adaptive planning Insurance and safeguards: The result is more consistent output and performance, the investments aren’t just passive assets, but actively managed businesses that adapt to challenges.",
    },
    {
      id: "9",
      question: "As an investor, what is my role in the process?",
      answer:
        "Your role is mainly to define objectives and provide capital; we handle the execution. In practice, you start by sharing your investment goals and any preferences (for example, focus on sustainability, particular crops or regions, etc.). Once a plan is set, our team implements it, you generally won’t need to be involved in daily farm decisions. We do, however, keep you informed: you’ll receive regular updates and can review reports or even visit your agribusiness location if you wish. Many investors appreciate that their role is largely passive, allowing them to benefit from agriculture’s potential without needing agriculture expertise. Of course, we welcome any input or questions you have at any time, but the heavy lifting is done by our specialists.",
    },
    {
      id: "10",
      question: "How do I get started with Agriculture Asset Management?",
      answer:
        "To begin, simply reach out to us for a consultation. We’ll discuss your investment goals, timeframe, and any specific interests (such as certain regions or crops). From there, we design a customized management plan and present you with the details. After any required agreements are signed, we take care of everything. You’ll start receiving performance reports as soon as execution are underway. In short, we guide you through each step so you can confidently enter the agricultural sector with our support.",
    },
  ],

  // ----------------------------------------------------
  // AGRICULTURE INVESTMENT ADVISORY
  // ----------------------------------------------------
  "Agriculture Investment Advisory": [
    {
      id: "11",
      question: "What is Farmplify’s Agriculture Investment Advisory service?",
      answer:
        "Our Agriculture Investment Advisory service provides end-to-end guidance for investors seeking structured exposure to Africa’s agribusiness opportunities. We combine deep sector expertise, rigorous analysis, and practical execution to help investors identify, evaluate, and secure opportunities in farmland, agribusiness ventures, and agricultural value chains.",
    },
    {
      id: "12",
      question: "Who is this service designed for?",
      answer:
        "This service is tailored for <span style='font-weight: 600'>Private individual, institutional investors, family offices, development finance institutions, and corporate investors</span> seeking to access Africa’s agricultural sector in a structured, data-driven, and secure manner.",
    },
    {
      id: "13",
      question: "What does Pre-Investment Advisory include?",
      answer: [
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Agri-Market Insights & Research:</span> Detailed analysis of agricultural trends, crop economics, and emerging opportunities.",
            "<span style='font-weight: 600'>Investment Opportunity Analysis:</span> Identification and evaluation of high-potential ventures and assets.",
            "<span style='font-weight: 600'>Risk Profiling & Portfolio Structuring:</span> Customized strategies aligned with each investor’s objectives and appetite for risk.",
          ],
        },
      ],
    },
    {
      id: "14",
      question: "What kind of support do you provide during transactions?",
      answer: [
        "Our <span style='font-weight: 600'>Transaction Support Advisory</span> ensures investments are secure, feasible, and well-structured:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Feasibility Studies</span> that cover technical, operational, and financial dimensions.",
            "<span style='font-weight: 600'>Due Diligence</span> across legal, financial, and operational aspects to ensure transparency and reduce risk.",
            "<span style='font-weight: 600'>Capital Structuring & Advisory</span> to guide financing models – whether debt, equity, or blended structures.",
          ],
        },
      ],
    },
    {
      id: "15",
      question: "Do you provide guidance after an investment is made?",
      answer: [
        "Yes. Our <span style='font-weight: 600'>Post-Investment & Strategic Advisory</span> strengthens long-term outcomes by offering:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Policy & Regulatory Advisory</span> to navigate investment tenure systems and compliance.",
            "<span style='font-weight: 600'>ESG & Impact Advisory</span> for integrating sustainability, social impact, and climate resilience.",
            "<span style='font-weight: 600'>Market Entry & Expansion Strategy</span> for scaling across regions and value chains.",
            "<span style='font-weight: 600'>Strategic Partnership Development</span> connecting investors with processors, off-takers, and government stakeholders.",
          ],
        },
      ],
    },
    {
      id: "16",
      question:
        "How does Farmplify ensure investments are data-driven and secure?",
      answer:
        "We use a combination of <span style='font-weight: 600'>market intelligence, feasibility studies, risk assessments, and rigorous due diligence</span>. Every recommendation is supported by evidence-based analysis, ensuring that investors make informed decisions backed by data and verified insights.",
    },
    {
      id: "17",
      question: "What differentiates Farmplify’s Advisory practice?",
      answer: [
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Sector Expertise:</span> Deep understanding of African agriculture and value chains.",
            "<span style='font-weight: 600'>Institutional-Grade Standards:</span> Applying global best practices in structuring agribusiness investments.",
            "<span style='font-weight: 600'>End-to-End Approach:</span> From market research to post-investment execution support.",
            "<span style='font-weight: 600'>Impact Orientation:</span> Integration of ESG principles and sustainability strategies into every investment plan.",
          ],
        },
      ],
    },
    {
      id: "18",
      question: "Which regions do you cover?",
      answer:
        "We focus on <span style='font-weight: 600'>sub-Saharan Africa</span>, with advisory coverage spanning key agricultural markets in West, East, Central, and Southern Africa. Our footprint continues to expand as we support investors entering new markets across the continent.",
    },
    {
      id: "19",
      question: "How do I engage with your advisory service?",
      answer:
        "Engagement begins with a consultation to understand your objectives. From there, we design a tailored advisory framework – whether it’s a single feasibility study, a portfolio structuring mandate, or ongoing strategic advisory. We provide <span style='font-weight: 600'>regular reporting, clear communication, and collaborative execution</span> throughout the engagement.",
    },
  ],

  // ----------------------------------------------------
  // COMMODITY & VALUE CHAIN INVESTMENT MANAGEMENT
  // ----------------------------------------------------
  "Commodity & Value Chain Investment Management": [
    {
      id: "20",
      question:
        "What is Farmplify’s Commodity & Value Chain Investment Management service?",
      answer:
        "This service is designed to professionalize agricultural trading and post-harvest value chains. We structure and manage commodity trading portfolios for grains and high-demand cash crops, while also building the infrastructure, processing, and market linkages that ensure value is preserved and margins are optimized. It is not just about trading crops—it’s about managing the entire value chain from farm gate to final buyer.",
    },
    {
      id: "21",
      question: "Which commodities do you focus on?",
      answer: [
        "Our programs cover both staple grains and high-demand cash crops. These include:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Grains:</span> maize, rice, sorghum, millet, wheat. e.t.c",
            "<span style='font-weight: 600'>Cash crops:</span> soybeans, sesame, cashew, cocoa, ginger, and other regionally relevant exports e.t.c",
          ],
        },
        "We continuously evaluate market demand and investor priorities to expand into additional commodities as opportunities arise.",
      ],
    },
    {
      id: "22",
      question: "How does structured commodity trading work?",
      answer: [
        "Structured trading means applying financial discipline, risk controls, and aggregation systems to the trading of agricultural products. Instead of ad-hoc buying and selling, we:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Aggregate consistent volumes</span> through farmer networks and cooperatives.",
            "<span style='font-weight: 600'>Enforce quality standards</span> and traceability.",
            "<span style='font-weight: 600'>Secure forward contracts</span> or off-take agreements with large buyers.",
            "<span style='font-weight: 600'>Optimize logistics and storage</span> to minimize losses.",
          ],
        },
        "This approach reduces risk, improves predictability, and ensures investors benefit from scalable, reliable trade flows.",
      ],
    },
    {
      id: "23",
      question: "What role does post-harvest infrastructure play?",
      answer: [
        "Post-harvest infrastructure is at the core of value preservation. We establish and manage:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Warehouses & silos</span> for safe grain storage.",
            "<span style='font-weight: 600'>Drying facilities</span> to maintain quality and shelf life.",
            "<span style='font-weight: 600'>Cold storage & bulk transport systems</span> where needed.",
          ],
        },
        "By minimizing losses from spoilage, moisture, or poor handling, we protect both investor returns and food security.",
      ],
    },
    {
      id: "24",
      question:
        "How does Farmplify integrate agro-processing and value addition?",
      answer: [
        "Beyond trading raw commodities, we invest in <span style='font-weight: 600'>processing capacity</span> to move crops up the value chain. For example:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Milling maize into flour.</span>",
            "<span style='font-weight: 600'>Processing cashew into kernels.</span>",
            "<span style='font-weight: 600'>Converting cocoa into powder or butter.</span>",
          ],
        },
        "This unlocks additional revenue streams, captures higher margins, and positions investors to benefit from consumer-ready products in both local and export markets.",
      ],
    },
    {
      id: "25",
      question: "How do you ensure quality assurance and traceability?",
      answer:
        "We enforce rigorous quality standards through certifications (e.g., ISO, HACCP, organic where applicable). To enhance transparency, we integrate <span style='font-weight: 600'>blockchain-backed traceability systems</span> that allow buyers to verify the origin, handling, and quality of every batch. This builds trust with global buyers and ensures compliance with international market requirements.",
    },
    {
      id: "26",
      question: "What types of partnerships secure market access?",
      answer: [
        "We establish long-term relationships with:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Exporters.</span>",
            "<span style='font-weight: 600'>Food processors.</span>",
            "<span style='font-weight: 600'>Retail chains.</span>",
            "<span style='font-weight: 600'>Institutional buyers.</span>",
          ],
        },
        "Through <span style='font-weight: 600'>off-take agreements</span> and B2B partnerships, we guarantee consistent demand for our commodities, ensuring stability for investors and scale for farmers.",
      ],
    },
    {
      id: "27",
      question: "Do you manage branding and market positioning?",
      answer:
        "Yes. Farmplify supports the creation of <span style='font-weight: 600'>premium agricultural brands</span>, both for domestic markets and export positioning. Branding allows us to differentiate products, command premium prices, and build reputational value across target markets.",
    },
    {
      id: "28",
      question: "How do you handle logistics and distribution?",
      answer: [
        "We manage the end-to-end movement of commodities, including:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Coordinated bulk transport</span> from farms to aggregation centers.",
            "<span style='font-weight: 600'>Regional distribution</span> for domestic markets.",
            "<span style='font-weight: 600'>Cross-border and international logistics</span> for export.",
          ],
        },
        "Our logistics solutions are designed to be cost-effective, reliable, and fully integrated with our trading programs.",
      ],
    },
    {
      id: "29",
      question: "What about financing and working capital support?",
      answer:
        "We provide <span style='font-weight: 600'>supply chain financing solutions</span> that ensure smooth trade execution. This includes structured financing for bulk procurement, warehouse receipt systems, and working capital management to prevent bottlenecks in operations. Investors benefit from a seamless trading cycle that is both well-funded and professionally managed.",
    },
    {
      id: "30",
      question: "How does this service benefit investors?",
      answer: [
        "Key advantages include:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Exposure to agriculture as a tradable asset class</span> with structured risk management.",
            "<span style='font-weight: 600'>Participation in value-added processing and branding</span> for margin growth.",
            "<span style='font-weight: 600'>Confidence in quality assurance and traceability</span> for global compliance.",
            "<span style='font-weight: 600'>Long-term access to markets</span> through secured off-take agreements.",
            "<span style='font-weight: 600'>Impact-driven outcomes</span> such as reduced post-harvest losses and improved farmer livelihoods.",
          ],
        },
      ],
    },
  ],

  // ----------------------------------------------------
  // REAL ASSET INVESTMENT
  // ----------------------------------------------------
  "Real Asset Investment": [
    {
      id: "31",
      question: "What is Farmplify’s Real Asset Investment service?",
      answer:
        "Farmplify’s Real Asset Investment service focuses on acquiring, developing, and managing high-value farmland as a strategic investment class. We leverage structured purchasing and leasing models, sustainable land use practices, and carbon farming initiatives to create both financial and environmental value for investors.",
    },
    {
      id: "32",
      question: "Who can invest in farmland through this service?",
      answer:
        "Our Real Asset Investment platform is designed for institutional investors, high-net-worth individuals (HNWIs), family offices, and corporations seeking exposure to farmland as a secure, long-term asset. Whether you are looking for direct ownership, co-investment, or structured leasing models, we provide solutions tailored to your needs.",
    },
    {
      id: "33",
      question: "How do you identify and acquire farmland?",
      answer: [
        "We use a rigorous process that includes:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Soil, water, and climate suitability studies.</span>",
            "<span style='font-weight: 600'>Proximity to infrastructure and markets.</span>",
            "<span style='font-weight: 600'>Land title verification and legal due diligence.</span>",
            "<span style='font-weight: 600'>Assessment of long-term appreciation potential.</span>",
          ],
        },
        "Only land that meets both productivity and security criteria is acquired or leased on behalf of investors.",
      ],
    },
    {
      id: "34",
      question: "What types of farmland investment models are available?",
      answer: [
        "We offer:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Direct Ownership</span> – Investors acquire farmland outright, with Farmplify managing its development and optimization.",
            "<span style='font-weight: 600'>Leasing Models</span> – Structured short- and long-term leases for operators or investors seeking income without ownership.",
            "<span style='font-weight: 600'>Joint Ventures & Co-Investments</span> – Partnerships for larger farmland portfolios or specific projects.",
          ],
        },
      ],
    },
    {
      id: "35",
      question: "How does farmland generate value for investors?",
      answer: [
        "Farmland generates value in multiple ways:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Land Appreciation</span> – Agricultural land historically appreciates in value over time.",
            "<span style='font-weight: 600'>Leasing Income</span> – Structured lease agreements provide recurring income.",
            "<span style='font-weight: 600'>Productivity Gains</span> – Farm development increases yields and land efficiency.",
            "<span style='font-weight: 600'>Carbon Credits & ESG Value</span> – Climate-smart farming and carbon projects generate additional revenue streams while enhancing sustainability credentials.",
          ],
        },
      ],
    },
    {
      id: "36",
      question:
        "What role does sustainability play in your agribusiness investments?",
      answer: [
        "Sustainability is central to our approach. We integrate:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Sustainable land use planning</span> to prevent degradation.",
            "<span style='font-weight: 600'>Carbon farming initiatives</span> that generate verified carbon credits.",
            "<span style='font-weight: 600'>Climate-smart agriculture</span> practices that enhance soil health and biodiversity.",
          ],
        },
        "This ensures that farmland is both productive and environmentally responsible, aligning with global ESG standards.",
      ],
    },
    {
      id: "37",
      question: "What is carbon farming and how does it benefit investors?",
      answer:
        "Carbon farming involves implementing agricultural practices that capture and store carbon in soil and vegetation, generating carbon credits. These credits can be sold on voluntary or compliance carbon markets, creating an additional income stream for investors while contributing to climate action.",
    },
    {
      id: "38",
      question:
        "How do you ensure legal and regulatory compliance in farmland acquisition?",
      answer: [
        "We conduct comprehensive <span style='font-weight: 600'>due diligence and title verification</span> before acquisition. Our legal and compliance team ensures:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Clear title ownership.</span>",
            "<span style='font-weight: 600'>Adherence to local land use laws and foreign ownership regulations</span> (if applicable).",
            "<span style='font-weight: 600'>Structuring of investment vehicles</span> in line with investor requirements.",
          ],
        },
        "This minimizes risk and provides confidence in the security of farmland assets.",
      ],
    },
    {
      id: "39",
      question: "How is farmland performance monitored and reported?",
      answer: [
        "We provide structured reporting that covers:",
        {
          title: "",
          subItems: [
            "<span style='font-weight: 600'>Asset performance and appreciation.</span>",
            "<span style='font-weight: 600'>Productivity metrics</span> (where farms are developed/operated)",
            "<span style='font-weight: 600'>ESG and carbon credit reporting</span> (for climate-smart projects).",
            "<span style='font-weight: 600'>Financial summaries and compliance updates.</span>",
          ],
        },
        "Investors receive <span style='font-weight: 600'>periodic reports</span> and can access performance dashboards for real-time oversight.",
      ],
    },
  ],
};

// Component to render nested list answers
const AnswerRenderer: React.FC<{ items: (string | AnswerListItem)[] }> = ({
  items,
}) => (
  <ul className="space-y-10 pt-4 lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161] b-override">
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

  const firstSectionKey = Object.keys(sectionedFaqData)[0];
  const firstItemId = sectionedFaqData[firstSectionKey]?.[0]?.id || null;

  // State for individual FAQ item toggle (using ID)
  const [openId, setOpenId] = useState<string | null>(firstItemId);
  // State for section toggle (using section title string)
  const [openSection, setOpenSection] = useState<string | null>(
    firstSectionKey
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleSectionToggle = (sectionTitle: string) => {
    setOpenSection(openSection === sectionTitle ? null : sectionTitle);
  };

  const filteredSections = useMemo(() => {
    const result: Record<string, FaqItem[]> = {};
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Helper to check if any part of the answer matches the search term
    const isAnswerMatch = (answer: FaqItem["answer"]) => {
      if (typeof answer === "string") {
        return answer.toLowerCase().includes(lowerCaseSearchTerm);
      } else {
        return answer.some((a) => {
          if (typeof a === "string") {
            return a.toLowerCase().includes(lowerCaseSearchTerm);
          }
          return (
            a.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            a.subItems?.some((sub) =>
              typeof sub === "string"
                ? sub.toLowerCase().includes(lowerCaseSearchTerm)
                : false
            )
          );
        });
      }
    };

    for (const [sectionTitle, items] of Object.entries(sectionedFaqData)) {
      if (!searchTerm) {
        result[sectionTitle] = items;
        continue;
      }

      // Filter items within the section
      const filteredItems = items.filter(
        (item) =>
          item.question.toLowerCase().includes(lowerCaseSearchTerm) ||
          isAnswerMatch(item.answer)
      );

      // Only include sections that have matching items
      if (filteredItems.length > 0) {
        result[sectionTitle] = filteredItems;
      }
    }

    return result;
  }, [searchTerm]);

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
            <Tape text="FAQS" bgColor="#30C67C1A" textColor="#1F3C15" />
          </motion.div>
          <motion.h1
            className="lg:text-[64px] text-[36px] pt-10 lg:leading-[80%] leading-[44px] font-semibold text-[#101828]"
            variants={item}
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            className="lg:mt-6 mt-4 text-[#616161] font-medium lg:text-xl text-base max-w-[620px] m-auto"
            variants={item}
          >
            Have questions? We’re here to help.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="bg-white">
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
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-black focus:border-none focus:ring-none focus:outline-none focus:ring-2 focus:ring-[#1F3C15] focus:border-[#1F3C15]"
              />
            </div>
          </div>

          {/* FAQ Sections Rendering */}
          <div className="space-y-8 lg:space-y-[40px] my-7 lg:mt-[85px]">
            {Object.entries(filteredSections).map(([sectionTitle, items]) => (
              <div key={sectionTitle}>
                {/* Section Header (Collapsible) - Using question text style */}
                <div
                  onClick={() => handleSectionToggle(sectionTitle)}
                  className="flex cursor-pointer items-center justify-between py-2 lg:py-4"
                >
                  <h2 className="lg:text-[24px] text-[18px] font-medium text-[#101828] lg:leading-[37px] leading-[28px] flex-grow pr-4">
                    {sectionTitle}
                  </h2>

                  <span className="flex flex-shrink-0 items-center justify-center rounded-full">
                    {openSection === sectionTitle ? (
                      // Minus icon
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
                      // Plus icon
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

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openSection === sectionTitle
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* FAQ list for this section */}
                    <div className="space-y-4 lg:space-y-[21px]">
                      {items.map((item) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
