import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import About2 from "./Pages/about2";
import About3 from "./Pages/About3";
import Footer from "./Pages/Footer";
import ViewAll from "./Pages/ViewAll";
import Navbar from "./Pages/Navbar";

function App() {
  return (
      
       <Router>
            {/* <nav className="bg-[#c93f3f]">
            <Link to='/'>Hpme</Link>
            <Link to='/about'>About</Link>
            <Link to='/about2'>About2</Link>
            <Link to='/about3'>About3</Link>
           </nav>  */}
           <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view" element={<ViewAll />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/about3" element={<About3 />} />
        </Routes>
        <Footer/>
      </Router> 
  );
}

export default App;
