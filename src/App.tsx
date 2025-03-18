import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import ChatBot from './components/ChatBot';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:john@example.com" className="text-gray-500 hover:text-gray-700">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bio */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <User className="w-6 h-6" />
                    About Me
                  </h2>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with 5 years of experience building web applications.
                I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find
                me contributing to open-source projects or writing technical blog posts.
              </p>
            </section>

            <Portfolio />
          </div>

          {/* Right Column - Chat Bot */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ChatBot />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;