import styled from "styled-components";

export const Container = styled.section`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  display: flex;

  .background {
    padding: 20px;
    width: 80%;
    max-width: 800px;
    background-color: #131313;
  }

  h3 {
    text-align: center;
  }

  h4 {
    margin-top: 16px;
    margin-bottom: 4px;
  }

  h4.date {
    margin-top: 16px;
    margin-bottom: 4px;
    text-align: right;
  }
`;
