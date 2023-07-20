//css
import './App.css';

//packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
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
const lightTheme = createTheme({ palette: { mode: 'light' } });

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark");
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme);
  const [cssTheme, setCssTheme] = useState(localStorage.getItem("theme"));
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} cssTheme={cssTheme} setCssTheme={setCssTheme}/>
      <div className={"innerBody "+  cssTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={theme} cssTheme={cssTheme}/>} />
            <Route path="/projects" element={<Projects theme={theme}/>} />
            <Route path="/bio" element={<Bio theme={theme}/>} />
            <Route path="/contact" element={<Contact theme={theme}/>} />
            <Route path="/blog" element={<Blog theme={theme}/>} />
            <Route path="*" element={<Home theme={theme}/>} />
            <Route path="/blog/:blogId" element={<BlogExpand theme={theme}/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
