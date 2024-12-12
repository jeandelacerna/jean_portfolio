import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "orange",
    color: "white",
    textAlign: "center",
    padding: "1rem 0",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  const textStyle = {
    margin: 0,
    fontSize: "0.9rem",
  };

 

 

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2024 Jean Delacerna. All Rights Reserved.</p>
      
    </footer>
  );
}

export default Footer;
