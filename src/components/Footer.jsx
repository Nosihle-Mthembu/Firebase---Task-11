import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.brandSection}>
          <h2 style={styles.brandName}>HotelApp</h2>
          <p style={styles.brandDescription}>
            Your comfort is our priority. Enjoy your stay!
          </p>
        </div>
        <div style={styles.navSection}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>About</Link>
            <Link to="/Accommodation" style={styles.navLink}>Accommodation</Link>
            <Link to="/Sign-In" style={styles.navLink}>Sign In</Link>
            <Link to="/Sign-Up" style={styles.navLink}>Sign Up</Link>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </nav>
        </div>
        <div style={styles.socialSection}>
          <h3 style={styles.sectionTitle}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.iconLink}>Facebook</a>
            <a href="#" style={styles.iconLink}>Twitter</a>
            <a href="#" style={styles.iconLink}>Instagram</a>
          </div>
        </div>
        <div style={styles.mapContainer}>
          <h3 style={styles.sectionTitle}>Our Location</h3>
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890123!2d-122.084!3d37.4219999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba9cd1a1e8bb%3A0xabc1234567890!2sHotel%20Location!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            width="300"
            height="200"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <p style={styles.footerText}>
        Nosihle Mthembu - Task 11 &copy; 2024 HotelApp. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  brandSection: {
    flex: "1",
    minWidth: "200px",
    margin: "0 20px",
  },
  brandName: {
    fontSize: "24px",
    margin: "0",
  },
  brandDescription: {
    fontSize: "14px",
    margin: "5px 0",
  },
  navSection: {
    flex: "1",
    minWidth: "200px",
    margin: "0 20px",
  },
  sectionTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "5px 0",
    transition: "color 0.3s",
  },
  socialSection: {
    flex: "1",
    minWidth: "200px",
    margin: "0 20px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "flex-start", 
    gap: "15px",
    margin: "10px 0",
  },
  iconLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  mapContainer: {
    flex: "1", 
    minWidth: "200px",
    margin: "0 20px",
  },
  map: {
    border: "0",
    width: "150%",
    height: "200px",
  },
  footerText: {
    fontSize: "14px",
    margin: "10px 0",
  },
};

export default Footer;
