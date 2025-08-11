import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

const FinancialServices = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Financial Services"
        head="Comprehensive Financial Solutions for Agricultural Investments"
        subHead="Access the capital and financial expertise needed to execute your agricultural investment strategy. Our financial services provide end-to-end support from initial capital raising through ongoing financial management and optimization."
      />

      <Grow />
    </main>
  );
};

export default FinancialServices;
