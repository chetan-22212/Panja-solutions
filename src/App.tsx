import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from "./components/WhatsAppFloat";

// Direct imports - no lazy loading for faster initial load
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Contact } from './pages/Contact';


// Add this to your main component to check Safari specifically
// useEffect(() => {
//   const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//   if (isSafari) {
//     console.log('Running in Safari - checking performance issues');
//   }
// }, []);


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <Router>
      <main className="bg-[#FEFEFE] min-h-screen selection:bg-[#2098D0] selection:text-white flex flex-col">
        <ScrollToTop />
        <Header />
        <div className="flex-grow relative z-10">
          <AnimatedRoutes />
        </div>
        <Footer />
        <WhatsAppFloat />
      </main>
    </Router>
  );
}