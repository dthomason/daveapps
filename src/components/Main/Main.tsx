import { Container } from "./styles";
import { Intro } from "../Intro/Intro";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { ParticleAnimation } from './Particles';

const ANIMATIONS = process.env.REACT_APP_ANIMATIONS === 'true' || false;

export function Main() {
  return (
    <Container>
      {ANIMATIONS && (<ParticleAnimation/>) }
      <Intro/>
      <About/>
      {/* <Projects/> */}
      <Contact/>
    </Container>
  );
}
