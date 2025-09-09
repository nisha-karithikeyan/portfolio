
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
       
        <div className="mb-2 md:mb-0">
          Designed & Developed by <span className="font-semibold text-purple-400">Nisha K</span>
        </div>

        <div className="mb-2 md:mb-0 text-center">
          © {new Date().getFullYear()} All rights reserved
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/nisha-karithikeyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nisha-karthikeyan-88655a281/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
