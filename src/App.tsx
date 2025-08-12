import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <ScrollTop />
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/investment-advisory" element={<Investment />} />
              <Route path="/asset-management" element={<AssetManagement />} />
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
                path="/financial-services"
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
