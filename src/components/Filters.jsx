import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
`;

const Filters = () => {
  return (
    <Container>
      <h1>Filters</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
      laborum.
    </Container>
  );
};

export default Filters;
