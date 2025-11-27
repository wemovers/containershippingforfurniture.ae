import React from 'react';
import { FaHandsHelping, FaShieldAlt, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

const OurValues = () => {
  // Color scheme
  const primaryColor = '#FFA4B6';    // Pink
  const secondaryColor = '#A155B9';  // Purple
  const lightColor = '#F7F7F7';      // Light gray
  const darkColor = '#404A3D';       // Dark green

  const values = [
    {
      id: 1,
      title: 'Customer First',
      description: ' Wemovers Abu Dhabi has top moving companies, and they have this expertise that will ensure that your move is professional and comfortable, whether you are moving forward wherever you move.',
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
      accent: '#F25252' // Complementary red
    }
  ];

  return (
    <div style={{
      backgroundColor: darkColor,
      padding: '80px 5%',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif"
    }} id="values">
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: `${primaryColor}20`,
        filter: 'blur(40px)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: `${secondaryColor}20`,
        filter: 'blur(30px)'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '15px',
          color: lightColor,
          fontWeight: '700',
          textAlign: 'center',
          position: 'relative',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          Our Core Values
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '0',
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
            borderRadius: '2px'
          }}></span>
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: `${lightColor}CC`,
          maxWidth: '700px',
          margin: '0 auto 60px',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>
          The principles that guide every decision we make and every service we provide
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px'
        }}>
          {values.map((value) => (
            <div key={value.id} style={{
              backgroundColor: `${lightColor}05`,
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '30px',
              border: `1px solid ${value.accent}30`,
              boxShadow: `0 8px 32px ${value.accent}10`,
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 15px 40px ${value.accent}20`,
                borderColor: `${value.accent}60`
              }
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: `${value.accent}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                fontSize: '28px',
                color: value.accent,
                border: `2px solid ${value.accent}40`
              }}>
                {React.cloneElement(value.icon, { size: 28 })}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                margin: '0 0 15px',
                color: lightColor,
                fontWeight: '600'
              }}>{value.title}</h3>
              
              <p style={{
                margin: '0',
                color: `${lightColor}AA`,
                lineHeight: '1.6',
                fontSize: '1rem',
                textAlign: 'justify'
              }}>{value.description}</p>
              
              <div style={{
                width: '40px',
                height: '4px',
                backgroundColor: value.accent,
                marginTop: '25px',
                borderRadius: '2px',
                transition: 'width 0.3s ease',
                ':hover': {
                  width: '60px'
                }
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;