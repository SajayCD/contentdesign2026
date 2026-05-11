import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Recruiter from "./pages/Recruiter";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ScalingPart1 from "./pages/ScalingPart1";
import ScalingPart2 from "./pages/ScalingPart2";
import ScalingPart3 from "./pages/ScalingPart3";
import ScalingPart4 from "./pages/ScalingPart4";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/layout/ScrollToTop";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/recruiter" element={<PageWrapper><Recruiter /></PageWrapper>} />
        <Route path="/work/:slug" element={<PageWrapper><CaseStudyDetail /></PageWrapper>} />
        <Route path="/scaling-part-1" element={<PageWrapper><ScalingPart1 /></PageWrapper>} />
        <Route path="/scaling-part-2" element={<PageWrapper><ScalingPart2 /></PageWrapper>} />
        <Route path="/scaling-part-3" element={<PageWrapper><ScalingPart3 /></PageWrapper>} />
        <Route path="/scaling-part-4" element={<PageWrapper><ScalingPart4 /></PageWrapper>} />
        <Route path="/scaling-part-5" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<PageWrapper><NotFound /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;