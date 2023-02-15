import { Fragment, useState } from "react";
import Books from "../../imgs/books.png";
import Cat from "../../imgs/cat.png";
import "./about.css";
import "animate.css";

export default function About() {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <Fragment>
      <section className="about" id="about">
        <div className="row">
          <div className="column about-imgs">
            <div className="cat-img animate__animated animate__pulse animate__slow animate__infinite">
              <img src={Cat} alt="astonaut cat"></img>
            </div>
            <div className="books-img">
              <img src={Books} alt="girl reading a book"></img>
            </div>
          </div>
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}>
                <p>Su di me</p>
              </div>
              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}>
                <p>Formazione</p>
              </div>
              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}>
                <p>Fun facts</p>
              </div>
            </div>
            <div className="tab-content">
              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }>
                <h2>Su di me:</h2>
                <p>
                  Sono una persona determinata e curiosa, questo mi spinge a
                  continuare a formarmi e volere imparare senza mai sentirmi
                  sazia. Nonostante il mio percorso possa apparire disomogeneo,
                  visto che provengo dal settore pedagogico ed educativo, in
                  realtà le mie esperienze pregresse hanno contribuito a formare
                  una grande capacità relazionale e di lavoro in team, forti
                  doti organizzative e capacità di problem solving anche in
                  situazioni emergenziali.
                </p>
              </div>
              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }>
                <div className="study-column">
                  <h5>Master in Front End Development</h5>
                  <span>2022-2023</span>
                  <p>Start2impact University</p>
                </div>
                <div className="study-column">
                  <h5>Front-End Engineer Career Path</h5>
                  <span>2022-2023</span>
                  <p>Codecademy</p>
                </div>
                <div className="study-column">
                  <h5>
                    Laurea Magistrale in Consulenza Pedagogica per la DIsabilità
                    e la Marginalità
                  </h5>
                  <span>2016-2018</span>
                  <p>Università Cattolica del Sacro Cuore - Milano</p>
                </div>
                <div className="study-column">
                  <h5>Laurea Triennale in Scienze dell'Educazione</h5>
                  <span>2013-2016</span>
                  <p>Università degli Studi di Milano-Bicocca - Milano</p>
                </div>
              </div>
              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }>
                <ul>
                  <li>Sono un'appassionata lettrice e una bibliofila.</li>
                  <li>
                    Amo studiare e apprendere, credo fortemente nella formazione
                    continua (sia a livello professionale che personale).
                  </li>
                  <li>
                    Ho forti valori radicati in me: uguaglianza e diritti per
                    ogni persona e rispetto per il nostro pianeta e i suoi
                    abitanti.
                  </li>
                  <li>Sono una gattara.</li>
                  <li>
                    Sfogo la mia creatività in numerosi hobby (tra cui crochet,
                    diy e Dungeons & Dragon).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
