function Hero() {
    return(
        <section className="hero">
            <div className="hero-image"></div>

            <div className="hero-overlay"></div>

            <div className="hero-content">
                <p className="eyebrow">JAC CREATION · ARCHITECTURE STUDIO</p>

                <h1>
                    Welcome Home.
                    <br />
                    <em>To The Extraordinary.</em>
                </h1>

                <div className="hero-bottom">
                    <span>Residential · Hospitality · Public Space</span>

                    <a href="#about" className="scroll-link">
                        Scroll for more
                        <span></span>
                    </a>
                </div>
            </div>
        </section>
    );
}   

export default Hero;