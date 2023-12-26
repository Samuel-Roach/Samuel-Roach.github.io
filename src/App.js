import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div class="bg-monokai-black w-full h-full flex overflow-y-scroll">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
