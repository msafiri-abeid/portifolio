import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const programmingLanguages = ["JavaScript", "SQL"]
    const frontEnd = ["HTML5", "CSS3", "React"]
    const backEnd = ["Node.js", "Express.js"]
    const databases = ["MySQL", "MongoDB"]
    const developerTools = ["Git", "GitHub", "VS Code", "Postman"]
    const systemAdministration = ["User Access Management", "System Monitoring", "Incident Resolution", "Monitoring Tools"]
    const interPersonalSkills = ["Problem-Solving & Analytical Thinking", "Effective Communication", "Collaboration", "Adaptability & Continuous Learning"]

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
    document.querySelectorAll('.stat').forEach(stat => {
        observer.observe(stat);
    });

    return (
        <section
            id="about"
            className="min-h-screen flex justify-center items-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 bg-[#3498db] bg-clip-text text-transparent">
                    {" "}
                    About Me
                </h2>
                <div className="rounded-xl p-8 text-center border border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I am a dedicated IT professional with over 3 years of experience in providing technical support, managing ICT infrastructure, and ensuring system availability. My expertise spans across web development, incident management, user support, and system monitoring.
                    </p>
                    <p className="text-gray-300 mb-6">
                        I have a strong background in digital systems administration and access management, with proven ability to develop websites and resolve technical issues while maintaining high service levels.
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4 font-bold">Programming Languages</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                { programmingLanguages.map((lang,key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-[#3498db] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {lang}
                                    </span>
                                )) }
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 font-bold">Frontend</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    { frontEnd.map((tech,key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-[#3498db] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    )) }
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 font-bold">Backend</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    { backEnd.map((tech,key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-[#3498db] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    )) }
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4 font-bold">Database</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                { databases.map((tech,key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-[#3498db] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                )) }
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4 font-bold">Version Control & Tools</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                { developerTools.map((tool,key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-[#3498db] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tool}
                                    </span>
                                )) }
                            </div>
                        </div>   

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4 font-bold">Systems Administration</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                { systemAdministration.map((skill,key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-[#3498db] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                )) }
                            </div>
                        </div> 

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4 font-bold">Interpersonal Skills</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                { interPersonalSkills.map((skill,key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-[#3498db] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                )) }
                            </div>
                        </div> 

                    </div>

                    <div className="flex justify-center gap-10 my-10">
                        <div className="stat">
                            <h4>3+</h4>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat">
                            <h4>10+</h4>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat">
                            <h4>100%</h4>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 font-bold">🏫 Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>Bachelor of Science in Information Technology and Systems</strong> - Mzumbe University   (2021–2024) 
                                    </li>
                                    <li>Relevant course work: System administartion, Data Structures, Web development, Project Management</li>
                                </ul>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 font-bold">💼 Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4>ICT Officer II at TANROADS, Singida, Tanzania from July 2023 to Oct 2023 </h4>
                                        <p>Provided technical guidance and support to staff, resolving hardware, software, and communication issues promptly.</p>
                                    </div>
                                </div>
                        </div>  

                    </div> */}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}