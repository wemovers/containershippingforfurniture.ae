import React from "react";
import service1Img from "../assets/img/blog1.jpg";
import service2Img from "../assets/img/blog2.jpg";
import service3Img from "../assets/img/blog3.jpg";

const Services = () => {
  const bgColor = "#FFFD8F"; // Main Background
  const cardColor = "#B0CE88"; // Card accent
  const textColor = "#4C763B"; // Main text
  const secondaryColor = "#4C763B"; // Subtext

  const services = [
    {
      title: "Home Relocation",
      desc: (
        <>
          Home Relocation – Pakistan’s Best Home Shifting Service. Nowadays, it’s not an easy task to
          shift home from one place to another. Moreover, it not only includes muscle exercises but also
          involves psychological aspects for packing, loading, unloading, unpacking, and adjusting. Learn
          more at{" "}
          <a
            href="https://www.wemovers.ae/services/home-relocation"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4C763B", fontWeight: "600", textDecoration: "underline" }}
          >
            Home Relocation Service
          </a>.
        </>
      ),
      img: service1Img,
    },
    {
      title: "International Shipping",
      desc: "International relocation is right here to lighten your load. We have decades of experience and perfect service in the worldwide shifting technique. Our friendly, educated group of skilled worldwide transferring specialists will assist you each step of the way.",
      img: service2Img,
    },
    {
      title: "Storage Solutions",
      desc: "We aim to become one of the best storage and Storage Solution service providers in Pakistan. We understand that it is essential to find the proper warehousing and storage for their customers.",
      img: service3Img,
    },
  ];

  return (
    <section
      id="our-services"
      style={{
        backgroundColor: bgColor,
        padding: "80px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          color: cardColor,
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "60px",
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 300px",
              maxWidth: "360px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                height: "200px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              {/* Accent Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "40px",
                  backgroundColor: cardColor,
                  opacity: 0.3,
                }}
              ></div>
            </div>

            {/* CONTENT */}
            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  color: textColor,
                  fontSize: "1.5rem",
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: secondaryColor,
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            #our-services h2 {
              font-size: 2rem;
            }
            #our-services div[style*="flex: 1 1 300px"] {
              max-width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
