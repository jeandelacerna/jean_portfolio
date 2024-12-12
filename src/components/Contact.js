import React from "react";

function Contact() {
  const contactStyle = {
    padding: "2rem",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    width: "60%",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const contactInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    marginTop: "2rem",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontSize: "1.2rem",
    width: "100%",
    justifyContent: "center",
    textAlign: "left",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    color: "orange",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div style={contactStyle}>
      <h1>Contact Me</h1>
      <div style={contactInfoStyle}>
        <div style={contactItemStyle}>
          <i className="fas fa-phone" style={iconStyle}></i>
          <span>09700292761</span>
        </div>
        <div style={contactItemStyle}>
          <i className="fas fa-envelope" style={iconStyle}></i>
          <a
            href="mailto:jeandelacerna@gmail.com"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            jeandelacerna@gmail.com
          </a>
        </div>
        <div style={contactItemStyle}>
          <i className="fab fa-facebook" style={iconStyle}></i>
          <a
            href="https://www.facebook.com/profile.php?id=100073841028750&mibextid=ZbWKwL"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div style={contactItemStyle}>
          <i className="fab fa-instagram" style={iconStyle}></i>
          <a
            href="https://www.instagram.com/jean.delacerna.140/?igsh=MWxseGptc3Y5eGFmeQ%3D%3D#"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
