import { RevealOnScroll } from "../RevealOnScroll"
import profileImage from "/profile.jpg" // Fixed import

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <RevealOnScroll>
                <div className="w-[90%] max-w-7xl my-0 mx-auto">
                    <div className="flex items-center gap-12 max-w-7xl z-10">    
                        <div className="relative w-80 h-80 rounded-full overflow-hidden border-[5px] border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <img src={profileImage} alt="msafiri image" className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-105" />
                            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-blue-500/30 to-red-500/30 opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"></div>
                        </div>
                        <div className="text-center z-10 px-4">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-normal">
                                MSAFIRI ABEID
                            </h1>
                            <h2 className="text-2xl md:text-4xl mb-4 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                                IT Professional & Full-stack Web Developer
                            </h2>

                            <p className="text-gray-400 mb-8 text-lg max-w-[66.666%] mx-auto">
                                With over 3 years of experience in providing technical support, managing ICT infrastructure, and ensuring system availability. Skilled in web development, incident management, and system monitoring
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                    View My Work
                                </a>
                                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                                    Get In Touch
                                </a>                    
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}