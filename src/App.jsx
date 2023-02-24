import React from "react";
import styled from "styled-components";
import Filters from "./components/Filters";
import { GlobalStyle } from "./components/styled/GlobalStyle";

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
  padding: 10px;
  margin-left: 5px;
  border-radius: 8px;
  background-color: #fff;

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
          <h1>Cards</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
            tempora, laboriosam voluptas mollitia saepe beatae nobis eveniet!
            Nam quo, magnam consequatur iste reprehenderit quia ratione vitae
            delectus commodi, ad error sequi architecto perspiciatis
            consequuntur minus hic. Illo excepturi maxime dolores incidunt,
            temporibus harum, nam debitis soluta sit culpa adipisci!
          </p>
        </Right>
      </Container>
    </>
  );
}

export default App;
