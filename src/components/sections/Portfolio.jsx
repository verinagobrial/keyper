import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const intervalRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const portfolioItems = [
    { 
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92", 
      title: "Modern Apartment",
      id: 1
    },
    { 
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86", 
      title: "Luxury Villa",
      id: 2
    },
    { 
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", 
      title: "Office Space",
      id: 3
    },
    { 
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace", 
      title: "Restaurant Design",
      id: 4
    },
     { 
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", 
      title: "Office Space",
      id: 3
    },
    {
       image: "https://images.unsplash.com/photo-1517705008128-361805f42e86", 
      title: "Luxury Villa",
      id: 2
    },
     { 
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92", 
      title: "Modern Apartment",
      id: 1
    },
    {
       image: "https://images.unsplash.com/photo-1517705008128-361805f42e86", 
      title: "Luxury Villa",
      id: 2
    },
  ];

  // Determine items per slide based on screen size
  const getItemsPerSlide = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  };

  const itemsPerSlide = getItemsPerSlide();
  const totalSlides = Math.ceil(portfolioItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Start auto slide
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds
  };

  // Stop auto slide on hover
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto slide when mouse leaves
  const resumeAutoSlide = () => {
    startAutoSlide();
  };

  // Initialize auto slide
  useEffect(() => {
    startAutoSlide();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, totalSlides]);

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#35501c] mb-12">Our Portfolio</h2>
        
        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={resumeAutoSlide}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={resumeAutoSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 bg-white/90 hover:bg-white text-[#35501c] p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            style={{ display: isMobile ? 'none' : 'block' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={resumeAutoSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 bg-white/90 hover:bg-white text-[#35501c] p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            style={{ display: isMobile ? 'none' : 'block' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Items */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {/* Create slides */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                // Calculate items for this slide
                const slideStart = slideIndex * itemsPerSlide;
                const slideItems = portfolioItems.slice(slideStart, slideStart + itemsPerSlide);
                
                return (
                  <div 
                    key={slideIndex}
                    className="min-w-full px-2 lg:px-4"
                  >
                    <div className={`grid ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
                      {slideItems.map((item) => (
                        <Link 
                          key={item.id} 
                          to={`/project/${item.id}`}
                          className="relative group overflow-hidden rounded-xl h-64 md:h-72 lg:h-80 block"
                          onMouseEnter={stopAutoSlide}
                          onMouseLeave={resumeAutoSlide}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-white text-xl font-bold px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
                              {item.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators (Dots) */}
          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resumeAutoSlide}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-[#35501c] w-10' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          {isMobile && (
            <div className="flex justify-center space-x-6 mt-8">
              <button
                onClick={prevSlide}
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resumeAutoSlide}
                className="bg-white text-[#35501c] p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resumeAutoSlide}
                className="bg-white text-[#35501c] p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <div className="text-center mt-14">
          <Link to="/portfolio">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-lg hover:rounded-xl transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105">
              View Full Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;