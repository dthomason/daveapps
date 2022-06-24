import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Enter your Contact me</h2>
        <p>Hit me up if you wanna chat about apps and stuff</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:dave@daveapps.app">
            dave@daveapps.app
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="tel:+19494394804">(949) 439-4804</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
