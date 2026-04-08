import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar       from "./components/Navbar";
import HomePage     from "./pages/HomePage";
import CountryPage  from "./pages/CountryPage";
import ThankYouPage from "./pages/ThankYouPage";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/:countryId" element={<CountryPage />} />
        <Route path="/thank-you"  element={<ThankYouPage />} />
        <Route path="*"           element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
