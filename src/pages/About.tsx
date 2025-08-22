import Hero from "../components/about/Hero";
import Grow from "../components/Grow";
import Opportunity from "../components/about/Opportunity";
import Solution from "../components/about/Solution";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero />
      <Opportunity />
      <Solution />
      <Grow />
    </main>
  );
};

export default About;
