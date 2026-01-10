import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontEndSkills = ["Tailwind", "React"]
    const backEndSkills = ["Nodejs"]

    return (
        <section
            id="about"
            className="min-h-screen flex justify-center items-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {" "}
                    About Me
                </h2>
                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm IT professional with over 3 years of experience in providing technical support, managing ICT infrastructure, and ensuring system availability. Skilled in web development, incident management, user support, and system monitoring, with a strong background in digital systems administration and access management. Proven ability to develop websites and resolve technical issues while maintaining high service levels. Adept at collaborating with cross functional teams to deliver seamless IT solutions. 
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4 font-bold">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                { frontEndSkills.map((tech,key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                )) }
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl mb-4 font-bold">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                { backEndSkills.map((tech,key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                )) }
                            </div>
                        </div>                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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

                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}