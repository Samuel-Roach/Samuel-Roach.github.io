import './App.css';
import Home from './Home.js';
import Skills from './Skills.js'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="bg-monokai-black w-full h-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
