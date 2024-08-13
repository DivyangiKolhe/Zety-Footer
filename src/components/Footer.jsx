import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <p>*The names and logos of the companies referred to above are all trademarks of their respective holders. Unless specifically stated otherwise, such references are not intended to imply any affiliation or association with Zety.</p>
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <img src="/logo.png" alt="Zety Logo" className="footer-logo" />
          <div className="footer-text">
            <p>
              Zety is a career site fueled by the best career experts and a
              community of millions of readers yearly. We share knowledge, tips,
              and tools to help everyone find their dream job.
            </p>
            <Link to="/create-resume">
              <button className="create-resume-button">Create My Resume</button>
            </Link>
            <div className="footer-social-links">
              <a href="https://twitter.com/zety_com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.facebook.com/zety.your.resume.builder/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.linkedin.com/company/zety-your-resume-builder/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className="footer-contact">
              <p>Call us: 800-985-7561</p>
              <p>Email: support@zety.com</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Resume</h4>
           
          </div>
          <div className="footer-column">
            <h4>CV</h4>
            <ul>
              <li><Link to="/CVBuilder">CV Builder</Link></li>
              <li><Link to="/how-to-write-a-cv">How to Write a CV</Link></li>  {/* New link */}

            </ul>
           
          </div>
          <div className="footer-column">
            <h4>Cover Letter</h4>
            <ul>
              <li><Link to="/cover-letter-builder">Cover Letter Builder</Link></li>
              <li><Link to="/cover-letter-templates">Cover Letter Templates</Link></li>
              <li><Link to="/cover-letter-examples">Cover Letter Examples</Link></li>
              <li><Link to="/cover-letter-format">Cover Letter Format</Link></li>
              <li><Link to="/how-to-write-a-cover-letter">How to Write a Cover Letter</Link></li>
              <li><Link to="/cover-letter-help">Cover Letter Help</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/editorial-guidelines">Editorial Guidelines</Link></li>
              <li><Link to="/media-mentions">Media Mentions</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/affiliates">Affiliates</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/cookies-tracking-policy">Cookies & Tracking Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Works Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
