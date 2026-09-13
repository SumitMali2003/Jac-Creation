function SelectedWork() {
    const projects = [
        {
            number: "01",
            title: "Modern Residence",
            category: "Residential,"
        },
        {
            number: "02",
            title: "Solara Pavilion",
            category: "Cultural",
        },
        {
            number: "03",
            title: "Monsoon House",
            category: "Hospitality",
        },
    ];

    return (
        <section className="selected-work section">
            <div className="section-label">
                <span>03</span>
                <span>Selected Work</span>
            </div>

            <div className="selected-heading">
                <h2>
                    A portfolio shaped by
                    <br />
                    <em>material, climate, and craft.</em>
                </h2>
            </div>

            <div className="work-grid">
                {projects.map((project) => (
                    <article className="work-card" key={project.number}>
                        <div className={`work-image image-${project.number}`}>
                            <span>{project.category}</span>
                        </div>

                        <div className="work-info">
                            <span>{project.number}</span>

                            <div>
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>

                            <span className="arrow">↗</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
  );
}

export default SelectedWork;