import React from 'react';

import home1 from '../assets/img/home-1.webp';
import home2 from '../assets/img/home-2.webp';
import home3 from '../assets/img/home-3.webp';
import commercial1 from '../assets/img/commercial-1.webp';
import commercial2 from '../assets/img/commercial-2.webp';
import dataCenter1 from '../assets/img/data-center-1.webp';
import office1 from '../assets/img/office-1.webp';
import storage1 from '../assets/img/storage-1.webp';

import '../assets/css/gallery.css'
const images = [
  { id: 1, title: 'Home', src: home1 },
  { id: 2, title: 'Home', src: home2 },
  { id: 3, title: 'Home', src: home3 },
  { id: 4, title: 'Commercial', src: commercial1 },
  { id: 5, title: 'Commercial', src: commercial2 },
  { id: 6, title: 'Data Center', src: dataCenter1 },
  { id: 7, title: 'Office', src: office1 },
  { id: 8, title: 'Storage', src: storage1 },
];

const Gallery = () => {
  return (
    <div className="container-xxl py-5" id='gallery'>
      <div className="container">
        <div
          className="text-center mx-auto pb-4 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="mb-3">Explore Our Furniture Container Shipping Gallery</h1>
          <p style={{textAlign:'justify'}}>
            Explore Our Furniture Container Shipping in Dubai Gallery. Have a look at our gallery to understand the different stages of the process when we diligently pack, load, and ship furniture in safe containers. All pictures depict our dedication to security, accuracy, and customer satisfaction, thus providing you with a transparent look at the attention and skills we deliver with every consignment.
          </p>
        </div>

        <div className="row g-0">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.1}s`}
            >
              <a className="d-block" href={img.src} data-lightbox="gallery">
                <img className="gallery-image" src={img.src} alt={img.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
