import { Container } from "./styles";

import jsIcon from "../../assets/sprinkleIcons/js-icon.svg";
import nodeIcon from "../../assets/sprinkleIcons/node-icon.svg";
import reactIcon from "../../assets/sprinkleIcons/react-icon.svg";
import typescriptIcon from "../../assets/sprinkleIcons/typescript-icon.svg";
import rails from '../../assets/sprinkleIcons/rails-icon.svg';
import ScrollAnimation from "react-animate-on-scroll";
import { about } from './Copy';
import { useEffect, useState } from 'react';

export function About() {
  const [grayscale, setGrayscale] = useState("about-image")

  useEffect(() => {
    if (grayscale === "color-image") return;
    setTimeout(() => setGrayscale("color-image"), 2000);
  }, [grayscale]);

  return (
    <Container id="about">
      <div>
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About DaveApps</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          {about.map(desc=> (
              <div key={desc.type}>
                <h1 className="">{desc.type}</h1>
                <p style={{padding: 8}}>{desc.description}</p>
                <div style={{ padding: 12 }}/>
              </div>

          ))}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <h3>Our Stack</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={rails} alt="Rails" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

        </div>
        <div style={{ fontSize: 15 }}>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3 style={{ textAlign: 'center', fontSize: 30 }}>Time to take your idea to the next level</h3>
          </ScrollAnimation>
        </div>
      </div>

      <div className={grayscale}>
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>

          <img src={require("../../assets/examples/tilted.png")} alt="Apps" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
