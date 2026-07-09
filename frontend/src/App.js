import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import OurJourney from "@/pages/OurJourney";
import KamalaMuditamWay from "@/pages/KamalaMuditamWay";
import WhereOurHearts from "@/pages/WhereOurHearts";
import FocusArea from "@/pages/FocusArea";
import HowWeWalk from "@/pages/HowWeWalk";
import JoinJourney from "@/pages/JoinJourney";
import Ripples from "@/pages/Ripples";
import People from "@/pages/People";
import Contact from "@/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#2A3B2C",
              color: "#F9F6F0",
              border: "1px solid rgba(249,246,240,0.15)",
              fontFamily: "'Lora', Georgia, serif",
            },
          }}
        />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/the-kamala-muditam-way" element={<KamalaMuditamWay />} />
          <Route path="/where-our-hearts-lead-us" element={<WhereOurHearts />} />
          <Route
            path="/where-our-hearts-lead-us/:slug"
            element={<FocusArea />}
          />
          <Route path="/how-we-walk-alongside" element={<HowWeWalk />} />
          <Route path="/become-part-of-the-journey" element={<JoinJourney />} />
          <Route path="/ripples" element={<Ripples />} />
          <Route path="/the-people-behind-the-ripple" element={<People />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
