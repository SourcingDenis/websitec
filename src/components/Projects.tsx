import React from 'react';
import { Bot, GitBranch, Users } from 'lucide-react';

const projects = [
  {
    title: 'AI-Driven Sourcing Tool',
    description: 'Leveraging AI to revolutionize talent identification and engagement',
    icon: Bot,
    status: 'In Development',
  },
  {
    title: 'LinkedIn Automation Tools',
    description: 'Streamlining connection and outreach processes',
    icon: Users,
    status: 'Beta Testing',
  },
];

const featuredProjects = [
  {
    title: 'LinkedIn Connection Automator',
    description: 'Smart automation for meaningful professional connections',
    icon: Users,
    link: '#',
  },
  {
    title: 'GitHub Portfolio Analyzer',
    description: 'AI-powered tool for technical candidate assessment',
    icon: GitBranch,
    link: '#',
  },
  {
    title: 'Global Sourcing Toolkit',
    description: 'Comprehensive suite for international talent acquisition',
    icon: Bot,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Current Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
            >
              <project.icon className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-400">
                {project.status}
              </span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
            >
              <project.icon className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}