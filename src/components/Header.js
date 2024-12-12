import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "orange",
    color: "white",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const navStyle = {
    display: "flex",
    gap: "1rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };

  const activeLinkStyle = {
    borderBottom: "2px solid white",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Jean Delacerna</div>
      <nav style={navStyle}>
        <NavLink to="/" exact style={linkStyle} activeStyle={activeLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/resume" style={linkStyle} activeStyle={activeLinkStyle}>
          Resume
        </NavLink>
        <NavLink to="/gallery" style={linkStyle} activeStyle={activeLinkStyle}>
          Gallery
        </NavLink>
        <NavLink to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
