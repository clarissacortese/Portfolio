import Cursor from './components/cursor/cursor';
import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/progetti/projects';
import Contatti from './components/contatti/contacts';
import Footer from './components/footer/footer';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contatti />
      <Footer />
      <Cursor />
    </div>
  );
}