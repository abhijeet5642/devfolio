// src/components/Navigation.jsx
import React from 'react';
import { Moon, Sun, Terminal } from 'lucide-react';

export const Navigation = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  return (
    <nav className={`fixed w-full z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Terminal className="text-blue-500" size={0} />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Profile
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['hero', 'about', 'projects', 'experience', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors ${
                activeSection === section 
                  ? 'text-blue-500' 
                  : darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {section === 'hero' ? 'Home' : section}
            </button>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

