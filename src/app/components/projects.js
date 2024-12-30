const Projects = () => {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1a1a1a]">
          HAULING PROJECTS
          <div className="w-24 h-1 bg-[#F39C12] mx-auto mt-4"></div>
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-lg p-12 shadow-sm">
            <div className="mb-6">
              <svg 
                className="w-16 h-16 mx-auto text-[#F39C12]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"  
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Projects Coming Soon
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We are currently in the process of documenting our successful hauling projects. 
              Check back soon to see our portfolio of completed works showcasing our expertise 
              in construction material transportation and hauling services.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-[#F39C12]/10 text-[#F39C12] px-4 py-2 rounded-full">
                Construction Sites
              </div>
              <div className="bg-[#F39C12]/10 text-[#F39C12] px-4 py-2 rounded-full">
                Infrastructure Projects
              </div>
              <div className="bg-[#F39C12]/10 text-[#F39C12] px-4 py-2 rounded-full">
                Raw Materials Transport
              </div>
              <div className="bg-[#F39C12]/10 text-[#F39C12] px-4 py-2 rounded-full">
                Heavy Equipment Hauling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 