import React from 'react';
import service1 from '../assets/img/b4.png';
import service2 from '../assets/img/b2.jpeg';
import service3 from '../assets/img/b6.jpg';

const About = () => {
  return (
    <div className="container-xxl py-5" id="about">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Section - Content */}
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <h1 
                className="mb-4 fw-bold display-5"
                style={{ color: '#4C763B' }}
              >
                Know About WeMovers & Our Journey
              </h1>
            </div>
            
            <p className="mb-4" style={{ textAlign: 'justify', color: '#555', lineHeight: '1.7' }}>
              One of the best moving and packaging companies in the Emirates is Wemovers Abu Dhabi. 
              We founded the company in 2000 with experienced directors, who are well aware of the moving market.
            </p>

            {/* Feature Cards */}
            <div className="row g-3 mb-4">
              <div className="col-12">
                <div
                  className="p-4 rounded"
                  style={{ 
                    backgroundColor: '#FFFD8F',
                    borderLeft: '4px solid #4C763B'
                  }}
                >
                  <p className="mb-0" style={{ textAlign: 'justify', color: '#4C763B' }}>
                    The primary inspiration for the installation of Wemovers was to meet the opportunity 
                    to meet need for a professional moving service. As we understand, various problems 
                    that customers face in the moving service market are well understood.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div
                  className="p-4 rounded"
                  style={{ 
                    backgroundColor: '#B0CE88',
                    borderLeft: '4px solid #4C763B'
                  }}
                >
                  <p className="mb-0" style={{ textAlign: 'justify', color: '#4C763B' }}>
                    We are Abu Dhabi's leading ISO-Puts and Packers. When the time comes for you to 
                    relocate domestically, give Wemovers in Abu Dhabi a call. whether it's domestic 
                    or international. Compared to the other, we make it quicker and easier for you.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              className="btn px-4 py-3 rounded-pill fw-semibold text-decoration-none"
              style={{ 
                backgroundColor: '#4C763B', 
                color: '#FFFD8F',
                transition: 'all 0.3s ease'
              }}
              href="https://www.wemovers.ae/about"
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#B0CE88';
                e.target.style.color = '#4C763B';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#4C763B';
                e.target.style.color = '#FFFD8F';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Explore More
            </a>
          </div>

          {/* Right Section - Images & Experience */}
          <div className="col-lg-6">
            <div className="row g-3">
              {/* Experience Box - Now at top right */}
              <div className="col-12 text-center mb-4">
                <div
                  className="rounded d-flex flex-column align-items-center justify-content-center text-center p-5 position-relative"
                  style={{
                    backgroundColor: '#4C763B',
                    borderRadius: '20px',
                    minHeight: '200px',
                    background: 'linear-gradient(135deg, #4C763B 0%, #3a5a2c 100%)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative elements */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-50px',
                      right: '-50px',
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#FFFD8F',
                      opacity: '0.1',
                      borderRadius: '50%'
                    }}
                  ></div>
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-30px',
                      left: '-30px',
                      width: '100px',
                      height: '100px',
                      backgroundColor: '#B0CE88',
                      opacity: '0.1',
                      borderRadius: '50%'
                    }}
                  ></div>
                  
                  <h1 
                    className="display-2 fw-bold mb-2"
                    style={{ color: '#FFFD8F' }}
                  >
                    15+
                  </h1>
                  <span 
                    className="fs-5 fw-semibold"
                    style={{ color: '#B0CE88' }}
                  >
                    Years of Excellence
                  </span>
                  <div 
                    className="mt-3"
                    style={{
                      width: '60px',
                      height: '3px',
                      backgroundColor: '#FFFD8F',
                      borderRadius: '2px'
                    }}
                  ></div>
                </div>
              </div>

              {/* Images Grid */}
              <div className="col-4">
                <img
                  className="img-fluid rounded w-100 shadow-sm"
                  style={{ 
                    height: '180px', 
                    objectFit: 'cover',
                    border: '3px solid #FFFD8F'
                  }}
                  src={service1}
                  alt="Professional moving services"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded w-100 shadow-sm"
                  style={{ 
                    height: '180px', 
                    objectFit: 'cover',
                    border: '3px solid #B0CE88'
                  }}
                  src={service2}
                  alt="Reliable packing solutions"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded w-100 shadow-sm"
                  style={{ 
                    height: '180px', 
                    objectFit: 'cover',
                    border: '3px solid #4C763B'
                  }}
                  src={service3}
                  alt="International relocation experts"
                />
              </div>
            </div>

            {/* Additional Info Box */}
            <div 
              className="mt-4 p-4 rounded text-center"
              style={{
                backgroundColor: '#FFFD8F',
                border: '2px solid #B0CE88'
              }}
            >
              <h6 
                className="fw-bold mb-2"
                style={{ color: '#4C763B' }}
              >
                Trusted Across UAE
              </h6>
              <p 
                className="small mb-0"
                style={{ color: '#4C763B', opacity: '0.8' }}
              >
                Serving thousands of satisfied customers with premium moving solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;