import React from 'react';
import { Search, Code, Users } from 'lucide-react';

const services = [
  {
    title: 'Talent Sourcing Strategy',
    description:
      "Develop comprehensive sourcing strategies tailored to your organization's unique needs and goals.",
    icon: Search,
  },
  {
    title: 'Technical Consultation',
    description:
      'Expert guidance on technical recruitment, skill assessment, and market analysis.',
    icon: Code,
  },
  {
    title: 'Project-Based Sourcing Support',
    description:
      'Dedicated sourcing support for specific projects or hiring initiatives.',
    icon: Users,
  },
];

export default function Services() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-900 rounded-xl p-8 hover:bg-gray-850 transition-colors"
            >
              <service.icon className="w-12 h-12 text-indigo-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}