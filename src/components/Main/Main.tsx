import { Container } from "./styles";
import { Intro } from "../Intro/Intro";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";


export function Main() {
  return (
    <Container>
      <Intro/>
      <About/>
      <Contact/>
    </Container>
  );
}
