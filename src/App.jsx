import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <section id="home" className="pt-16">
            <Hero />
          </section>
          <section id="about" className="py-20">
            <About />
          </section>
          <section id="portfolio" className="py-20 bg-white">
            <Portfolio />
          </section>
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
