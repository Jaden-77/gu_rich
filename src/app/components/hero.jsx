// import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Professional
          <br />
          <span className="text-[#F39C12]">Hauling Services</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Your trusted partner in construction material transportation and hauling solutions.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-[#F39C12] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E67E22] transition-colors"
        >
          Get Started
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
