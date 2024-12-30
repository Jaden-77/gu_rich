"use client";
import { useEffect, useState } from 'react';

const About = () => {
  const stats = [
    {
      number: "OVER 3",
      label: "YEARS",
      description: "Experience in Hauling Services"
    },
    {
      number: "500+",
      label: "TRIPS",
      description: "Hauling Trips Completed"
    },
    {
      number: "10+",
      label: "CLIENTS",
      description: "Satisfied Clients"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/about.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">
            ABOUT
          </h2>
          <h3 className="text-3xl font-bold text-[#F39C12]">
            GU RICH
          </h3>
          <div className="w-24 h-1 bg-[#F39C12] mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            GU RICH is a provider of professional hauling services, dedicated to delivering exceptional transportation solutions for raw materials. Our team is committed to excellence, ensuring reliable and efficient hauling for various industries and projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-[#1a1a3a]/80 backdrop-blur-sm p-8 rounded-lg shadow-lg 
                         hover:transform hover:scale-105 transition-all duration-300
                         hover:bg-[#F39C12] cursor-pointer"
            >
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="text-xl font-semibold text-[#F39C12] mb-3 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="text-gray-300 group-hover:text-white/90 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 