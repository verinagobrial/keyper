// src/components/sections/categories.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InteriorCategories = () => {
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
      image: 'https://images.unsplash.com/photo-1513506003901-79efb6a1a5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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

  // Responsive styles
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
    
    // View All button
    buttonPadding: {
      padding: isMobile ? '12px 30px' : isTablet ? '14px 40px' : '16px 50px',
      fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px'
    },
  };

  return (
    <section style={{
      ...responsiveStyles.sectionPadding,
      backgroundColor: '#2a4016'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '50px' : isTablet ? '60px' : '80px'
        }}>
          <h1 style={{
            ...responsiveStyles.titleSize,
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2'
          }}>
            Design Specialties
          </h1>
          <p style={{
            ...responsiveStyles.subtitleSize,
            color: '#d1d5db',
            margin: '0 auto'
          }}>
            Explore our comprehensive interior design services
          </p>
        </div>

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
                ...responsiveStyles.cardHeight,
                marginBottom: isMobile ? '0' : '0'
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
                      width: isMobile ? '18px' : isTablet ? '20px' : '22px',
                      height: isMobile ? '18px' : isTablet ? '20px' : '22px',
                      marginLeft: isMobile ? '8px' : isTablet ? '10px' : '12px',
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

        {/*  Portfolio Button */}
        <div style={{
          textAlign: 'center',
          marginTop: isMobile ? '40px' : isTablet ? '50px' : '56px' // 14 * 4 = 56px for desktop
        }}>
          <Link to="/portfolio">
            <button 
              style={{
                backgroundColor: '#f59e0b', // yellow-500
                color: 'white',
                padding: isMobile ? '12px 30px' : isTablet ? '14px 40px' : '16px 50px',
                borderRadius: '8px',
                fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = '#d97706'; // yellow-600
                  e.currentTarget.style.borderRadius = '12px'; // rounded-xl
                  e.currentTarget.style.transform = 'scale(1.05)'; // hover:scale-105
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'; // hover:shadow-xl
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = '#f59e0b'; // yellow-500
                  e.currentTarget.style.borderRadius = '8px'; // rounded-lg
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'; // shadow-lg
                }
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
            >
              View Full Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteriorCategories;