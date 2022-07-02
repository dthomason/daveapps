import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  .intro-text {
    & > p {
      font-size: 2rem;
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

  img.right-image {
    width: 100%
  }


  div.item {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    width: 140px;
    margin: 20px;
  }

  .icon {
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

    img.right-image {
      margin-top: 15%;
      width: 80%;
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

  }

  @media (max-width: 600px) {
    margin-top: 25%;
  }
  @media (max-width: 480px) {
    margin-top: 30%;

    .intro-text {
      p {
        font-size: 2rem;
        line-height: 300%;
      }
      h1 {
        font-size: 5rem;
        line-height: 200%;
      }
      h3 {
        line-height: 200%;
      }
    }

    img.right-image {
      margin-top: 20px;
      width: 100%;
    }

    div.item {
      margin-top: 20px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 20px;
    }

  }
`;
