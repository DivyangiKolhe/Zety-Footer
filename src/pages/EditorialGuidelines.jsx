import React from "react";
import './EditorialGuidelines.css';
import qualityLifecycleImage from '../assets/quality-lifecycle.png'; // Adjust the path based on your project structure
import microsoftLogo from '../assets/microsoft.png';
import amazonLogo from '../assets/amazon.png';
import attLogo from '../assets/att.png';
import walmartLogo from '../assets/walmart.png';
import fedexLogo from '../assets/fedex.png';
import orangeLogo from '../assets/orange.png';
const EditorialGuidelines = () => {
  const handleLogoClick = () => {
    window.location.href = 'https://zety.com/about';
  };

  return (
    <div className="main-content">
      <div className="card card-with-bg">
        <h1 className="card-title">Our Editorial Guidelines: Providing Reliable Career Advice</h1>
      </div>

      <div className="card">
        <h2 className="card-title">Zety’s Promise</h2>
        <p className="card-text">
          Zety offers free and reliable career resources that have helped millions of job seekers around the world.
        </p>
        <p className="card-text">
          Since 2016, we’ve been committed to providing high-quality content that’s not only trustworthy but also engaging. Our <span className="blue-text">career blog</span> features over 3,500 insightful articles offering expert advice based on experience, research, and HR expertise.
        </p>
        <p className="card-text">
          Each day, we analyze hiring trends & research, browse through
        </p>
        <p> workforce reports, and monitor job market forecasts to ensure you get all the information you need to write a professional resume, create a job-winning cover letter, ace your job application process, and prepare for a job interview.</p>
      </div>
      <div className="card">
        <h2 className="card-title">Our Experts</h2>
        <p className="card-text">
          Zety’s editorial team consists of Certified Professional Resume Writers, career experts, editors, and leads. We are a member of the National Career Development Association and routinely collaborate with other HR and Legal professionals to ensure that all the content you see on Zety’s career blog is always reliable, accurate, and up-to-date. Our work has been featured by reputable media outlets and top universities from around the globe.
        </p>
        <p className="card-text">
          Our writers come from diverse backgrounds, including business, education, HR, marketing, and law. Before finding our spots at Zety, we’ve all experienced the hustle and bustle of job searching and trying to find trustworthy tips for resume and cover letter writing. These personal experiences help us understand what our readers expect and truly need to reach their career goals. We’re dedicated to providing advice you can trust—all with the goal of helping you get that job!
        </p>
      </div>
      <div className="card">
        <h2 className="card-title">Our Editorial Principles</h2>
        <p className="card-text">
          The following values guide our entire content creation process, from idea to publication:
        </p>
        <p className="card-text">
          <strong>Empathy:</strong> We don’t write for ourselves—we write for you. Our goal is to help every job seeker land a great job. We wouldn’t be able to achieve it without empathy and understanding of the problems our readers face at every step of their job hunt. Plus, we know how frustrating clickbait is, and that’s why we avoid sensationalism in our writing at all costs. What we give you, instead, are high-quality articles that go straight to the point. Our writing is engaging and without the fluff. We strive for a light and friendly tone—including puns and jokes whenever possible—to create a laid-back vibe that will put you at ease and help diminish the stress associated with job searching. We've all been there and done that.
        </p>
        <p className="card-text">
          <strong>Accuracy:</strong> We always choose facts over opinions. Each content piece published on Zety has been thoroughly researched to ensure it includes information based on reports and statistics coming only from the most established sources. Knowledge is power, and we want you to have it!
        </p>
        <p className="card-text">
          <strong>Authority:</strong> Zety consults internal and external HR experts to keep a finger on the pulse when it comes to hiring trends. Plus, to back up our advice, our writers rely on data only from reputable sources, such as independent research organizations, universities, and state commissions like the U.S. Bureau of Labor Statistics, World Economic Forum, Organisation for Economic Cooperation and Development, Strategic Human Resource Management, National Library of Medicine, Walden University, and Harvard Business Review.
        </p>
      </div>
      <div className="card">
        <h2 className="card-title">Our Editorial Quality Lifecycle</h2>
        <p className="card-text">
          At Zety, we’re committed to writing content that is always trustworthy, accurate, and up-to-date. Each piece featured on our website has been crafted according to a stringent content creation and revision process:
        </p>
        <img src={qualityLifecycleImage} alt="Editorial Quality Lifecycle" className="quality-lifecycle-image" />

        <ol className="quality-lifecycle-list">
          <li>
            <strong>Research:</strong> Zety’s content team keeps an eye on the latest HR trends, industry updates, and job hunt queries to find new topics that can help readers like you. Once a topic is assigned to a writer, they dive deeper to find market data and lead research on the subject. We use authoritative sources, including state commissions, university research, and industry reports to make sure each content piece we create for you is credible and comprehensive.
          </li>
          <li>
            <strong>Writing:</strong> Zety’s writers are wordsmiths. While creativity flows, our internal guidelines ensure that each content piece is both informative and engaging. We want to serve you accurate, actionable, and inclusive information—but we also strive to make it easy and fun to read. We put real talk over ornate expressions.
          </li>
          <li>
            <strong>Quality Check:</strong> Each article is reviewed by one of our experienced editors to make sure it features actionable advice that can help you land the job you want. We not only monitor language quality but also fact-check the information featured in each guide—all to ensure that you can trust us.
          </li>
          <li>
            <strong>Publishing:</strong> The content team collaborates with other experts who take care of publishing. They’re responsible for providing the best user experience for the readers of Zety’s career blog. After a new content piece is published, we also conduct a second round of quality checking to see it from the reader’s point of view.
          </li>
          <li>
            <strong>Revisions:</strong> Our content team routinely revises published articles in order to ensure that each piece stays relevant and accurate. After updating, each article is date-stamped, so the readers can trust that the information in the guide is up-to-date.
          </li>
        </ol>
        <p className="card-text">
          <h3>Sign of Excellence:</h3> Zety’s career advice and expert insights have been recognized by over 200 universities, organizations, and prime media outlets from around the world. Examples include Maryville University, Santa Clara University, Allegany College of Maryland, University of Rochester, Forbes, The Financial Times, Career Builder, and Life Hacker.
        </p>
        <p className="card-text">
          Zety also conducts original research on hiring practices and current economic trends. We create surveys that collect data from various social groups and analyze this information to gain deeper insight into common job-searching experiences, employment conditions, and other aspects of work life.
        </p>
        <p className="card-text">
          Below, you can see selected publications featuring Zety’s original research:
        </p>
        <ul className="publication-list">
          <li><a href="https://example.com/resume-unemployment" className="blue-link">"How to write a résumé that gets you hired in an uncertain economy"</a></li>
          <li><a href="https://example.com/retirement" className="blue-link">"7 Ways to Enjoy Retirement With Less Worry Over Money"</a></li>
          <li><a href="https://example.com/retire-37" className="blue-link">"I Saved Enough Money To Retire By Age 37. Here’s What Was Surprising"</a></li>
          <li><a href="https://example.com/scholarship-expenses" className="blue-link">"On Scholarship at a Prestigious College? Here’s how you can afford your Living Expenses"</a></li>
          <li><a href="https://example.com/great-regret" className="blue-link">"Turns out the Great Resignation may be followed by the Great Regret"</a></li>
          <li><a href="https://example.com/doctor-sales" className="blue-link">"Is There A Doctor In Your Sales House?"</a></li>
          <li><a href="https://example.com/gender-stereotypes" className="blue-link">"Gender Stereotypes Still Matter At Work But New Data Shows Progress"</a></li>
        </ul>

      </div>

      <div className="card">
        <h2 className="card-title">Your Turn</h2>
        <p className="card-text">
          Your opinion matters to us. That’s why you can rate our articles and find the comments section under each of our guides. We openly encourage you to leave your feedback, share your experiences, and ask any questions—so that we can help you also in a more collaborative manner. If commenting publicly is not for you, you can always share your thoughts and questions with us at <a href="mailto:editorialteam@zety.com" className="blue-link">editorialteam@zety.com</a>.
        </p>
      </div>
      <div className="heading-logos-container">
        <h2>Our customers have been hired by:</h2>
        <div className="logo-container">
          <img src={microsoftLogo} alt="Microsoft" onClick={handleLogoClick} />
          <img src={amazonLogo} alt="Amazon" onClick={handleLogoClick} />
          <img src={attLogo} alt="AT&T" onClick={handleLogoClick} />
          <img src={walmartLogo} alt="Walmart" onClick={handleLogoClick} />
          <img src={fedexLogo} alt="FedEx" onClick={handleLogoClick} />
          <img src={orangeLogo} alt="Orange" onClick={handleLogoClick} />
        </div>
      </div>

    </div>
  );
};

export default EditorialGuidelines;
