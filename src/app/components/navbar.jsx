"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better trigger point

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
    <nav className="fixed top-0 w-full bg-[#0a0a29]/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a className="btn btn-primary text-xl bg-primary text-neutral border border-primary hover:bg-primary">
            <img src="/logo1.png" alt="Logo" className="h-12" />
            GU Rich
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-all duration-300 ${
                  activeSection === href.slice(1)
                    ? 'text-[#F39C12] font-semibold scale-110'
                    : 'text-white hover:text-[#F39C12]'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-[#F39C12]/10 rounded-lg transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a0a29]/95 backdrop-blur-sm">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={toggleMenu}
              className={`block px-3 py-2 transition-all duration-300 ${
                activeSection === href.slice(1)
                  ? 'text-[#F39C12] font-semibold bg-[#F39C12]/10'
                  : 'text-white hover:text-[#F39C12]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
