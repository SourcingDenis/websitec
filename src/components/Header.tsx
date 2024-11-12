import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl ring-4 ring-indigo-500/20">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=387&h=387"
              alt="Denys profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-2">Denys</h1>
            <p className="text-xl text-indigo-400 mb-4">Talent Sourcer & Tech Enthusiast</p>
            <p className="text-gray-400 max-w-2xl mb-6">
              Bridging the gap between talent and technology. Specialized in AI-driven sourcing
              solutions and technical recruitment strategies.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://linkedin.com"
                className="p-2 text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                className="p-2 text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}