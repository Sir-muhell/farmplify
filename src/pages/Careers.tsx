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
        color="#1A1613"
        image={Image}
      />
      <div className="mt-[56px] mt-[59px] grid lg:grid-cols-2 lg:text-left text-center ">
        <div className="lg:pr-[110px] px-5 lg:px-20 justify-center flex flex-col mb-[63px] lg:mb-0">
          <p className="text-[#1A1613] text-[40px] font-semibold leading-[110%] ">
            Value and culture defines our identity. We foster a disciplined
            mindset that rewards initiative, embraces innovation, and values
            inclusivity. Our people and partners thrive in an environment where
            integrity and collaboration drive sustainable agricultural
            investments.
          </p>
          <p className="text-[#616161] lg:text-[18px] text-[16px] font-medium leading-[130%] lg:mt-6 mt-8">
            We know that agriculture isn’t just about the farms and investments,
            it’s also about people. That’s why Farmplify organizes regular field
            tours, investor forums, and community engagements where our team,
            partners, and investors connect, share insights, and build lasting
            relationships beyond the business.
          </p>
          <Link to="/submit">
            <button className="bg-[#E5CFC2] text-[#5C7D34] font-semibold uppercase lg:text-[20px] text-[16px] lg:w-[417px] w-full py-6 rounded-full tracking-[0.23em] hover:scale-105 transition mt-12 cursor-pointer ">
              Submit Your Resume
            </button>
          </Link>
        </div>
        <div>
          <img
            src={Image2}
            alt="Careers"
            className="lg:rounded-tl-[16px] lg:rounded-bl-[16px]"
          />
        </div>
      </div>

      <Grow />
    </main>
  );
};

export default Careers;
