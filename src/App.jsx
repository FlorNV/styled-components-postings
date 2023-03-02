import React, { useState } from "react";
import styled from "styled-components";
import Filters from "./components/Filters";
import Postings from "./components/Postings";
import { GlobalStyle } from "./components/styled/GlobalStyle.styled";

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const Left = styled.div`
  width: 30%;
  margin-right: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
  }
`;

const Right = styled.div`
  width: 70%;
  margin-left: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Left>
          <Filters />
        </Left>
        <Right>
          <Postings />
        </Right>
      </Container>
    </>
  );
}

export default App;
