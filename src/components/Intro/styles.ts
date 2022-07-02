import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
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

  img.right-image {
    width: 100%
  }


  div.item {
    display: inline-block;
    text-align: center;
    width: 100px;
    margin: 20px;
  }

  .icon {
      padding: 8px;
      width: 90px;
  }

  .caption {
      display: block;
  }

  @media (max-width: 960px) {
    flex: 1;
    display: inline-block;
    justify-content: 'center';
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

    .device-support {
      display: flex;
      justify-content: center;
  }

    /* div.animation {
      display: 'flex';
      justify-content: 'space-between';
    } */

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
    margin-top: 20%;

    .intro-text {
      p {
        font-size: 2rem;
        line-height: 200%;
      }
      h1 {
        font-size: 5rem;
        line-height: 200%;
      }
      h3 {
        line-height: 200%;
      }
    }

    .device-support {
      display: flex;
      justify-content: center;
  }

    img.right-image {
      margin-top: 20px;
      width: 100%;
    }

    div.item {
      margin-top: 20px;
      width: 60px;
      display: block;
      margin: 20px;
    }

  }
`;
