import { FC } from 'react';
import githubIcon from "../../assets/sprinkleIcons/github-icon.svg";
import ScrollAnimation from 'react-animate-on-scroll';

export const Project: FC = () => {
  return (
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#08fd6e "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/dthomason"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>EdTech</h3>
              <div style={{ width: '50%'}}>

                <img src={require('../../assets/gmm-300.png') }/>
              </div>
              <p>
                Empowering Teachers to Teach Kids Math
              </p>
                <a href="https://getmoremath.com/">Get More Math</a>.
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Rails</li>
                <li>Java</li>
                <li>Kafka</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

  )
}
