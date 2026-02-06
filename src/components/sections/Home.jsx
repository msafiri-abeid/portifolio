import { RevealOnScroll } from "../RevealOnScroll";
import profileImage from "/profile.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-[linear-gradient(135deg,#2c3e50_0%,#1a252f_100%)]"
    >
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-no-repeat bg-cover">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
          <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" className="text-blue-500" />
        </svg>
      </div>

      <RevealOnScroll>
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
            
            {/* Profile Image Container */}
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={profileImage} 
                  alt="Msafiri Abeid" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute -inset-2 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite] pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                MSAFIRI ABEID
              </h1>
              
              <h2 className="text-xl md:text-3xl font-medium mb-6 bg-[#3498db] bg-clip-text text-transparent">
                IT Professional & Full-stack Web Developer
              </h2>

              <p className="text-gray-200 mb-10 text-lg leading-relaxed">
                With over 3 years of experience in providing technical support, 
                managing ICT infrastructure, and ensuring system availability. 
                Skilled in web development, incident management, and system monitoring.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="#projects" 
                  className="bg-[#3498db] hover:bg-[#2980b9] text-white py-3 px-8 rounded-lg font-semibold transition-all hover:-translate-y-1"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="border border-[#3498db] text-[#3498db] py-3 px-8 rounded-lg font-semibold transition-all hover:bg-blue-500/10 hover:-translate-y-1"
                >
                  Get In Touch
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};