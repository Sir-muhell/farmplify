import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Tape from "../components/Tape";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "1",
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: "2",
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or change your plan at any time from your account settings. Prorated charges or credits will be applied automatically.",
  },
  {
    id: "3",
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your access will remain active until the end of the current billing cycle. We do not offer refunds for partial months.",
  },
  {
    id: "4",
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can customize your invoices to include additional information such as your company’s VAT number, address, or any other details required for your accounting.",
  },
  {
    id: "5",
    question: "How does billing work?",
    answer:
      "We bill you automatically at the start of each billing cycle (either monthly or annually). All payments are processed securely through our payment provider.",
  },
  {
    id: "6",
    question: "How do I change my account email?",
    answer:
      'You can change the email address associated with your account by navigating to the "Profile" section in your account settings and following the on-screen instructions.',
  },
];

interface AccordionItemProps extends FaqItem {
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div
      className={`lg:p-[42px] p-5 transition-colors duration-300 ${
        isOpen ? "bg-[#EBFAF2] rounded-[16px] lg:rounded-[21px]" : "bg-white"
      }`}
    >
      <div
        onClick={onToggle}
        className="flex cursor-pointer items-start justify-between"
      >
        <div className="flex-grow order-1 lg:order-2">
          <h3 className="lg:text-[24px] text-[18px] font-medium text-[#101828] leading-[37px]">
            {question}
          </h3>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pt-4 lg:text-[21px] lg:leading-[32px] leading-[24px] text-[16px] text-[#616161]">
                {answer}
              </p>
            </div>
          </div>
        </div>

        <span className="flex flex-shrink-0 items-center justify-center rounded-full order-2 lg:order-1 lg:mr-8 mt-1">
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
};

const Faq = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [openId, setOpenId] = useState<string | null>(faqData[0].id); // Default to first item open
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredData = useMemo(
    () =>
      faqData.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
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
        className="items-center flex flex-col lg:px-20 px-5  mx-auto relative"
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
          <div className="flex justify-center w-full">
            <div className="relative w-full lg:w-[427px]">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w-org/2000/svg"
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
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

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
