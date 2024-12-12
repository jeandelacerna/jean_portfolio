import React from "react";

function Resume() {
  const resumeStyle = {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    color: "orange",
    marginBottom: "1rem",
  };

  const iframeStyle = {
    width: "100%",
    height: "600px",
    border: "1px solid orange",
    borderRadius: "10px",
  };

  return (
    <div style={resumeStyle}>
      <h1 style={headingStyle}>My Resume</h1>
      <iframe
        src="/cv.pdf" // Ensure your CV is placed in the public folder
        title="Jean Delacerna's Resume"
        style={iframeStyle}
      />
    </div>
  );
}

export default Resume;
