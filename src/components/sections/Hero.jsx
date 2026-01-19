import coverPhoto from "../../assets/photos/cover.jpg";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] pt-16 md:pt-0">
      {/* pt-16 adds top padding on mobile, removed on medium+ screens */}
      
      {/* Background with responsive positioning - Alexandria themed */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:`url(${coverPhoto})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        {/* Increased dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content grid that adapts to all screens */}
      <div className="relative grid place-items-center min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh] p-4 sm:p-6 lg:p-8 z-20">
        <div className="text-center w-full max-w-6xl mx-auto z-20 mt-8 md:mt-0">
          {/* Added mt-8 on mobile, removed on medium+ */}
          
          {/* Rest of your component remains the same */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 z-20">
            <h1 className="text-4xl font-bold text-white 
                          xs:text-3xl
                          sm:text-4xl 
                          md:text-5xl 
                          lg:text-6xl 
                          xl:text-7xl
                          2xl:text-8xl
                          leading-tight sm:leading-tight md:leading-tight">
              Find Your Dream Home in{' '}
              <span className="text-yellow-400">Alexandria</span>
            </h1>
          </div>

          {/* Property Search Bar */}
          <div className="mt-8 sm:mt-12 lg:mt-16 max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-xl p-2 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-2">
                <input 
                  type="text" 
                  placeholder="Search by location, property type, or keyword..."
                  className="flex-1 px-4 py-3 md:py-4 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                />
                <select className="px-4 py-3 md:py-4 text-gray-800 border-l-0 md:border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
                <select className="px-4 py-3 md:py-4 text-gray-800 border-l-0 md:border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base">
                  <option value="">Price Range</option>
                  <option value="0-1000000">Up to 1M EGP</option>
                  <option value="1000000-3000000">1M - 3M EGP</option>
                  <option value="3000000-5000000">3M - 5M EGP</option>
                  <option value="5000000+">5M+ EGP</option>
                </select>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-brown-800 font-semibold 
                                  py-3 px-6 md:py-4 md:px-8 rounded-lg 
                                  transition-all duration-300
                                  transform hover:scale-105 active:scale-95
                                  text-sm md:text-base
                                  shadow-lg hover:shadow-xl
                                  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50
                                  whitespace-nowrap">
                  Search Properties
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { number: '500+', label: 'Properties' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-yellow-400 font-bold text-xl sm:text-2xl md:text-3xl">
                  {stat.number}
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Adjust position */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;