import Body from "../components/about/Body";
import Hero from "../components/about/Hero";
import Grow from "../components/Grow";
import Image from "../assets/bg-green.svg";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero text="Who We Are" tape="about-us" image={Image} color="#1F3C15" />
      <Body />

      <Grow />
    </main>
  );
};

export default About;
