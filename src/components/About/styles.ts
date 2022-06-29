import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--blue);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;
    img {
      margin-top: -4rem;
      width: 100%;
      filter: grayscale(1);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .hard-skills {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image {
      display: none;
    }
    .hard-skills {
      justify-content: center;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid var(--accent);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid var(--accent);
  :first-of-type {
    border-top: none;
  }
`;
