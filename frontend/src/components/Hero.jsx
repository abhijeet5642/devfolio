// src/components/Hero.jsx
import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = ({ darkMode, scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl w-full">
        <div className="text-center space-y-6">
          <div className="inline-block">
            {/* <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
            }`}>
            
            </span> */}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ABHIJEET YADAV
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-gray-400">
            MERN Stack Developer
          </p>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
     Final-year B.Tech (IT) student skilled in the MERN stack and Java (DSA), passionate about building impactful and scalable web applications. Completed the GFG 160 Days Coding Challenge, participated in the Smart India Hackathon, and earned certifications in Deloitte Technology Simulation and AI for Everyone (Coursera). Actively exploring scalable architectures and seeking opportunities as a Software Developer to contribute to innovative projects.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Hire Me
            </button>
            <a
  href="https://drive.google.com/file/d/1gsJE8BFO6GSD6Bz-9kdSstx3CFE9ZFfq/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className={`px-8 py-3 rounded-lg font-medium border-2 ${
    darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
  } transition-all flex items-center gap-2`}
>
  <Download size={20} />
  View Resume
</a>

          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/abhijeet5642" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-3 rounded-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ay12/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-3 rounded-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:aydv760@gmail.com" 
              className={`p-3 rounded-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
