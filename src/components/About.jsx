import React, { useEffect, useRef } from 'react';


const Home = () => {
  const destinations = [
    { title: "Veniam", location: "IziMbali, Durban", image: "https://cdn.pixabay.com/photo/2022/11/02/12/43/house-7564803_1280.jpg" },
    { title: "Aliqua", location: "Pelham, Pietermaritzburg", image: "https://cdn.pixabay.com/photo/2017/06/12/21/03/infinity-pool-2396808_1280.jpg" },
    { title: "Commodo", location: "Ballito, Durban", image: "https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884_640.jpg" },
    { title: "Lorem", location: "Bethel, Howick", image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_640.jpg" }
  ];

  // console.log(destinations[0].image)

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let currentIndex = 0;
    const scrollWidth = slider.scrollWidth / 2;

    const slide = () => {
      currentIndex += 1;
      slider.style.transform = `translateX(-${currentIndex}px)`;

      if (currentIndex >= scrollWidth) {
        currentIndex = 0;
        slider.style.transform = `translateX(0)`;
      }
    };

    const intervalId = setInterval(slide, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
       <div className="coverPage"></div>
       <hr style={{border:"2px solid black", marginTop:"1%", marginBottom:"1%"}}></hr>

      <div style={{ marginTop: "20px", padding: "20px" }}>
        <h2 style={{ color: "#228B22", fontWeight: "bold", fontSize: "18px", display:"flex" ,alignContent:"center", justifyContent:"center" }}>WHERE TO GO</h2>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "24px", display:"flex" ,alignContent:"center", justifyContent:"center" }}>TOP DESTINATIONS</h1>

        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={buttonStyle}>
            <i className="fas fa-arrow-left"></i>
          </button>

          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <div ref={sliderRef} style={sliderStyle}>
              {destinations.concat(destinations).map((destination, index) => (
                <div key={index} style={sliderItemStyle}>
                  {/* {console.log(destination)} */}
                  <img src={destination.image} alt={destination.title} style={imageStyle} />
                  <div style={textContainerStyle}>
                    <h3 style={titleStyle}>{destination.title}</h3>
                    <p style={locationStyle}>
                      <i className="fas fa-map-marker-alt" style={{ marginRight: "8px" }}></i>
                      {destination.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button style={buttonStyle}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

// Inline styles
const buttonStyle = {
  backgroundColor: "#228B22",
  color: "white",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
  marginRight: "16px",
  border: "none"
};

const sliderStyle = {
  display: "flex",
  transition: "transform 0.5s ease",
};

const sliderItemStyle = {
  position: "relative",
  width: "250px",
  height: "350px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  flexShrink: 0,
  margin: "0 8px"
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const textContainerStyle = {
  position: "absolute",
  bottom: "10px",
  left: "10px",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better readability
  padding: "5px 10px",
  borderRadius: "8px"
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0"
};

const locationStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  margin: "0"
};

export default Home;
