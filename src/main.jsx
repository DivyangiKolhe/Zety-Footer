import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import CVBuilder from './pages/CVBuilder';
import CoverLetterBuilder from './pages/CoverLetterBuilder';
import CoverLetterTemplates from './pages/CoverLetterTemplates';
import CoverLetterExamples from './pages/CoverLetterExamples';
import CoverLetterFormat from './pages/CoverLetterFormat';
import HowToWriteACoverLetter from './pages/HowToWriteACoverLetter';
import CoverLetterHelp from './pages/CoverLetterHelp';
import HowItWorks from './pages/HowItWorks';
import Letter from './pages/Letter';
import HowToWriteACV from './pages/HowToWriteACV';
import AboutUs from './pages/AboutUs';
import EditorialGuidelines from './pages/EditorialGuidelines';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cvbuilder" element={<CVBuilder />} />
        <Route path="/cover-letter-builder" element={<CoverLetterBuilder />} />
        <Route path="/cover-letter-templates" element={<CoverLetterTemplates />} />
        <Route path="/cover-letter-examples" element={<CoverLetterExamples />} />
        <Route path="/cover-letter-format" element={<CoverLetterFormat />} />
        <Route path="/how-to-write-a-cover-letter" element={<HowToWriteACoverLetter />} />
        <Route path="/cover-letter-help" element={<CoverLetterHelp />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/how-to-write-a-cv" element={<HowToWriteACV />} />  // Add the new route
        <Route path="/about" element={<AboutUs />} />  // Add the new route
        <Route path="/editorial-guidelines" element={<EditorialGuidelines />} />


      </Routes>
    </Router>
  </React.StrictMode>
);
