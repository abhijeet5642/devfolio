// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';


export  const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 px-6 border-t ${
      darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Abhijeet yadav. All rights reserved.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com/abhijeet5642" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-2 rounded-lg ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            } transition-colors`}
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ay12/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-2 rounded-lg ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            } transition-colors`}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:aydv760@gmail.com" 
            className={`p-2 rounded-lg ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            } transition-colors`}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
