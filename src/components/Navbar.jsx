import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <img src="/Jac_logo.jpeg" alt="Jac Creation" />
      </a>

      <nav className={`nav-link ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About Us
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact Us
        </a>
      </nav>

      <button
        className={`menu-open ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;