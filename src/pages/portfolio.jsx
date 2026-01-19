// src/pages/portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa',
      category: 'Residential',
      location: 'Miami, FL',
      area: '4500 sq ft',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Modern Office Space',
      category: 'Commercial',
      location: 'New York, NY',
      area: '12000 sq ft',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      title: 'Gourmet Kitchen',
      category: 'Kitchen & Bath',
      location: 'Los Angeles, CA',
      area: '800 sq ft',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 4,
      title: 'Custom Library',
      category: 'Custom Furniture',
      location: 'Boston, MA',
      area: '600 sq ft',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 5,
      title: 'Art Gallery Lighting',
      category: 'Lighting Design',
      location: 'Chicago, IL',
      area: '3000 sq ft',
      image: 'https://images.unsplash.com/photo-1513506003903-79efb6a1a5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 6,
      title: 'Executive Suite',
      category: 'Office Design',
      location: 'Seattle, WA',
      area: '2500 sq ft',
      image: 'https://images.unsplash.com/photo-1564069114555-71c3afca82fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 7,
      title: 'Boutique Hotel',
      category: 'Commercial',
      location: 'Austin, TX',
      area: '18000 sq ft',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 8,
      title: 'Penthouse Apartment',
      category: 'Residential',
      location: 'San Francisco, CA',
      area: '3200 sq ft',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 9,
      title: 'Restaurant Design',
      category: 'Commercial',
      location: 'New Orleans, LA',
      area: '5000 sq ft',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Responsive styles
  const responsiveStyles = {
    // Container padding
    sectionPadding: {
      padding: isMobile ? '40px 16px' : isTablet ? '60px 20px' : '80px 20px'
    },
    
    // Hero padding
    heroPadding: {
      padding: isMobile ? '60px 16px' : isTablet ? '80px 20px' : '100px 20px'
    },
    
    // Title font sizes
    heroTitleSize: {
      fontSize: isMobile ? '36px' : isTablet ? '48px' : '60px'
    },
    
    heroSubtitleSize: {
      fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px'
    },
    
    // Grid columns
    gridColumns: {
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '20px' : isTablet ? '25px' : '30px'
    },
    
    // Card height
    cardHeight: {
      height: isMobile ? '300px' : isTablet ? '350px' : '400px'
    },
    
    // Card content padding
    cardPadding: {
      padding: isMobile ? '20px' : '24px'
    },
    
    // Title in card
    cardTitleSize: {
      fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px'
    },
    
    // Category in card
    cardCategorySize: {
      fontSize: isMobile ? '12px' : '14px'
    },
    
    // Details in card
    cardDetailsSize: {
      fontSize: isMobile ? '12px' : '13px'
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        ...responsiveStyles.heroPadding,
        background: 'linear-gradient(135deg, #35501c 0%, #2a4016 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h1 style={{
              ...responsiveStyles.heroTitleSize,
              fontWeight: 'bold',
              marginBottom: isMobile ? '16px' : '24px',
              fontFamily: 'Georgia, serif',
              lineHeight: '1.1'
            }}>
              Our Portfolio
            </h1>
            <p style={{
              ...responsiveStyles.heroSubtitleSize,
              color: '#e0e0e0',
              marginBottom: isMobile ? '24px' : '32px',
              lineHeight: '1.6'
            }}>
              Explore our finest interior design projects. Each space tells a unique story of creativity, functionality, and aesthetic excellence.
            </p>
            
            {/* Back to Home Button */}
            <Link 
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                padding: isMobile ? '10px 20px' : '12px 24px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg 
                style={{ 
                  width: '20px', 
                  height: '20px', 
                  marginRight: '8px'
                }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '32px',
          backgroundColor: '#f5f5f5',
          borderTopLeftRadius: '32px',
          borderTopRightRadius: '32px'
        }}></div>
      </section>

      {/* Portfolio Grid Section */}
      <section style={{
        ...responsiveStyles.sectionPadding,
        backgroundColor: '#f5f5f5',
        marginTop: '-1px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Portfolio Stats */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: isMobile ? '20px' : '30px',
            marginBottom: isMobile ? '40px' : isTablet ? '50px' : '60px',
            backgroundColor: 'white',
            padding: isMobile ? '20px' : '30px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
                fontWeight: 'bold',
                color: '#35501c',
                marginBottom: '8px'
              }}>{projects.length}+</div>
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#666',
                fontWeight: '500'
              }}>Projects Completed</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
                fontWeight: 'bold',
                color: '#35501c',
                marginBottom: '8px'
              }}>25+</div>
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#666',
                fontWeight: '500'
              }}>Happy Clients</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
                fontWeight: 'bold',
                color: '#35501c',
                marginBottom: '8px'
              }}>15+</div>
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#666',
                fontWeight: '500'
              }}>Years Experience</div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div style={{
            display: 'grid',
            ...responsiveStyles.gridColumns,
            marginBottom: isMobile ? '40px' : isTablet ? '50px' : '60px'
          }}>
            {projects.map((project) => (
              <div 
                key={project.id}
                onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
                onMouseLeave={() => !isMobile && setHoveredProject(null)}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transform: hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  ...responsiveStyles.cardHeight
                }}
              >
                {/* Background Image with Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.6s ease'
                }} />
                
                {/* Dark Overlay on Hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  opacity: hoveredProject === project.id ? '0.8' : '0',
                  transition: 'opacity 0.4s ease'
                }} />
                
                {/* Content Container */}
                <div style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: responsiveStyles.cardPadding.padding,
                  color: 'white'
                }}>
                  {/* Top Content */}
                  <div>
                    {/* Category Badge */}
                    <div style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#35501c',
                      padding: isMobile ? '6px 12px' : '8px 16px',
                      borderRadius: '50px',
                      fontSize: responsiveStyles.cardCategorySize.fontSize,
                      fontWeight: '600',
                      marginBottom: '12px',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {project.category}
                    </div>
                    
                    {/* Project Title */}
                    <h3 style={{
                      ...responsiveStyles.cardTitleSize,
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      opacity: hoveredProject === project.id ? '1' : '0.9',
                      transition: 'all 0.3s ease'
                    }}>
                      {project.title}
                    </h3>
                    
                    {/* Project Details */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginTop: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: responsiveStyles.cardDetailsSize.fontSize,
                        opacity: hoveredProject === project.id ? '1' : '0.8',
                        transition: 'all 0.3s ease'
                      }}>
                        📍 {project.location}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: responsiveStyles.cardDetailsSize.fontSize,
                        opacity: hoveredProject === project.id ? '1' : '0.8',
                        transition: 'all 0.3s ease'
                      }}>
                        📏 {project.area}
                      </div>
                    </div>
                  </div>
                  
                  {/* View Project Button (appears on hover) */}
                  <div style={{
                    transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                    opacity: hoveredProject === project.id ? '1' : '0',
                    transition: 'all 0.4s ease 0.1s'
                  }}>
                    <Link 
                      to={`/project/${project.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#35501c',
                        color: 'white',
                        padding: isMobile ? '12px 24px' : '14px 28px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: isMobile ? '14px' : '16px',
                        width: '100%',
                        border: '2px solid #35501c',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2a4016';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#35501c';
                      }}
                    >
                      View Project
                      <svg 
                        style={{ 
                          width: '20px', 
                          height: '20px', 
                          marginLeft: '10px'
                        }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div style={{
            textAlign: 'center',
            padding: isMobile ? '40px 20px' : '60px 20px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px',
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              Ready to Start Your Project?
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#666',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Let's create something extraordinary together. Contact us for a free consultation.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              justifyContent: 'center'
            }}>
              <Link 
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#35501c',
                  color: 'white',
                  padding: isMobile ? '14px 30px' : '16px 40px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: isMobile ? '14px' : '16px',
                  transition: 'all 0.3s ease',
                  flex: isMobile ? 'none' : '1',
                  maxWidth: isMobile ? '100%' : '300px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2a4016';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#35501c';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/categories"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  color: '#35501c',
                  padding: isMobile ? '14px 30px' : '16px 40px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: isMobile ? '14px' : '16px',
                  border: '2px solid #35501c',
                  transition: 'all 0.3s ease',
                  flex: isMobile ? 'none' : '1',
                  maxWidth: isMobile ? '100%' : '300px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#35501c';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#35501c';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;