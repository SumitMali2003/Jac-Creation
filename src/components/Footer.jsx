function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/Jac_logo.jpeg" alt="Jac Creation" />

          <p>
            Architecture for living,
            <br />
            gathering and belonging.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>Explore</span>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div>
            <span>Studio</span>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div>
            <span>Connect</span>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Jac Creation</span>
        <span>Architecture as a quiet act.</span>
      </div>
    </footer>
  );
}

export default Footer;