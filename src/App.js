import "./App.css";
import About from "./Pages/About";
import About3 from "./Pages/About3";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import ViewAll from "./Pages/ViewAll";
import About2 from "./Pages/about2";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="   w-full ">
      <Router>
        {/* <nav className="bg-[#c93f3f]">
            <Link to='/'>Hpme</Link>
            <Link to='/about'>About</Link>
            <Link to='/about2'>About2</Link>
            <Link to='/about3'>About3</Link>
           </nav>   */}
        
        <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view" element={<ViewAll />} />
          {/* <Route path="/about2" element={<About2 />} />
          <Route path="/about3" element={<About3 />} /> */}
        </Routes>
        </div>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
