import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Grow from "../components/Grow";

const AssetManagement = () => {
  return (
    <main className="relative mx-auto overflow-hidden">
      <Navbar />
      <Hero
        text="Asset Management"
        head="Complete Agricultural Asset Management Solutions"
        subHead="Transform your agricultural investments into profitable, well-managed assets. Our comprehensive asset management services ensure optimal performance across all types of agricultural operations, from farmland to livestock enterprises."
      />

      <Grow />
    </main>
  );
};

export default AssetManagement;
