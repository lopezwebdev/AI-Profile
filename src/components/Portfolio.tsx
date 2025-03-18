import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "A revolutionary web application",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "Mobile-first responsive design",
    tech: ["React Native", "Firebase"],
    link: "#"
  },
  {
    title: "Project 3",
    description: "AI-powered analytics platform",
    tech: ["Python", "TensorFlow", "AWS"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        Portfolio
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              <Code className="w-4 h-4" />
              View Project
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6" />
          Education
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold">Computer Science, BSc</h3>
          <p className="text-gray-600">University of Technology</p>
          <p className="text-gray-500">2018 - 2022</p>
        </div>
      </div>
    </div>
  );
}