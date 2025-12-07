import React from "react";
import heroImg from "../assets/img/blog1.jpg";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        width: "100%",
        minHeight: "92vh",
        padding: "60px 7% 40px",
        backgroundColor: "#FFFD8F",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      {/* Decorative Circle */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "250px",
          height: "250px",
          backgroundColor: "#B0CE88",
          borderRadius: "50%",
          opacity: 0.4,
          zIndex: 0,
        }}
      ></div>

      {/* Decorative Square */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "220px",
          height: "220px",
          backgroundColor: "#4C763B",
          opacity: 0.15,
          borderRadius: "30px",
          transform: "rotate(15deg)",
          zIndex: 0,
        }}
      ></div>

      {/* LEFT CONTENT */}
      <div
        className="hero-content"
        style={{
          flex: "1 1 45%",
          maxWidth: "550px",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "800",
            lineHeight: "1.2",
            color: "#4C763B",
            marginBottom: "20px",

          }}
        >
          Container​‍​‌‍​‍‌​‍​‌‍​‍‌ Shipping for Furniture
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.8",
            color: "#4C763B",
            opacity: 0.8,
            marginBottom: "28px",
            textAlign: "justify",
          }}
        >
        Container shipping for furniture is a money-saving and secure mode of transport that allows you to take the least amount of trouble to move your home goods from one country to another. In any case, whether you are moving, exporting furniture, or shipping bulk items for business, container shipping in the UAE is the safest, least handled, and cheapest way to transport your goods. Your furniture is the most secure against passing if you have durable containers, professional packing, and simplified customs procedures; in fact, the furniture is protected from damage, weather, and theft during the entire trip. Use container shipping as a smooth, worry-free, and convenient way to move your valuable furniture anywhere in the ​‍​‌‍​‍‌​‍​‌‍​‍‌world.

        </p>

        {/* HIGHLIGHT TAG */}
        <div
          style={{
            backgroundColor: "#B0CE88",
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "10px",
            color: "#4C763B",
            fontWeight: "700",
            marginBottom: "22px",
          }}
        >
          100% Safe • Hassle-Free • Reliable
        </div>

        {/* BUTTONS */}
        <div className="hero-buttons" style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a
            href="https://www.wemovers.ae/contact"
            style={{
              backgroundColor: "#4C763B",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          >
            Get a Free Quote
          </a>

          <a
            href="#our-services"
            style={{
              backgroundColor: "#B0CE88",
              color: "#4C763B",
              padding: "12px 28px",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
              border: "2px solid #4C763B",
              fontSize: "1rem",
            }}
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div
        className="hero-image"
        style={{
          flex: "1 1 45%",
          textAlign: "center",
          zIndex: 2,
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* BACK SHAPE */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              left: "-5px",
              width: "100px",
              height: "100px",
              backgroundColor: "#B0CE88",
              borderRadius: "20px",
              zIndex: -1,
            }}
          ></div>

          {/* IMAGE */}
          <img
            src={heroImg}
            alt="WeMovers Hero"
            style={{
              width: "100%",
              borderRadius: "25px",
              boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
            }}
          />
        </div>
      </div>

      {/* RESPONSIVE FIXES */}
      <style>
        {`
          @media (max-width: 768px) {
            .hero-section {
              flex-direction: column !important;
              text-align: center;
              padding: 40px 6% 30px !important;
            }

            .hero-content {
              max-width: 100% !important;
            }

            .hero-image {
              margin-top: 25px !important;
            }

            .hero-section h1 {
              font-size: 2.4rem !important;
            }
               .hero-buttons {
              justify-content: center !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
