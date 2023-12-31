import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export const App = () => {
  return (
    <BrowserRouter basename="/portfolio/">
      <main className="app" id="home">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </BrowserRouter>
  );
};
