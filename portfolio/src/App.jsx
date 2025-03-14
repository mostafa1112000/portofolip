import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Service from "./components/services/Service";
import Skils from "./components/skils/Skils";
function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skils />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
