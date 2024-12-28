import React from "react";

const serviceImages = [
  {
    src: "/consult.jpg",
    title: "Hauling Consultation",
    description:
      "At GU RICH, we offer professional hauling consultation services to help you plan and manage the transportation of raw materials using our reliable dump trucks.",
  },
  {
    src: "/solutions.png",
    title: "Material Transport Solutions",
    description:
      "Our team provides efficient material transport solutions through advanced planning, ensuring the safe and timely delivery of your raw materials.",
  },
  {
    src: "/hero.jpg",
    title: "Optimized Pricing",
    description:
      "We specialize in comprehensive hauling project management, overseeing the entire transportation process to deliver superior results for your raw material hauling needs.",
  },
];

export default function Services() {
  return (
    <div className="bg-neutral py-16" id="services">
      <h1 className="text-center text-5xl font-bold text-base-100">
        OUR HAULING
        <br />
        <span className="block">SERVICES</span>
        <div className="mx-auto mt-5 h-2 w-20 bg-primary"></div>
      </h1>
      <div className="flex flex-wrap justify-center gap-12 mt-16">
        {serviceImages.map((service, index) => (
          <div
            key={index}
            className="card bg-base-200 w-96 shadow-xl text-neutral group hover:transform hover:scale-105 transition-all duration-300"
          >
            <figure className="w-full h-60 overflow-hidden relative">
              <img
                src={service.src}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            </figure>
            <div className="card-body items-center text-center transition-all duration-300 group-hover:bg-base-200/95">
              <h2 className="card-title text-xl font-bold">{service.title}</h2>
              <p className="text-base-content/80">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
