//css
import './App.css';

//packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Navbar from './components/navbar';
import Footer from './components/footer.';

//Pages
import Home from './pages/home';
import Projects from './pages/projects';
import Bio from './pages/bio';
import Contact from './pages/contact';
import Blog from './pages/blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="innerBody">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
