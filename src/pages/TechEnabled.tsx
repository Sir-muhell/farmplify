import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

const TechEnabled = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Tech-Enabled Agriculture"
        head="Revolutionize Agricultural Operations with Advanced Technology"
        subHead="Harness the power of modern technology to optimize agricultural productivity and profitability. Our tech-enabled agriculture services integrate cutting-edge solutions that transform traditional farming into precision, data-driven operations."
      />

      <Grow />
    </main>
  );
};

export default TechEnabled;
