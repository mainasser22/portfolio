import { Container, Row, Col } from "react-bootstrap";
import { MailForm } from "./mailform";
import logo from "../imeges/img/mLogo2.png";
import navIcon1 from "../imeges/img/nav-icon1.svg";
import navIcon2 from "../imeges/img/nav-icon2.svg";
import navIcon3 from "../imeges/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}