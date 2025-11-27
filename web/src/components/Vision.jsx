import img1 from '../assets/img/extra-matters.webp';
import img2 from '../assets/img/best-and-cheapest-3.webp';
import '../assets/css/vision.css'

const Vision = () => {
  return (
    <div>
      {/* Vision Section Start */}
      <div 
        className="container-fluid vision-section py-5 position-relative" 
        style={{ 
          backgroundImage: `url(${img1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly lighter overlay
          }}
        ></div>
        
        {/* Content container with higher z-index */}
        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row g-5 justify-content-center">
            <div className="col-lg-8 wow fadeIn" data-wow-delay="0.3s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-4">
                  <img className="img-fluid rounded" src={img2} alt="Vision" />
                </div>
                <div className="col-sm-8">
                  <h2 className="text-white mb-3" style={{ color: '#FFFD8F' }}>Our Strategic Vision</h2>
                  <p className="text-white mb-4" style={{ textAlign: 'justify' }}>
                    The vision of our organization acts as a compass and map to meet the company's abilities and skills. 
                    We strive to be the preferred logistics partners with extensive worldwide footprints and a large presence 
                    in India that offer top-notch, reasonably priced services. 
                    <br/><br/>
                    We are committed to building brands for all stakeholders through environmentally friendly business 
                    practices and sustainable production methods that create value while protecting our planet.
                  </p>
                  <a 
                    className="btn rounded-pill py-2 px-4" 
                    href="https://www.wemovers.ae/" 
                    target='_blank' 
                    rel='noopener noreferrer'
                    style={{ 
                      backgroundColor: '#4C763B', 
                      borderColor: '#4C763B',
                      color: '#ffffffff'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#B0CE88';
                      e.target.style.borderColor = '#B0CE88';
                      e.target.style.color = '#4C763B';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#4C763B';
                      e.target.style.borderColor = '#4C763B';
                      e.target.style.color = '#ffffffff';
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vision Section End */}
    </div>
  );
};

export default Vision;