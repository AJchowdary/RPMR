import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsAndConditionsPage from "./pages/TermsAndConditions";

function App() {
  useEffect(() => {
    // Optional: Test backend connection if REACT_APP_BACKEND_URL is configured
    const testBackend = async () => {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      
      // Skip backend test if not configured for production deployment
      if (!backendUrl) {
        return;
      }

      try {
        const response = await fetch(`${backendUrl}/api/`);
        if (response.ok) {
          const data = await response.json();
          console.log('Backend connected:', data.message);
        }
      } catch (error) {
        // Silently fail - backend is optional for static deployment
        console.debug('Backend not available (this is normal for static deployments)');
      }
    };

    testBackend();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="pt-[72px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
