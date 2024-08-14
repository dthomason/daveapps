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
          Our app requires access to your microphone to transcribe your voice to
          text for the purpose of following along with your reading. While we do
          not collect, store, or transfer any data to a backend server or third
          parties, the app does use Apple’s speech recognition feature to
          convert your speech to text.
        </p>
        <h4>Microphone Access</h4>
        <p>
          We use the microphone to capture your voice input in real-time to
          facilitate the voice-to-text transcription needed for the app to
          follow along with your reading. This data is not stored or transmitted
          by us to any external servers. The microphone access is only active
          while the app is in use.
        </p>
        <h4>Voice-to-Text and Apple’s Speech Recognition</h4>
        <p>
          Our app uses Apple’s speech recognition feature to convert your spoken
          words into text. This service may send your voice data securely to
          Apple’s servers to process and return the recognized text. The data is
          transmitted securely and is subject to Apple’s privacy policy. We do
          not have access to or control over this data.
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
        <h4>Acknowledgment</h4>
        <p>
          By using our app, you acknowledge that you have read and understood
          this Privacy Policy and agree to its terms.
        </p>
      </div>
    </Container>
  );
}
