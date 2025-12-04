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
      description: 'We are committed to our customers, and their satisfaction is our foremost concern. We always listen to our customers, answer them, and carry out the services that meet their shipping companies needs, caring for them.',
      icon: <FaUsers />,
      accent: primaryColor
    },
    {
      id: 2,
      title: 'Integrity',
      description: 'operate with honesty and transparency, which means that we carefully show every stage of the furniture shipping in Abu Dhabi process that is made up of clear, fair, and trustworthy steps.',
      icon: <FaShieldAlt />,
      accent: secondaryColor
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'By employing this technology, we can continuously upgrade our first-in-line logistics, state-of-the-art methods, and the most advanced tools to complete the furniture container shipping in a quicker, safer, and more efficient way. ',
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
            Our Core Value
          </div>

          <h2 style={{
            fontSize: '3rem',
            marginBottom: '15px',
            color: lightColor,
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Shipping Companies Dubai
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
            These core values of ours are a reflection of the promise we make to our customers to always provide them with services that are not only safe and reliable but also put their needs at the forefront. Our services in shipping furniture containers are fundamentally rooted in the ideals of honesty, good manners, and striving for excellence
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
            Ready to Experience Our Values shipping container price in Dubai
          </h3>
          <p style={{
            color: `${lightColor}AA`,
            marginBottom: '25px',
            fontSize: '1.1rem'
          }}>
            Experience a trustworthy, safe, and dedicated service—a place where our values lead every step to guarantee a hassle-free and a calm furniture shipping time container shipping companies in Dubai.
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
            onClick={() => window.open("https://www.wemovers.ae/", "_blank")}

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