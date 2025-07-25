import React from "react";
import HeroSection from "../components/heroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="relative w-full h-screen text-white">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Home;
