const Clients = () => {
  const clients = [
    { name: 'TIP X' },
    { name: 'EXCIPIA' },
    { name: 'Vide' },
    { name: 'DEHOTEL' },
    { name: 'UMBER & CO' }
  ];

  return (
    <section className="py-16 bg-[#1a1a1a]" id="clients">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          OUR CLIENTS
          <div className="w-24 h-1 bg-[#F39C12] mx-auto mt-4"></div>
        </h2>

        <div className="flex flex-row justify-center items-center gap-16 md:gap-24 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <span className="text-gray-400 text-xl font-semibold hover:text-[#F39C12] transition-colors whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 