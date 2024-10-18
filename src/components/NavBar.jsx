import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track screen size

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close menu on desktop view
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.navHeader}>
        {isMobile && (
          <button onClick={toggleMenu} style={styles.navToggle}>
            &#9776;
          </button>
        )}
      </div>
      <ul
        style={{
          ...styles.navList,
          display: isOpen || !isMobile ? "flex" : "none", // Use flex for desktop
        }}
      >
        <li style={styles.navItem}>
          <Link to="/" style={styles.linkStyle}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/accommodations" style={styles.linkStyle}>
            Accommodation
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Sign-In" style={styles.linkStyle}>
            Sign In
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/Sign-Up" style={styles.linkStyle}>
            Sign Up
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.linkStyle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles
const styles = {
  nav: {
    fontSize:"120%",
    backgroundColor: "#333",
    position: "relative",
    width: "100%", // Full width
    margin: 0, // No margin
    padding: 0, // No padding
    boxSizing: "border-box", // Include padding and border in element's total width and height
  },
  navHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  navToggle: {
    fontSize: "24px",
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    textAlign: "center",
    width: "100%",
  },
  navItem: {
    padding: "10px 0",
  },
  linkStyle: {
    color: "white",
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    display: "block",
  },
};

export default NavBar;
