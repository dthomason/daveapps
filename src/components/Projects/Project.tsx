import { FC } from 'react';
import githubIcon from "../../assets/sprinkleIcons/github-icon.svg";
import ScrollAnimation from 'react-animate-on-scroll';

const Folder: FC = () => (
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
    )

interface Props {
  title: string;
  image: string;
  description: string;
  techList: string[];
}
export const Project: FC<Props> = ({ title, image, description, techList }) => {
  return (
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
              <Folder />
            <div className="card">
              <h3>{title}</h3>
              <div>
                <img src={image} style={{width: 250}}/>
              </div>
              <p>
                {description}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                {techList.map((item: string) => (<li key={item}>{item}</li>))}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
  )
}
