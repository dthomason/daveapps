import { Container } from "./styles";
import emailIcon from "../../assets/sprinkleIcons/email-icon.svg";
import phoneIcon from "../../assets/sprinkleIcons/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact DaveApps</h2>
        <p>Email or Call. We'd love to hear from you!</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:info@daveapps.app">info@daveapps.app</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="tel:+19494394804">(949) 439-4804</a>
        </div>
      </div>
    </Container>
  );
}
