// src/components/Experience.jsx
import React from 'react';
import { Calendar } from 'lucide-react';

export const Experience = ({ darkMode }) => {
  const experiences = [
   
   
    {
      role: 'MERN Developer Intern',
      company: 'Infosys SpringBoard',
      period: 'Sep 2025 - Nov 2021',
      description: 'MERN-stack web application for managing campus events, featuring event creation, registration, and real-time updates. Integrated payment gateway for ticket purchases.',
      skills: ['React', 'Node', 'Tailwind', 'MongoDB']
    },
     {
      role: 'MERN Stack Developer',
      company: 'StartUp Inc',
      period: 'Jun 2021 - Dec 2022',
      description: 'Built scalable web applications, optimized database queries, and improved application performance by 40%.',
      skills: ['Vue.js', 'Express', 'MongoDB', 'Redis']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work Experience
        </h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-xl hover:shadow-2xl transition-all`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                </div>
                <div className={`flex items-center gap-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                } mt-2 md:mt-0`}>
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

