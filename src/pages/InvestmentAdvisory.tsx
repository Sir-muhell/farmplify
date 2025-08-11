import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

const Investment = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Investment Advisory"
        head="Unlock Agricultural Investment Opportunities with Expert Guidance"
        subHead="Navigate the complex world of agricultural investments with confidence. Our investment advisory services combine deep market knowledge with strategic analysis to help you identify and capitalize on the most promising opportunities in the agricultural sector."
      />

      <Grow />
    </main>
  );
};

export default Investment;
