import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { FaWhatsapp, FaFacebookF, FaGoogle, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";

const MainLayout = () => {
  console.log("Rendering Header component");
 const ctaIconsStyle = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#000', // solid black background (change if needed)
    padding: '12px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: '9999',
  };

  const iconStyle = {
    color: '#fff',
    fontSize: '20px',
    margin: '8px 0',
    transition: 'transform 0.2s ease, color 0.3s ease',
    cursor: 'pointer',
  };

  const iconHoverStyle = {
    transform: 'scale(1.1)',
    color: '#f5c542', // mustard color
  };
  return (
    <>
   
    <ScrollToTop />
    <Navbar/>
 
      <main>
        <Outlet /> {/* This is where nested routes (like HomePage) will be rendered */}
      </main>
       <section>
        <div
          className="cta-icons"
          style={ctaIconsStyle}
        >
          {[
            { href: 'tel:025585181', icon: <FaPhone /> },
            { href: 'https://wa.me/971503034832', icon: <FaWhatsapp /> },
            { href: 'https://www.facebook.com/wemoversuae', icon: <FaFacebookF /> },
            { href: 'https://www.wemovers.ae/', icon: <FaGoogle /> },
            { href: 'https://www.instagram.com/wemoversuae', icon: <FaInstagram /> },
            { href: 'https://www.youtube.com/@wemoversuae', icon: <FaYoutube /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = iconHoverStyle.transform;
                e.target.style.color = iconHoverStyle.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = '';
                e.target.style.color = iconStyle.color;
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainLayout;
