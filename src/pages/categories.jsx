// src/pages/categories.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const CategoriesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const categories = [
    {
      id: 1,
      title: 'Kitchen & Bath',
      description: 'Functional and beautiful kitchen and bathroom designs',
      count: 32,
      color: '#4a6fa5',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces crafted to perfection',
      count: 27,
      color: '#d4a574',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Lighting Design',
      description: 'Illuminate your space with perfect lighting solutions',
      count: 21,
      color: '#e6b325',
      image: 'https://images.unsplash.com/photo-1513506003903-79efb6a1a5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Residential Design',
      description: 'Beautiful homes tailored to your lifestyle',
      count: 24,
      color: '#6a994e',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Commercial Spaces',
      description: 'Professional environments that inspire productivity',
      count: 18,
      color: '#4361ee',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Office Design',
      description: 'Workspaces that boost creativity and efficiency',
      count: 15,
      color: '#7209b7',
      image: 'https://images.unsplash.com/photo-1564069114555-71c3afca82fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Responsive styles (same as your categories section)
  const responsiveStyles = {
    // Container padding
    sectionPadding: {
      padding: isMobile ? '50px 16px' : isTablet ? '70px 20px' : '100px 20px'
    },
    
    // Title font size
    titleSize: {
      fontSize: isMobile ? '28px' : isTablet ? '34px' : '42px',
      marginBottom: isMobile ? '12px' : '20px'
    },
    
    // Subtitle font size
    subtitleSize: {
      fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
      maxWidth: isMobile ? '90%' : '600px'
    },
    
    // Grid columns
    gridColumns: {
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '25px' : isTablet ? '30px' : '40px'
    },
    
    // Card height
    cardHeight: {
      height: isMobile ? '300px' : isTablet ? '350px' : '400px'
    },
    
    // Card content padding
    cardPadding: {
      padding: isMobile ? '20px' : '30px'
    },
    
    // Title in card
    cardTitleSize: {
      fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px',
      marginBottom: isMobile ? '10px' : '15px'
    },
    
    // Description in card
    cardDescSize: {
      fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px',
      lineHeight: isMobile ? '1.5' : '1.6',
      marginBottom: isMobile ? '15px' : '25px'
    },
    
    // Project count badge
    badgeSize: {
      top: isMobile ? '15px' : '25px',
      right: isMobile ? '15px' : '25px',
      padding: isMobile ? '6px 15px' : '8px 20px',
      fontSize: isMobile ? '12px' : '14px'
    },
    
    // Button icon size
    buttonIconSize: {
      width: isMobile ? '18px' : isTablet ? '20px' : '22px',
      height: isMobile ? '18px' : isTablet ? '20px' : '22px',
      marginLeft: isMobile ? '8px' : isTablet ? '10px' : '12px'
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Hero Section - Kept your original hero section */}
      <section style={{
        position: 'relative',
        padding: isMobile ? '60px 16px' : isTablet ? '80px 20px' : '100px 20px',
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
              fontSize: isMobile ? '36px' : isTablet ? '48px' : '60px',
              fontWeight: 'bold',
              marginBottom: isMobile ? '16px' : '24px',
              fontFamily: 'Georgia, serif'
            }}>
              All Design Categories
            </h1>
            <p style={{
              fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
              color: '#e0e0e0',
              marginBottom: isMobile ? '24px' : '32px',
              lineHeight: '1.6'
            }}>
              Let's bring your design vision to life. Explore our comprehensive interior design services.
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
                padding: '10px 20px',
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
              <FiArrowLeft style={{ marginRight: '8px' }} />
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

      {/* Categories Grid Section - Using the same card design */}
      <section style={{
        ...responsiveStyles.sectionPadding,
        backgroundColor: '#f5f5f5',
        marginTop: '-1px' // To overlap with the curve
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Categories Grid */}
          <div style={{
            display: 'grid',
            ...responsiveStyles.gridColumns,
            marginBottom: isMobile ? '40px' : isTablet ? '50px' : '60px'
          }}>
            {categories.map((category) => (
              <div 
                key={category.id}
                onMouseEnter={() => !isMobile && setHoveredCard(category.id)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
                onClick={() => isMobile && setHoveredCard(
                  hoveredCard === category.id ? null : category.id
                )}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transform: hoveredCard === category.id ? 'translateY(-10px)' : 'translateY(0)',
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
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: hoveredCard === category.id ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.5s ease'
                }} />
                
                {/* Color Overlay on Hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: category.color,
                  opacity: hoveredCard === category.id ? '0.3' : '0',
                  transition: 'opacity 0.3s ease'
                }} />
                
                {/* Content Container */}
                <div style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: responsiveStyles.cardPadding.padding,
                  color: 'white'
                }}>
                  {/* Project Count Badge */}
                  <div style={{
                    position: 'absolute',
                    ...responsiveStyles.badgeSize,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    color: '#1a1a1a',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    transform: hoveredCard === category.id ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                    zIndex: 2
                  }}>
                    {category.count} Projects
                  </div>
                  
                  {/* Title with Hover Animation */}
                  <h3 style={{
                    ...responsiveStyles.cardTitleSize,
                    fontWeight: 'bold',
                    marginBottom: responsiveStyles.cardTitleSize.marginBottom,
                    transform: hoveredCard === category.id ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: hoveredCard === category.id ? '1' : (isMobile ? '1' : '0.9'),
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {category.title}
                  </h3>
                  
                  {/* Description with Slide Up Animation */}
                  <p style={{
                    ...responsiveStyles.cardDescSize,
                    transform: hoveredCard === category.id ? 'translateY(0)' : 'translateY(20px)',
                    opacity: hoveredCard === category.id ? '1' : (isMobile ? '1' : '0'),
                    transition: isMobile ? 'none' : 'all 0.4s ease 0.1s',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {category.description}
                  </p>
                  
                  {/* View Projects Button */}
                  <Link 
                    to={`/projects?category=${category.title.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: isMobile ? '14px' : '16px',
                      transform: hoveredCard === category.id ? 'translateY(0)' : 'translateY(10px)',
                      opacity: hoveredCard === category.id ? '1' : (isMobile ? '1' : '0'),
                      transition: isMobile ? 'none' : 'all 0.4s ease 0.2s',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    View Projects
                    <svg 
                      style={{ 
                        ...responsiveStyles.buttonIconSize,
                        transform: hoveredCard === category.id ? 'translateX(5px)' : 'translateX(0)',
                        transition: isMobile ? 'none' : 'transform 0.3s ease'
                      }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="3" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                  
                  {/* Hover Indicator Line */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: responsiveStyles.cardPadding.padding,
                    right: responsiveStyles.cardPadding.padding,
                    height: '3px',
                    backgroundColor: 'white',
                    transform: hoveredCard === category.id ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: isMobile ? 'none' : 'transform 0.5s ease'
                  }} />
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
              Don't See What You're Looking For?
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#666',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Contact us for custom design solutions tailored to your specific needs.
            </p>
            <Link 
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#35501c',
                color: 'white',
                padding: isMobile ? '14px 30px' : '16px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '14px' : '16px',
                transition: 'all 0.3s ease'
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
              Contact Us
              <svg 
                style={{ 
                  width: isMobile ? '18px' : '20px',
                  height: isMobile ? '18px' : '20px',
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
      </section>
    </div>
  );
};

export default CategoriesPage;