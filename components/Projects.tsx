import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full flex flex-col items-center">
      {/* Project 1: E-Commerce */}
      <EcommerceProject />
      
      {/* Divider */}
      <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-10 max-w-7xl mx-auto" />

      {/* Project 2: College Management */}
      <CollegeProject />
    </section>
  );
};

const EcommerceProject: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'filtering' | 'checkout' | 'admin'>('filtering');

    return (
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-10 sm:py-16 md:py-20">
            <div className="flex flex-col max-w-6xl w-full flex-1">
                {/* Header */}
                <div className="px-4 mb-8">
                    <h2 className="text-slate-900 dark:text-slate-50 text-3xl md:text-4xl font-bold leading-tight tracking-tighter">E-Commerce Platform</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal mt-2">A full-featured MERN stack application designed to provide a seamless and secure online shopping experience.</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 px-4">
                    {/* Left Column: Media Gallery */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        {/* Media Player */}
                        <div className="w-full">
                            <div className="relative flex items-center justify-center bg-slate-900 bg-cover bg-center aspect-video rounded-xl shadow-lg overflow-hidden group" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3EmyRCZBzTMvF3Ro0hcuw0DcI_QDOvZUO_oushJEmF2sZxo58dU9T7UmVC0tAEGKCRPKZTfH6KleKeqJG_9T2a6kHE5fPnHOPb0zP93BMopKsH7zlHiNwulZ8ccYmFML5scSBoMPhaxqIJs2N2HsgkDppqLolvVgUG2o-YkT5pQFQaRr2nVUgQyvtAd-rq2sr7ASUnWC9n5HZa6zn5Oxu-LBmxIe12szPPyFRqIOW60jsJqERs88GUTEAyVDmAynebsAnrEjTNrY")'}}>
                                <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors z-10">
                                    <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                                </button>
                                {/* Simulated Progress Bar */}
                                <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                                    <div className="flex h-4 items-center justify-center">
                                        <div className="h-1 flex-1 rounded-full bg-white"></div>
                                        <div className="relative"><div className="absolute -left-2 -top-2 size-4 rounded-full bg-white"></div></div>
                                        <div className="h-1 flex-1 rounded-full bg-white opacity-40"></div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">0:37</p>
                                        <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">2:23</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs for Screenshots */}
                        <div>
                            <div className="flex border-b border-slate-200 dark:border-slate-700 gap-8 overflow-x-auto">
                                {[
                                    { id: 'filtering', label: 'Product Filtering' },
                                    { id: 'checkout', label: 'Secure Checkout' },
                                    { id: 'admin', label: 'Admin Dashboard' }
                                ].map((tab) => (
                                    <button 
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-2 whitespace-nowrap px-2 transition-colors ${activeTab === tab.id ? 'border-b-primary text-primary' : 'border-b-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                                    >
                                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Header Image/Screenshot */}
                        <div className="@container">
                            <div 
                                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80 border border-slate-200 dark:border-slate-800 transition-all duration-500" 
                                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5GJT8ufxwNLIagJeckvYBcKhS8xZ2XOCwD9MC8n7py2VHeG4unaMciF3qEhy918ikocVLnIZ0dCt4gu2-IMfb76Gukbd22pYvKlWaitKJ2RU8soHQCPteUYMmc3SCid2Sw5sELIY9iNMZWFFNdzlvhfs1BP9pPfKcxJs33bxM7FGSnl3zzTzRQDYnktow7io54zfiMQ9NgYjWBm7rwT-IxCWrHZ5DItTJEpRy51DeSVt8m4ci-9VVRYhxFnjw1PCukohHgIAat80")'}}
                            >
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Project Details */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="flex flex-col gap-6 p-6 bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800">
                            <div>
                                <h3 className="text-slate-900 dark:text-slate-50 text-lg font-semibold leading-snug">The Challenge</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed mt-1">To build a secure, scalable online store from the ground up, incorporating complex user management, product filtering, and a comprehensive admin panel for inventory and order management.</p>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-slate-50 text-lg font-semibold leading-snug">The Solution</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed mt-1">Leveraged the MERN stack to deliver a feature-rich platform with robust back-end services, secure authentication, and a responsive, dynamic user interface built with React.</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-semibold leading-snug">Key Features</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-600 dark:text-slate-400 text-base">Advanced Product Filtering & Search</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-600 dark:text-slate-400 text-base">Secure Multi-Gateway Payments</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-600 dark:text-slate-400 text-base">Comprehensive Admin Management Panel</span>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-slate-200 dark:border-slate-800"/>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-semibold leading-snug">Technology Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API', 'JWT'].map(tech => (
                                    <span key={tech} className="text-primary bg-primary/10 dark:bg-primary/20 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <hr className="border-slate-200 dark:border-slate-800"/>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a href="#" className="flex items-center justify-center gap-2 w-full text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/30 font-semibold rounded-lg text-base px-6 py-3.5 text-center transition-colors">
                                <span>View Live Demo</span>
                                <ExternalLink size={20} />
                            </a>
                            <a href="#" className="flex items-center justify-center gap-2 w-full text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-200/50 dark:focus:ring-slate-700/50 font-semibold rounded-lg text-base px-6 py-3.5 text-center transition-colors">
                                <Github size={20} />
                                <span>Explore on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CollegeProject: React.FC = () => {
    return (
        <section className="w-full py-12 md:py-20 lg:py-24 bg-background-light dark:bg-background-dark/50">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Section Header */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-bold tracking-[-0.015em]">Project: College Management System</h2>
                </div>
                
                <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
                    {/* Left Column: Media Gallery */}
                    <div className="md:col-span-3">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-[#111318] dark:text-white">Gallery</h3>
                            <div className="flex overflow-x-auto no-scrollbar pb-4 -mx-1 px-1">
                                <div className="flex items-stretch gap-4">
                                    {[
                                        { title: "Secure Admin Login", desc: "Initial entry point for administrators and staff.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvDKJ_TouAL_AaW1Qgja_0hjxJXlDGnu7_UqlE6PpNDI0VtFSUeE-SiiSN04kUQyZNBwc3nstOs1y4Q-q5E0X4yXM61lXsYKoNxtFxobaWp6kZiVvV0RTl-ARYYVMG42DkNQY1825U-gg4Eq6mbgdzkrKikN-luUz81wnTiH2By3S2SDjs5Jano0EgY0MRwEfHjzWuFm872y11hlpyZ_FGVIpF0ZooA0LPXL-rP-oArgpObeAE7kxZTsFoP1sHPNIZuO63QBTS7GQ" },
                                        { title: "Full CRUD Operations", desc: "Manage student, faculty, and course data seamlessly.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHdZDLRpJ0oHNVEr9dsVKjnBAb1oaZ7BCjLkNgsUCAmz0GNov8_1z0w1f9X-83zXd6lYiLxKEZ4JQXWVRaSRzPWit2XekGgIoFSIA_bPrMbJPjbCYCTTrb7nGmpXX1A6Nhg-aMPDa1RxKXbDkv9GoEURbpawWBZOKVkWdX7UzOE3IQ-Pblz7kcuHgZzuOkbtnhNjU5mcgwkCvHkp-jPYO5t3pzDhAZ4EyypnPj_yQNXV9U7Y8-7qZDBMrOrHGvGPhoi4YPogrb94I" },
                                        { title: "Role-Based Access Control", desc: "Assign and restrict access based on user roles.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkL486My1iEZa8c2U-lastDuz0BdyTazwarwwYTiwVK57zxYSQ4u8UYNUv6ryTi42GzHgDvahSlIKXFVSuRk6dDDl-tSM8GwPLNiD--ywR6-fKKoQA87IMjUF75_yEze6xEfPhmbqbzVo7x3kqpJt5kiM-gT8t4CoLEQFdCXEGF6yY49OlhqGzL4Z0o3BYkHVAJk1XIGqndQUxn_t4cuVM9TA7_bnyNExRDjnluk-Y74CyetrvXHqwFRSXC8YYc5KZCBrfJhD8nuQ" },
                                        { title: "Video Walkthrough", desc: "A brief tour of the system's core features in action.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNjjBX7qX1jYPSMV67HzNofBkooyxB95ZLk3wRRrg6EVLgqn8-KNIklW1zD3lI0CMThFl9Y_VZc8MDTY4XTV83f9O_zG_yV06kXgBHDjDteUlfCNTLPWZ_eMceJV2QbV86aDEmE9FF10nD4G4XzjfsOE-IL_CUf0KRGFbJk-U3kwg8VsNwt0FMDBkrn5Q31-5eS3dyCA441mMkeV-9_V1lWRnfIk4UV-609yEOBmE14PB5qc2rfzzg2pKFkTuIIZO9jIjwVIKsFow" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-background-dark/50 shadow-md dark:shadow-none dark:border dark:border-white/10 min-w-[280px] md:min-w-[320px]">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl" style={{backgroundImage: `url("${item.img}")`}}></div>
                                            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-2">
                                                <div>
                                                    <p className="text-[#111318] dark:text-white text-base font-medium leading-normal">{item.title}</p>
                                                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Project Details */}
                    <div className="md:col-span-2 flex flex-col gap-8">
                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-[#111318] dark:text-white">Technology Stack</h3>
                            <div className="flex gap-2 flex-wrap">
                                {['MongoDB', 'Express.js', 'Angular', 'Node.js'].map((tech) => (
                                    <div key={tech} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 dark:bg-primary/20 px-4">
                                        <p className="text-primary dark:text-sky-300 text-sm font-medium leading-normal">{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-[#111318] dark:text-white">Key Features</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">dashboard</span>
                                    <div>
                                        <p className="font-semibold text-[#111318] dark:text-white">Responsive Admin Dashboard</p>
                                        <p className="text-[#616f89] dark:text-gray-400 text-sm">A fully responsive interface for seamless management on any device.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">database</span>
                                    <div>
                                        <p className="font-semibold text-[#111318] dark:text-white">Full CRUD Operations</p>
                                        <p className="text-[#616f89] dark:text-gray-400 text-sm">Comprehensive control to create, read, update, and delete records.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">admin_panel_settings</span>
                                    <div>
                                        <p className="font-semibold text-[#111318] dark:text-white">Role-Based Access Control (RBAC)</p>
                                        <p className="text-[#616f89] dark:text-gray-400 text-sm">Secure, granular control over user permissions and access levels.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button className="flex-1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">open_in_new</span>
                                <span className="truncate">Live Demo</span>
                            </button>
                            <button className="flex-1 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#f0f2f4] dark:bg-white/10 text-[#111318] dark:text-white text-base font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                                <Github size={20} />
                                <span className="truncate">View on GitHub</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Problem & Solution Section */}
                <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-md dark:shadow-none dark:border dark:border-white/10">
                        <div className="flex flex-col items-start justify-start gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-red-500 dark:text-red-400 text-3xl">error</span>
                                </div>
                                <p className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">The Problem</p>
                            </div>
                            <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed">
                                Educational institutions often struggle with inefficient, manual, and error-prone processes for managing student data, course schedules, and faculty information, leading to administrative bottlenecks.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-md dark:shadow-none dark:border dark:border-white/10">
                        <div className="flex flex-col items-start justify-start gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-green-500 dark:text-green-400 text-3xl">lightbulb</span>
                                </div>
                                <p className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">The Solution</p>
                            </div>
                            <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed">
                                This project delivers a centralized, web-based College Management System that digitizes and automates key administrative tasks, providing a single source of truth and streamlining operations for staff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};