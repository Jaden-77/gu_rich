"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="navbar bg-[#0a0a29]/90 backdrop-blur-sm fixed top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0a0a29]/95 backdrop-blur-sm rounded-box w-52">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a 
                  href={href}
                  className={`${
                    activeSection === href.slice(1)
                      ? 'text-[#F39C12] font-semibold'
                      : 'text-white hover:text-[#F39C12]'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-primary text-xl bg-primary text-neutral border border-primary hover:bg-primary">
            <img src="/logo1.png" alt="Logo" className="h-12" />
            GU Rich
          </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-all duration-300 ${
                  activeSection === href.slice(1)
                    ? 'text-[#F39C12] font-semibold scale-110'
                    : 'text-white hover:text-[#F39C12]'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
