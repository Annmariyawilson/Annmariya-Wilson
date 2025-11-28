import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="flex flex-1 justify-center items-center py-20 px-6 sm:px-10 lg:px-20 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center text-center max-w-4xl w-full">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Annmariya Wilson
            </h1>
            <h2 className="text-primary text-2xl md:text-3xl font-bold leading-normal">
              Full-Stack Web Developer
            </h2>
          </div>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
            Passionate about building modern, responsive web applications with a focus on React and Node.js. I specialize in turning complex problems into elegant, user-friendly digital experiences.
          </p>
          <div className="flex-wrap gap-4 flex mt-4 justify-center">
            <a 
              href="#projects" 
              onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'});
              }}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20"
            >
              View Projects
            </a>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-gray-800 dark:text-gray-200 text-base font-bold leading-normal tracking-[0.015em] border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};