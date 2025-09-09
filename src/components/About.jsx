import { Code, Wrench, Layers } from "lucide-react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white text-black px-6 py-12">
      <div className="max-w-5xl mx-auto">
        
        <motion.h2
  className="text-3xl font-bold mb-6 text-center text-purple-600"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  About Me
</motion.h2>
<motion.div
  className="mb-6 border-l-4 border-purple-300 bg-purple-50/40 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
    I’m <strong className="text-black">Nisha K</strong> — someone who didn't just stumble into tech, I grew with it. Starting with simple HTML pages, my curiosity quickly led me into React, Python automation, and creating projects that reflected both learning and problem-solving.
  </p>
</motion.div>

<motion.div
  className="mb-6 border-l-4 border-purple-300 bg-purple-50/40 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
    What excites me most isn’t just clean code it’s watching an idea come to life, pixel by pixel, line by line. Whether it's debugging a stubborn bug or perfecting a UI animation, I enjoy the thrill of solving and building.
  </p>
</motion.div>

<motion.div
  className="mb-6 border-l-4 border-purple-300 bg-purple-50/40 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
    I'm also a strong believer in community and collaboration. From open-source contributions to internships at Infosys Springboard, every step has helped me grow both as a developer and a teammate.
  </p>
</motion.div>

<motion.div
  className="mb-6 border-l-4 border-purple-300 bg-purple-50/40 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.6 }}
>
  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
    My learning mantra? <span className="italic text-purple-600">“Stay curious, build daily, and help others grow.”</span> That’s how I approach not just code, but life.
  </p>
</motion.div>


{/* What Drives Me */}
<motion.div
  className="mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.7 }}
>
  <p className="mb-1 text-purple-600 font-medium text-lg">🚀 What Drives Me:</p>
  <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800 text-base">
    <li>I thrive on turning ideas into products that are both beautiful and practical.</li>
    <li>Collaboration fuels me  I love sharing, learning, and growing with others.</li>
    <li>Efficiency is my obsession  I enjoy automating, optimizing, and simplifying.</li>
    <li>I love the process  because every bug, brainstorm, and breakthrough makes me better.</li>
  </ul>
</motion.div>



        {/* Education  */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row md:items-start md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-black">Meenakshi College Of Engineering</h4>
                <p className="text-sm text-gray-700">B.Tech in Information Technology (2021 – 2025) – Chennai, India</p>
                <p className="text-sm text-gray-600">CGPA: 8.5 / 10</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-black">Government Girls Higher Secondary School</h4>
                <p className="text-sm text-gray-700">Bio-Maths (2019 – 2021) – Chennai, India</p>
                <p className="text-sm text-gray-600">Percentage: 90%</p>
              </div>
            </div>
          </div>
          <motion.img
            src="/images/girl-code3.png"
            alt="Girl Learning"
            className="w-72 mt-12 md:mt-0 rounded-lg shadow-lg mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Skills */}
        <div className="mt-10">
          <SkillSection icon={<Code className="w-6 h-6 mr-2 text-purple-600" />} title="Languages">
            <TechRow items={[
              ["Python", "python/python-original"],
              ["JavaScript", "javascript/javascript-original"],
              ["HTML5", "html5/html5-original"],
              ["CSS3", "css3/css3-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Layers className="w-6 h-6 mr-2 text-purple-600" />} title="Frameworks & Libraries">
            <TechRow items={[
              ["React", "react/react-original"],
              ["Tailwind CSS", "/images/tailwind.png"],
              ["Express", "express/express-original"],
              ["Django", "django/django-plain"],
              ["Node.js", "nodejs/nodejs-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="Developer Tools & Platforms">
            <TechRow items={[
              ["Git", "git/git-original"],
              ["GitHub", "github/github-original"],
              ["VS Code", "vscode/vscode-original"],
              ["Vite", "vite/vite-original"]
              
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="Databases">
            <TechRow items={[
              ["MongoDB", "mongodb/mongodb-original"],
              ["PostgreSQL", "postgresql/postgresql-original"],
              ["MySQL", "mysql/mysql-original"]
             
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="CSS Tools & Libraries">
            <TechRow items={[
              ["SASS", "sass/sass-original"],
              ["Bootstrap", "bootstrap/bootstrap-original"]
            ]} />
          </SkillSection>

          <SkillSection icon={<Wrench className="w-6 h-6 mr-2 text-purple-600" />} title="DevOps & Deployment">
            <TechRow items={[
              ["Docker", "docker/docker-original"],
              ["CI/CD", "gitlab/gitlab-original"]
            ]} />
          </SkillSection>
        </div>

        {/* Competitive Coding */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-purple-600">Competitive Coding</h3>
          <div className="flex flex-col items-center gap-6">
            <a href="https://leetcode.com/u/nisha_karithikeyan/" target="_blank" rel="noopener noreferrer">
            </a>
            <a
              href="https://leetcode.com/u/nisha_karithikeyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded shadow"
            >
              View My Leetcode Profile
            </a>
          </div>
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-600"></h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username="Web-Dev-Learner"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              theme={{
                light: ['#f3e8ff', '#d8b4fe', '#c084fc', '#a855f7', '#7e22ce'],
                dark: ['#f3e8ff', '#d8b4fe', '#c084fc', '#a855f7', '#7e22ce']
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable layout for each skill category
function SkillSection({ icon, title, children }) {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold flex items-center mb-4 text-purple-600">
        {icon} {title}
      </h3>
      {children}
    </div>
  );
}

// Tech stack display
function TechRow({ items }) {
  return (
    <div className="flex flex-wrap gap-4 text-center">
      {items.map(([name, path]) => (
        <TechIcon
          key={name}
          name={name}
          src={path.startsWith("/") ? path : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`}
        />
      ))}
    </div>
  );
}

// Tech icon card
function TechIcon({ name, src }) {
  return (
    <motion.div
      className="flex flex-col items-center w-24 h-24 bg-white text-black shadow rounded-lg p-2"
      whileHover={{ scale: 1.05 }}
    >
      <img src={src} alt={name} className="w-10 h-10 object-contain" />
      <span className="text-xs mt-2 font-medium text-center">{name}</span>
    </motion.div>
  );
}
