import React, { useState } from "react";

const sideImagesStyle = {
  display: "flex",
  gap: "10px",
};

const sideImageStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
};

const relativeStyle = {
  position: "relative",
};

const showButtonStyle = {
  position: "absolute",
  bottom: "10px",
  right: "10px",
  padding: "8px 12px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

function ImageGallery() {
  const [images, setImages] = useState([
    { src: "https://placehold.co/400x300", alt: "Swimming pool with ocean view" },
    { src: "https://placehold.co/400x300", alt: "Modern house exterior with pool" },
    { src: "https://placehold.co/400x300", alt: "Spacious living room with modern furniture" },
    { src: "https://placehold.co/400x300", alt: "Bedroom with ocean view" },
  ]);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([...images, { src: newImage, alt: "Uploaded image" }]);
    }
  };

  return (
    <div style={sideImagesStyle}>
      <div style={sideImageStyle}>
        {images.slice(0, 2).map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} style={imageStyle} />
        ))}
      </div>
      <div style={sideImageStyle}>
        {images.slice(2).map((image, index) => (
          <div key={index} style={index === 1 ? relativeStyle : {}}>
            <img src={image.src} alt={image.alt} style={imageStyle} />
            {index === 1 && (
              <button style={showButtonStyle}>Show all photos</button>
            )}
          </div>
        ))}
      </div>
      <input type="file" onChange={handleAddImage} style={{ marginTop: "10px" }} />
    </div>
  );
}

export default ImageGallery;
