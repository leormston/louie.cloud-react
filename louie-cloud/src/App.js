//css
import './App.css';

//packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme } from '@mui/material/styles';

//Components
import Navbar from './components/navbar';
import Footer from './components/footer.';

//Pages
import Home from './pages/home';
import Projects from './pages/projects';
import Bio from './pages/bio';
import Contact from './pages/contact';
import Blog from './pages/blog';
import BlogExpand from './pages/blogExpand';
const darkTheme = createTheme({ palette: { mode: 'dark' } });



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="innerBody">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={darkTheme}/>} />
            <Route path="/projects" element={<Projects theme={darkTheme}/>} />
            <Route path="/bio" element={<Bio theme={darkTheme}/>} />
            <Route path="/contact" element={<Contact theme={darkTheme}/>} />
            <Route path="/blog" element={<Blog theme={darkTheme}/>} />
            <Route path="*" element={<Home theme={darkTheme}/>} />
            <Route path="/blog/:blogId" element={<BlogExpand theme={darkTheme}/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
