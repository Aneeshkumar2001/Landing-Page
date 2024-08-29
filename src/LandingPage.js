import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/another-page');
  };

  const styles = {
    landingPage: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    header: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '50px 20px',
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#4CAF50',
      border: '2px solid #4CAF50',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    ctaButtonHover: {
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    mainContent: {
      padding: '20px',
    },
    feature: {
      margin: '20px 0',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px',
    },
  };

  return (
    <div style={styles.landingPage}>
     
      <header style={styles.header}>
        <h1>Welcome to My Website</h1>
        <p>Share Your Information Here</p>
        <button
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.ctaButtonHover.backgroundColor;
            e.target.style.color = styles.ctaButtonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.ctaButton.backgroundColor;
            e.target.style.color = styles.ctaButton.color;
          }}
          onClick={handleButtonClick}
        >
          Get Started
        </button>
      </header>

     
      <main style={styles.mainContent}>
        <section style={styles.feature}>
          <h2>Benefits You Earn by Joining Us</h2>
          <p>Easy Access of data all over the world without a single third party Interfere.</p>
        </section>

        <section style={styles.feature}>
          <h2>All You Earn Here</h2>
          <p>By Joining with us is a great place to contribute success in your buisness.</p>
        </section>

        <section style={styles.feature}>
          <h2>We Always with You</h2>
          <p>At anycost of time,you can reachout our team by24/7.</p>
        </section>
      </main>

     
      <footer style={styles.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
