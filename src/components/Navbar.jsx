import { useEffect } from "react";
import { Github } from "lucide-react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="https://msafiri-abeid.github.io/portifolio/"
            className="font-mono text-xl font-bold text-white"
          >
            {" "}
            msafiri<span className="text-[#3498db]">.dev</span>{" "}
          </a>
          <div
            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${menuOpen ? "hidden" : ""}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
            <a href="https://github.com/msafiri-abeid" target="_blank" rel="noopener noreferrer">
            <Github
              size={24}
              className="text-white hover:text-(--secondary) transition-colors"
            />
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
