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

var localTheme = ""
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "dark");
  localTheme = "dark"
}
else {
  localTheme = localStorage.getItem("theme");
}

function App() {

  const [cssTheme, setCssTheme] = useState(localTheme);


  return (
    <div className="App">
      <ThemeProvider theme={cssTheme === "light" ? lightTheme : darkTheme}>
      <Navbar theme={cssTheme === "light" ? lightTheme : darkTheme} cssTheme={cssTheme} setCssTheme={setCssTheme}/>
      <div className={"innerBody "+  cssTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={cssTheme === "light" ? lightTheme : darkTheme} cssTheme={cssTheme}/>} />
            <Route path="/projects" element={<Projects theme={cssTheme === "light" ? lightTheme : darkTheme}/>} />
            <Route path="/bio" element={<Bio theme={cssTheme === "light" ? lightTheme : darkTheme}/>} />
            <Route path="/contact" element={<Contact theme={cssTheme === "light" ? lightTheme : darkTheme}/>} />
            <Route path="/blog" element={<Blog theme={cssTheme === "light" ? lightTheme : darkTheme}/>} />
            <Route path="*" element={<Home theme={cssTheme === "light" ? lightTheme : darkTheme}/>} />
            <Route path="/blog/:blogId" element={<BlogExpand theme={cssTheme === "light" ? lightTheme : darkTheme}/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
