import { useState } from "react";

export interface Tab {
  id: number;
  label: string;
  title: string;
  items: string[];
}

interface TabbedSectionProps {
  tabs: Tab[];
  textColor?: string;
  titleColor?: string;
  className?: string;
  leftIcon: string;
  rightIcon: string;
}

const ServiceCard: React.FC<TabbedSectionProps> = ({
  tabs,
  textColor,
  titleColor,
  className,
  leftIcon,
  rightIcon,
}) => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id ?? 1);
  const currentTab = tabs.find((tab) => tab.id === activeTab)!;

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 1 ? tabs.length : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === tabs.length ? 1 : prev + 1));
  };

  return (
    <section
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Tabs */}
      <div className="flex gap-6 justify-start lg:justify-between mb-10 overflow-x-scroll no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`uppercase font-semibold tracking-[0.2em] text-[14px] relative py-2 px-4 transition-colors duration-200
              ${activeTab === tab.id ? "bg-[#FFFFFF33]" : ""}
              ${activeTab === tab.id ? "opacity-100" : "opacity-30"} 
              ${textColor === "#DFDFDF" ? "text-[#FFFFFF]" : textColor} 

            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span
                className="absolute left-0 bottom-0 w-full h-[2px]"
                style={{ backgroundColor: textColor }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="lg:flex gap-10 px-8 lg:px-0">
        <div className="lg:w-1/3">
          <h2
            className="font-semibold text-[28px] lg:text-[32px] leading-[110%] lg:text-left text-center"
            style={{ color: titleColor }}
          >
            {currentTab.title}
          </h2>
        </div>

        <div className="lg:w-2/3">
          <ul
            className="space-y-3 mt-4 lg:mt-0 font-medium text-[16px] leading-[130%] tracking-[0.6px]"
            style={{ color: textColor }}
          >
            {currentTab.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 font-semibold">•</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 md:hidden px-8">
        <button
          onClick={handlePrev}
          className="h-20 w-20 flex items-center justify-center transition"
        >
          <img src={leftIcon} alt="left-button" />
        </button>

        <button
          onClick={handleNext}
          className="h-20 w-20  flex items-center justify-center transition"
        >
          <img src={rightIcon} alt="left-button" />
        </button>
      </div>
    </section>
  );
};

export default ServiceCard;
