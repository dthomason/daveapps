import { Container } from "./styles";

import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>DaveApps</span>
      </a>
      <div>
        <p>
          <span>❤️</span>
          DaveApps LLC, Oakdale CA, 95361
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/david-thomason-1543bb18/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/dthomason"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
