import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

const ImpactInvesting = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="ESG & Impact Investing"
        head="Create Positive Impact While Generating Returns"
        subHead="Align your investments with your values through our ESG and impact investing services. We help you build portfolios that generate both financial returns and positive environmental and social outcomes."
      />

      <Grow />
    </main>
  );
};

export default ImpactInvesting;
