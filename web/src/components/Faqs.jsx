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
    <section style={sectionStyle}>
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
            question="What services do you provide?"
            answer="We provide home shifting, office relocation, packing services, local & international moving, storage, and more."
            colors={colors}
          />

          <FaqItem
            question="Do you offer packing materials?"
            answer="Yes, we provide cartons, bubble wrap, packing tape, and secure packing materials for all items."
            colors={colors}
          />

          <FaqItem
            question="Are your moving services insured?"
            answer="Yes, we offer insured moving services so your belongings remain safe and protected throughout the move."
            colors={colors}
          />

          <FaqItem
            question="How early should I book your service?"
            answer="Ideally, you should book 2–3 days in advance. For urgent moves, we also provide same-day booking depending on availability."
            colors={colors}
          />

          <FaqItem
            question="Do you handle fragile items?"
            answer="Absolutely! We use special packing techniques for glass, electronics, décor pieces, and other fragile items."
            colors={colors}
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
