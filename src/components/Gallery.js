import React from "react";

// Import all images from the images folder
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image8.jpg";
import image8 from "../images/image9.jpg";
import image9 from "../images/image10.jpg";
import image10 from "../images/image11.jpg";
import image11 from "../images/image12.jpg";
import image12 from "../images/image13.jpg";
import image13 from "../images/image14.jpg";
import image14 from "../images/image15.jpg";
import image15 from "../images/image16.jpg";
import image16 from "../images/image17.jpg";
import image17 from "../images/image18.jpg";
import image18 from "../images/image19.jpg";
import image19 from "../images/image20.jpg";
import image20 from "../images/image21.jpg";
import image21 from "../images/image22.jpg";
import image22 from "../images/image23.jpg";
import image23 from "../images/image7.jpg";


function Gallery() {
  const workStyle = {
    padding: "2rem",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginTop: "2rem",
  };

  const cardStyle = {
    border: "1px solid orange",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  // Update the projects array with the imported images
  const projects = [
    { title: "Image 1", image: image1 },
    { title: "Image 2", image: image2 },
    { title: "Image 3", image: image3 },
    { title: "Image 4", image: image4 },
    { title: "Image 5", image: image5 },
    { title: "Image 6", image: image6 },
    { title: "Image 7", image: image7 },
    { title: "Image 8", image: image8 },
    { title: "Image 9", image: image9 },
    { title: "Image 10", image: image10 },
    { title: "Image 11", image: image11 },
    { title: "Image 12", image: image12 },
    { title: "Image 13", image: image13 },
    { title: "Image 14", image: image14 },
    { title: "Image 15", image: image15 },
    { title: "Image 16", image: image16 },
    { title: "Image 17", image: image17 },
    { title: "Image 18", image: image18 },
    { title: "Image 19", image: image19 },
    { title: "Image 20", image: image20 },
    { title: "Image 21", image: image21 },
    { title: "Image 22", image: image22 },
    { title: "Image 23", image: image23 },
   
    
  ];

  return (
    <div style={workStyle}>
      <h1>Gallery</h1>
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div style={cardStyle} key={index}>
            <img src={project.image} alt={project.title} style={imageStyle} />
            <h3 style={titleStyle}>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
