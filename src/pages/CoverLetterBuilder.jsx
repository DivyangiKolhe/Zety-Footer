// src/pages/coverbuilder.jsx
import React from 'react';
import './coverbuilder.css';

const CoverBuilder = () => {
  return (
    <div className="coverbuilder-container">
      <div className="coverbuilder-content">
        {/* First section with the cover letter generator info and first image */}
        <div className="coverbuilder-section">
          <div className="coverbuilder-left">
            <h1>Free Cover Letter Generator: Build a Cover Letter Online</h1>
            <p>Writing a cover letter has never been so easy.</p>
            <p>
              With the Zety cover letter builder, writing a cover letter is no longer
              the long, frustrating, confusing process you’re used to. Write a
              job-winning cover letter in minutes and land your dream job!
            </p>
            <button>Create Your Cover Letter</button>
          </div>
          <div className="coverbuilder-right">
            <a href="/how-it-works" target="_blank" rel="noopener noreferrer">
              <img src="/image1.jpg" alt="Cover letter preview" />
            </a>
          </div>
        </div>

        {/* Second section with the heading and four steps */}
        <div className="coverbuilder-section">
          <h2>Four simple steps to create a great cover letter:</h2>
          <div className="steps-container">
            <div className="step">
              <img src="/path/to/step1.jpg" alt="Step 1" />
              <h3>Step 1</h3>
              <p>Pick a template</p>
              <p>Choose from 18 professional templates designed by career experts to make your cover letter stand out.</p>
            </div>
            <div className="step">
              <img src="/path/to/step2.jpg" alt="Step 2" />
              <h3>Step 2</h3>
              <p>Provide your details</p>
              <p>Answer a few questions or upload an existing resume, and we’ll create a personalized cover letter for you.</p>
            </div>
            <div className="step">
              <img src="/path/to/step3.jpg" alt="Step 3" />
              <h3>Step 3</h3>
              <p>Personalize the design</p>
              <p>Easily change the colors, fonts, and layout with our intuitive interface to match your personal style.</p>
            </div>
            <div className="step">
              <img src="/path/to/step4.jpg" alt="Step 4" />
              <h3>Step 4</h3>
              <p>Click download</p>
              <p>Download your polished cover letter in the preferred file format and apply for your dream job immediately.</p>
            </div>
          </div>
        </div>

        {/* Button section */}
        <div className="button-section">
          <button>Create Your Cover Letter</button>
        </div>
      </div>
    </div>
  );
};

export default CoverBuilder;
