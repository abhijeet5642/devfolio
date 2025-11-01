// src/components/Projects.jsx
import React from 'react';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'

import { Github, ExternalLink } from 'lucide-react';

export  const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Campus Event Hub',
      description: 'MERN-stack web application for managing campus events, featuring event creation, registration, and real-time updates. Integrated payment gateway for ticket purchases.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: image1,
      github: 'https://github.com/abhijeet5642/campusEventHub.git',
      demo: 'https://campuseventhub-1.onrender.com'
    },
    {
      title: 'PixieNest BuildWell',
      description: 'Developed a full-stack real estate platform featuring secure user authentication and role-based dashboards for users and admins. Built RESTful APIs with Node.js and MongoDB Atlas for data management, and implemented JWT-based authentication for secure login and protected routes. The project demonstrates full-stack skills, including backend security, API integration, and frontend deployment using React.',
      tech: ['React', 'Express', 'Socket.io', 'OpenAI'],
      image: image2,
      github: 'https://github.com/abhijeet5642/final_pnbw.git',
      demo: 'https://pixienestbuildwell.com'
    },
   
  ];

  return (
    <section id="projects" className={`py-20 px-6 ${
      darkMode ? 'bg-gray-800/30' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-purple-500 hover:text-purple-400"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

