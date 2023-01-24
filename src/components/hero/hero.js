import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../imgs/programming.png";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./hero.css";

export default function Hero () {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const memoizedToRotate = useMemo(() => [ "Front-end Developer", "Nerd" ], []);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % memoizedToRotate.length;
    let fullText = memoizedToRotate[i];
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
  }, [isDeleting, loopNum, text.length, memoizedToRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick, text])

  const onButtonClick = () => {
    fetch('CV-ClarissaCortese.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV-ClarissaCortese.pdf';
            alink.click();
        })
    })
  }

  return (
    <section className="banner" id="home" alt={<a href="https://www.freepik.com/free-photo/colorful-abstract-nebula-space-background_16263202.htm#query=abstract%20pattern&position=37&from_view=search&track=sph">Image by rawpixel.com</a> + "on Freepik"}>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility className="hero-title">
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Ciao! Sono Clarissa, una`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Front-end Developer", "Nerd" ]'><br /><span className="wrap">{text}</span></span></h1>
                <button onClick={onButtonClick}>Curriculum Vitae <ArrowDownCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}