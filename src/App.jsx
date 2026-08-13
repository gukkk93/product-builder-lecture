import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Result from './pages/Result';
import Partnership from './pages/Partnership';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/result" element={<Result />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/guide" element={<ComingSoon />} />
        <Route path="/idol-match" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
