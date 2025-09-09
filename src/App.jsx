import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";


import Footer from "./components/Footer"; 


function App() {
  return (
    <Router>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        
        <main className="flex-grow pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
           
            
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
