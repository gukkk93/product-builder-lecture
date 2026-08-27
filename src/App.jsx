import { Routes, Route, Navigate } from 'react-router-dom';
import { PremiumProvider } from './context/PremiumContext';
import { CreditsProvider } from './context/CreditsContext';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Result from './pages/Result';
import Saju from './pages/Saju';
import Compatibility from './pages/Compatibility';
import Romance from './pages/Romance';
import IdolMatch from './pages/IdolMatch';
import DramaMatch from './pages/DramaMatch';
import Credits from './pages/Credits';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <PremiumProvider>
      <CreditsProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/result" element={<Result />} />
            <Route path="/saju" element={<Saju />} />
            <Route path="/compatibility" element={<Compatibility />} />
            <Route path="/romance" element={<Romance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partnership" element={<Navigate to="/contact" replace />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/idol-match" element={<IdolMatch />} />
            <Route path="/drama-match" element={<DramaMatch />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/about" element={<ComingSoon />} />
            <Route path="*" element={<ComingSoon />} />
          </Route>
        </Routes>
      </CreditsProvider>
    </PremiumProvider>
  );
}
