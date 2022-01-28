import './App.css';
import Home from './Home.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="bg-[#2D2A2E] w-full h-full flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" />
        <Route path="contact" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
