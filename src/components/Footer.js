import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center">
            <p className="footer-text">© 2025 Malindu Dinushka. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
