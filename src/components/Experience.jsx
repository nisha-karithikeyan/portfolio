
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Infosys Springboard Intern 5.0 (Python Domain)",
      duration: "Oct 2024 - Dec 2024 · Remote",
      points: [
        "Built a Bank Cheque Extraction System using Python, Streamlit, PostgreSQL, and Gemini OCR.",
        "Designed modular architecture and workflows to streamline cheque data extraction.",
        "Completed KT sessions, milestone reviews, and final demo delivery.",
        "Cleared 4 milestones in 8 weeks with strong outputs and active participation.",
        "Implemented dashboards, data export, and automation improvements for speed and accuracy.",
      ],
    },
    {
      title: "UI/UX Designer | Digital Techwork",
      duration: "January 2025 - March 2025 . Onsite",
      points: [
        "Collaborated with developers to implement a responsive, mobile-first design.",
        "Enhanced UI/UX consistency across web and mobile platforms.",
        "Improved mobile engagement by optimizing layouts and interactions.",
        "Contributed to delivering a seamless, user-friendly product experience.",
        "Utilized React, CSS, and modern design practices to streamline development.",
        
      ],
    },
    {
      title: "Software Developer Intern | Paragon Dynamics",
      duration: " June 2024 - August 2024 · Onsite",
      points: [
        "Designed 15+ responsive UI screens for Talent Check and Freight apps using HTML, CSS, Bootstrap, Tailwind, and JS.",
        "Integrated frontend with Django REST APIs, reducing load time by 25% and ensuring smooth data flow.",
        "Executed 50+ test cases (UAT & functional), fixing key bugs and enhancing system reliability.",
        "Optimized reusable components and UI elements, improving development efficiency by 20%.",
        "Collaborated with cross-functional teams (backend & QA) to streamline feature delivery and maintain consistency",
        "Live link : https://www.talentchek.com/", 
      ],
    },
    {
      title: "Fullsatck Developer Intern | Mentorfox ",
      duration: " February 2024 - May 2024 · Onsite",
      points: [
        "Built scalable Django backend for websites, ensuring secure and modular architecture.",
        "Developed RESTful APIs and optimized PostgreSQL queries, improving data handling efficiency by 30%.",
        "Developed front-end components using HTML, CSS, and JavaScript.",
        "Enhanced UI/UX with responsive and user-friendly design elements.",
        "Customised my application and ran automated tests to ensure it rendered properly.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-12 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
         {/* Section Title */}
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-2"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Experience
    </motion.h2>

    
    <motion.p
      className="text-center text-gray-600 text-base font-medium tracking-wide mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      A journey through my internships, contributions, and technical growth.
    </motion.p>


        <motion.div
          className="relative border-l-4 border-purple-600 pl-6 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Dot */}
              <motion.div
                className="absolute -left-[10px] top-2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />

              
              <motion.div
                className="bg-white rounded-2xl shadow-md p-6 cursor-default"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(128, 90, 213, 0.3)", 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                {exp.org && <p className="text-sm text-gray-500">{exp.org}</p>}
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                  {exp.points.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
