import React from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Portfolio", description: "This is the first project I build from scratch.", github: "https://github.com/j22038317/portfolio" },
  { id: 2, title: "Project 2", description: "This is a description about this project." },
];

const Project = () => {
  return (
    <main id="project" className="min-h-auto flex flex-col items-center justify-start bg-light-mode dark:bg-dark-mode text-dark-mode dark:text-light-mode">
      <h1 className="text-4xl font-bold mb-10">Project</h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="w-[300px] h-[200px] bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-between text-black"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm text-justify">{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-950 transition duration-300">GitHub</button>
            </a>
            </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Project;
