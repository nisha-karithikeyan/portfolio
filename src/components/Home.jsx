import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Code, Brain, Rocket, Settings, GraduationCap } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Home() {
  return (
    <section id="home" className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-left mt-10 md:mt-0 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Hey there, I'm <span className="text-purple-600">Nisha K</span>
          </h1>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <div className="flex items-start gap-3">
              <Code className="text-purple-600 mt-1 w-6 h-6" />
              <p>
                A passionate <strong>Software Developer</strong> who loves building intuitive UIs with React and Tailwind CSS.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Brain className="text-purple-600 mt-1 w-6 h-6" />
              <p>
                Solving problems is my thing – I've tackled over <strong>250+ coding challenges</strong> on LeetCode & GFG!
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Rocket className="text-purple-600 mt-1 w-6 h-6" />
              <p>
                Interned at <strong>Infosys Springboard</strong> & contributed to open-source through <strong>GSSoC 2024</strong>.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Settings className="text-purple-600 mt-1 w-6 h-6" />
              <p>
                Skilled in <strong>Python Automation</strong>, MERN stack, and beginner DevOps tools like Docker & GitHub Actions.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="text-purple-600 mt-1 w-6 h-6" />
              <p>
                <strong>B.Tech IT student (2021–2025)</strong>, open to internships and full-time roles!
              </p>
            </div>
          </div>

          <div className="relative mt-8 max-w-2xl mx-auto bg-purple-50 border-l-4 border-purple-500 p-6 rounded-xl shadow">
            <p className="text-sm italic text-purple-800 font-medium leading-relaxed text-center">
              “A good interface is like a warm welcome. I build experiences that feel as good as they function.”
            </p>
            <span className="absolute -top-3 left-4 text-purple-400 text-3xl font-serif">“</span>
          </div>

          
        </motion.div>

        {/* Right Content – Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src="/images/girl-code.jpg"
            alt="Reading illustration"
            className="w-[384px] md:w-[420px] h-auto rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-10 w-3/4 mx-auto" />

      {/* Contact Section */}
      <motion.div
        id="contact"
        className="py-16 px-6 text-center text-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-2">FIND ME ON</h2>
        <p className="text-lg mb-8">
          Feel free to <span className="text-purple-600 font-semibold">connect</span> with me
        </p>

        <div className="flex justify-center gap-6 mb-6">
          {/* GitHub */}
          <a
            href="https://github.com/nisha-karithikeyan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-purple-100 transition"
          >
            <SiGithub className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nisha-karthikeyan-88655a281/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-purple-100 transition"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:nishakarithikeyan@gmail.com"
            className="bg-white text-red-500 w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:bg-purple-100 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-600 flex justify-center items-center gap-1">
          <MapPin className="w-4 h-4 text-purple-500" />
          Chennai, India
        </p>
      </motion.div>
    </section>
  );
}
