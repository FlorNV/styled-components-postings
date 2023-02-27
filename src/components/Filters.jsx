import React from "react";
import styled from "styled-components";
import OperationFilter from "./OperationFilter";

const Container = styled.div`
  padding: 14px;
  border-radius: 8px;
  background-color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  box-shadow: 0 0 8px 2px #ccc;
`;

const Filters = () => {
  return (
    <Container>
      <h2>Filtrado actual</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
        cupiditate rerum accusantium accusamus quas! Quia reiciendis modi eaque
        at.
      </p>
      <OperationFilter />
    </Container>
  );
};

export default Filters;
