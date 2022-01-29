import './App.css';
import Home from './Home.js';
import Skills from './Skills.js'
import Contact from './Contact';
import Portfolio from './Portfolio';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="bg-monokai-black w-full h-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
