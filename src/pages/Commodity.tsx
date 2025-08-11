import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

const Commodity = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Commodity & Value Chain Investment"
        head="Maximize Returns Through Strategic Value Chain Integration"
        subHead="Capture value at every stage of the agricultural supply chain. Our commodity and value chain investment services help you build integrated operations that generate multiple revenue streams while reducing market risks."
      />

      <Grow />
    </main>
  );
};

export default Commodity;
