import AnimatedCursor from "react-animated-cursor";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Banner from "./pages/Banner";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import DB from "./pages/DB";
import DetailsComputerx from "./pages/DetailsComputerx";
import DJ from "./pages/DJ";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Banner />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about-me" element={<About />}></Route>
          <Route path="/about-me" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/computerx" element={<DetailsComputerx />}></Route>
          <Route path="/bbook" element={<DB />}></Route>
          <Route path="/jackson-photography" element={<DJ />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        outerAlpha={0.2}
        color="87, 87, 87"
      />
    </div>
  );
}

export default App;
