import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CVBuilder.css';
import web from '../assets/web.jpg';
import newSectionImage1 from '../assets/newSectionImage1.svg';
import newSectionImage2 from '../assets/newSectionImage2.svg';
import newSectionImage3 from '../assets/newSectionImage3.svg';
import newSectionImage4 from '../assets/newSectionImage4.svg';
import cascadeImage from '../assets/cascade.jpg';
import crispImage from '../assets/crisp.jpg';
import cubicImage from '../assets/cubic.jpg';
import enfoldImage from '../assets/enfold.jpg';
import microsoftLogo from '../assets/microsoft.png';
import amazonLogo from '../assets/amazon.png';
import attLogo from '../assets/att.png';
import walmartLogo from '../assets/walmart.png';
import fedexLogo from '../assets/fedex.png';
import orangeLogo from '../assets/orange.png';
import createeasly from '../assets/createeasly.jpg';
import expert from '../assets/expert.jpg';
import t1 from '../assets/t1.jpg';
import review from '../assets/review.jpg';
import generate from '../assets/generate.jpg';
import matching from '../assets/matching.jpg';
import geek from '../assets/geek.png';
import howg from '../assets/howg.png';

const CVBuilder = () => {
  const navigate = useNavigate();

  const handleCreateCVClick = () => {
    navigate('/cv-template');
  };

  const handleLogoClick = () => {
    window.location.href = 'https://zety.com/about';
  };

  const templates = [
    { name: 'Cascade', image: cascadeImage },
    { name: 'Crisp', image: crispImage },
    { name: 'Cubic', image: cubicImage },
    { name: 'Enfold', image: enfoldImage }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="main-container">
        <main className="main-content-box">
          <div className="left-section">
            <h1>Free CV Maker</h1>
            <h2>Build Your Professional CV Online</h2>
            <p>Fast. Easy. Effective.</p>
            <p>Create a standout CV in minutes. Use our easy-to-use CV maker and land your dream job today.</p>
            <button className="cta-button" onClick={handleCreateCVClick}>Create Your CV Now</button>
          </div>
          <div className="right-section">
            <img src={web} alt="CV Preview" onClick={handleCreateCVClick} />
          </div>
        </main>
      </div>

      <section className="new-section">
        <h2>Make a job-winning CV in four simple steps</h2>
        <div className="steps-container">
          <div className="step">
            <img src={newSectionImage1} alt="Step 1" />
            <h3>Step 1</h3>
            <p>Pick a template</p>
            <p>Select from 18 professional templates crafted by career experts and designers to boost your chances of landing an interview.</p>
          </div>
          <div className="step">
            <img src={newSectionImage2} alt="Step 2" />
            <h3>Step 2</h3>
            <p>Use expert prompts to fill it out</p>
            <p>Quickly add customized, job-specific content to your resume created by Certified Professional Resume Writers.</p>
          </div>
          <div className="step">
            <img src={newSectionImage3} alt="Step 3" />
            <h3>Step 3</h3>
            <p>Play with the design</p>
            <p>Easily adjust colors, fonts, and layout using our intuitive interface.</p>
          </div>
          <div className="step">
            <img src={newSectionImage4} alt="Step 4" />
            <h3>Step 4</h3>
            <p>Hit download and enjoy</p>
            <p>Download your polished resume in the preferred file format and apply for your dream job right away.</p>
          </div>
        </div>
      </section>

      <section className="template-section">
        <h2>Create a CV online. Here’s how it might look:</h2>
        <Slider {...sliderSettings}>
          {templates.map((template, index) => (
            <div className="template-card" key={index}>
              <img src={template.image} alt={template.name} className="template-image" />
              <div className="template-info">
                <h3>{template.name}</h3>
                <p>{getDescription(template.name)}</p>
              </div>
              <button className="use-template-button" onClick={handleCreateCVClick}>Use This Template</button>
            </div>
          ))}
        </Slider>
      </section>

      <section className="customer-section">
        <p>Our resume builder comes with ATS-optimized layouts and a wizard that guides you through every step of the process.</p>
        <p>Plus, you'll get ready-to-use AI-generated suggestions for every section of your resume, personalized to match your desired position. Don't feel like writing? Just drag and drop the content that suits you and let our resume editor do the rest.</p>
        <p>Have a hard time choosing which style is right for you? Check out all our resume templates here, and read more about their advantages.</p>
        <p>Looking to make a CV instead? Try our easy-to-use CV Builder that comes with professional CV templates.</p>
        <h2>Our customers have been hired by:</h2>
        <div className="logo-container">
          <img src={microsoftLogo} alt="Microsoft" onClick={handleLogoClick} />
          <img src={amazonLogo} alt="Amazon" onClick={handleLogoClick} />
          <img src={attLogo} alt="AT&T" onClick={handleLogoClick} />
          <img src={walmartLogo} alt="Walmart" onClick={handleLogoClick} />
          <img src={fedexLogo} alt="FedEx" onClick={handleLogoClick} />
          <img src={orangeLogo} alt="Orange" onClick={handleLogoClick} />
        </div>
        <div className="reviews-section">
          <h2>Read what people say about our CV maker online:</h2>
          <div className="review-cards">
            <div className="review-card">
              <p>It was so easy to use that I was even able to make a professional CV.</p>
              <p className="review-author">- Sipho Kunene </p>
            </div>
            <div className="review-card">
              <p>Highly optimized and the best site to build a CV.</p>
              <p className="review-author">- Wandilie </p>
            </div>
            <div className="review-card">
              <p>Easy and very helpful. It's easy and not difficult to edit the CV.</p>
              <p className="review-author">- Marwan Essawi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trial-section">
        <div className="trial-content">
          <h2>Start your CV maker 14-day trial</h2>
          <p>Don't want to commit just yet? Take us for a test drive and explore all the powerful features our CV builder has in store.</p>
          <button className="create-cv-button" onClick={handleCreateCVClick}>Create My CV Now</button>
        </div>
      </section>

      {/* New Section */}
      <section className="info-section">
  <div className="info-content">
    <div className="left-info-section">
    <img src={createeasly} alt="CV" />
    </div>
    <div className="right-info-section">
      <h2>Create your CV easily</h2>
      <p className="bold-text">
        Creating your CV has never been easier or faster. Simply choose a template, and our intuitive CV maker will do the rest, guiding you every step of the way with personalized tips from our dedicated team of career experts. You'll have a professionally-crafted, impressive CV ready in just minutes.
      </p>
    </div>
  </div>
</section>
<section className="info-section-alt">
  <div className="info-content-alt">
    <div className="left-info-section-alt">
      <h2>Boost your CV with ready-made content from career experts</h2>
      <p className="bold-text-alt">
      Struggling with writing the perfect CV? Say goodbye to your worries. Our CV builder comes loaded with ready-made content crafted by career experts tailored for any job or industry you're pursuing. They are ready to use in any CV section, so wait no more and start creating your CV today.
      </p>
    </div>
    <div className="right-info-section-alt">
      <img src={expert} alt="Descriptive Alt Text" />
    </div>
  </div>
</section>
<section className="info-section1">
  <div className="info-content1">
    <div className="left-info-section1">
    <img src={t1} alt="templates" />
    </div>
    <div className="right-info-section1">
      <h2>Refresh your old CV</h2>
      <p className="bold-text">
      Is your CV outdated? Elevate it to the highest standard and ensure full ATS compatibility with just one click. Simply upload it to our CV maker, and we'll revamp it using our modern templates – all for free. Save valuable time and embrace your new, polished CV in mere minutes      </p>
    </div>
  </div>
</section>
<section className="info-section-alt1">
  <div className="info-content-alt1">
    <div className="left-info-section-alt1">
      <h2>Review and improve your CV</h2>
      <p className="bold-text-alt1">
      When your CV is done, our CV creator will score it. You’ll get personalized tips and suggestions on how to improve your CV to land that dream job. Thanks to that, you’ll have a top-notch CV with a minimum effort.      </p>
    </div>
    <div className="right-info-section-alt1">
      <img src={review} alt="Descriptive Alt Text1" />
    </div>
  </div>
</section>
<section className="info-section2">
  <div className="info-content2">
    <div className="left-info-section2">
    <img src={generate} alt="templates" />
    </div>
    <div className="right-info-section2">
      <h2>Download your CV in multiple formats</h2>
      <p className="bold-text">
      Craft a unique CV tailored to each job application you pursue. Fine-tune it to your preferences, adding new sections or switching templates as needed, and our CV maker will make sure the layout stays intact. Once it's ready, download it in PDF, Word, or TXT format and boost your job hunt right away.</p>
    </div>
  </div>
</section>
<section className="info-section-alter">
  <div className="info-content-alter">
    <div className="left-info-section-alter">
      <h2>Make a matching cover letter</h2>
      <p className="bold-text-alter">
      Our CV maker comes with a cover letter generator, that’s packed with built-in expert tips and content suggestions to help you create a matching cover letter in no time.      </p>
    </div>
    <div className="right-info-section-alter">
      <img src={matching} alt="Descriptive Alt Text" />
    </div>
  </div>
</section>
<section className="review-section">
  <div className="review-card">
    <p className="review-text">If you don’t know how to build your own CV from scratch, don’t worry—the website walks you through the process step by step and tells you what information you need to input for each section… Zety is the best online [CV] builder overall.</p>
    <img src={geek}alt="Reviewgeek Logo" className="review-logo" />
  </div>
  <div className="review-card">
    <p className="review-text">The [Zety] CV maker is pretty powerful and offers a great degree of control without being overwhelming.</p>
    <img src={howg}alt="How-To Geek Logo" className="review-logo" />
  </div>
</section>

<section className="testimonial-section">
  <h2>"I got the job!"</h2>
  <p className="testimonial-header">Imagine you finally got an offer for the job you’ve always wanted, not the one you had to take. How does it feel? With Zety, it can all become a reality.</p>
  <p className="testimonial-header">Use the best online CV maker and enjoy your "employed happily ever after".</p>
  
  <div className="testimonial-cards">
    <div className="testimonial-card">
      <p className="testimonial-text">I utilized Zety’s builder app to the fullest, applying everything I learned, and even added some unique touches the CV software offered. Now, instead of stressing over what keyword or language to use on my CV, I can focus on which job offer to accept.</p>
      <div className="testimonial-author">
        <span className="stars">★★★★★</span> Denis P.
      </div>
    </div>
    <div className="testimonial-card">
      <p className="testimonial-text">I went from fired to hired in less than 3 weeks. I was let go from my old job due to downsizing. With Zety, I was able to build custom CVs tailored to the jobs I was applying to quickly and easily. My last day was 3/9/18 and I had several offers by 3/25/18. Accepted an excellent job on 3/27/18. I can’t thank you guys enough. You really helped save my family from some serious hardship.</p>
      <div className="testimonial-author">
        <span className="stars">★★★★★</span> David Birdsell Jr.
      </div>
    </div>
    <div className="testimonial-card">
      <p className="testimonial-text">I have been actively looking for my first job for about 3 months now and I just came to know about Zety last month. The online CV builder helped me a lot by choosing themes and contents. I was able to land a few interviews after I edited my CV.</p>
      <div className="testimonial-author">
        <span className="stars">★★★★★</span> Jeanne
      </div>
    </div>
  </div>
  
  <p className="testimonial-footer">...and what will your future be?</p>
  <button className="cta-button" onClick={handleCreateCVClick}>Create Your CV Now</button>
</section>

<section className="transform-section">
  <div className="transform-content">
    <p className="transform-text">
     <h2> Transform your career today and join thousands of satisfied users </h2>
    </p>
    <button className="transform-button" onClick={handleCreateCVClick}>
      Make Our CV Online
    </button>
  </div>
</section>

    </div>
  );

  function getDescription(templateName) {
    switch (templateName) {
      case 'Cascade':
        return 'Sleek, modern design blending professionalism and creativity.';
      case 'Crisp':
        return 'Minimalist aesthetic, providing a polished canvas for career achievements.';
      case 'Cubic':
        return 'Modern design with geometric elements for a professional look.';
      case 'Enfold':
        return 'Classy mix of simple and stylish elements, easy to read and organized.';
      default:
        return '';
    }
  }
};

export default CVBuilder;
