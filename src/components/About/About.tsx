import { Container } from "./styles";

import cssIcon from "../../assets/sprinkleIcons/css-icon.svg";
import htmlIcon from "../../assets/sprinkleIcons/html-icon.svg";
import jsIcon from "../../assets/sprinkleIcons/js-icon.svg";
import nodeIcon from "../../assets/sprinkleIcons/node-icon.svg";
import reactIcon from "../../assets/sprinkleIcons/react-icon.svg";
import typescriptIcon from "../../assets/sprinkleIcons/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { about } from './Copy';

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About DaveApps</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <div>
            <ul>
              {about.map(desc=> (
                <li
                  key={desc.type}
                >
                  <div>
                    <h1>{desc.type}</h1>
                    <p>{desc.description}</p>
                    <div style={{ padding: 8 }}/>
                  </div>

                </li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>


        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Let Us Make Your Dream A Reality</h3>
        </ScrollAnimation>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={require("../../assets/examples/tilted.png")} alt="Me" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
