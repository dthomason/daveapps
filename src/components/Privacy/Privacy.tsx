import { Container } from "./styles";

export function Privacy() {
  return (
    <Container>
      <div className="background">
        <h3>Privacy Policy for Scrollzz</h3>
        <h4 className="date">Effective: August 8th, 2024</h4>
        <h4>Introduction</h4>
        <p>
          DaveApps built the Scrollzz app as a free app. This service is
          provided by DaveApps at no cost and is intended for use as is. We
          ("we," "us," or "our") are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          information when you use our app. By using the app, you agree to the
          terms of this Privacy Policy.
        </p>
        <h4>Information Collection and Use</h4>
        <p>
          Our app utilizes the microphone and voice-to-text services solely for
          the purpose of enhancing your user experience. We do not collect,
          store, or transfer any data to a backend server or third parties. All
          data is held locally on your device.
        </p>
        <h4>Microphone Access</h4>
        <p>
          We use the microphone to capture your voice commands or input. This
          data is processed in real-time and is not stored or transmitted to any
          external servers. The microphone access is only active while the app
          is in use.
        </p>
        <h4>Voice-to-Text</h4>
        <p>
          Our app uses voice-to-text technology to convert your spoken words
          into text. This service processes your voice input locally on your
          device. No data is stored or transmitted during this process.
        </p>
        <h4>Third-Party Services</h4>
        <p>
          Our app does not use any third-party services for data collection,
          storage, or processing.
        </p>
        <h4>Security</h4>
        <p>
          We prioritize the security of your information. Since all data is kept
          locally and not transmitted over the internet, the risk of data
          breaches or unauthorized access is minimized. However, we recommend
          that you keep your device secure and follow best practices to protect
          your information.
        </p>
        <h4>Contact Us</h4>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at info@daveapps.app.
        </p>
      </div>
    </Container>
  );
}
