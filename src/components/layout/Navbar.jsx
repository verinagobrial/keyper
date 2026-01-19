import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [leftDropdownOpen, setLeftDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setLeftDropdownOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);


  return (
    <>
      <nav 
        className={`fixed w-full transition-all duration-300 z-50 ${
          navbarScrolled ? 'bg-[#35501c]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left side - Logo and Mobile Menu */}
            <div className="flex items-center">
              <div className="relative mr-4 lg:hidden">
                <button  onClick={(e) => { e.stopPropagation();
 setLeftDropdownOpen(!leftDropdownOpen);}} className="text-white focus:outline-none p-1 rounded hover:bg-yellow-500 hover:bg-opacity-10 transition-colors">
                  <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                
                {/* Mobile Dropdown Menu */}
                {leftDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-[#35501c] bg-opacity-95 rounded-lg shadow-xl z-50 border border-[#35501c]">
                    <div className="py-2">
                      <Link to="/home" className="block px-4 py-3 text-base text-white hover:bg-[#283b15] transition-colors border-b border-[#35501c]"onClick={() => setLeftDropdownOpen(false)}>Home</Link>
                      <a href="/about" className="block px-4 py-3 text-base text-white hover:bg-[#283b15] transition-colors border-b border-[#35501c]">About Us</a>
                      <a href="/contact" className="block px-4 py-3 text-base text-white hover:bg-[#283b15] transition-colors" >Contact Us</a>
                      <a href="/design-studio" className="block px-4 py-3 text-base text-white hover:bg-[#283b15] transition-colors border-b border-[#35501c]">3D Design Studio</a>
                      
                    </div>
                  </div>
                )}
              </div>
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <a href="/home" className="text-white text-2xl md:text-3xl lg:text-4xl font-bold hover:text-yellow-500 transition-opacity">
                  Keyper </a>
              </div>
            </div>

      {/* Middle - Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1 xl:space-x-2 2xl:space-x-4">
                <a href="/home" className="text-white hover:bg-yellow-500 hover:bg-opacity-20 px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105" >Home</a>
                <a href="/about" className="text-white hover:bg-yellow-500 hover:bg-opacity-20 px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105">About Us</a>
                <a href="/design-studio" className="text-white hover:bg-yellow-500 hover:bg-opacity-20 px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105">3D Design Studio</a>
                <a  href="/ai"  className="text-white hover:bg-yellow-500 hover:bg-opacity-20 px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105">Ai Design</a>
                <a  href="/contact"  className="text-white hover:bg-yellow-500 hover:bg-opacity-20 px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 hover:scale-105">Contact Us</a>
              </div>
            </div>

            {/* Right side - Icons and Sign Up */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              {/* Search Icon */}
              <button 
                onClick={() => setSearchOpen(true)}
                className="text-white focus:outline-none p-1 rounded hover:text-yellow-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Profile Icon */}
              <Link to="/auth">
              <button className="text-white focus:outline-none p-1 rounded hover:text-yellow-500  transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              </Link>
              
              {/* book consultation */}
            <Link to="/consultation">
  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-md text-sm md:text-base font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none whitespace-nowrap">
    Book Consultation
  </button>
</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 pt-20 md:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="relative max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-8 md:mt-12">
              <input 
                type="text" 
                placeholder="Search for services, locations, or anything else..." 
                className="w-full py-4 px-6 md:py-5 md:px-8 text-lg md:text-xl rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-2xl"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brown-800 transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;