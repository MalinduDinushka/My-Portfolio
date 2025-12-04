import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import project1Img1 from "../assets/img/project1-img1.png";
import project1Img2 from "../assets/img/project1-img2.png";
import project1Img3 from "../assets/img/project1-img3.png";
import project2Img1 from "../assets/img/project2-img1.png";
import project2Img2 from "../assets/img/project2-img2.png";
import project2Img3 from "../assets/img/project2-img3.png";
import project3Img1 from "../assets/img/project3-img1.png";
import project4Img1 from "../assets/img/project4-img1.png";
import project5Img1 from "../assets/img/project5-img1.png";
import project5Img2 from "../assets/img/project5-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowLeft, ArrowRight, Github, BoxArrowUpRight } from 'react-bootstrap-icons';

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      number: "01",
      title: "MediConnect - Healthcare Networking Platform",
      role: "Group Leader | Full Stack Developer",
      subtitle: "(Second Year Software Project)",
      description: "Led design and development of a multi-role healthcare platform for recruitment and education workflows. Implemented JWT authentication, role-based access control and secure REST APIs. Built profile management with Cloudinary photo storage and validated updates. Delivered real-time one-to-one chat with message persistence and media sharing. Created role-specific dashboards for recruiters, physicians and students.",
      tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "WebSocket", "Cloudinary", "JWT", "bcrypt", "Tailwind CSS"],
      images: [project1Img1, project1Img2, project1Img3],
      github: "https://github.com/malindu-md/mediconnect-frontend",
      githubBackend: "https://github.com/malindu-md/mediconnect-backend",
      live: "#"
    },
    {
      number: "02",
      title: "Automobile Service Time Logging & Appointment System",
      description: "A modern service management platform built with Next.js, Spring Boot, and PostgreSQL. It includes secure login, role-based access, real-time updates, automated SMS/email alerts, and an AI chatbot. The system supports the full workflow from booking to payment and feedback, designed for scalability and smooth user experience.",
      tech: ["Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Java", "Tailwind CSS", "AI Chatbot", "SMS/Email API"],
      images: [project2Img1, project2Img2, project2Img3],
      github: "#",
      live: "#"
    },
    {
      number: "03",
      title: "Inventory Management System",
      description: "A comprehensive inventory management system created with Next.js for efficient stock tracking, order management, and real-time inventory monitoring.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      images: [project3Img1],
      github: "#",
      live: "#"
    },
    {
      number: "04",
      title: "Travel - Your Gateway to Worldwide Adventures",
      subtitle: "Developed by Tech Tribe for Innovate with Ballerina (IEEE Student Branch University of Moratuwa)",
      description: "Travel revolutionizes travel planning with a seamless and interactive platform. This comprehensive solution enables users to discover destinations, plan itineraries, and book accommodations with an intuitive interface designed for modern travelers.",
      tech: ["Ballerina", "React", "TypeScript", "REST API", "MySQL"],
      images: [project4Img1],
      github: "#",
      live: "#"
    },
    {
      number: "05",
      title: "MediCare Plus – Doctor Channeling Web App",
      description: "MediCare Plus is a streamlined doctor channeling platform designed to simplify the process of finding doctors and booking appointments online. The system enables patients to search for doctors by specialization, schedule consultations, and maintain their medical records in one place.",
      tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      images: [project5Img1, project5Img2],
      github: "#",
      live: "#"
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const project = projects[currentProject];

  return (
    <section className="project projects-section" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="project-header skill-header">
              <h2>Projects</h2>
              <p>A showcase of my recent work and technical implementations</p>
            </div>
          </Col>
        </Row>
        <div className="projects-content">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn project-content-wrapper" : "project-content-wrapper"}>
                  <div className="project-content">
                    <div className="project-number">{project.number}</div>
                    <h2>{project.title}</h2>
                    {project.role && <div className="project-role">{project.role}</div>}
                    {project.subtitle && <div className="project-subtitle">{project.subtitle}</div>}
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.live !== "#" && (
                        <a href={project.live} className="project-link" aria-label="View Live Project">
                          <BoxArrowUpRight size={20} />
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a href={project.github} className="project-link" aria-label="View Frontend on GitHub">
                          <Github size={20} /> <span>Frontend</span>
                        </a>
                      )}
                      {project.githubBackend && (
                        <a href={project.githubBackend} className="project-link" aria-label="View Backend on GitHub">
                          <Github size={20} /> <span>Backend</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn project-image-container" : "project-image-container"}>
                  <div className="project-image-wrapper">
                    <div className="project-screens">
                      <img src={project.images[currentImageIndex]} alt={project.title} className="project-img" />
                    </div>
                    {project.images.length > 1 && (
                      <div className="project-nav">
                        <button onClick={prevImage} className="img-nav-btn" aria-label="Previous Image">
                          <ArrowLeft size={18} />
                        </button>
                        <span className="image-counter">{currentImageIndex + 1} / {project.images.length}</span>
                        <button onClick={nextImage} className="img-nav-btn" aria-label="Next Image">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
        </div>
        
        <div className="projects-footer-nav">
          <button 
            onClick={prevProject} 
            disabled={currentProject === 0}
            className={`nav-btn ${currentProject === 0 ? 'nav-disabled' : ''}`}
            aria-label="Previous Project"
          >
            <ArrowLeft size={18} />
            <span>Previous Project</span>
          </button>
          <span className="nav-indicator">
            {currentProject + 1} / {projects.length}
          </span>
          <button 
            onClick={nextProject} 
            disabled={currentProject === projects.length - 1}
            className={`nav-btn ${currentProject === projects.length - 1 ? 'nav-disabled' : ''}`}
            aria-label="Next Project"
          >
            <span>Next Project</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  )
}
