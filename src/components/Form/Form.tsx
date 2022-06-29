import { Container, ContainerSuccess } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
  const [state, handleSubmit] = useForm('mgedbzlj', {
    debug: true
  });

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');



  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success(
        "Message was delivered, Dave will be getting in touch soon",
        {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: "succeeded",
        }
      );
    }
  }, [state]);

  if (state.succeeded) {
    return (
      <ContainerSuccess>
        <h3>Message sent</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Click to go to Top
        </button>
        <ToastContainer />
      </ContainerSuccess>
    );
  }


  return (
    <Container>
      <h2>Enter your contact info below</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          id="firstName"
          type="firstName"
          name="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        />
        <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
        <input
          placeholder="Last Name"
          id="lastName"
          type="lastName"
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          onInput={(e) => {
            console.log({ e })
              toast.error({
                position: toast.POSITION.BOTTOM_CENTER,
                pauseOnFocusLoss: false,
                closeOnClick: true,
                hideProgressBar: true,
                toastId: "invalid",
              })
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          placeholder="Company"
          id="Company"
          type="Company"
          name="Company"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <textarea
          required
          placeholder="Message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey='6LcAu-IdAAAAAJOTI5E_eRltZNQCvukIl2-f1glQ'
          onChange={(e) => {
            setIsHuman(true);
          }}
        ></ReCAPTCHA>
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !firstName.length || !isHuman}
        >
          Enter
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
