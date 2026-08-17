import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Result from './pages/Result';
import Saju from './pages/Saju';
import Compatibility from './pages/Compatibility';
import Romance from './pages/Romance';
import IdolMatch from './pages/IdolMatch';
import DramaMatch from './pages/DramaMatch';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
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
        <Route path="/idol-match" element={<IdolMatch />} />
        <Route path="/drama-match" element={<DramaMatch />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
