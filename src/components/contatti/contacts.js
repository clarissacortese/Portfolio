import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../imgs/contatti.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./contacts.css"

export default function Contatti () {

  const emailKey = process.env.REACT_APP_EMAIL_KEY
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_portfolio', 'template_z3to298', form.current, emailKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contattami</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" placeholder="Nome e Cognome" name="user_name" required />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" placeholder="Email" name="user_email" required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Messaggio" name="message" ></textarea>
                      <button type="submit"><span>Invia</span></button>
                    </Col>
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