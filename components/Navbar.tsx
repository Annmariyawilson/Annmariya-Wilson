import React, { useState } from 'react';
import { NavItem } from '../types';
import { Menu, X, Linkedin, Github } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Annmariya Wilson</h2>
        </div>

        {/* Desktop Nav */}
        <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
                <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium leading-normal text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                {item.label}
                </a>
            ))}
            </nav>
            <div className="hidden sm:flex gap-2">
                <a href="#" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                    <Github size={20} />
                </a>
            </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-base font-medium py-2 text-gray-700 dark:text-gray-300 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};