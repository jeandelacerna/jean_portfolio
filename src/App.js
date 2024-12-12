import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle = {
    flex: 1, // Ensures the content stretches to fill the screen without overlapping the footer
  };

  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
