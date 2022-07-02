import { Container } from "./styles";
import { Project } from './Project';

export function Projects() {
  const edTechImage = require("../../assets/illustrations/edtech.png")
  return (
    <Container id="projects">
      <h2>Projects</h2>
      <div className="projects">
      <Project title={"EdTech"} description={"Empowering Teachers to Teach Kids Math"} image={edTechImage} techList={['React', 'Rails', 'Java', 'Kafka']}/>
             </div>
    </Container>
  );
}
