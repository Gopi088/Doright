import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NGOs from './pages/NGOs';
import Campaigns from './pages/Campaigns';
import Blog from './pages/Blog';
import UnderConstruction from './pages/UnderConstruction';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<UnderConstruction />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}
