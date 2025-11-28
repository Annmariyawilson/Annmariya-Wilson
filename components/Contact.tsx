import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 sm:py-16 md:py-20 bg-background-light dark:bg-background-dark">
      <div className="flex flex-col w-full max-w-6xl flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-[#111318] dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tighter">Get in Touch</h2>
              <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-3">
                Have a question or want to work together? Feel free to reach out via email, connect with me on social media, or use the contact form. I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#111318] dark:text-white flex items-center justify-center rounded-lg bg-background-light dark:bg-background-dark shrink-0 size-10">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <a href="mailto:annmariyawilson31@gmail.com" className="text-[#111318] dark:text-slate-200 text-base font-medium leading-normal flex-1 truncate hover:text-primary dark:hover:text-primary transition-colors">
                  annmariyawilson31@gmail.com
                </a>
                <div className="shrink-0">
                  <span className="material-symbols-outlined text-slate-400 dark:text-slate-500">arrow_forward_ios</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap justify-start gap-4">
                <a href="#" className="flex flex-col items-center gap-2 bg-white dark:bg-slate-800/50 p-4 text-center w-28 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-colors group shadow-sm">
                  <div className="rounded-full bg-background-light dark:bg-background-dark p-3 group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="text-[#111318] dark:text-white h-6 w-6" />
                  </div>
                  <p className="text-[#111318] dark:text-slate-200 text-sm font-medium leading-normal">LinkedIn</p>
                </a>
                <a href="#" className="flex flex-col items-center gap-2 bg-white dark:bg-slate-800/50 p-4 text-center w-28 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-colors group shadow-sm">
                  <div className="rounded-full bg-background-light dark:bg-background-dark p-3 group-hover:bg-primary/10 transition-colors">
                    <Github className="text-[#111318] dark:text-white h-6 w-6" />
                  </div>
                  <p className="text-[#111318] dark:text-slate-200 text-sm font-medium leading-normal">GitHub</p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col">
                  <p className="text-[#111318] dark:text-slate-200 text-base font-medium leading-normal pb-2">Name</p>
                  <input 
                    type="text"
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-500 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal transition-all" 
                    placeholder="Your Name"
                  />
                </label>
                <label className="flex flex-col">
                  <p className="text-[#111318] dark:text-slate-200 text-base font-medium leading-normal pb-2">Email</p>
                  <input 
                    type="email" 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-500 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal transition-all" 
                    placeholder="your.email@example.com"
                  />
                </label>
              </div>
              <label className="flex flex-col">
                <p className="text-[#111318] dark:text-slate-200 text-base font-medium leading-normal pb-2">Subject</p>
                <input 
                  type="text"
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-500 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal transition-all" 
                  placeholder="Regarding a project..."
                />
              </label>
              <label className="flex flex-col">
                <p className="text-[#111318] dark:text-slate-200 text-base font-medium leading-normal pb-2">Message</p>
                <textarea 
                  className="flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#111318] dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary min-h-32 placeholder:text-slate-500 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal transition-all" 
                  placeholder="Your message here..."
                ></textarea>
              </label>
              <button 
                type="submit" 
                className="flex items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-medium text-white shadow-md hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-all w-full sm:w-auto sm:self-end"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};