import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/joshuadurham38/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/josh.thewebdev/"><img src={navIcon3} alt="Instagran" /></a>
            </div>
            <p>Josh's Web Development, Copyright 2023. All Rights Reserved</p>
            <p>
              <a href="https://docs.google.com/document/d/1tguYpQayGdZubKCBUjRu9j_cMpzSX8sgbqRtqEi-Qe0/edit?usp=sharing">Terms and Conditions</a>
            </p>
            <p>
              <a href="https://docs.google.com/document/d/1u9X4Gmh4m7H-XoIRYJuv_eTnRwwwtqmJija44YPGdQM/edit?usp=sharing">Privacy Policy</a>
            </p>


          </Col>
        </Row>
      </Container>
    </footer>


  )
}
