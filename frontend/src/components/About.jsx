// src/components/About.jsx
import React from 'react';

export const About = ({ darkMode }) => {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'Node.js / Express', level: 90 },
    { name: 'TypeScript', level: 30 },
    { name: 'MongoDB ', level: 85 },
    { name: 'AWS / Docker', level: 10 },
   
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
             Hi, I'm Abhijeet Yadav — a final-year B.Tech (IT) student passionate about building impactful web applications and solving complex problems through code.

            With hands-on experience in the MERN stack (MongoDB, Express.js, React.js, Node.js) and a strong foundation in Java for Data Structures & Algorithms, I thrive at the intersection of scalable software development and creative problem-solving.

  
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
               Highlights:
          - Completed the GFG 160 Days Coding Challenge, sharpening my algorithmic and coding skills.
         - Participated in the Smart India Hackathon, collaborating on innovative tech solutions.
         - Certified in Deloitte Technology Simulation and AI for Everyone (Coursera).

Currently, I'm exploring scalable architectures and eager to contribute to forward-thinking teams as a Software Developer. If you're looking for a driven developer or want to collaborate on tech innovations, let's connect!
            </p>
            <div className="flex gap-4 pt-4">
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-xl flex-1 text-center`}>
                <div className="text-3xl font-bold text-blue-500">4+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Projects Completed
                </div>
              </div>
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-xl flex-1 text-center`}>
                <div className="text-3xl font-bold text-purple-500">less than 1</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {skill.name}
                  </span>
                  <span className="text-blue-500">{skill.level}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

