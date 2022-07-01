import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  .intro-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--blue);
      margin: 1rem 0;
      font-size: 2.4rem;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .contact-button {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  .description {
    flex-direction: row;

  }

  .device-support {
    display: flex;
    flex-direction: 'row';
    width: 200px;

  }

  .intro-image {
    img {
      max-width: 500px;
    }
  }

  .slide-img {
    width: 400px;
    height: 400px;
  }

  div.item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 140px;
    margin: 20px;
  }

  img {
      padding: 8px;
      width: 96px;
      height: 96px;
  }

  .caption {
      display: block;
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;

    .contact-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .intro-text {
      p {
        text-align: center;
      }
      h1 {
        font-size: 5rem;
        text-align: center;
      }
      h3 {
        text-align: center;
      }
    }

    .intro-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%;
  }
  @media (max-width: 480px) {
    margin-top: 35%;
  }
`;
