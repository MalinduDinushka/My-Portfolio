import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="contact-header">
              <h2>Get In Touch</h2>
              <p>Have a project in mind or just want to say hello? Feel free to reach out!</p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-start">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn contact-info" : "contact-info"}>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00ff88" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="#00ff88" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Location</h4>
                      <p>Moratuwa, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#00ff88" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Email</h4>
                      <p>mdhherath@gmail.com.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V19.92C22 20.4896 21.5523 20.9725 20.9856 20.9988C20.7527 21.0095 20.5203 21 20.29 20.97C15.0357 20.3583 10.0847 18.3747 6.00998 15.26C2.21997 12.38 1.01997 9.39 0.289974 6.43C0.0299738 5.2 0.0599738 3.81 0.509974 2.64C0.729974 2.05 1.10997 1.56 1.65997 1.22C2.09997 0.95 2.60997 0.81 3.11997 0.81H6.11997C7.11997 0.81 7.95997 1.54 8.10997 2.53C8.22997 3.28 8.41997 4.02 8.67997 4.74C8.94997 5.48 8.72997 6.31 8.12997 6.83L6.87997 7.87C9.04997 11.62 12.38 14.96 16.13 17.13L17.17 15.88C17.69 15.28 18.52 15.06 19.26 15.33C19.98 15.59 20.72 15.78 21.47 15.9C22.48 16.05 23.21 16.92 22 16.92Z" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Phone</h4>
                      <p>+94 770041775</p>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit" className="submit-btn"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
