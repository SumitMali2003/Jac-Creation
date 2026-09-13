import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Framework from "./components/Framework";
import SelectedWork from "./components/SelectedWork";
import Projects from "./components/Projects";
import Statement from "./components/Statement";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <Philosophy />
          <Framework />
        </section>

        <section id="projects">
          <SelectedWork />
          <Projects />
        </section>

        <section id="gallery">
          <div className="gallery-section section">
            <div className="section-label">
              <span>05</span>
              <span>Gallery</span>
            </div>

            <div className="gallery-grid">
              <div className="gallery-item gallery-tall"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item gallery-wide"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item gallery-tall"></div>
            </div>
          </div>
        </section>

        <section id="contact">
          <Statement />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;