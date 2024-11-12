import React from 'react';

const collaborations = [
  {
    name: 'Tech Innovators Co.',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Partnered on AI-driven recruitment solutions',
  },
  {
    name: 'Creative Talent Hub',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Developed innovative sourcing strategies',
  },
  {
    name: 'International Finance Institute',
    logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Led technical talent acquisition initiatives',
  },
];

export default function Collaborations() {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Past Collaborations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collaborations.map((collab) => (
            <div
              key={collab.name}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-850 transition-colors"
            >
              <img
                src={collab.logo}
                alt={collab.name}
                className="w-24 h-24 rounded-lg mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{collab.name}</h3>
              <p className="text-gray-400">{collab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}