import React, { useState } from "react";

const FaqItem = ({ question, answer, colors }) => {
  const [open, setOpen] = useState(false);

  const cardStyle = {
    backgroundColor: colors.cardBg,
    border: `2px solid ${colors.accent}`,
    borderRadius: "16px",
    padding: "0",
    boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const headerStyle = {
    padding: "18px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: colors.accent,
  };

  const iconStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: colors.accent,
  };

  const contentStyle = {
    padding: "0 24px 18px",
    fontSize: "1rem",
    color: "#333",
    lineHeight: "1.6",
  };

  return (
    <div style={cardStyle} onClick={() => setOpen(!open)}>
      <div style={headerStyle}>
        {question}
        <span style={iconStyle}>{open ? "−" : "+"}</span>
      </div>

      {open && <div style={contentStyle}>{answer}</div>}
    </div>
  );
};

const Faqs = () => {
  // Theme colors used across the component
  const colors = {
    background: "#FFFD8F",
    cardBg: "#B0CE88",
    accent: "#4C763B",
  };

  const sectionStyle = {
    width: "100%",
    backgroundColor: colors.background,
    padding: "80px 20px",
    fontFamily: "sans-serif",
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    textAlign: "center",
    fontWeight: "800",
    marginBottom: "20px",
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const descStyle = {
    textAlign: "center",
    color: "#333",
    maxWidth: "700px",
    margin: "0 auto 40px",
    lineHeight: "1.6",
    fontSize: "1.1rem",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <section style={sectionStyle} id="faqs">
      <div style={containerStyle}>

        <h2 style={titleStyle}>
          Frequently Asked Questions
        </h2>

        <p style={descStyle}>
          Here are the most commonly asked questions by our customers.
          If you still need help, feel free to contact us anytime.
        </p>

        <div style={listStyle}>
          <FaqItem
            question="1.​‍​‌‍​‍‌​‍​‌‍​‍‌ What is container shipping for furniture?"
            answer="Furniture container shipping is the transport of furniture in specially made protective containers, which can be either local or international, and thus, the furniture is guaranteed to be safe from any damage, bad weather, or even theft."
            colors={colors}
          />

          <FaqItem
            question="2. How are my furniture items packed for container shipping?"
            answer="For the packaging, we use the most ideal materials that are sure to give maximum protection, such as bubble wrap, blankets, and custom crates. If any are made of glass or are valuable pieces, they will be more closely looked at and handled with care"
            colors={colors}
          />

          <FaqItem
            question="3. What types of containers are available for furniture shipping?"
            answer="We offer different sizes of containers to include 20ft and 40ft containers, which can hold household moves of small or large loads, or even furniture transports from commercial."
            colors={colors}
          />

          <FaqItem
            question="4. Can I track my furniture during container shipping?"
            answer="Certainly, we do offer tracking services and update you regularly so that you can witness the progress of your shipment throughout the voyage"
            colors={colors}
          />

         
        </div>
      </div>
    </section>
  );
};

export default Faqs;
