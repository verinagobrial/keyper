const DesignProcess = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Discovery',
      description: 'We meet to understand your vision, needs, budget, and lifestyle requirements.',
      icon: '💬'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Create initial design concepts, mood boards, and color palettes tailored to your space.',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Design Planning',
      description: 'Detailed space planning, furniture layouts, and material selections finalized.',
      icon: '📐'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Coordinate with contractors, order furnishings, and manage the installation process.',
      icon: '🚀'
    },
    {
      step: '05',
      title: 'Styling & Final Touches',
      description: 'Add accessories, artwork, and final decor elements to complete your space.',
      icon: '✨'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#35501c] mb-4">
            Our Design Process
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-yellow-500">
            A structured approach to ensure your interior design project is seamless and successful from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Fixed positioning */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#35501c] to-[#35501c] transform -translate-x-1/2 z-0">
            {/* Line dots at each step position */}
            {processSteps.map((_, index) => (
              <div 
                key={index}
                className="absolute w-3 h-3 bg-[#35501c] rounded-full transform -translate-x-1/2"
                style={{ 
                  top: `${(index * 25) + 12.5}%`, // Position dots evenly
                  left: '50%'
                }}
              />
            ))}
          </div>
          
          <div className="space-y-20 lg:space-y-0 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} mb-8 lg:mb-0`}>
                  <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-5">{step.icon}</div>
                      <span className="bg-gradient-to-r from-[#35501c] to-[#4a6b2c] text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#35501c] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number Circle - Positioned over the line */}
                <div className="lg:w-2/12 flex justify-center relative z-20">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#35501c] to-[#4a6b2c] text-white rounded-full flex items-center justify-center text-2xl font-bold border-8 border-white shadow-2xl hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>

                {/* Empty space for right side items */}
                <div className="lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;