import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto py-8 px-12 bg-[#2c3e50] border-t border-white/10">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a
              href="https://msafiri-abeid.github.io/portifolio/"
              className="font-mono text-xl font-bold text-white"
            >
              {" "}
              msafiri<span className="text-[#3498db]">.dev</span>{" "}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/msafiri-abeid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-1 group"
            >
              <Github
                size={24}
                className="group-hover:110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/msafiri-abeid/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#3498db] transition-colors flex flex-col items-center gap-1 group"
            >
              <Linkedin
                size={24}
                className="group-hover:110 transition-transform"
              />
            </a>
          </div>
          <p className="text-gray-500 mt-2 max-w-xs">
            &copy;{currentYear} All Rights Reserved
          </p>
        </div>

    </footer>
  );
};

export default Footer;
