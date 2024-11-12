import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Services from './components/Services';
import Blog from './components/Blog';
import Collaborations from './components/Collaborations';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Projects />
        <Services />
        <Blog />
        <Collaborations />
      </main>
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Denys. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;