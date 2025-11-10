import "./App.css";
import { lazy, Suspense } from "react"; // 1. Import React, lazy, and Suspense
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import { PageTransitionWrapper, ScrollTop } from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const Services = lazy(() => import("./pages/Services"));
const Investment = lazy(() => import("./pages/InvestmentAdvisory"));
const FinancialServices = lazy(() => import("./pages/FinancialServices"));
const ImpactInvesting = lazy(() => import("./pages/ImpactInvesting"));
const AssetInvestment = lazy(() => import("./pages/AssestInvestment"));
const Commodity = lazy(() => import("./pages/Commodity"));
const AssetManagement = lazy(() => import("./pages/AssetManagement"));
const Faq = lazy(() => import("./pages/Faq"));
const Careers = lazy(() => import("./pages/Careers"));
const Submit = lazy(() => import("./pages/Submit"));

function App() {
  return (
    <>
      <div className="App overflow-hidden">
        <Router>
          <ScrollTop />
          <PageTransitionWrapper>
            <Suspense fallback={<div>Loading...</div>}>
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
                {/* <Route
                  path="/tech-enabled-agriculture"
                  element={<TechEnabled />}
                /> */}
                <Route
                  path="/agrifinance-services"
                  element={<FinancialServices />}
                />
                <Route
                  path="/esg-and-impact-investing"
                  element={<ImpactInvesting />}
                />
              </Routes>
            </Suspense>
            <Footer />
          </PageTransitionWrapper>
        </Router>
      </div>
    </>
  );
}

export default App;
