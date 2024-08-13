import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import './AboutUs.css';
import aboutUsBanner from '../assets/about-us-banner.jpg'; // Updated with the new image path
import guardianLogo from '../assets/guardian-logo.png';
import huffpostLogo from '../assets/huffpost-logo.png';
import lifehackerLogo from '../assets/lifehacker-logo.png';
import businessLogo from '../assets/business-logo.png';
import financialTimesLogo from '../assets/financial-times-logo.png';
import forbesLogo from '../assets/forbes-logo.png';
import aboutUsImage from '../assets/about-us-image.jpg';

const AboutUs = () => {
    useEffect(() => {
        const handleScroll = () => {
            const timelineLine = document.getElementById('timelineLine');
            const events = document.querySelectorAll('.timeline-event');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (timelineLine) {
                const timelinePosition = timelineLine.offsetTop;
                if (scrollPosition > timelinePosition) {
                    timelineLine.classList.add('active');
                } else {
                    timelineLine.classList.remove('active');
                }
            }

            events.forEach(event => {
                const eventPosition = event.offsetTop;
                const eventHeight = event.offsetHeight;
                const eventBottom = eventPosition + eventHeight;

                if (scrollPosition > eventPosition && scrollPosition < eventBottom) {
                    event.classList.add('active');
                } else {
                    event.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 300;
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 300;
        }
    };



    return (
        <div className="about-us-container">
            <div className="about-us-banner">
                <h1>About us</h1>
                <p>Zety is a career site powered by some of the best career experts and a community of 40 million readers a year.</p>
            </div>
            <div className="media-mentions">
                <img src={guardianLogo} alt="The Guardian" />
                <img src={huffpostLogo} alt="HuffPost" />
                <img src={lifehackerLogo} alt="Lifehacker" />
                <img src={businessLogo} alt="Business.com" />
                <img src={financialTimesLogo} alt="Financial Times" />
                <img src={forbesLogo} alt="Forbes" />
            </div>
            <div className="career-banner">
                <div className="career-banner-content">
                    <h2>Zety Is Like Rocket Fuel for Your Career.</h2>
                    <p>Use it to take your career to new heights.</p>
                    <p>We offer you the best online resume builder and free professional advice from career experts. We'll guide you through the entire recruitment process, all the way to your dream job.</p>
                </div>
                <img src={aboutUsBanner} alt="Career Banner" />

            </div>
            <div className="Text-banner">
                <div className="Text">
                    <p>Since 2016, Zety has helped millions of job seekers worldwide find employment. With a rapidly growing community of over 40 million readers a year, Zety is arguably the world’s fastest-growing career advice website.</p>
                    <p>
                        Each day, we help thousands of people write resumes and cover letters, improving their chances of landing a dream job.
                    </p>
                    <p>
                        Zety is powered by a team of career experts whose articles have been featured in Forbes, the Financial Times, the Huffington Post, CareerBuilder, and Glassdoor. But that’s not all—many other reputable media outlets also recognized Zety's original research and career advice.
                    </p>
                    <h2>We’re Building the World’s Largest and Best Career Site to Help You Find the Job You Want.</h2>
                    <p>Zety has published more than 1,400 career guides. Each required extensive research, consultation, fact-checking and was thoroughly reviewed according to Zety’s editorial guidelines.
                    </p>
                    <p>From resume and interview advice to networking, our guides have been recognized by over 200 universities and organizations worldwide.

                    </p>
                    <h2>Company Timeline </h2>

                </div>
            </div>
            {/* Timeline Section */}
            <div className="timeline">
                <div className="timeline-line" id="timelineLine"></div>
                <div className="timeline-event">
                    <div className="timeline-date">05.2014</div>
                    <div className="timeline-content">Founders quit their jobs, rent the first office, and adopt a dog.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">01.2015</div>
                    <div className="timeline-content">Official InterviewMe.pl launch.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">01.2016</div>
                    <div className="timeline-content">Xevin Lab/Tar Heel invests $200,000 in InterviewMe.pl. The company moves to a new, bigger office.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">06.2016</div>
                    <div className="timeline-content">Uptowork.com (now zety.com) is launched.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">12.2016</div>
                    <div className="timeline-content">Number of team members: 11</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">07.2017</div>
                    <div className="timeline-content">Uptowork.com gets more than 1 million monthly visitors.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">12.2017</div>
                    <div className="timeline-content">Number of team members: 28
                        We hired and promoted first Team Managers.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">05.2018</div>
                    <div className="timeline-content">Uptowork.com nears 4 million visitors.
                        Our monthly net revenue grows over 5,000% relative to May 2015

                    </div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">07.2018</div>
                    <div className="timeline-content">Uptowork becomes Zety.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">12.2018</div>
                    <div className="timeline-content">Number of team members: 54
                        Number of registered users: 2.5 million</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">12.2019</div>
                    <div className="timeline-content">Number of team members: 75
                        Zety becomes available in French, Spanish, and Brazilian Portuguese.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">06.2021</div>
                    <div className="timeline-content">Number of team members: 100+
                        Zety is now available in Italian.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">11.2021</div>
                    <div className="timeline-content">Zety launches in German and millions of job seekers worldwide now have access to Zety in 7 languages.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">12.2022</div>
                    <div className="timeline-content">Zety’s career blog includes more than 3,500 in-depth articles helping users make their resumes and cover letters, succeed at job interviews, and make the best out of their dream careers.</div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-date">11.2023</div>
                    <div className="timeline-content">Zety’s team consists of more than 200 experts, united by the mission of helping all job seekers fulfill their professional dreams.</div>
                </div>
            </div>
            <div className="Text2-banner">
                <div className='Text2'>
                    <h2>How It All Started</h2>
                    <p>Zety is the brainchild of Kuba, Pete, and Kacper—three like-minded friends who set out on a mission to change the landscape of applying for a job forever.</p>

                    <p> Thanks to their passion and perseverance, they created a comprehensive online tool that made writing professional resumes and cover letters intuitive and easy.

                        And yes, Zety started as a local startup, but with Kuba's vision, Pete's expertise in HR, and Kacper's coding mastery, it quickly became an international brand.</p>

                    <p>The secret behind Zety’s success?</p>

                    <p> From the very beginning, Zety’s founders focused on offering job seekers as much value as possible. As Pete once said,
                    </p>
                    <p>“It was obvious that we wanted to help as many people as possible, not just a select group of paying customers.”</p>
                    <p>That’s why Zety has always been more than just another online resume builder.</p>

                    <p>  By listening to the needs of job seekers and employers, the people behind Zety are able to provide you with the knowledge and skills needed to consciously and effectively influence your career.</p>

                    <p> Today, the mission started by Zety’s founders continues.</p>
                </div>
            </div>
            {/* Team Section */}
            <div className="team-section">
                <h2>Meet Our Experts</h2>
                <div className="team-grid">
                    {[
                        { name: "Aleksandra Nazaruk", title: "Writer, Career Expert", description: "Aleksandra is a writer and a career expert at Zety. Having experienced both sides of recruitment processes in various industries, she is confident you just need the right approach to land the job you want." },
                        { name: "Anna Berkolet", title: "Senior Talent Acquisition and Career Development Specialist", description: "Anna is an HR and career development specialist at Zety. Having worked in talent acquisition for 5 years, she has become an expert on the current job market trends." },
                        { name: "Bart Turczynski", title: "Editor, Career Expert", description: "Bart's career advice and commentary have been published by the Financial Times, Hewlett-Packard, CareerBuilder, and Glassdoor, among others. With a strong passion for statistics and a background in psychology, Bart makes sure all the advice published on Zety is data-driven." },
                        { name: "Bruno Bertachini", title: "Writer, member of PARWCC", description: "Bruno Bertachini is a career expert with a decade of experience in human resources consultancy. Since 2019, Bruno has been researching and writing occupational advice that helps professionals at every stage of their journey." },
                        { name: "Caio Sampaio, CPRW", title: "Certified Professional Resume Writer (CPRW)", description: "Caio is a career and professional development specialist with 4 years of experience. He holds a professional resume writing certification." },
                        { name: "Christian Eilers, CPRW", title: "Certified Professional Résumé Writer, Career Expert", description: "Christian is a career expert and Certified Professional Resume Writer. His guides cover every aspect of the job-hunting process." },
                        { name: "Danuta Detyna, CPRW", title: "Writer, Certified Professional Résumé Writer", description: "Danuta Detyna is a writer and career expert. As an empathetic writer with over seven years of experience, she focuses on delivering real, actionable advice that you can use to boost your career." },
                        { name: "Dominika Kowalska, CPRW", title: "Editor, Certified Professional Résumé Writer", description: "Dominika Kowalska is a career expert and Certified Professional Resume Writer (CPRW) who’s spent the last 5 years helping people develop their careers." },
                        { name: "Emilia Mucha, CPRW", title: "Writer, Career Expert", description: "Emilia is a career expert and a job-hunting advisor. Her articles are informative and engaging, providing readers with practical tips and strategies for creating job-winning resumes and cover letters and navigating the job market with confidence." },
                         { name: "EMPTY Adam Joyce,Writer", title: "Career Expert", description: "Adam is an enthusiastic career expert dedicated to providing job-seekers with resume building and job hunting advice. He draws on his extensive employment history to write content that is informed and which can be actionable in real life." }
                        
                    ].map(member => (
                        <div className="team-member" key={member.name}>
                            <h4>{member.name}</h4>
                            <h5>{member.title}</h5>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p></p>
            <div className="footer-banner">
                <h3>Do you have any questions?</h3>
                <button className="help-button">We are here to help you out?</button>

            </div>
            <div className="as-seen-in">
                <h2>As seen in</h2>
                <div className="carousel-container">
                    <button className="scroll-arrow left" onClick={scrollLeft}>
                        &lt;
                    </button>
                    <div className="carousel" ref={scrollRef}>
                        <div className="carousel-item">
                            <div className="carousel-item-bg">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUA4QMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABgcIBQEDBAL/xABGEAABAwICBggDBQUECwEAAAABAAIDBAUGEQcSIVFVkxMWFzFBYXHRFIGhCCIjMpEVZKKxsiVCUnQ0NVRicoKks8HS4ST/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQcjrRYeL0XOCdaLDxei5wWUMhuCZDcEWNX9aLDxei5wTrRYeL0XOCyhkNwTIbghGr+tFh4vRc4J1osPF6LnBZQyG4JkNwQjV/Wiw8XoucE60WHi9FzgsoZDcEyG4IRq/rRYeL0XOCdaLDxei5wWUMhuCZDcEI1f1osPF6LnBOtFh4vRc4LKGQ3BMhuCEav60WHi9FzgnWiw8XoucFlDIbgmQ3BCNX9aLDxei5wTrRYeL0XOCyhkNwTIbghGr+tFh4vRc4J1osPF6LnBZQyG4JkNwQjV/Wiw8XoucE60WHi9FzgsoZDcEyG4IRq/rRYeL0XOCdaLDxei5wWUMhuCZDcEI1f1osPF6LnBOtFh4vRc4LKGQ3BMhuCEav60WHi9FzgnWiw8XoucFlDIbgmQ3BCNX9aLDxei5wTrRYeL0XOCyhkNwTIbghGr+tFh4vRc4IsoZDcEQjyiIiiLwe7YrOwGzA2JLjDaavD0lPWPj+5L8U8slc0bf72wnaURWSLSXZbg7hP/AFEn/soBcanRbQV9RRzWStMkEhY7VfIRmN33kFWIrmwzQaLcR1QpKOifHVH8sU8srC70+9tXF0w4Us2G6e2Ps1J0Bnke2T8Rzs8hs7yUFZoiIoiIgIi/dOITPGKlz2wlw13MGbgPHLzQfhFdeC9HuCr9a2XGlmrqyPWLHNlf0eq4d4IHqD3+K5OmXDFjw7aLWbPboqaSWpc18jSS5wDDsLiSckRVSIiKIiICIiAiIgIiICIiAiIgIiIC7+j+Qx44sbh/tbAT5FcBdrBR1cW2g7quP+aI1Wsl4jOeIbmf3qT+orWizncdG+L629VckVnLYZqmQslkqYg3IuORIDicvkiIPHI+KVksMjo5Y3BzHtORaRtBCsDH+KoMW4Zw62J/SXZriKinjYS4Py1dn/ERmAN4X16ULAzDODsM2trmvkiklM0gGWu9w1nH0zJy8lM9D2EILVZIb1WQg3GtZ0jC8bYYj+UDcSMifXLwRVXU2jXE81K2pqKalt8Lu51fUiL6bcvQ5JdNGmKrdTGpNAyrhDdYuopel2eQyBPyBXQ02XmW5YxltpeTS25jWNj8Okc0Oc71ycB8ipXoFvk01NW2SeQuZTASwBx/K0naB5Z7fmgpY7CQdhByIPgutbsMX+5/6DZbhK09z/h3NYf+Z2Q+qtXTPhllPFFiu1gwVdNKx07o9hJz+7J6h2W1d3Q7iKvxBhyofdKh1RPTVJi6VwAc4aocM8vVBSt/wdfMO0lPU3elbA2of0ccYkD362Wfc3MfVde26K8WXCkbUikp6ZrhmI6qbUeR6AHL55K4ce3OxWWW1XO/iSQ00rzSwsj1i6QtA1t2wZ/quDX6XrFUWSvdR/ERV7YT0EU0eQe47BkRnvQevQPDLSW6+0U+qJIK/VeGnMa2oAdvyXt03Wq43ijs1LaqGern+JeS2JueqNTvJ7gPMkL4vs+uL7XenOcXONUwlx7ydXvX2acrvcrVbLWLZXT0hmneJHQv1S4BvdmNqIreTRfjCOAy/soOIGfRtnjLv55fVRSqpp6OpkpquGSCeM5PjlYWuafMFXJocxxXXOslsl6qXVEuoZKaaT85A72k+PkV39LeFIL5h+a4QxD9o0LDIx7RtewbS07xlmUVndSHD+CcRYhiE9tt7vhnDNtRM7o43ehO0jzAIXe0RYPgxHdZa25RCSgoiPw3DZJIe4HyHep3pwvL7ZhqC20rujNc/o5NU5fhAbR6HYEFcS6LsUCkNTSx0Fczbso6sPJy3ZgD6qHzwTU08kFTFJDNGdV8cjS1zTuIPcrP0AXGSK9XC1B34E0HTtZ4BzSAT89YfopDpyw7BPZG3+GICppXtZM4D88bjkM/QkfqUFKW+grLnWMo7dTS1VS/8sUTcyRv8h5nYpg3RRino2PmbbqYv7mT1eTs92wEfVWxonsVNaMI0k7GN+KrWCaeXIZnPuGe4BU7pbhrzjiuddY5DG5w+EMgzaYshlq/PNB6L5o/xNY6aSqrbdrU0TS6SeGRr2sA8T45eeSjCsTC2MHT4HxDh+8VrNlC80Uk8gBOYyMYJ7z3ED1CroIPKIiKIiICIiAu3gluti+zN31kY+q4ikejmB9RjqyNjaXFtSHnLc0En+SI1Esr3a93ikv1f8PdrhFqVcmq1tU/IfePhnll5LVCynjKndS4su8D25FtU/Z6nP8A8oiSY3xRDivCmG2VFTGbjHI9lZG3YW/3Q7yzAz+a0HStDKaJjQA1rAAB4DJY+cNYEZ5ZjLMLVGB75FiHC9BcI3AyOiDJ2/4JG7HD9fpkUVnrSKS7Hd8J7/iyP0AUh0FvcMcSMH5XUEhPycz3XO0vW59Bj64SOblHWBlRGd4LQ0/xNK7mgSifLiSvrQ09HBS6mt4Eud3fwoLT0jxtlwHfg/LIUUjhnvAzH1AUN+z5n+wrvu+NH/bauppovsNtwpJbg8fFXAiNrPHUBzcfpl81zvs/sLcP3VxGx1ds5bUHzfaEP/4bIPDppf6Wqlldf2gmE2uzyZbG1Ejc/Vo9lSiC7Ps95/sm8f5ln9C/P2g/9W2X/MSf0hfv7Pg/sa8H97b/AEBePtBj+ybMf3l4/g/+IK/0VOc3Htq1PF7g701StIXINNuqg/8AL0L9bPdkVQ+g+1SVmLHV+r+BRQuzce7WdsHz71aek7EENgwpVEvAqaphggZ4kkZE+gGaDl6Doo2YJ148s5KuUuI8sgvn0u3a02uW2m74fhuoe1/Rulfl0fdsHquVoEvsIpauwTSBsrXmeAE/mByDsvTZ+qlOlfCs2JsOj4FmvXUj+lhZnlrjLIt9cu5EVvZ9I1jslUaq04Op6WcsMZkjlyOqSCR9B+i9uJ9LJv8Ah+utTrOIhVR6muZs9U5555ZeSraeKSmldDUxvhlacnMkbqkfIr9ClqX0c1ZHBI6mhy6SUNOo3M5DM93eirr0T4/tr7RS2O7VLKWrpx0cL5TkyVvgNbuDvI9/grHudst15pDT3GlhqoD4PbmPkfBZ50h4RZYIrZW0UThb62mYSSS7Vl1cyCTvzzC+XBWL71h+400dHVSS0j5WsdSSOLmEE5bB4fJBOcc6IoYKSW4YYe8GMFz6KR2YcB36jvA+R2eip9bAlmZHTOmm+7G1ms7W8BltWRq6RktdUyxHON8z3MP+6XEj6IPQiFEUREQEREHg92xWHhPGWFMMTtq6LDla6u6LUdPJVB3rqg7Bn5KvURF2duFBwOr5zVEcVYuwjiOokrKrDldHXOZqieKqDczlsLh3H9FAUQeBnkM+9SPB2MbnhKqfJQlstPKfxqaQnVf5+R81HURYtPEWOMHY0o4I7/b7tQ1UP5J6Xo36ufeASdoPm1fm16RrBhO0voMJ2islkcdZ9RXua3pHbzqkk+n3VVy8IjqXO9VN8vTLjfZZKnWkb0rYyGno89rWeDdmeSsTDulKwYctwoLVhysigDi451DXFxPiSVVCILWxJpOw9ia3fA3fDtbJC1wkaW1DWua4eII9VWVyfRyVsj7ZDNDSE/hxzvDnj1IXzIgnWjfH8ODaSspai2y1TKmfpekilAc37oGWRG3u3qQ4rx3gvGVFT091hvlKKeXpW9FHFnnkR/iOzaqkRCLWt+k3DuGLT+z8JWOrdt1jLWOa3Xd/idkSXfRV7iPEFxxJcXV10mL5MsmMGxsbdzR4Llog91HVVFDVRVVHM+GoidrRyMORaVbdg01hkLIsQ22WSQDI1FGW/e8yxxGXyKp5EF23bSxhCoj1/wBi1VbMe4SU8bdvm4uz/QFVzjDGtdiaP4QQxUNtac20dPsaT4Fx/vH5KLryhFs0Wlez1VlitGI8PTT07Ymxu6JzJA/VGWeTtXLu3r5bZiHRhaK1txobLdX1LDrMZINcNO8B0mqFWCILDxvpTrcRUj7fbqc0NDIMpNZ+tJINxI2AeSrxEQEREUREQEUs7NsX8Gk5jPdOzbF/BpOYz3RETRSzs2xfwaTmM907NsX8Gk5jPdBE0Us7NsX8Gk5jPdOzbF/BpOYz3QRNFLOzbF/BpOYz3Ts2xfwaTmM90ETRSzs2xfwaTmM907NsX8Gk5jPdBE0Us7NsX8Gk5jPdOzbF/BpOYz3QRNFLOzbF/BpOYz3Ts2xfwaTmM90ETRSzs2xfwaTmM907NsX8Gk5jPdBE0Us7NsX8Gk5jPdOzbF/BpOYz3QRNFLOzbF/BpOYz3Ts2xfwaTmM90ETRSzs2xfwaTmM907NsX8Gk5jPdBE0Us7NsX8Gk5jPdOzbF/BpOYz3QRNFLOzbF/BpOYz3Ts2xfwaTmM90ETRSzs2xfwaTmM907NsX8Gk5jPdBE0Us7NsX8Gk5jPdEGmUREQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==" alt="Business Insider" />

                            </div>
                            <p>I Saved Enough Money To Retire By Age 37. Here's What Was Surprising</p>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item-bg">
                                <img src="data:image/jpeg;base64,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" alt="Business Insider" />
                            </div>
                            <p>How to write a résumé that gets you hired in an uncertain economy</p>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item-bg">
                                <img src="data:image/jpeg;base64,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" alt="Business News Daily" />
                            </div>
                            <p>Career Success Depends on Your Willingness to Learn</p>
                        </div>
                    </div>
                    <button className="scroll-arrow right" onClick={scrollRight}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
