import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";

export function Intro() {
  return (
    <Container id="home">
      <div className="intro-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>You Guessed It, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Dave</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            From the ground floor to production ready Web and Mobile App
            Developer.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="intro-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={require("../../assets/app.png")} alt="Me" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
