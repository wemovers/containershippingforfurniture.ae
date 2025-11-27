import React from "react";

const ContactUs = () => {
  // Color scheme
  const bgColor = '#FFFD8F';       // Main Background
  const accentColor = '#B0CE88';   // Accent for headings
  const textColor = '#4C763B';     // Text color
  const labelColor = '#4C763B';    // Labels

  const headingStyle = {
    color: accentColor,
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const labelStyle = {
    fontWeight: '600',
    marginTop: '12px',
    color: labelColor,
  };

  const infoStyle = {
    margin: '4px 0',
    color: textColor,
    fontSize: '1rem',
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: '60px 20px',
        fontFamily: 'Poppins, sans-serif',
      }}
      id="contact"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Left Side - Map */}
        <div style={{ flex: '1 1 500px', minHeight: '400px', minWidth: '300px' }}>
          <iframe
            title="WeMovers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.21232212345!2d54.345678!3d24.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e5a123456789%3A0xabcdef123456789!2sWeMovers!5e0!3m2!1sen!2sae!4v1699999999999!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Side - Contact Info */}
        <div style={{ flex: '1 1 400px', minWidth: '280px' }}>
          <h2 style={headingStyle}>Stay in Touch</h2>

          <div>
            <p style={labelStyle}>Head Office:</p>
            <p style={infoStyle}>Mussaffah M-33 P.O. Box: 9809 Store No 2</p>

            <p style={labelStyle}>Warehouse:</p>
            <p style={infoStyle}>Mussaffah M-33 Store No 3</p>

            <p style={labelStyle}>Phone:</p>
            <p style={infoStyle}>+971 50 303 1084</p>
            <p style={infoStyle}>+971 2 558 5181</p>

            <p style={labelStyle}>Email:</p>
            <p style={infoStyle}>info@wemovers.ae</p>

            <p style={labelStyle}>Website:</p>
            <p style={infoStyle}>www.wemovers.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
