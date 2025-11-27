import img1 from '../assets/img/extra-matters.webp';
import img2 from '../assets/img/best-and-cheapest-3.webp';
import img3 from '../assets/img/best-and-cheapest-4.webp';

const Vision = () => {
  return (
    <div>
      {/* Banner Start */}
      <div 
        className="container-fluid banner my-5 py-5 position-relative" 
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
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust opacity (0.6) for darkness
          }}
        ></div>
        
        {/* Content container with higher z-index */}
        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-4">
                  <img className="img-fluid rounded" src={img2} alt="Vision" />
                </div>
                <div className="col-sm-8">
                  <h2 className="text-white mb-3">Our Strategic Vision</h2>
                  <p className="text-white mb-4" style={{textAlign:'justify'}}>The vision of our organization act as a compass and map to meet the company's abilities and skills.<br/><br/>preferred logistics partners, extensive worldwide footprints, and a large presence in India that offer top-notch, reasonably priced services. Brands for all stakeholders, an environmentally friendly business production.</p>
                  <a className="btn btn-secondary rounded-pill py-2 px-4" href="https://www.wemovers.ae/" target='_blank' rel='noopener noreferrer'>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="row g-4 align-items-center">
                <div className="col-sm-4">
                  <img className="img-fluid rounded" src={img3} alt="Mission" />
                </div>
                <div className="col-sm-8">
                  <h2 className="text-white mb-3">Mission</h2>
                  <p className="text-white mb-4">Party, attach, and strengthen our people by constantly increasing your expertise and building a culture of ownership.<br/><br/>Invest in research, innovation, and analysis to upgrade our product offerings. Increase the depth of our existing customers, get new customers, enter into new sections and create new strategic alliances in geography in India and abroad.</p>
                  <a className="btn btn-secondary rounded-pill py-2 px-4" href="https://www.wemovers.ae/" target='_blank' rel='noopener noreferrer'>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
    </div>
  );
};

export default Vision;