import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "C", level: 70 },
    { name: "SQL", level: 75 },
    { name: "Docker", level: 65 },
    { name: "AWS", level: 60 }
  ];

  const categories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Firebase", "Postman", "VS Code", "Linux", "CI/CD"]
    }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-header">
              <h2>Skills & Expertise</h2>
              <p>A comprehensive overview of my technical skills and proficiencies</p>
            </div>
          </Col>
        </Row>
        
        <Row className="skill-bars-section">
          <Col xs={12} lg={6}>
            {skills.slice(0, 6).map((skill, index) => (
              <div key={index} className="skill-bar-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </Col>
          <Col xs={12} lg={6}>
            {skills.slice(6).map((skill, index) => (
              <div key={index} className="skill-bar-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <Row className="skill-categories-section">
          {categories.map((category, index) => (
            <Col xs={12} md={4} key={index}>
              <div className="skill-category">
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
