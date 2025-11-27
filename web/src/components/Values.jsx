import React from 'react';
import { FaHandsHelping, FaShieldAlt, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

const OurValues = () => {
  // Updated Color scheme to match theme
  const primaryColor = '#FFFD8F';    // Light Yellow
  const secondaryColor = '#B0CE88';  // Light Green
  const accentColor = '#4C763B';     // Dark Green
  const lightColor = '#F7F7F7';      // Light gray
  const darkColor = '#2C3E2A';       // Darker green for background

  const values = [
    {
      id: 1,
      title: 'Customer First',
      description: 'Wemovers Abu Dhabi has top moving companies, and they have this expertise that will ensure that your move is professional and comfortable, whether you are moving forward wherever you move.',
      icon: <FaUsers />,
      accent: primaryColor
    },
    {
      id: 2,
      title: 'Integrity',
      description: 'If you live in Abu Dhabi and go to another city or house in the Emirates, or make a plan in search of Packers and Movers, then just call us. As one of the top businesses in Abu Dhabi, we will make the procedure really simple',
      icon: <FaShieldAlt />,
      accent: secondaryColor
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'At the time you have decided to hire us, the best moving companies in the Abu Dhabi region, you should not find more workers or people to load and unload your goods.',
      icon: <FaLightbulb />,
      accent: accentColor
    }
  ];

  return (
    <div style={{
      backgroundColor: darkColor,
      padding: '80px 5%',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif",
      background: `linear-gradient(135deg, ${darkColor} 0%, #1E2D1C 100%)`
    }} id="values">
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: `${primaryColor}15`,
        filter: 'blur(40px)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: `${secondaryColor}15`,
        filter: 'blur(30px)'
      }}></div>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        backgroundColor: `${accentColor}10`,
        filter: 'blur(50px)'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: `${primaryColor}20`,
            color: primaryColor,
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px',
            marginBottom: '15px',
            border: `1px solid ${primaryColor}30`
          }}>
            OUR VALUES
          </div>
          
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '15px',
            color: lightColor,
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Our Core Values
          </h2>
          
          <div style={{
            width: '80px',
            height: '4px',
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
            borderRadius: '2px',
            margin: '0 auto 20px'
          }}></div>
          
          <p style={{
            fontSize: '1.1rem',
            color: `${lightColor}CC`,
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: '1.6'
          }}>
            The principles that guide every decision we make and every service we provide
          </p>
        </div>

        {/* Values Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {values.map((value, index) => (
            <div 
              key={value.id} 
              style={{
                backgroundColor: `${lightColor}08`,
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: `1px solid ${value.accent}20`,
                boxShadow: `0 10px 40px ${value.accent}08`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = `0 20px 50px ${value.accent}15`;
                e.currentTarget.style.borderColor = `${value.accent}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 10px 40px ${value.accent}08`;
                e.currentTarget.style.borderColor = `${value.accent}20`;
              }}
            >
              {/* Background accent */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: `linear-gradient(90deg, ${value.accent}, ${secondaryColor})`,
                opacity: '0.8'
              }}></div>

              {/* Icon Container */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                backgroundColor: `${value.accent}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                fontSize: '32px',
                color: value.accent,
                border: `2px solid ${value.accent}25`,
                transition: 'all 0.3s ease'
              }}>
                {React.cloneElement(value.icon, { size: 32 })}
              </div>
              
              {/* Content */}
              <h3 style={{
                fontSize: '1.6rem',
                margin: '0 0 20px',
                color: lightColor,
                fontWeight: '600',
                position: 'relative'
              }}>
                {value.title}
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  width: '40px',
                  height: '3px',
                  backgroundColor: value.accent,
                  borderRadius: '2px'
                }}></span>
              </h3>
              
              <p style={{
                margin: '0',
                color: `${lightColor}AA`,
                lineHeight: '1.7',
                fontSize: '1.05rem',
                textAlign: 'justify'
              }}>{value.description}</p>
              
              {/* Hover indicator */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: `${value.accent}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: value.accent,
                fontSize: '14px',
                transition: 'all 0.3s ease',
                opacity: '0.7'
              }}>
                →
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          borderRadius: '20px',
          background: `linear-gradient(135deg, ${accentColor}15, ${primaryColor}10)`,
          border: `1px solid ${primaryColor}20`,
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            color: lightColor,
            marginBottom: '15px',
            fontSize: '1.8rem'
          }}>
            Ready to Experience Our Values?
          </h3>
          <p style={{
            color: `${lightColor}AA`,
            marginBottom: '25px',
            fontSize: '1.1rem'
          }}>
            Let us demonstrate our commitment to excellence in every move
          </p>
          <button
            style={{
              backgroundColor: primaryColor,
              color: accentColor,
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: `0 5px 20px ${primaryColor}30`
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = secondaryColor;
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 8px 25px ${secondaryColor}40`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = primaryColor;
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 5px 20px ${primaryColor}30`;
            }}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurValues;