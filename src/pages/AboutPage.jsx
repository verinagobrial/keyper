import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [activeProject, setActiveProject] = useState(0);

  const companyStats = [
    { number: '12+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' }
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa in Stanley",
      type: "Residential",
      year: "2024",
      description: "Modern luxury villa with panoramic sea views featuring custom furniture and smart home integration.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Smart Home", "Custom Furniture", "Sea View", "300m²"]
    },
    {
      id: 2,
      title: "Corporate Office in Smouha",
      type: "Commercial",
      year: "2023",
      description: "Innovative workspace design promoting collaboration and productivity for a tech company.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Open Plan", "Collaborative Spaces", "Tech Integration", "800m²"]
    },
    {
      id: 3,
      title: "Boutique Hotel in Montaza",
      type: "Hospitality",
      year: "2023",
      description: "Luxury boutique hotel combining traditional Alexandrian architecture with modern amenities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["30 Rooms", "Spa", "Restaurant", "Traditional Design"]
    },
    {
      id: 4,
      title: "Modern Apartment in Gleem",
      type: "Residential",
      year: "2022",
      description: "Contemporary apartment redesign focusing on minimalism and functional space optimization.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Minimalist", "Space Optimization", "Smart Storage", "120m²"]
    }
  ];

  const branches = [
    {
      name: "Main Office - Stanley",
      address: "123 Stanley Street, Alexandria",
      phone: "+20 3 123 4567",
      hours: "Sun-Thu: 9AM-6PM",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Design Studio - Smouha",
      address: "45 Smouha Square, Alexandria",
      phone: "+20 3 123 4568",
      hours: "Sun-Thu: 10AM-8PM",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Showroom - Montaza",
      address: "78 Montaza Corniche, Alexandria",
      phone: "+20 3 123 4569",
      hours: "Sat-Thu: 10AM-10PM",
      image: "https://images.unsplash.com/photo-1505842381624-c2a38a0b2b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const team = [
    {
      name: "Sarah Mohamed",
      position: "Lead Interior Designer",
      experience: "15 years",
      specialty: "Luxury Residential",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Ahmed Hassan",
      position: "Commercial Design Director",
      experience: "12 years",
      specialty: "Office Spaces",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Lina Kamal",
      position: "Project Manager",
      experience: "8 years",
      specialty: "Hospitality Projects",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-white">
    
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#35501c] to-[#2a4016] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              About Keyper
            </h1>
            <p className="text-xl md:text-2xl text-yellow-500 mb-8 leading-relaxed">
              Crafting extraordinary spaces in Alexandria for over a decade. 
              Where vision meets reality, and every detail tells a story.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#35501c] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2012, Keyper Interior Design began as a small studio in Stanley, Alexandria, 
                  with a passion for transforming ordinary spaces into extraordinary living experiences. 
                  Our journey started with a simple belief: every space has the potential to inspire.
                </p>
                <p>
                  Over the years, we've grown into Alexandria's premier interior design firm, 
                  completing over 500 projects across residential, commercial, and hospitality sectors. 
                  Our team of passionate designers, architects, and craftsmen work together to bring 
                  your vision to life.
                </p>
                <p>
                  We take pride in our deep understanding of Alexandrian architecture and lifestyle, 
                  blending modern design principles with the city's unique cultural heritage.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Vivant Design Studio"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-[#35501c] p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">Since 2012</div>
                <div className="text-sm">Serving Alexandria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#35501c] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#35501c] mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our portfolio of transformative interior design projects across Alexandria
            </p>
          </div>

          {/* Project Slider */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Project Display */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative h-64 lg:h-96">
                  <img 
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-[#35501c] px-3 py-1 rounded-full text-sm font-semibold">
                    {projects[activeProject].type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-[#35501c] px-3 py-1 rounded-full text-sm font-semibold">
                    {projects[activeProject].year}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#35501c] mb-4">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {projects[activeProject].description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-[#35501c] mb-3">Project Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-[#35501c] px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={prevProject}
                      className="bg-[#35501c] hover:bg-[#2a4016] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div className="flex space-x-2">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveProject(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === activeProject ? 'bg-[#35501c]' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={nextProject}
                      className="bg-[#35501c] hover:bg-[#2a4016] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#35501c] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to creating exceptional spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#35501c] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#35501c] mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-1">Experience: {member.experience}</p>
                  <p className="text-sm text-gray-500">Specialty: {member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
<section className="py-20 bg-[#35501c]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Our Branches in Alexandria
      </h2>
      <p className="text-lg text-yellow-500 max-w-2xl mx-auto">
        Visit us at any of our conveniently located branches across the city
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {branches.map((branch, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={branch.image}
              alt={branch.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#35501c] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#35501c] mb-3">{branch.name}</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#35501c] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{branch.address}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#35501c] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{branch.phone}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#35501c] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{branch.hours}</span>
              </div>
            </div>
            <button 
              onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}`, '_blank')}
              className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Get Directions
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-[#35501c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-yellow-500 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/consultation">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
                          Book Free Consultation
                        </button>
                      </Link>
                      <Link to="/design-studio">
                        <button className="bg-[#35501c] hover:bg-[#293f17]  text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
                          Try 3D Design Studio
                        </button>
                      </Link>
                    </div>
        </div>
      </section>
    
       
    </div>
    
  );
};

export default AboutPage;