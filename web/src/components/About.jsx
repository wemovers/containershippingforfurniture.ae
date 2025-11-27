import React from 'react';
import service1 from '../assets/img/b4.png';
import service2 from '../assets/img/b2.jpeg';
import service3 from '../assets/img/b6.jpg';


const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left Section */}
          <div className="col-lg-6">
            <div className="row g-3">
              {/* Experience Box */}
              <div className="col-6">
                <div
                  className="rounded d-flex flex-column align-items-center justify-content-center text-center px-3 py-5"
                  style={{
                    backgroundColor: '#f5dc60',
                    height: '251px',
                    borderRadius: '16px',
                  }}
                >
                  <h1 className="display-4 fw-bold text-dark mb-0">15</h1>
                  <span className="fs-5 fw-semibold text-dark mt-2">Years Experience</span>
                </div>
              </div>

              {/* Images */}
              <div className="col-6">
                <img
                  className="img-fluid rounded w-100"
                  style={{ height: '250px', objectFit: 'cover' }}
                  src={service1}
                  alt="best moving comapany in abu dhabi"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid rounded w-100"
                  style={{ height: '250px', objectFit: 'cover' }}
                  src={service2}
                  alt="best moving comapany in abu dhabi"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid rounded w-100"
                  style={{ height: '250px', objectFit: 'cover' }}
                  src={service3}
                  alt="Service 3"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <p className="text-uppercase text-success fw-semibold mb-2">About Us</p>
            <h1 className="mb-4 fw-bold">Know About WeMovers & Our Journey</h1>
            <p className="mb-4 text-muted" style={{textAlign:'justify'}}>
            One of the best moving and packaging companies in the Emirates is Wemovers Abu Dhabi. We founded the company in 2000 with experienced directors, who are well aware of the moving market.

            </p>

       <div className="row gx-3 gy-4 mb-4">
  <div className="col-sm-6">
    <div
      className="d-flex flex-column align-items-start p-4 rounded"
      style={{ backgroundColor: "#f5dc60" }}
    >
 
      <p className="mb-0 text-muted" style={{textAlign:'justify'}}>
       The primary inspiration for the installation of Wemovers was to meet the opportunity to meet need for a professional moving service. As we understand, various problems that customers face in the moving service market are well understood.


      </p>
    </div>
  </div>
  <div className="col-sm-6">
    <div
      className="d-flex flex-column align-items-start p-4 rounded"
      style={{ backgroundColor: "#f5dc60" }}
    >
      
      <p className="mb-0 text-muted" style={{textAlign:'justify'}}>
      We are Abu Dhabi's leading ISO-Puts and Packers. When the time comes for you to relocate domestically, give Wemovers in Abu Dhabi a call. whether it's domestic or international.  Compared to the other, we make it quicker and easier for you.

      </p>
    </div>
  </div>
</div>



            <a
              className="btn px-4 py-2 rounded-pill text-white"
              style={{ backgroundColor: '#f5dc60', color: '#000' }}
              href="https://www.wemovers.ae/about"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
