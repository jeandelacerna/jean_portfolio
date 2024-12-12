import React from "react";
import profilePicture from "../images/profille.jpg"; // Local profile picture
import hobbiesPicture from "../images/hobbies.png"; // Local hobbies image

function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f8f8",
  };

  const leftColumnStyle = {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const profilePictureStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "1rem",
    objectFit: "cover",
  };

  const infoStyle = {
    marginBottom: "1rem",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };

  const rightColumnStyle = {
    width: "65%",
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const sectionHeadingStyle = {
    color: "orange",
    borderBottom: "2px solid orange",
    display: "inline-block",
    marginBottom: "1rem",
  };

  const hobbiesContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2rem",
    marginTop: "2rem",
  };

  const hobbiesTextStyle = {
    flex: 1,
  };

  const hobbiesPictureStyle = {
    width: "250px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      {/* Left Column */}
      <div style={leftColumnStyle}>
        <img
          src={profilePicture}
          alt="Jean Delacerna"
          style={profilePictureStyle}
        />
        <h2>Jean Delacerna</h2>
        <p style={infoStyle}>Computer Science Student</p>
        <p style={infoStyle}>📍 Lianga, Surigao Del Sur</p>
        <a
          href="/cv.pdf"
          download="JeanDelacerna_CV.pdf"
          style={buttonStyle}
        >
          Download My CV
        </a>
      </div>

      {/* Right Column */}
      <div style={rightColumnStyle}>
        <h1 style={sectionHeadingStyle}>ABOUT ME</h1>
        <p>
          Hello there! I am Jean Delacerna, a Computer Science student who enjoys learning new things and trying out different activities. I have a big love for playing volleyball because it keeps me active, happy, and healthy. When I am not playing sports, I like to explore and discover new hobbies, places, and ideas. I believe that trying new things helps me grow as a person and keeps life exciting. As a Computer Science student, I also enjoy working with technology and finding creative ways to solve problems. I always try my best to balance my studies, hobbies, and personal growth, and I look forward to learning more every day.
        </p>
        <h2 style={sectionHeadingStyle}>My Hobbies</h2>
        <div style={hobbiesContainerStyle}>
          <div style={hobbiesTextStyle}>
            <ul>
              <li>Traveling</li>
              <li>Playing Sports</li>
              <li>Cooking</li>
              <li>Reading Books</li>
              <li>Exploring Nature</li>
            </ul>
          </div>
          <img
            src={hobbiesPicture}
            alt="Hobbies"
            style={hobbiesPictureStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
