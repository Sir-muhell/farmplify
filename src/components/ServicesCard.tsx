// src/components/ServiceCard.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Service {
  link: string;
  image: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Simple check for touch presence
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      if (isHovered) {
        return true;
      } else {
        e.preventDefault();
        setIsHovered(true);
      }
    }
  };

  const cardClass = isHovered ? "is-active" : "";

  return (
    <Link
      to={service.link}
      onClick={handleTap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-[355px] rounded-[8px] overflow-hidden flex flex-col justify-end group cursor-pointer transition-all duration-1500 ease-in-out ${cardClass}`}
    >
      <div
        className="absolute inset-0 w-full h-full transform transition-all duration-1000 ease-in-out  group-hover:-translate-y-16 group-active:-translate-y-16"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-opacity duration-1500 ease-in-out group-hover:opacity-0 group-active:opacity-0"></div>
      </div>

      <p className="font-semibold lg:text-[32px] text-[24px] text-white leading-[93%] px-5 h-[64px] mb-5 relative z-20 transition-opacity duration-1500 ease-in-out group-hover:opacity-0 group-active:opacity-0">
        {service.title}
      </p>

      {/*White Panel Slides In from Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-full transition-all duration-1500 ease-in-out translate-y-50 group-hover:translate-y-0 translate-y-100 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100" // Targets mobile tap
      >
        <div className="bg-white h-fit py-6 px-5 rounded-b-[7px]">
          <p className="text-[#1F3C15] leading-[100%] text-[18px] font-semibold mb-2">
            {service.title}
          </p>
          <p className="text-[14px] text-[#616161] leading-[130%] font-medium tracking-[0.6px] text-left">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
