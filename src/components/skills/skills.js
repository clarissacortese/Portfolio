import Html from "../../imgs/html-5.png";
import Css from "../../imgs/css-3.png";
import Js from "../../imgs/javascript.png";
import React from "../../imgs/react.png";
import Bootstrap from "../../imgs/bootstrap.png";
import Git from "../../imgs/git-icon.png";
import GitHub from "../../imgs/github-icon.png";
import WordPress from "../../imgs/wordpress.png";
import SQL from "../../imgs/sql.png";
import NodeJs from "../../imgs/nodejs.png";
import Spring from "../../imgs/spring.png";
import Next from "../../imgs/nextjs.png";
import Dart from "../../imgs/dart.png";
import Tailwind from "../../imgs/tailwindcss.png";
import StoryBook from "../../imgs/storybook.png";
import TypeScript from "../../imgs/typescript.png";
import Java from "../../imgs/java.png";
import MongoDB from "../../imgs/mongodb.png";
import MUI from "../../imgs/material-ui.png";
import styledComponents from "../../imgs/styled-components.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./skills.css"

export default function Skills () {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 8000, min: 2000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn bx-1">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>HTML</h5>
                                <img src={Html} alt="icona skill HTML" />
                            </div>
                            <div className="item">
                                <h5>CSS</h5>
                                <img src={Css} alt="icona skill CSS" />
                            </div>
                            <div className="item">
                                <h5>JavaScript</h5>
                                <img src={Js} alt="icona skill JavaScript" />
                            </div>
                            <div className="item">
                                <h5>TypeScript</h5>
                                <img src={TypeScript} alt="icona skill TypeScript" />
                            </div>
                            <div className="item">
                                <h5>React</h5>
                                <img src={React} alt="icona skill React" />
                            </div>
                            <div className="item">
                                <h5>Java</h5>
                                <img src={Java} alt="icona skill Java" />
                            </div>
                            <div className="item">
                                <h5>Spring Boot</h5>
                                <img src={Spring} alt="icona skill Spring Boot" />
                            </div>
                            <div className="item">
                                <h5>Bootstrap</h5>
                                <img src={Bootstrap} alt="icona skill Bootstrap" />
                            </div>
                            <div className="item">
                                <h5>Tailwind CSS</h5>
                                <img src={Tailwind} alt="icona skill Tailwind CSS" />
                            </div>
                            <div className="item">
                                <h5>SQL e PL/SQL</h5>
                                <img src={SQL} alt="icona skill SQL e PL/SQL" />
                            </div>
                            <div className="item">
                                <h5>MongoDB</h5>
                                <img src={MongoDB} alt="icona skill MongoDB" />
                            </div>
                            <div className="item">
                                <h5>Git</h5>
                                <img src={Git} alt="icona skill Git" />
                            </div>
                            <div className="item">
                                <h5>GitHub</h5>
                                <img src={GitHub} alt="icona skill GitHub" />
                            </div>
                            <div className="item">
                                <h5>Node.js</h5>
                                <img src={NodeJs} alt="icona skill Node.js" />
                            </div>
                            <div className="item">
                                <h5>WordPress</h5>
                                <img src={WordPress} alt="icona skill WordPress" />
                            </div>
                            <div className="item">
                                <h5>Material UI</h5>
                                <img src={MUI} alt="icona skill Material UI" />
                            </div>
                            <div className="item">
                                <h5>Styled-Components</h5>
                                <img src={styledComponents} alt="icona skill Styled-Components" />
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
                <div className="col-12">
                <div className="skill-bx wow zoomIn bx-2">
                        <h2>Sto studiando:</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Dart</h5>
                                <img src={Dart} alt="icona skill Dart" />
                            </div>
                            <div className="item">
                                <h5>React Native</h5>
                                <img src={React} alt="icona skill React Native" />
                            </div>
                            <div className="item">
                                <h5>Next.js</h5>
                                <img src={Next} alt="icona skill Next.js" />
                            </div>
                            <div className="item">
                                <h5>StoryBook</h5>
                                <img src={StoryBook} alt="icona skill StroyBook" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}