import Navbar from "../components/Navbar";
import Hero from "../components/about/Hero";
import Image from "../assets/object.svg";
import Grow from "../components/Grow";
import Image2 from "../assets/career.webp";

import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Value Is Everything"
        tape="careers"
        color="#59260B"
        image={Image}
      />
      <div className="mt-[56px] mt-[59px] lg:grid grid-cols-8 lg:text-left text-center px-5 lg:px-20">
        <div className=" justify-center flex flex-col mb-[63px] lg:mb-0 col-span-3">
          <p className="text-[#1A1613] lg:text-[32px] text-[40px] font-semibold lg:font-medium leading-[110%] tracking-[0.6px] ">
            Value and culture defines our identity. We foster a disciplined
            mindset that rewards initiative, embraces innovation, and values
            inclusivity. Our people and partners thrive in an environment where
            integrity and collaboration drive sustainable agricultural
            investments.
          </p>
          <p className="text-[#616161] text-[16px] font-medium leading-[130%] lg:mt-6 mt-8">
            We know that agriculture isn’t just about the farms and investments,
            it’s also about people. That’s why Farmplify organizes regular field
            tours, investor forums, and community engagements where our team,
            partners, and investors connect, share insights, and build lasting
            relationships beyond the business.
          </p>

          <Link to="/submit">
            <button className="bg-[#1F3C15] text-white font-semibold uppercase text-xl py-[18px] w-full rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer">
              Submit Your Resume
            </button>
          </Link>
        </div>
        <div className="col-span-1"></div>
        <div className="h-full col-span-4">
          <img
            src={Image2}
            alt="Careers"
            className="rounded-[8px] object-cover h-full w-full mb-5 lg:mb-0"
          />
        </div>
      </div>
    </main>
  );
};

export default Careers;
