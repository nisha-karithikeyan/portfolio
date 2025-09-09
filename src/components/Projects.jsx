import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Bank Cheque Extraction System",
    description:
      "A system that extracts key cheque details from scanned PDFs/images using OCR, then organizes the data into dashboards with visual analytics and downloadable reports.",
    image: "/images/pic6.png",
    github: "https://github.com/Web-Dev-Learner/Bank_cheque_extraction",
    demo: "https://drive.google.com/file/d/1auC_fv5Wb1GInphJgwB6nwOCJ3nsFvEf/view",
  },
  {
    title: "Chatty - Real-time Chat App",
    description:
      "A modern messaging app supporting real-time chat, media sharing, user status, authentication, and profile customization, designed for smooth performance and enhanced user engagement.",
    image: "/images/pic5.png",
    github: "https://github.com/Web-Dev-Learner/ChatApp",
    demo: "https://drive.google.com/file/d/1mLYFmJIuQ_XvEWV-S7Zyquy2qYQPDGuc/view",
  },
  {
    title: "Joyful Mart - E Commerce App",
    description:
      "An online shopping web app with product browsing, detailed views, and a cart system, offering a smooth user experience with responsive design and real-time notifications.",
    image: "/images/pic1.png",
    github: "https://github.com/Web-Dev-Learner/buy_now",
    demo: "https://web-dev-learner.github.io/buy_now/",
  },
  {
    title: "Admin Dashboard",
    description:
      "An interactive admin panel with sections like sales, users, analytics, and product management, providing live insights, chart visualizations, and full settings control in a responsive interface.",
    image: "/images/pic3.png",
    github: "https://github.com/Web-Dev-Learner/admin_dashboard",
    demo: "https://admin-dashboard-teal-seven.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-100 text-gray-800">
      {/* Section Heading with animation */}
  <div className="text-center mb-10">
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-purple-700 mb-2"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Projects
    </motion.h2>

    <motion.p
      className="text-sm sm:text-base max-w-xl mx-auto text-gray-600 tracking-wide font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Here are a few of my recent works blending creativity, functionality, and performance.
    </motion.p>
    </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-purple-100 p-6 text-center w-full
            flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="bg-black rounded-lg overflow-hidden mb-5">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>

            {/* Project Title */}
            <h3 className="text-lg font-bold mb-3 text-gray-900">{proj.title}</h3>

            {/* Description */}
            <p className="text-sm mb-4 text-gray-700">{proj.description}</p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-auto flex-wrap">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition duration-200 text-white px-4 py-2 rounded text-sm"

              >
                <SiGithub size={16} />
                GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition duration-200 text-white px-4 py-2 rounded text-sm"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
