import { RevealOnScroll } from "../RevealOnScroll"
import { ExternalLink } from "lucide-react"
import mangiSafari from "../../assets/mangi-safari-snap.png"
import cgaipSnap from "../../assets/cgaip-snapshot.png"
import laptopRecommend from "../../assets/laptop-recommender.png"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 bg-[#3498db] bg-clip-text text-transparent">
                    {" "}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    <div className="bg-white rounded-xl border-white/10 overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <img src={laptopRecommend} className="w-full h-auto" alt="mangi safari website snapshot" />
                        <div className="p-6">
                            <h3 className="text-[#2c3e50] mb-2 font-bold">ELECTRONICS RECOMMENDATION SYSTEM</h3>
                            <p className="text-[#666] mb-4">Aims at helping users choose the best laptop in the market based on their requirements.</p>
                    
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["html", "css", "JS","React", "Python", "Django", "ML", ].map((tech,key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"                                
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://electronics-recommendation.vercel.app/" target="_blank" rel="noopener noreferrer"
                                    className="text-[#2c3e50] hover:text-[#3498db] transition-colors flex mt-4 font-bold"
                                >
                                    <ExternalLink /> <span className="ml-1">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border-white/10 overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <img src={mangiSafari} className="w-full h-auto" alt="mangi safari website snapshot" />
                        <div className="p-6">
                            <h3 className="text-[#2c3e50] mb-2 font-bold">TRAVEL WITH MANGI SAFARIS</h3>
                            <p className="text-[#666] mb-4">A responsive website for a travel company, featuring cross-browser compatibility and optimal user experience.</p>
                    
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["html", "css", "JS"].map((tech,key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"                                
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://www.travelwithmangisafaris.com/" target="_blank" rel="noopener noreferrer"
                                    className="text-[#2c3e50] hover:text-[#3498db] transition-colors flex mt-4 font-bold"
                                >
                                    <ExternalLink /> <span className="ml-1">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border-white/10 overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <img src={cgaipSnap} className="w-full h-auto" alt="mangi safari website snapshot" />
                        <div className="p-6">
                            <h3 className="text-[#2c3e50] mb-2 font-bold">CGAIP.org</h3>
                            <p className="text-[#666] mb-4">A professional organizational website designed to improve online presence and information dissemination.</p>
                    
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["html", "css", "JS", "PHP"].map((tech,key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"                                
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://cgaip.org/" target="_blank" rel="noopener noreferrer"
                                    className="text-[#2c3e50] hover:text-[#3498db] transition-colors flex mt-4 font-bold"
                                >
                                    <ExternalLink /> <span className="ml-1">View Project</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>                
            </div>
            </RevealOnScroll>
        </section>
    );
};