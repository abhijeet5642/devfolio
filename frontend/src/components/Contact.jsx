// src/components/Contact.jsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
     const response = await fetch('https://devfolio-o8xs.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section id="contact" className={`py-20 px-6 ${
      darkMode ? 'bg-gray-800/30' : 'bg-gray-100'
    }`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In Touch
        </h2>
        
        <div className={`p-8 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-xl space-y-6`}>
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
              } border-2 focus:border-blue-500 outline-none transition-colors`}
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
              } border-2 focus:border-blue-500 outline-none transition-colors`}
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="5"
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
              } border-2 focus:border-blue-500 outline-none transition-colors resize-none`}
              placeholder="Your message..."
            />
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={formStatus === 'sending'}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send size={20} />
            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {formStatus === 'success' && (
            <div className="p-4 bg-green-500/20 text-green-500 rounded-lg text-center">
              Message sent successfully!
            </div>
          )}
          
          {formStatus === 'error' && (
            <div className="p-4 bg-red-500/20 text-red-500 rounded-lg text-center">
              Failed to send message. Please try again.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

