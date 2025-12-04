import React from "react";
import missionImg from "../assets/img/b1.jpg"; // ← Add your image here

const Mission = () => {
  const colors = {
    bg: "#FFFFFF",
    cardBg: "#B0CE88",
    accent: "#4C763B",
    soft: "#FFFD8F",
  };

  const sectionStyle = {
    backgroundColor: colors.bg,
    width: "100%",
    padding: "80px 20px",
    fontFamily: "sans-serif",
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    gap: "40px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const leftStyle = {
    flex: "1 1 450px",
  };

  const rightStyle = {
    flex: "1 1 450px",
  };

  const titleStyle = {
    fontSize: "2.8rem",
    fontWeight: "800",
    color: colors.accent,
    lineHeight: "1.2",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const highlightStyle = {
    backgroundColor: colors.soft,
    padding: "2px 8px",
    borderRadius: "6px",
  };

  const descStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    color: "#333",
    marginBottom: "20px",
  };

  const cardStyle = {
    backgroundColor: colors.cardBg,
    padding: "20px 24px",
    borderRadius: "14px",
    border: `2px solid ${colors.accent}`,
    boxShadow: "0 6px 16px rgba(0,0,0,0.10)",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#2d2d2d",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  };

  return (
    <section style={sectionStyle} id="mission">
      <div style={containerStyle}>

        {/* ------- Left Content ------- */}
        <div style={leftStyle}>
          <h2 style={titleStyle}>
            Our <span style={highlightStyle}>Mission</span>
          </h2>

          <p style={descStyle}>
            At WeMovers, our mission is to deliver professional, safe, and 
            reliable moving services that customers can trust. 
            We aim to make every move stress-free through proper planning, 
            skilled staff, and premium packing materials.
          </p>

          <div style={cardStyle}>
            We focus on customer satisfaction, timely delivery, 
            transparent pricing, and maintaining the highest 
            quality standards in the moving industry.
          </div>
        </div>

        {/* ------- Right Side Image ------- */}
        <div style={rightStyle}>
          <img 
            src={missionImg} 
            alt="Our mission" 
            style={imageStyle} 
          />
        </div>

      </div>
    </section>
  );
};

export default Mission;
