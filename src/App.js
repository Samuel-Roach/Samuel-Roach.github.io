import './App.css';
import Home from './Home';
import Skills from './Skills'
import Contact from './Contact';
import Portfolio from './Portfolio';
import Blog from './Blog';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="bg-monokai-black w-full h-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
