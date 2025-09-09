import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCodeBranch, FaStar } from "react-icons/fa"; // ✅ only once

import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  FileText,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Brand Name */}
      <h1 className="text-2xl font-bold text-purple-500">Nisha K</h1>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-lg font-medium items-center">
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <Home className="w-5 h-5" /> Home
        </Link>

        <Link
          to="/about"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <User className="w-5 h-5" /> About
        </Link>

        <Link
          to="/experience"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <Briefcase className="w-5 h-5" /> Experience
        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <FolderGit2 className="w-5 h-5" /> Projects
        </Link>



<a
  href="https://github.com/nisha-karithikeyan?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="flex space-x-2 bg-purple-800 text-white px-4 py-2 rounded-lg items-center shadow hover:bg-purple-700 transition"
  title="View GitHub Repo"
>
  <FaCodeBranch className="w-4 h-4" />
  <FaStar className="w-4 h-4" />
</a>



        
      </div>






      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden z-40 shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <Home className="w-5 h-5" /> Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <User className="w-5 h-5" /> About
          </Link>

          <Link
            to="/experience"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <Briefcase className="w-5 h-5" /> Experience
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 hover:text-purple-400"
          >
            <FolderGit2 className="w-5 h-5" /> Projects
          </Link>


<a
  href="https://github.com/Web-Dev-Learner/my-portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="flex space-x-2 bg-purple-800 text-white px-4 py-2 rounded-lg items-center shadow hover:bg-purple-700 transition"
  title="View GitHub Repo"
>
  <FaCodeBranch className="w-4 h-4" />
  <FaStar className="w-4 h-4" />
</a>

          
        </div>
      )}
    </nav>
  );
}
