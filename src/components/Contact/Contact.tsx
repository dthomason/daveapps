import { Container } from "./styles";
import emailIcon from "../../assets/sprinkleIcons/email-icon.svg";
import phoneIcon from "../../assets/sprinkleIcons/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact DaveApps</h2>
        <p>Reach out directly or simply fill out the form below and we'll get back to you</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:support@daveapps.app">
            support@daveapps.app
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
