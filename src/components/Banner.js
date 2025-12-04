import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Malindu Dinushka" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6} className="banner-text-col order-2 order-md-1">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Software Developer</span>
                <h1>{`Hello I'm`}<br/><span className="name-highlight"><span className="wrap">{text}</span></span></h1>
                  <p>Third-year IT undergraduate at the University of Moratuwa, passionate about software development and problem-solving. Seeking a Software Engineering internship to apply my skills and gain real industry experience.</p>
                  <div className="banner-actions">
                    <a href="/Malindu_Dinushka_CV.pdf" download="Malindu_Dinushka_CV.pdf" className="download-cv-btn">
                      <span>DOWNLOAD CV</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15L8 11H16L12 15Z" fill="currentColor"/>
                        <path d="M12 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </a>
                    <div className="banner-social-icon">
                      <a href="https://github.com/MalinduDinushka" aria-label="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/malindu-dinushka-813104252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://www.hackerrank.com/profile/mdhherath" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c1.285 0 9.75 4.965 10.475 5.765.625.685.625 13.285 0 13.965C21.75 20.535 13.287 24 12 24c-1.285 0-9.75-3.465-10.475-4.265-.625-.685-.625-13.285 0-13.965C2.25 4.965 10.715 0 12 0zm2.813 15.937c-.387.315-.93.315-1.317 0l-3.138-2.552c-.315-.258-.315-.672 0-.93l3.138-2.552c.387-.315.93-.315 1.317 0 .387.315.387.83 0 1.145L12.78 12.92l2.033 1.832c.387.315.387.83 0 1.145z"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A5.5 5.5 0 1111.999 17 5.5 5.5 0 0112 7.5zm6.25-3a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118.25 4.5z"/>

                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="stats-section">
                    <div className="stat-item">
                      <h2>2</h2>
                      <p>Years of<br/>experience</p>
                    </div>
                    <div className="stat-item">
                      <h2>8</h2>
                      <p>Projects<br/>completed</p>
                    </div>
                    <div className="stat-item">
                      <h2>8</h2>
                      <p>Technologies<br/>mastered</p>
                    </div>
                    <div className="stat-item">
                      <h2>367</h2>
                      <p>Code<br/>commits</p>
                    </div>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6} className="banner-img-col order-1 order-md-2">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn header-img-container" : "header-img-container"}>
                  <div className="animated-circle">
                    <svg viewBox="0 0 420 420">
                      <circle 
                        cx="210" 
                        cy="210" 
                        r="208" 
                        fill="none" 
                        stroke="#00ff88" 
                        strokeWidth="3" 
                        strokeDasharray="40 20 60 15 30 25 50 18 35 22"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <img src={headerImg} className="profile-img-blend" alt="Profile" style={{ mixBlendMode: 'lighten' }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
