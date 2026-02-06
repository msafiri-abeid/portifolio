
export const Experience = () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });    

    return (
        <section id="experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="text-center text-3xl font-bold mb-4 bg-[#3498db] bg-clip-text text-transparent">
                        {" "}
                        Professional Journey
                    </h2>
                    <p className="text-center text-gray-300 mb-6">
                        A timeline of my education and professional experience
                    </p>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">2021 - 2024</div>
                            <h3>Bachelor of Science</h3>
                            <h4>Mzumbe University</h4>
                            <p>Information Technology and Systems</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">Aug 2022 - Oct 2022</div>
                            <h3>Regional Business Application Officer</h3>
                            <h4>TANESCO, Singida</h4>
                            <p>Oversaw ICT operations at regional level, ensuring information security and system availability. Provided technical support and managed access control tasks.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">July 2023 - Oct 2023</div>
                            <h3>ICT Officer II</h3>
                            <h4>TANROADS, Singida</h4>
                            <p>Provided technical guidance and support to staff, managed organizational ICT infrastructure, and collaborated with teams to implement system updates.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">2023 - Present</div>
                            <h3>Freelance Web Developer</h3>
                            <h4>Self-Employed</h4>
                            <p>Designed and deployed professional websites using HTML, CSS, and JavaScript for various clients.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">June 2025 - Present</div>
                            <h3>Project Control Manager</h3>
                            <h4>Power and Network Back-Up Limited</h4>
                            <p>Administer and maintain project management systems, configure workflows, and monitor project schedules and budgets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}