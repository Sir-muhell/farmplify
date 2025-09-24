import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Investment from "./pages/InvestmentAdvisory";
import FinancialServices from "./pages/FinancialServices";
import ImpactInvesting from "./pages/ImpactInvesting";
import TechEnabled from "./pages/TechEnabled";
import AssetInvestment from "./pages/AssestInvestment";
import Commodity from "./pages/Commodity";
import AssetManagement from "./pages/AssetManagement";
import { PageTransitionWrapper, ScrollTop } from "./components/ScrollToTop";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import Careers from "./pages/Careers";
import Submit from "./pages/Submit";

function App() {
  return (
    <>
      <div className="App overflow-x-hidden">
        <Router>
          <ScrollTop />
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
              <Route path="/investment-advisory" element={<Investment />} />
              <Route path="/asset-management" element={<AssetManagement />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/submit" element={<Submit />} />

              <Route
                path="/real-asset-investment"
                element={<AssetInvestment />}
              />
              <Route
                path="/commodity-and-value-chain-investment"
                element={<Commodity />}
              />
              <Route
                path="/tech-enabled-agriculture"
                element={<TechEnabled />}
              />
              <Route
                path="/agrifinance-services"
                element={<FinancialServices />}
              />
              <Route
                path="/esg-and-impact-investing"
                element={<ImpactInvesting />}
              />
            </Routes>
            <Footer />
          </PageTransitionWrapper>
        </Router>
      </div>
    </>
  );
}

export default App;
