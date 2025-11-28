import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="w-full py-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 text-sm">
        <p>© {new Date().getFullYear()} Annmariya Wilson. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;