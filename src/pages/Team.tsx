import Navbar from "../components/Navbar";
import Hero from "../components/about/Hero";
import Grow from "../components/Grow";
import Image from "../assets/object.svg";
import TeamBody from "../components/about/TeamBody";

const Team = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero text="Our Team" tape="about us" color="#1A1613" image={Image} />
      <TeamBody />
      <Grow />
    </main>
  );
};

export default Team;
