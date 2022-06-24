import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";

export function Intro() {
  return (
    <Container id="home">
      <div className="intro-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello There</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Welcome</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Back-End to Palm of Your Hand Application Development</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            <p>Whether you're just starting out and needing the infrastructure built for your MVP</p>
            <p>or a seasoned professional needing some assistance, Dave is your guy.</p>
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
          <img src={require("../../assets/app.png")} alt="app" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
