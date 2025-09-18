import styles from "./App.module.css";
import "./index.css";
import Navbar from "./components/NavbarSection/Navbar";
import {About} from "./components/AboutSection/About";
import {Hero} from "./components/HeroSection/Hero";
import { Skills } from "./components/SkillsSection/Skills";
import { Projects } from "./components/ProjectSection/Projects";
import {Education} from "./components/EducationSection/Education";
import { Contact } from "./components/ContactSection/Contact";
import {Toaster} from "react-hot-toast";
import Footer from "./components/FooterSection/Footer";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Toaster position = "bottom-center" reverseOrder = {false} />
        <Footer />
      </div>
    </>
  );
}

export default App;
