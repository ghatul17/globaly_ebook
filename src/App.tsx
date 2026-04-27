import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar    from "./components/Navbar";
import HomePage   from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import ThankYouPage from "./pages/ThankYouPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import Footer    from "./components/Footer";

export default function App() {
 return (
  <HelmetProvider>
  <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/"     element={<HomePage />} />
    <Route path="/privacy"    element={<PrivacyPage />} />
    <Route path="/terms"     element={<TermsPage />} />
    <Route path="/thank-you"   element={<ThankYouPage />} />
    <Route path="/blog"        element={<BlogPage />} />
    <Route path="/blog/:slug"  element={<BlogPostPage />} />
    <Route path="/:countryId"  element={<CountryPage />} />
    <Route path="*"       element={<HomePage />} />
   </Routes>
   <Footer />
  </BrowserRouter>
  </HelmetProvider>
 );
}
