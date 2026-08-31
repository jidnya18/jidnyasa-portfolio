import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import UIUX from "./sections/UIUX";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f5f7fa]">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

     <UIUX />
       
        <Resume />

      
        <Contact />
      </main>
       <Footer />
    </div>
  );
}

export default App;