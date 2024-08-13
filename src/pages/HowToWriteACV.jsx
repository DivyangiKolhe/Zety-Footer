import React from 'react';
import './HowToWriteACV.css';
import headerImage from '../assets/how-to-write-a-cv-header.svg';
import authorImage from '../assets/author.jpg';
import amazonLogo from '../assets/amazon.png';
import walmartLogo from '../assets/walmart.png';
import attLogo from '../assets/att.png';
import microsoftLogo from '../assets/microsoft.png';
import fedexLogo from '../assets/fedex.png';
import starIcon from '../assets/star-icon.png';  // Assuming you have a star icon
 

const HowToWriteACV = () => {
  const handleCreateCVClick = () => {
    window.location.href = '/resume'; // Replace with the correct path
  };

  return (
    <div className="how-to-write-a-cv">
      <div className="cv-header">
        <div className="header-content">
          <div className="left-section">
            <h1>How to Write a CV in 2024 (Full Guide + Templates)</h1>
            <p className="create-cv-text" onClick={handleCreateCVClick}>Create Your CV Now</p>
          </div>
          <div className="right-section">
            <div className="author-info">
              <img src={authorImage} alt="Author" className="author-image" />
              <div className="author-details">
                <p>Danuta Detyna, CPRW</p>
                <p>Career Expert</p>
                <p>Updated: July 09, 2024</p>
                <p>Reviewed by: Dominika Kowalska, CPRW</p>
                <p>Article Helpfulness: 4.5 stars
                  <span className="stars">
                    <img src={starIcon} alt="Star" className="star-icon" />
                    <img src={starIcon} alt="Star" className="star-icon" />
                    <img src={starIcon} alt="Star" className="star-icon" />
                    <img src={starIcon} alt="Star" className="star-icon" />
                    <img src={starIcon} alt="Star" className="star-icon half" />  {/* Assuming half star */}
                  </span>
                </p>
                <div className="social-links">
                  <a href="https://twitter.com/share?url=https://zety.com/blog/how-to-write-a-cv" target="_blank" rel="noopener noreferrer">
                    <img src="../assets/twitter-icon.png" alt="Twitter" />
                  </a>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://zety.com/blog/how-to-write-a-cv" target="_blank" rel="noopener noreferrer">
                    <img src="../assets/facebook-icon.png" alt="Facebook" />
                  </a>
                  <a href="https://www.linkedin.com/shareArticle?url=https://zety.com/blog/how-to-write-a-cv" target="_blank" rel="noopener noreferrer">
                    <img src="../assets/linkedin-icon.png" alt="LinkedIn" />
                  </a>
                  <a href="https://web.whatsapp.com/send?text=https://zety.com/blog/how-to-write-a-cv" target="_blank" rel="noopener noreferrer">
                    <img src="../assets/whatsapp-icon.png" alt="WhatsApp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={headerImage} alt="How to Write a CV Header" className="header-image" />
      </div>
      <div className="trusted-companies">
        <p>Our customers have been hired by:</p>
        <div className="companies-logos">
          <img src={amazonLogo} alt="Amazon" />
          <img src={walmartLogo} alt="Walmart" />
          <img src={attLogo} alt="AT&T" />
          <img src={microsoftLogo} alt="Microsoft" />
          <img src={fedexLogo} alt="FedEx" />
        </div>
      </div>
    </div>
  );
};

export default HowToWriteACV;
