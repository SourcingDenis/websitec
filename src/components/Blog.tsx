import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Enhancing Candidate Engagement with AI-Driven Tools',
    excerpt:
      'Discover how AI is revolutionizing the way we connect with and evaluate potential candidates.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'The Future of Technical Recruitment',
    excerpt:
      'Exploring emerging trends and technologies shaping the future of technical talent acquisition.',
    date: 'March 10, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400',
  },
];

export default function Blog() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Latest Insights</h2>
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2"
          >
            View all posts <ArrowRight size={20} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                >
                  Read more <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}